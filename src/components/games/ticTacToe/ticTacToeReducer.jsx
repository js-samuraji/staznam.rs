const SET_SIZE = 'SET_SIZE';
const SET_SYMBOL = 'SET_SYMBOL';
const PLAYER_MOVE = 'PLAYER_MOVE';
const RESET_STATE = 'RESET_STATE';

const setSize = (state, size) => {
  let tmp = {
    ...state,
    size: size,
    values: Array(size).fill(null).map(() => Array(size).fill(null)),
    remainingFields: Array(size ** 2).fill(null).map((_, i) => i + 1),
    time: {
      startTime: 0,
      endTime: 0,
      total: 0
    },
    gameOver: false
  };
  return state.symbol === 'O' ? computerMove(tmp) : tmp;
};

const setSymbol = (state, symbol) => {
  let tmp = {
    ...state,
    symbol: symbol,
    values: Array(state.size).fill(null).map(() => Array(state.size).fill(null)),
    remainingFields: Array(state.size ** 2).fill(null).map((_, i) => i + 1),
    time: {
      startTime: 0,
      endTime: 0,
      total: 0
    },
    gameOver: false
  };
  return symbol === 'O' ? computerMove(tmp) : tmp;
};

const checkBoard = (state) => {
  let foundRow, foundCol;
  let foundDiag = true;
  let foundDiagReverse = true;

  for (let i = 0; i < state.size; i++) {
    foundRow = false;
    foundCol = false;

    for (let j = 0; j < state.size - 1; j++) {
      foundRow = true;
      if (!state.values[i][j]) {
        foundRow = false;
        break;
      }
      if (state.values[i][j] !== state.values[i][j + 1]) {
        foundRow = false;
        break;
      }
    }

    for (let j = 0; j < state.size - 1; j++) {
      foundCol = true;
      if (!state.values[j][i]) {
        foundCol = false;
        break;
      }
      if (state.values[j][i] !== state.values[j + 1][i]) {
        foundCol = false;
        break;
      }
    }

    if (foundRow || foundCol) {
      break;
    }
  }

  for (let i = 0; i < state.size - 1; i++) {
    if (!state.values[i][i]) {
      foundDiag = false;
    }

    if (!state.values[i][state.values.length - i - 1]) {
      foundDiagReverse = false;
    }


    if (state.values[i][i] !== state.values[i + 1][i + 1]) {
      foundDiag = false;
    }

    if (state.values[i][state.values.length - 1 - i] !== state.values[i + 1][state.values.length - 1 - (i + 1)]) {
      foundDiagReverse = false;
    }

  }

  return foundRow || foundCol || foundDiag || foundDiagReverse;
}

const playerMove = (state, row, col) => {
  if (state.values[row][col] || state.gameOver) {
    let field = document.getElementById(`xo${row}${col}`);
    field.style.transition = 'background-color 0.25s ease-out';
    field.style.backgroundColor = 'red';
    setTimeout(() => field.style.backgroundColor = 'transparent', 250);
    return state;
  };

  let tmp = copyState(state);
  tmp.values[row][col] = tmp.symbol;

  let pos = row * state.size + col + 1;
  let posIndex = tmp.remainingFields.findIndex(x => x === pos);
  tmp.remainingFields.splice(posIndex, 1);


  if (state.remainingFields.length === state.size ** 2 - 1) {
    tmp.time.startTime = new Date();
  }

  if (checkBoard(tmp)) {
    return endGame(tmp, "You Won!");
  }

  if (tmp.remainingFields.length === 0) {
    return endGame(tmp, "Draw!");
  }


  return computerMove(tmp);
};

const computerMove = (state) => {
  let tmp = copyState(state);

  let posIndex = Math.floor(Math.random() * tmp.remainingFields.length);
  let pos = tmp.remainingFields.splice(posIndex, 1)[0];
  let row = parseInt((pos - 1) / tmp.size);
  let col = parseInt((pos - 1) % tmp.size);
  tmp.values[row][col] = tmp.symbol === 'X' ? 'O' : 'X';

  if (state.remainingFields.length === state.size ** 2 - 1) {
    tmp.time.startTime = new Date();
  }

  if (checkBoard(tmp)) {
    return endGame(tmp, "You Lost!");
  }

  if (tmp.remainingFields.length === 0) {
    return endGame(tmp, "Draw!");
  }

  return tmp;
}

const endGame = (state, message) => {
  state.message = message;
  state.gameOver = true;
  state.time.endTime = new Date();
  state.time.total = (state.time.endTime - state.time.startTime) / 1000;
  state.message += ` Total time: ${state.time.total}`;
  return state;
}

const resetState = (state) => {
  let tmp = {
    ...state,
    values: Array(state.size).fill(null).map(() => Array(state.size).fill(null)),
    remainingFields: Array(state.size ** 2).fill(null).map((_, i) => i + 1),
    message: "Playing...",
    gameOver: false,
    time: {
      startTime: 0,
      endTime: 0,
      total: 0
    }
  };

  if (tmp.symbol === 'O') {
    return computerMove(tmp);
  }
  return tmp;
}

const ticTacToeReducer = (state, action) => {
  switch (action.type) {
    case SET_SIZE:
      return setSize(state, action.size);
    case SET_SYMBOL:
      return setSymbol(state, action.symbol);
    case PLAYER_MOVE:
      return playerMove(state, action.row, action.col);
    case RESET_STATE:
      return resetState(state);
    default:
      return state;
  }
};

const copyState = (o) => {
  return {
    ...o,
    values: o.values.map(x => [...x]),
    remainingFields: [...o.remainingFields]
  };
};

export default ticTacToeReducer;

export {
  SET_SIZE,
  SET_SYMBOL,
  PLAYER_MOVE,
  RESET_STATE
}