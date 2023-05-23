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

type CardProps = {
    value: number
}
const CardSlot: React.FunctionComponent<CardProps> = (props) =>{
    const {value} = props;
    return (
        <div>
            {value}
        </div>
    )
}
type HandProps = {
    player: string,
    card_id: number
}

const Hand: React.FunctionComponent<HandProps> = (props) => {
    const { player, card_id } = props;
    return (
        <div>
            <p>{player}</p>
            <div>
                <ul>
                    <li>{card_id}</li>
                </ul>
            </div>
        </div>
    )
}

function Card() {
    //this is a JSON list of the cards.
    const CARDS = [
        {
            "id": 1,
            "Month": "January",
            "Flower": "Pine",
            "jpMonth": "一月",
            "jpFlower": "松",
            "cards": {
                "main" : {
                    "id": 1,
                    "name": "Crane",
                    "jpName": "光",
                    "type": "light",
                    "image": "link_to_image"
                },
                "secondary" : {
                    "name": "red poetry slip",
                    "type": "red poetry",
                    "jpName": "赤短冊",
                    "image": "link_to_image"
                },
                "dreg1": {
                    "type": "dreg",
                    "jpName": "カス",
                    "image": "link_to_image"
                },
                "dreg2": {
                    "type": "dreg",
                    "jpName": "カス",
                    "image": "link_to_image"
                }
            }
        },
        {
            "Month": "February",
            "Flower": "Plum Blossom",
            "jpMonth": "二月",
            "jpFlower": "梅",
            "cards": {
                "main" : {
                    "name": "Bush Warbler",
                    "jpName": "blank",
                    "type": "tane",
                    "image": "link_to_image"
                },
                "secondary" : {
                    "name": "red poetry slip",
                    "jpName": "",
                    "type": "red poetry",
                    "image": "link_to_image"
                },
                "dreg1": {
                    "type": "dreg",
                    "jpName": "カス",
                    "image": "link_to_image"
                },
                "dreg2": {
                    "type": "dreg",
                    "jpName": "カス",
                    "image": "link_to_image"
                }
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
