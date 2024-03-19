import TaskCard from "./TaskCard";

import { useDrop } from 'react-dnd';


export default function TaskCol( {group,arr,setarr}){

    const [{ isOver }, drop] = useDrop({
        accept: 'BOX',
        drop: (item, monitor) => {
            
           
            const index = arr.findIndex(a => a.id === item.id);
            const updatedArr = [...arr];
            updatedArr[index].group=group;
            // Update the state with the new array
            setarr(updatedArr);
        },
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      });


    return (
        <>
          <div className=" bg-yellow-200  shrink-0 w-56 h-11 mt-5 rounded-lg" ref={drop}>

            <div className=" bg-yellow-200  shrink-0 w-56 h-max rounded-lg">
            {group}

            
             
             {arr.map((a)=>{
                 
                 if(a.group===group){
                    return <TaskCard item={a}/>
                 }
                 
             })

             }
             <button className="mt-2 rounded-lg flex flex-row bg-yellow-600 w-full pl-3">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                add new task</button>
             </div>
          </div>
        
        </>
    );
};