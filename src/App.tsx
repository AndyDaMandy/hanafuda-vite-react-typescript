import { useState } from 'react'
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hanafuda</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
    </>
  )
}

function Board() {
    //board will consist of an array with two rows of 4.
    //0 means empty, so the board starts empty.
    const BOARD = [
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    return (
        <div id="board">
            <div id="row-1">
            <CardSlot value={BOARD[0]}></CardSlot>
            </div>
            <div id="row-2">

            </div>
        </div>
    )
}
function CardSlot({props}){
    return (
        <div>
            {props}
        </div>
    )
}

function Hand() {

}

function Card() {

    return (
        <div>

        </div>
    )
}

function Rules(){
    return (
        <div>
            <p>Rules information goes here.</p>
        </div>
    )
}

function Game() {

}

export default App
