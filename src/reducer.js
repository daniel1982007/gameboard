const initial_games = {
    start: [],
    end: []
}

const reducer = ( scores = initial_games, action) => {

    switch(action.type) {
        case 'FINISH_GAME':
            const update_game = scores.start.filter(game => game.id !== action.payload.id)
            const end_game = scores.start.filter(game => game.id === action.payload.id)
            end_game[0].time_stamp = action.payload.time_stamp

            const end_games = scores.end.concat(end_game)
            end_games.sort((x, y) => {
                const x_homescore = Number(x.homeScore)
                const x_awayscore = Number(x.awayScore)
                const y_homescore = Number(y.homeScore)
                const y_awayscore = Number(y.awayScore)

                if(x_homescore + x_awayscore === y_homescore + y_awayscore) {
                    return Number(y.time_stamp) - Number(x.time_stamp)
                }
                return (y_homescore + y_awayscore) - (x_homescore + x_awayscore)
            })
            return { start: update_game, end: end_games}

        case 'INPUT':
            const input_games = scores.start.map(game => {
                if(game.id === action.payload.id) {
                    const key = Object.keys(action.payload)[0]
                    return {
                        ...game,
                        //rewrite the obj
                        [key]: action.payload[key]
                    }
                }
                return game
            })
            return { ...scores, start: input_games}

        case 'BUTTON_DISABLED':
            const game_b_disabled = scores.start.map(game => {
                if(game.id === action.payload.id) {
                    return {
                        ...game,
                        disabled: true
                    }
                }
                return game
            })
            return {...scores, start: game_b_disabled}

        case 'INIT_GAME':
            return {...scores, start: [...scores.start, action.payload]}
        default:
            return scores
    }

}

export default reducer