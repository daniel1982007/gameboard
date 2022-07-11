import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from './Form'
import {v4 as uuidv4} from 'uuid'

const Scoreboard = () => {
    const initial_games = useSelector( state => state.start )

    const dispatch = useDispatch()

    const handleClick = () => {
        // handle global state
        dispatch({
            type: "INIT_GAME", 
            payload: {
                home: '',
                homeScore: '',
                away: '',
                awayScore: '',
                disabled: false,
                time_stamp: '',
                id: uuidv4()
            }
        })
    }
    
    return (
        <div>
            <button onClick={handleClick}>Add a match</button>
            <p>A- Home Team</p>
            <p>B- Away Team</p>
            <div>
                {!initial_games.length ? 'please add a match' : initial_games.map((game, i) => {
                    return (
                        <Form key={i} game={game} />
                    )
                })}
            </div>
        </div>
    )
}

export default Scoreboard