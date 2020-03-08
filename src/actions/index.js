import {placeInfo} from '../data'
import axios from 'axios'
export const GET_PLACE_INFO='GET_PLACE_INFO'
const url="http://localhost:3004/placeInfo"
export function getPlaceInfo(id){
    const request=axios.get(`${url}/?id=${id}`)
    .then(res=>res.data)
return{
type:GET_PLACE_INFO,
payload:request
}
}