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

