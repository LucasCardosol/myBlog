import { 
  USER_UNIQUE_REQUEST,
  USER_UNIQUE_SUCCES,
  USER_UNIQUE_FAIL,
  POST_USER_REQUEST,
  POST_USER_SUCCES,
  POST_USER_FAIL
} from "../../constants/ReduxUsers"


export const UserReducer = (state = {data:[]}, action) => {
  switch(action.type){
      case USER_UNIQUE_REQUEST:
          return {loading:true, data:[]}

      case USER_UNIQUE_SUCCES:
          return { loading:false, data: action.payload }
      
      case USER_UNIQUE_FAIL:
          return {loading: false, error: action.payload}

      default:
          return state
  }
}

export const PostUserReducer = (state = {data:[]}, action) => {
  switch(action.type){
      case POST_USER_REQUEST:
          return {loading:true, data:[]}

      case POST_USER_SUCCES:
          return { loading:false, data: action.payload }
      
      case POST_USER_FAIL:
          return {loading: false, error: action.payload}

      default:
          return state
  }
}