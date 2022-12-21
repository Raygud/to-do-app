import React,{useState} from 'react'
import { IoIosCloseCircleOutline,IoMdCheckmarkCircleOutline,IoMdTime } from 'react-icons/io';
import { MdOutlineLocationOn,MdOutlineDateRange,MdOutlineDescription, } from 'react-icons/md';

import styled from 'styled-components'

type Props = {}

const TodoList = (props: Props) => {

let fetchedstring = localStorage.getItem("todoData");

if (fetchedstring === null) {
  fetchedstring = "[]";  
}


const parsedString = JSON.parse(fetchedstring);

console.log(parsedString); 
    const [data, setData] = useState<any>(parsedString);

  

    const handleRemove = (id: string) => {
        /* eslint-disable no-restricted-globals */

      if (confirm("Are you sure you want to delete this item?")) {
          // The user clicked OK, so delete the item
          const newObjects = data.filter((data:any) => data.id !== id);
              setData(newObjects);
              const arrayString = JSON.stringify(newObjects);
            // Store the string in local storage
            localStorage.setItem("todoData", arrayString);

        } else {
          return
        }
  /* eslint-enable no-restricted-globals */
      
      }
    
  return (
    <>
    <h1>{}</h1>
    <h1>h2</h1>
    <ToDoContainer>
    {data?.map((item:any, index:number)=>{
        const timestamp = item.date;
        const date = new Date(timestamp);
        console.log(date);

        return(
        <TodoItem key={index}>

            <ol>
            <li><ToDoHeader>{item.title}</ToDoHeader></li>

            </ol>
        <ol style={{display:"flex", justifyContent:"space-between"}}>
        <ToDoInnerList>
       <li style={{color:"black"}}><MdOutlineLocationOn fill='red'/> {item.location}</li> 
       <li style={{color:"black"}}><MdOutlineDateRange fill='red'/> {`${date.getDay()}/${date.getDate()}/${date.getFullYear()}`}</li> 
        </ToDoInnerList>

        <ToDoInnerList>
       <li style={{color:"black"}}><MdOutlineDescription fill='red'/> Description</li> 
       <li style={{color:"black"}}><IoMdTime fill='red'/> {`${date.getHours()}:${date.getMinutes()}`}</li> 
        </ToDoInnerList>

        <ToDoActions>
        <IoIosCloseCircleOutline onClick={() => handleRemove(item.id)} fill='red'/>
        <IoMdCheckmarkCircleOutline onClick={() => handleAddItem()} fill='green'/>
        </ToDoActions>
        </ol>
        </TodoItem>
        )
})}
    </ToDoContainer>
    </>
  )
}

export default TodoList

const ToDoContainer = styled.ol`
position: relative;
width: 95vw;
max-height: 90vh;
overflow: scroll;
margin: auto;
`

const TodoItem = styled.li`
margin: auto;
width: 95%;
background-color: white;
color: #707070;
font-size: 4.3vw;
border-radius: 5px;
padding: 1vw;
margin-bottom: 2vw;
`

const ToDoActions = styled.ol`
font-size: 10vw;
`

const ToDoHeader = styled.h2`
color: #707070;
width: 100%;
margin-bottom: 0.5vw;
`

const ToDoInnerList = styled.ol`
color: black;
display: flex;
flex-direction: column;
align-items: flex-start;
`
