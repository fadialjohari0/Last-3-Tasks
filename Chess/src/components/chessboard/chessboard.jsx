import React from "react";
import { useDispatch, useSelector } from "react-redux";

import HistoryDisplay from "../historyDisplay/historyDisplay";

import { piecesIcons } from "../piecesIcons/piecesIcons";
import {
  HISTORY_FROM,
  HISTORY_TO,
  MOVE_FROM,
  MOVE_TO,
} from "../../redux/actions/types";
import { piecesMoveValidation } from "../piecesValidMovesColor/piecesMoveValidation";

import styles from "./chessboard.module.css";

const ChessBoard = () => {
  const squares = useSelector((state) => state.squares);
  const selectedSquare = useSelector((state) => state.selectedSquare);
  const turn = useSelector((state) => state.turn);
  const pieceValidMoves = useSelector((state) => state.pieceValidMoves);

  const { historyFrom } = useSelector((state) => state);
  const { historyTo } = useSelector((state) => state);
  const { isCheckmateValid } = useSelector((state) => state);

  const dispatch = useDispatch();
  const handleSquareClick = (row, col) => {
    const piece = squares[row][col];
    const isWhiteTurn = turn === "white";
    const isWhitePiece = piece === piece.toLowerCase();

    const isValidPiece =
      (isWhiteTurn && isWhitePiece) || (!isWhiteTurn && !isWhitePiece);

    const isOpponentPiece =
      (isWhiteTurn && !isWhitePiece) || (!isWhiteTurn && isWhitePiece);

    /******************** *********************/

    const firstClick = () => {
      if (isValidPiece && piece !== "") {
        piecesMoveValidation(row, col, piece, squares, dispatch, isWhitePiece);
        dispatch({ type: HISTORY_FROM, historyFromItem: [row, col] });
        dispatch({ type: MOVE_FROM, square: [row, col] });
      }
    };

    const secondClick = () => {
      if (isOpponentPiece || piece === "") {
        const isValidMove = pieceValidMoves.find(
          (validMove) => validMove[0] === row && validMove[1] === col
        );
        if (isValidMove) {
          dispatch({ type: HISTORY_TO, historyToItem: [row, col] });
          dispatch({ type: MOVE_TO, square: [row, col] });
        }
      } else {
        firstClick();
      }
    };

    if (selectedSquare === null) {
      firstClick();
    } else {
      secondClick();
    }
  };

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = squares[row][col];
        const color = (row + col) % 2 === 0 ? styles.black : styles.white;
        const pieceColor =
          piece && piece[0] === piece[0].toUpperCase()
            ? styles.blackPiece
            : styles.whitePiece;

        const isPossibleMoves = pieceValidMoves.find(
          (validMove) => validMove[0] === row && validMove[1] === col
        );
        const isWhiteTurn = turn === "white";
        const isBlackTurn = turn === "black";
        const isSelected =
          selectedSquare && (isWhiteTurn || isBlackTurn) ? true : false;

        board.push(
          <div
            onClick={() => handleSquareClick(row, col)}
            key={`${row}-${col}`}
            className={`${styles.square} ${color}`}
          >
            <div
              className={isPossibleMoves && isSelected ? styles.test : null}
            ></div>
            <span
              className={`${piecesIcons(piece)} ${pieceColor}`}
              style={{ fontSize: "35px" }}
            ></span>
          </div>
        );
      }
    }
    return board;
  };

  return (
    <main className={styles.chessboardMain}>
      <div className={styles.chessboardGame}>
        <HistoryDisplay historyFrom={historyFrom} historyTo={historyTo} />
        <div className={styles.isCheckmate}>
          {isCheckmateValid ? (
            <h1 style={{ color: "orange" }}>CHECKMATE</h1>
          ) : null}
        </div>
        <h3
          className={styles.playerTwo}
          style={
            turn === "black"
              ? { color: "rgb(255, 0, 0)" }
              : { color: "rgb(255, 0, 0, 35%)" }
          }
        >
          Player 2
        </h3>
        <div className={styles.chessboard}>{renderBoard()}</div>
        <h3
          className={styles.playerOne}
          style={
            turn === "white"
              ? { color: "rgb(18, 224, 18)" }
              : { color: "rgb(18, 224, 18, 35%)" }
          }
        >
          Player 1
        </h3>
      </div>
    </main>
  );
};

export default ChessBoard;
