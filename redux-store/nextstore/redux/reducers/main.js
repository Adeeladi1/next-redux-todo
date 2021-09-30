
// const main = (state = {
//     name: "guest",
// }, action) => {
//   switch(action.type){
//     case t.SET_NAME:
//       return { 
//         ...state,
//         name: action.payload
//       };
//     default:
//       return {...state};
//     }
// }

// export default main;


import * as t from "../types";
const initialState={
  list:[]
};
const main=(state=initialState, action) =>{
 switch(action.type)
 {
    case t.ADD:
        
         const {id,task,complete} =action.payload;
        return{
         ...state,
         list:[...state.list, {id, task, complete}]
        }  
    case t.DELETE:
        const newList =state.list.filter(e=> e.id !==action.id)
        return{
            ...state,
            list:newList
        }
    case t.REMOVE:
        return{
            ...state,
            list:[]
        }
    case t.COMPLETED :
               
        const check= state.list.map(todo => 
        todo.id === action.id ? 
        {...todo, complete: !todo.complete}: todo)
                    
        return {
        ...state,
        list:check
        }
        default:

        return state;
 }
}

export default main;