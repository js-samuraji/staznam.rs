import React, { useReducer } from "react";
import Controls from "./Controls";
import Board from "./Board";
import ticTacToeReducer from "./ticTacToeReducer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const initialState = {
  size: 3,
  symbol: 'X',
  values: Array(3).fill(null).map(() => Array(3).fill(null)),
  remainingFields: Array(9).fill(null).map((_, i) => i + 1),
  time: {
    startTime: 0,
    endTime: 0,
    total: 0,
    timer: null
  },
  message: "Playing...",
  gameOver: false
}

const TicTacToe = () => {
  const [state, dispatch] = useReducer(ticTacToeReducer, initialState);

  return (
    <div>
      <h1>X-O</h1>
      <Controls size={state.size} dispatch={dispatch} />



      <Container>
        <Row>
          <Col> <img className='samuraj' src="/staznam.rs/img/samuraj.png" alt="Samuraj" /></Col>
          <Col>  <Board state={state} dispatch={dispatch} /></Col>
          <Col> <p className='tic-tac-toe-message'>{state.message}</p></Col>
        </Row>
      </Container>
    </div>
  );
};

export default TicTacToe;