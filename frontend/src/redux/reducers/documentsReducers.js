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

export const documentsReducer = (state = {data:[]}, action) => {
    switch(action.type){
        case DOCUMENT_LIST_REQUEST:
            return {loading:true, data:[]}

        case DOCUMENT_LIST_SUCCES:
            return { loading:false, data: action.payload }
        
        case DOCUMENT_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const imagesReducer = (state = {info:[]}, action) => {
    switch(action.type){
        case IMAGE_LIST_REQUEST:
            return {loading:true, info:[]}

        case IMAGE_LIST_SUCCES:
            return { loading:false, info: action.payload }
        
        case IMAGE_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const registerDocumentReducer = (state = {data:[]}, action) => {
    switch(action.type){
        case DOCUMENT_POST_REQUEST:
            return {loading:true, data:[]}

        case DOCUMENT_POST_SUCCES:
            return { loading:false, data: action.payload }
        
        case DOCUMENT_POST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}