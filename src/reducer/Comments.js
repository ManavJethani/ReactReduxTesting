export default function (state = [], action) {
    switch (action.type) {
        case 'SAVE_COMMENT':
            return [...state, action.payload]
        case 'FETCH_COMMENT':
            const comment = action.payload.map(comment => comment.name)
            return [...state, ...comment]
        default:
            return state
    }
}