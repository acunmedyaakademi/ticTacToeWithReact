import { useContext } from "react"
import { userContext } from "../App"

export const Header = () => {

    const { nextPlayer, hasWinner } = useContext(userContext)
    return (
        <>
            <div>

                <h2>Tic Tac Toe</h2>
                <span>{`Nex Player: ${nextPlayer}`}</span>
                <h5>{`Winner: ${hasWinner && nextPlayer === "O" ? "X" : hasWinner ? "O" : ""}`} </h5>
            </div>

        </>
    )
}