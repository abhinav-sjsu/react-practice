const reducer = (state, action) => {};

export const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return <div></div>;
};
