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

export const tagListReducer = (state = {data:[]}, action) => {
    switch(action.type){
        case TAG_LIST_REQUEST:
            return {loading:true, data:[]}

        case TAG_LIST_SUCCES:
            return { loading:false, data: action.payload }
        
        case TAG_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const tagRegisterReducer = (state = {data:[]}, action) => {
    switch(action.type){
        case TAG_POST_REQUEST:
            return {loading:true, data:[]}

        case TAG_POST_SUCCES:
            return { loading:false, data: action.payload }
        
        case TAG_POST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}
export const tagDeleteReducer = (state = {data:[]}, action) => {
    switch(action.type){
        case TAG_DELETE_REQUEST:
            return {loading:true, data:[]}

        case TAG_DELETE_SUCCES:
            return { loading:false, data: action.payload }
        
        case TAG_DELETE_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}