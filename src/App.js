
//import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
function App() {
 const [Items,setItems]=useState([]);
 const [inputList,setInputList]=useState(" ");
 const itemEvent=(e)=>{
      setInputList(e.target.value);
 }
 const listofItems=()=>{
          setItems((oldItems)=>{
            return [...oldItems,inputList];
          });
          setInputList("");
 };
 const deleteItems=(id)=>{
         setItems((oldItems)=>{
          return oldItems.filter((arrelement,index)=>{
            return index !== id;
          })
         })
}
  return (
    <div className='App'>
    <div>
    <label className='input'>
        Todo Text -- <input type="text" placeholder="Add a items" value={inputList} onChange={itemEvent} className='input'/></label>
        <button className='btn' onClick={listofItems}>+</button>
        </div>
        <div >
        <ol className='todo'>
         { Items.map((itemval,index)=>{
          return   <TodoList
          key ={index}
              text={itemval}
              id={index} 
              onSelect={deleteItems}
            />
          })}
        </ol>
        </div>
        
    </div>
  );
}

export default App;
