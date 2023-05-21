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
        <Game />
    </>
  )
}

function Board() {
    //board will consist of an array with two rows of 5
    //0 means empty, so the board starts empty.
    const BOARD = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    return (
        <div id="board">
            <div id="row-1">
                <CardSlot value={BOARD[0]}/>
            </div>
            <div id="row-2">

            </div>
        </div>
    )
}
function CardSlot({value}){
    return (
        <div>
            {value}
        </div>
    )
}

function Hand() {

}

function Card() {
    //this is a JSON list of the cards.
    const CARDS = [
        {
            "January": {
                "cards": [
                    {
                        "dreg1": {
                            "points": 1,
                            "yaku": 1
                        }
                    },
                    {
                        "dreg2": {
                            "points": 1
                        }
                    },
                    {
                        "dreg2": {
                            "points": 1
                        }
                    },
                    {
                        "dreg2": {
                            "points": 1
                        }
                    }
                ]
            }
        },
        {
            "February": {
                "cards": [
                    {
                        "dreg1": {
                            "points": 1,
                            "yaku": 1
                        }
                    },
                    {
                        "dreg2": {
                            "points": 1
                        }
                    },
                    {
                        "dreg2": {
                            "points": 1
                        }
                    },
                    {
                        "dreg2": {
                            "points": 1
                        }
                    }
                ]
            }
        }
        ]
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
    const [playerScore, setPlayerScore] = useState(0);
    const [aiScore, setAiScore] = useState(0);
    const [round, setRound] = useState(1);

    function scoring (): boolean {
        if (playerScore > aiScore){
            return true;
        } else {
            return false;
        }
    }
    return (
        <div>
            <div>
                Round: {round}
            </div>
            <div>
                Player Score: {playerScore}
            </div>
            <div>
                AI Score: {aiScore}
            </div>
        <Board />
        </div>
    )
}

export default App
