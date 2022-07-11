import React from 'react'
import { useSelector } from 'react-redux/es/exports'

const Result = () => {
    const data = useSelector(state => state.end)

    return (
        data.length ? data.map((el, i) => {
            return (
                <h4 key={i}>{ el.home }  { el.homeScore } - { el.away }  { el.awayScore} </h4>
            )
        }) : ''
    )
}

export default Result