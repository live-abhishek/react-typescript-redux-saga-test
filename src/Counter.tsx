// import React from "react";

const Counter = (props: {
  value: string;
  onIncrement: () => any;
  onDecrement: () => any;
}) => {
  const { value, onIncrement, onDecrement } = props;
  <div>
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrement}>Decrement</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>;
};

export default Counter;
