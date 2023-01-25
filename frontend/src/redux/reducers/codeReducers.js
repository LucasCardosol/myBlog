import { 
    CODE_LIST_REQUEST,
    CODE_LIST_SUCCES,
    CODE_LIST_FAIL,
    CODE_POST_REQUEST,
    CODE_POST_SUCCES, 
    CODE_POST_FAIL
} from "../../constants/ReduxCode"


export const codeListReducer = (state = {data:[]}, action) => {
    switch(action.type){
        case CODE_LIST_REQUEST:
            return {loading:true, data:[]}

        case CODE_LIST_SUCCES:
            return { loading:false, data: action.payload }
        
        case CODE_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const codePostReducer = (state = {data:[]}, action) => {
    switch(action.type){
        case CODE_POST_REQUEST:
            return {loading:true, data:[]}

        case CODE_POST_SUCCES:
            return { loading:false, data: action.payload }
        
        case CODE_POST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}