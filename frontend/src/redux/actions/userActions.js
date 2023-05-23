import axios from "axios"
import { 
  USER_UNIQUE_REQUEST,
  USER_UNIQUE_SUCCES,
  USER_UNIQUE_FAIL,
  POST_USER_REQUEST,
  POST_USER_SUCCES,
  POST_USER_FAIL
} from "../../constants/ReduxUsers"

export const getUserAction = (name) => async(dispatch) => {
  try{
      dispatch({type: USER_UNIQUE_REQUEST })
      
      const {data} = await axios.get(`api/user_name/${name}/`)
      
      dispatch({
          type:USER_UNIQUE_SUCCES,
          payload: data
      })
  }catch(error){
      dispatch({
          type: USER_UNIQUE_FAIL,
          payload: error.response && error.response.data.message ?
          error.response.data.message : error.message
      })
  }
}

export const registerUser = (name) => async (dispatch) => {
  try{
      dispatch({
          type: POST_USER_REQUEST
      })

      const config = {
          headers:{
              'Content-type':'application/json'
          }
      }

      const {data} = await axios.post(
          '/api/user/register/',
          {'name':name},
          config
          )

      dispatch({
          type:POST_USER_SUCCES,
          payload: data
      })

  }catch(error){
      
      dispatch({
          type: POST_USER_FAIL,
          payload: error.response && error.response.data.message
          ? error.response.data.message
          :error.message
      })
  }
}