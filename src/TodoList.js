import React from "react";
import './App.css';

const TodoList =(props)=>{
   
   return(
   <>
   <div className="list">
   <li>{props.text}</li>
   <button  className="btndelete" onClick={()=>{props.onSelect(props.id);
   }} >-</button>
   </div>
   </>
   )
}
export default TodoList;