import { BASE_URL} from "./base_url";
import axios from "axios"
export const getAllBrozer= async(names)=>{
    let Exam;
    let URL
    if(!names){
        URL = BASE_URL+"/sayt"
    }
    else{
        URL = BASE_URL+`/sayt/?names=${names}`
    }
    await axios.get(URL)
    .then(res=>{
        Exam=res.data
    })
    return Exam
    
}
export const getBrozerById= async(id)=>{
    let Exams;
    await axios.get(`${BASE_URL}/sayt/${id}`)
    .then(res=>{
        Exams=res.data
    })
    return Exams
}
export const deleted = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/sayt/${id}`).then(res=>{
        message = res.data
    })
    return message
}
export const posted=(payload)=>{
    axios.post(`${BASE_URL}/sayt`,payload)
}
export const editing=(id,payload)=>{
    axios.put(`${BASE_URL}/sayt.${id}`,payload)
}