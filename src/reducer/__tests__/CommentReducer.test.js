import CommentReducer from '../Comments'

it('handles action type of SAVE_COMMENT',()=>{
    const action = {
        type:'SAVE_COMMENT',
        payload:'New Comment'
    }
    const newState = CommentReducer([],action)
    expect(newState).toEqual(['New Comment'])
})

it('handles action with unknown type',()=>{
    const action = {
        type:'UNKNOWN'
    }
    const newState = CommentReducer([],action)
    expect(newState).toEqual([])
})