// import { useState } from 'react'
// import { connect } from "react-redux"
// import { setInfo } from "../redux/actions/main"
// import styles from '../styles/Home.module.css'

// function Home(props) {
//   const { name, setInfo } = props
//   const [newName, setName] = useState("")

//   return (
//     <div>
//       <p>Enter a Name {name}:</p>
//       <input type="text" value={newName} onChange={(e) => setName(e.target.value)}/>

      
//         <button onClick={() => setInfo(newName)}>
//           Submit
//         </button>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//  return { name: state.main.name }
// }

// const mapDispatchToProps = {
//   setInfo
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)




import {connect} from 'react-redux';
import { useState } from "react";
import styles from '../styles/Home.module.css'
import {add, completed, del,remove} from '../redux/actions/main'

const Home =(props)=>{
  const {list, add, remove, del, completed}=props;
  const [input, setInput] =useState([]);

  
  
  const handleSubmit =(e)=>{
       
       e.preventDefault();
       setInput('');
  }
  
  return(
    <>
    <form onSubmit={handleSubmit}>
   
      <h1>Todo App</h1>
      <input type="text" value={input} placeholder="add task.." onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={()=> add(input)}>Add</button>
      
    </form>
    <div className="list">
      {
        list.map(
          (data) => {
            return(<>
              <div className="reduce-item" key={data.id} onClick={()=> completed(data.id)}>
                
               
              <div style={{textDecoration:data.complete ? "line-through": " "}} >{data.task}
              
              </div>
                <div className="item-button"><button onClick={()=> del(data.id)}>Remove</button></div>
                
              </div>

            </>)
            
          }
        )
      }
      <div className="clear">
         <button onClick={()=> remove()}>Clear</button>
      </div>
      
    </div>
    

</>
  )
}


const mapStateToProps = state => {
   return { list: state.main.list }
  }
  
  const mapDispatchToProps = {
    add,
    del,
    remove,
    completed
  }
export default connect(mapStateToProps, mapDispatchToProps)(Home)

