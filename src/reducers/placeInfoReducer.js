import{GET_PLACE_INFO} from '../actions/index'
const initianState={
    info:[]
}
export default function(state=initianState,action){
    switch(action.type){
        case GET_PLACE_INFO:
            return{...state,info:action.payload }
            default:
                return state;
                
    }
    
}
