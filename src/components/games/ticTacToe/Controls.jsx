import React from 'react';
import { SET_SIZE, SET_SYMBOL, RESET_STATE } from './ticTacToeReducer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Controls = ({ size, dispatch }) => {

  return (
    <div>
      <Container>
        <Row>
          <Col>  <label className='headline' htmlFor="size">Board size</label>
            <select className='btn-game' id="size" onChange={e => dispatch({ type: SET_SIZE, size: parseInt(e.target.value) })}>
              <option value={3}>3x3</option>
              <option value={4}>4x4</option>
              <option value={5}>5x5</option>
            </select></Col>
          <Col><button className='btn-game' onClick={() => dispatch({ type: RESET_STATE })}>New Game</button>
          </Col>
          <Col> <label className='headline' htmlFor="size">Symbol</label>
            <select className='btn-game' id="size" onChange={e => dispatch({ type: SET_SYMBOL, symbol: e.target.value })} defaultValue="X">
              <option value="X">X</option>
              <option value="O">O</option>
            </select></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Controls;