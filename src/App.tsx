import { useState } from 'react'
import "./App.css";

const App: React.FunctionComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hanafuda</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
        <Game />
        <Card />
    </>
  )
}

const Board: React.FunctionComponent = () => {
    //board will consist of an array with two rows of 5
    //0 means empty, so the board starts empty.
    const BOARD = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    return (
        <div id="board">
            <div id="row-1">

            </div>
            <div id="row-2">

            </div>
        </div>
    )
}

type CardProps = {
    cardData: {
        id: number;
        name: string;
        month: string;
        type: string;

    };
}
const CardSlot: React.FunctionComponent<CardProps> = (props) =>{
    const {cardData} = props;
    return (
        <div>
            {/* we map the card data to the application here. */}
            {cardData.map((card) => (
            <li className="cardData" key={card.id}>
                <span className="input-label">{ card.name }</span>
            </li>
            ))}
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
 const Card: React.FunctionComponent = () => {
    //this is a JSON list of the cards.

     const CARDS = [
         {
            "id": 0,
            "name": "Crane",
            "type": "main",
            "point": "light",
            "image": "path",
            "month": "January",
            "flower": "Pine",
            "jpName": "光",
            "jpMonth": "一月",
            "jpFlower": "松",
         },
         {
             "id": 1,
             "name": "Red Poetry Slip",
             "type": "secondary",
             "point": "red poetry",
             "image": "path",
             "month": "January",
             "flower": "Pine",
             "jpName": "赤短冊",
             "jpMonth": "一月",
             "jpFlower": "松",
         },
         {
             "id": 2,
             "name": "January Dreg",
             "type": "dreg",
             "point": "dreg",
             "image": "path",
             "month": "January",
             "flower": "Pine",
             "jpName": "カス",
             "jpMonth": "一月",
             "jpFlower": "松",
         },
         ]
     /*
    const CARDS = [
        {
            "id": 1,
            "month": "January",
            "flower": "Pine",
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
            "month": "February",
            "flower": "Plum Blossom",
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
      */
    return (
        <div>
            {CARDS.map((card) => {
                return (
                    <div key={card.id}>
                        <ul>
                            <li>{card.name}</li>
                            <li>{card.type}</li>
                            <li>{card.point}</li>
                            <li>{card.month}</li>
                            <li>{card.flower}</li>
                            <li></li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

const Rules: React.FunctionComponent = () => {
    return (
        <div>
            <p>Rules information goes here.</p>
        </div>
    )
}

const Game: React.FunctionComponent = () => {
    const [playerScore, setPlayerScore] = useState(0);
    const [aiScore, setAiScore] = useState(0);
    const [round, setRound] = useState(1);
    const [complete, setComplete] = useState(false);

    const testing = () => {
        setComplete(!complete)
    }

    const scoring = (): boolean => {
        if (playerScore > aiScore){
           // setRound(round++)
            return true;
        } else {
           // round++
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
            <div>complete: {String(complete)}</div>
        <Board />
            <button onClick={testing}>Click me!</button>
        </div>
    )
}

export default App
