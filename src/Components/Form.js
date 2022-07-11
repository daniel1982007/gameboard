import React from 'react'
import { useDispatch } from 'react-redux'

const Form = ({game}) => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch({
            type: 'INPUT',
            payload: {
                [name]: value,
                id: game.id
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'BUTTON_DISABLED',
            payload: { id: game.id, disabled: true }
        })

        setTimeout(() => {
            dispatch({type: 'FINISH_GAME', payload: {id: game.id, time_stamp: new Date().getTime()}})
            
        }, 1500)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{display: "flex", flexDirection: "column", width: "80%", alignItems:"center"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <div>
                        <label>Home Team</label>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <input name='home' placeholder='home team country' value={game.home} onChange={handleChange} />
                            <input name='homeScore' placeholder='score' value={game.homeScore} onChange={handleChange} />                                    
                        </div>
                    </div>
                    <div>
                        <label>Away Team</label>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <input name='away' placeholder='away team country' value={game.away} onChange={handleChange} />
                            <input name='awayScore' placeholder='score' value={game.awayScore} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <button style={{width: "50%"}} disabled={game.disabled}>start match</button>
            </div>
        </form>
    )
}

export default Form