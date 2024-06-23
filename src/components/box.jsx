import { useContext, useEffect, useState } from "react"
import { userContext } from "../App"
const box = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: "10px 5px"
}
const tileStyle = {
    boxShadow: "2px 2px 4px blue, 5px 5px 8px red, 5px 8px 8px green",
    borderRadius: "3px",
    backgroundColor: "pink",
    width: "50px",
    height: "50px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

};

export const Box = () => {

    const { nextPlayer, hasWinner, setHasWinner, setNextPlayer } = useContext(userContext)
    const [sayi, setSayi] = useState(Array(9).fill(null))

    const WINNING_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ]

    useEffect(() => checkWinner(), [nextPlayer])

    const checkWinner = () => {
        WINNING_CONDITIONS.map(element => {
            const [a, b, c] = element
            if (sayi[a] && sayi[a] === sayi[b] && sayi[a] === sayi[c]) {
                setHasWinner(true)
            }

        })
    }

    const handleClickTile = (param) => {

        if (sayi[param] === null) {

            sayi[param] = nextPlayer
            setNextPlayer(nextPlayer === "X" ? "O" : "X");
        }

    }

    return (
        <>

            <div style={box}>
                {sayi.map((element, index) => {
                    return (
                        <div key={index} style={tileStyle} onClick={() => handleClickTile(index)}>
                            {element}
                        </div>
                    )
                })}

            </div >
        </>
    )
}