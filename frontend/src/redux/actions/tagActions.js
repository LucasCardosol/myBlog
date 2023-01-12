import axios from "axios";
import { 
    TAG_LIST_REQUEST,
    TAG_LIST_SUCCES,
    TAG_LIST_FAIL,
    TAG_UPDATE_REQUEST,
    TAG_UPDATE_SUCCES,
    TAG_UPDATE_FAIL,
    TAG_POST_REQUEST,
    TAG_POST_SUCCES,
    TAG_POST_FAIL,
    TAG_DELETE_REQUEST,
    TAG_DELETE_SUCCES,
    TAG_DELETE_FAIL,
} from "../../constants/ReduxTags";

export const getTags = () => async(dispatch) => {
    try{
        dispatch({type: TAG_LIST_REQUEST })
        const {data} = await axios.get(`api/tags/`)
        
        dispatch({
            type:TAG_LIST_SUCCES,
            payload: data
        })
    }catch(error){
        dispatch({
            type: TAG_LIST_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}

export const registerTag = (name) => async (dispatch) => {
    try{
        dispatch({
            type: TAG_POST_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post(
            'http://127.0.0.1:8000/api/tags/register/',
            {'name':name},
            config
            )

        dispatch({
            type:TAG_POST_SUCCES,
            payload: data
        })

    }catch(error){
        console.log(error)
        dispatch({
            type: TAG_POST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}

export const deleteTag = (id) => async (dispatch) => {
    try{
        dispatch({
            type: TAG_DELETE_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.delete(
            `http://127.0.0.1:8000/api/tags/${id}/delete/`,
            config
            )
        dispatch({
            type:TAG_DELETE_SUCCES,
            payload: data
        })

    }catch(error){
        console.log(error)
        dispatch({
            type: TAG_DELETE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}