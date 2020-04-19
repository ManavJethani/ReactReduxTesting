import axios from "axios";
export function saveComment(comment){
    return{
        type:'SAVE_COMMENT',
        payload:comment
    }
}

export function fetchComment(){
    return async function(dispatch) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        dispatch( {
            type : 'FETCH_COMMENT',
            payload : response.data
            } )
        }
}