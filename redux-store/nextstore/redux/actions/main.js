

// export const setInfo = (name) => dispatch => {
//   dispatch({
//     type: t.SET_NAME,
//     payload: name
//   });
// }

import * as t from "../types";
export const add=(data)=> dispatch =>{
   dispatch({
      type:t.ADD,
      payload:{
          id:new Date().getTime().toString(),
          task:data,
          complete:false
      }
  })
}

export const del=(id) => dispatch =>{
  dispatch({
      type:t.DELETE,
      id
  })
}

export const remove=() => dispatch=>{
  dispatch({
      type:t.REMOVE
  })
}

export const completed =(id) => dispatch=>{
      dispatch({
          type:t.COMPLETED,
          id
          
      })
  }
