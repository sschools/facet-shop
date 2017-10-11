import axios from "axios"

export default function getShoppingData(){
   return axios.get(`http://localhost:8080`)
}
