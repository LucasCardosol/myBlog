import axios from "axios"
import { 
    DOCUMENT_LIST_REQUEST,
    DOCUMENT_LIST_SUCCES,
    DOCUMENT_LIST_FAIL,
    DOCUMENT_POST_REQUEST,
    DOCUMENT_POST_SUCCES,
    DOCUMENT_POST_FAIL,
    IMAGE_LIST_REQUEST,
    IMAGE_LIST_SUCCES,
    IMAGE_LIST_FAIL
 } from "../../constants/ReduxDocuemnts"


export const getDocumentsAction = () => async(dispatch) => {
    try{
        dispatch({type: DOCUMENT_LIST_REQUEST })
        const {data} = await axios.get(`api/documents`)
        dispatch({
            type:DOCUMENT_LIST_SUCCES,
            payload: data
        })
    }catch(error){
        dispatch({
            type: DOCUMENT_LIST_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}

export const getImagesAction = (id) => async(dispatch) => {
    try{
        dispatch({type: IMAGE_LIST_REQUEST })
        const {data} = await axios.get(`api/images/${id}/`)
        dispatch({
            type:IMAGE_LIST_SUCCES,
            payload: data
        })
    }catch(error){
        dispatch({
            type: IMAGE_LIST_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}

export const registerDocument = (title,text,date) => async (dispatch) => {
    try{
        dispatch({
            type: DOCUMENT_POST_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post(
            'http://127.0.0.1:8000/api/register_document',
            {'title':title, 'text':text, 'date':date},
            config
            )

        dispatch({
            type:DOCUMENT_POST_SUCCES,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        console.log(error)
        dispatch({
            type: DOCUMENT_POST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}