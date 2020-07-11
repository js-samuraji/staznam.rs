import React from 'react';
import { SET_SIZE, SET_SYMBOL, RESET_STATE } from './ticTacToeReducer';

const Controls = ({ size, dispatch }) => {

  return (
    <div>
      <label htmlFor="size">Board size</label>
      <select id="size" onChange={e => dispatch({ type: SET_SIZE, size: parseInt(e.target.value) })}>
        <option value={3}>3x3</option>
        <option value={4}>4x4</option>
        <option value={5}>5x5</option>
      </select>
      <br />
      <label htmlFor="size">Symbol</label>
      <select id="size" onChange={e => dispatch({ type: SET_SYMBOL, symbol: e.target.value })} defaultValue="X">
        <option value="X">X</option>
        <option value="O">O</option>
      </select>
      <br />
      <button onClick={() => dispatch({ type: RESET_STATE })}>New Game</button>
    </div>
  );
};

export default Controls;