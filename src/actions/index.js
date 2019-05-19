import Json from '../api/json'

export const fetchpostuser =   async (dispatch,getState) => {

   await dispatch(fetchpost()) 
   console.log('post fetched')
   console.log(getState().post)

}

export const fetchpost =   () => {

    return async function(dispatch) {
    const response = await Json.get('/posts');

    dispatch( {
        type : 'FETCH_POST',
        payload : response.data
        } )
    }
    
}

export const fetchuser = (id) => async dispatch => {

    const response = await Json.get('/users/' + id)
    dispatch({
        type : 'USER',
        payload : response.data
    })
}