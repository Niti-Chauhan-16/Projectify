import { useState} from 'react';

export default function DropDown( id){

    const[isOpen,setIsOpen]=useState(false);

    const dropDownOption=()=>{
      if(isOpen){
        return <div className='bg-indigo-200 z-20 absolute w-40 h-40'> msanndndj</div>
      }
    
    } 

      return(
        <>
          <div className='flex item-center w-32 h-7 bg-indigo-200 mt-7 mx-7 rounded-lg flex flex-col items-center '>
            <button className="bg-yellow-500  w-full h-full rounded-lg  "  onClick={()=>setIsOpen((prev)=>!prev)}> Projects</button>

          </div>

          {
           dropDownOption()
          }
        </>
      )

}