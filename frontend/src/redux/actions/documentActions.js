import axios from "axios"
import { 
    DOCUMENT_LIST_REQUEST,
    DOCUMENT_LIST_SUCCES,
    DOCUMENT_LIST_FAIL,
    DOCUMENT_POST_REQUEST,
    DOCUMENT_POST_SUCCES,
    DOCUMENT_POST_FAIL,
    DOCUMENT_DELETE_REQUEST,
    DOCUMENT_DELETE_SUCCES,
    DOCUMENT_DELETE_FAIL,
    DOCUMENT_UPDATE_REQUEST,
    DOCUMENT_UPDATE_SUCCES,
    DOCUMENT_UPDATE_FAIL,
    IMAGE_LIST_REQUEST,
    IMAGE_LIST_SUCCES,
    IMAGE_LIST_FAIL,
    IMAGE_POST_REQUEST,
    IMAGE_POST_SUCCES,
    IMAGE_POST_FAIL
 } from "../../constants/ReduxDocuemnts"


export const getDocumentsAction = (user,interval,limit,tag,title) => async(dispatch) => {
    try{
        dispatch({type: DOCUMENT_LIST_REQUEST })
       
        const {data} = await axios.get(`api/documents/filtered/${user}/${interval}/${limit}/${tag}/${title?title:''}`)
        
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
        const {data} = await axios.get(`/api/images/${id}/`)
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

export const registerDocument = (title,text,date,tag,user) => async (dispatch) => {
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
            `/api/documents/${user}/register/`,
            {'title':title, 'text':text, 'date':date ,'tag':tag},
            config
            )

        dispatch({
            type:DOCUMENT_POST_SUCCES,
            payload: data
        })

    }catch(error){
        
        dispatch({
            type: DOCUMENT_POST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}

export const updateDocument = (title,text, id, tag, user) => async (dispatch) => {
    try{
        dispatch({
            type: DOCUMENT_UPDATE_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.put(
            `/api/documents/${user}/${id}/update/`,
            {'title':title, 'text':text, 'tag':tag },
            config
            )

        dispatch({
            type:DOCUMENT_UPDATE_SUCCES,
            payload: data
        })

    }catch(error){
       
        dispatch({
            type: DOCUMENT_UPDATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}

export const deleteDocument = (id) => async (dispatch) => {
    try{
        dispatch({
            type: DOCUMENT_DELETE_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.delete(
            `/api/documents/${id}/delete/`,
            config
            )
        dispatch({
            type:DOCUMENT_DELETE_SUCCES,
            payload: data
        })

    }catch(error){
       
        dispatch({
            type: DOCUMENT_DELETE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}

export const registerImage = (document,image,order) => async (dispatch) => {
    try{
        dispatch({
            type: IMAGE_POST_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'multipart/form-data'
            }
        }

        const {data} = await axios.post(
            '/api/images/register/',
            {'image':image, 'document':document, 'order':order},
            config
            )

        dispatch({
            type:IMAGE_POST_SUCCES,
            payload: data
        })

    }catch(error){
        
        dispatch({
            type: IMAGE_POST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}