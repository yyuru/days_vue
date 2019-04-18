
import Axios from 'axios';
const URL='http://localhost:3000/api';

//plan
export const getPlan=(date)=>{
  const url=`${URL}/plan/getPlan`;
  return Axios.post(url,{
    withCredentials: true,
    params:{
      date:date
    }
  });
}
export const createPlan=(t,p,a,s,e)=>{
  const url=`${URL}/plan/createPlan`;
  return Axios.post(url,{
    withCredentials: true,
    params:{
      Title:t,
      Priority:p,
      About:a,
      StartTime:new Date(s),
      EndTime:new Date(e)
    }
  });
}
//quote
export const createQuote=(quote,by)=>{
  const url=`${URL}/quote/createQuote`;
  return Axios.post(url,{
    withCredentials:true,
    params:{
      Quote:quote,
      By:by
    }
  })
}
export const getQuotes=()=>{
  const url=`${URL}/quote/getQuote`;
  return Axios.get(url)
}
//note
export const getNotes=(date)=>{
  const url=`${URL}/dailynote/getNotes`;
  return Axios.post(url,{
    withCredentials:true,
    params:{
      date:date
    }
  })
}
export const createNote=(content,date)=>{
  const url=`${URL}/dailynote/createNote`;
  return Axios.post(url,{
    withCredentials:true,
    params:{
      content:content,
      date:date
    }
  })
}
export const deleteNote=(uid)=>{
  const url=`${URL}/dailynote/deleteNote`;
  return Axios.post(url,{
    withCredentials:true,
    params:{
      uid:uid
    }
  })
}