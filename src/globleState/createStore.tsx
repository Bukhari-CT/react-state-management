import { createContext, useContext, useEffect, useState } from "react";

const GlobleState = createContext(null);

export function Provider({ store, children }: any) {
  return <GlobleState.Provider value={store}>{children}</GlobleState.Provider>;
}

export function useDispatch() {
  const store = useContext(GlobleState);
  const { dispatch }: any = store;
  return dispatch;
}

export function useSelector(selector: any) {
  const store: any = useContext(GlobleState);
  const value = selector(store.getState());
  const [memo, setMemo] = useState(value);
  useEffect(
    () =>
      store.subscribe(() => {
        const newValue = selector(store.getState());
        setMemo(newValue);
      }),
    [selector, store]
  );
  return memo;
}

export function createStore(reducer: any, initialState: any) {
  let state = reducer(initialState, { type: "INIT" });
  const subscriptors: any[] = [];

  return {
    getState() {
      return state;
    },

    dispatch(action: any) {
      state = reducer(action, state);
      subscriptors.forEach((s) => s());
    },

    subscribe(fn: any) {
      subscriptors.push(fn);
      return () => {
        const idx = subscriptors.findIndex(fn);
        subscriptors.splice(idx, 1);
      };
    },
  };
}
