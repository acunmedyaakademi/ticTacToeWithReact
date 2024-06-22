import { useContext, useState } from "react"
import { userContext } from "../App"
const box = { display: "grid", gridTemplateColumns: "auto auto auto", gap: "20px" }
const tileStyle = {
    backgroundColor: "pink",
    boxShadow: "2px 2px 4px blue, 5px 5px 8px red, 5px 8px 8px green",
    padding: "20px",
    borderRadius: "3px",
    textAlign: "center",
    fontSize: "24px"
};

export const Box = () => {

    const { nextPlayer, hasWinner, setNextPlayer } = useContext(userContext)
    const [sayi, setSayi] = useState(Array(9).fill(null))

    console.log(sayi);

    const handleClickTile = (param) => {
        // setSayi([...,param])
        setNextPlayer(nextPlayer === "X" ? "O" : "X");

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