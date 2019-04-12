import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface StateProps {
  value: number;
}

interface DispatchProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = (props: StateProps & DispatchProps) => {
  const { value, onIncrement, onDecrement } = props;
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>{" "}
      <button onClick={onDecrement}>Decrement</button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
};
const mapStateToProps = (state: number): StateProps => ({ value: state });
// * this is explicit way of using dispatch;
const mapDispatchToPropsExplicit = (dispatch: Dispatch<{ type: string }>) => ({
  onIncrement: () => dispatch({ type: "INCREMENT" }),
  onDecrement: () => dispatch({ type: "DECREMENT" })
});

const mapDispatchToProps = {
  onIncrement: () => ({ type: "INCREMENT" }),
  onDecrement: () => ({ type: "DECREMENT" })
};
export default connect<StateProps, DispatchProps, {}, number>(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
