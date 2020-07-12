import React from "react";
import Field from "./Field";
import { PLAYER_MOVE } from "./ticTacToeReducer";

const Board = ({ state, dispatch }) => {

  return (
    <div style={{ width: `${state.size * 102}px`, margin: "auto" }}>
      {state.values.flatMap((row, i) =>
        row.map((value, j) => (
          <Field
            key={`${i}${j}`}
            id={`xo${i}${j}`}
            setValue={() => dispatch({ type: PLAYER_MOVE, row: i, col: j })}
            value={value}
          />
        ))
      )}
    </div>
  );
};

export default Board;
