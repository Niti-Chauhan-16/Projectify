import TaskCol from "./TaskCol";
import { useState } from "react";


let arr=[
    {
        id:1,
        description:'task 1',
        group:'not started'
    },
    {
        id:2,
        description:'task 2',
        group:'completed'
    }

]


let taskcol=[
    {
        position :0,
        
        group:'not started'
    },
    { 
        position:1,
        group:'completed'

    }

]



export default function Main(){

    const[arr1,setArr1]=useState(arr);
    const[isOpen,setIsOpen]=useState(false);
    const[taskCol,setTaskCol]=useState(taskcol);
    const[value,setValue]=useState('');

    const newCol=()=>{

        if(isOpen){
            return <div >
    
        <form action="/search" method="get" className="flex flex-col bg-indigo-200 mt-5" onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission behavior
            // Update taskcol state using the setter function

            setTaskCol((prevTaskcol) => [
                ...prevTaskcol,
                { position: prevTaskcol.length, group: value }]);
            
            console.log(taskCol);
          
          }}>
         <input type="text" name="query" placeholder="Enter new task group" onChange={(e)=>setValue(e.target.value)}/>
         <button type="submit">Save</button>
         </form>
        </div>;
        }
    }





    return(

        <div className="flex flex-row gap-3  overflow-x-auto h-full bg-slate-700 pl-3">
            
                
                {
                taskCol.map((col)=>{
                    return <TaskCol group={col.group} arr={arr} setarr={setArr1}/>
                })
            }
        
          

         
           
            <div>
            <button className="bg-indigo-200 h-9 mt-5" onClick={()=>setIsOpen((prev)=>!prev)}>add new task group</button>
             {newCol()}
            </div>
           
       
       
      </div>
      
    );
}