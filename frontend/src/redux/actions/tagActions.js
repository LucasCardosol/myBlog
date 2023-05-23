import axios from "axios";
import { 
    TAG_LIST_REQUEST,
    TAG_LIST_SUCCES,
    TAG_LIST_FAIL,
    TAG_POST_REQUEST,
    TAG_POST_SUCCES,
    TAG_POST_FAIL,
    TAG_DELETE_REQUEST,
    TAG_DELETE_SUCCES,
    TAG_DELETE_FAIL,
} from "../../constants/ReduxTags";

export const getTags = (user) => async(dispatch) => {
  
    try{
        dispatch({type: TAG_LIST_REQUEST })
        const {data} = await axios.get(`api/${user}/tags/`)
        
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

export const registerTag = (name,user) => async (dispatch) => {
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
            `/api/${user}/tags/register/`,
            {'name':name},
            config
            )

        dispatch({
            type:TAG_POST_SUCCES,
            payload: data
        })

    }catch(error){
        
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
            `/api//tags/${id}/delete/`,
            config
            )
        dispatch({
            type:TAG_DELETE_SUCCES,
            payload: data
        })

    }catch(error){
       
        dispatch({
            type: TAG_DELETE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}