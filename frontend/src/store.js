import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { documentsReducer, registerDocumentReducer , imagesReducer , registerImagesReducer} from './redux/reducers/documentsReducers'

const reducer = combineReducers({
    documentList: documentsReducer,
    documentSend: registerDocumentReducer,
    imageList: imagesReducer,
    imageSend:registerImagesReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store