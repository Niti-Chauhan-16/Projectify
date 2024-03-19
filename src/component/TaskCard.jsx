import { useDrag } from 'react-dnd';


  
export default function TaskCard({item}){

    const [{ isDragging }, drag] = useDrag({
        type: 'BOX',
        item:{type:'BOX',...item},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });
    
    return(
       <div className="bg-green-200 h-16 w-52 rounded-lg ml-2 mr-1" ref={drag}  style={{ opacity: isDragging ? 0.5 : 1 }}>
        <span>{item.description}</span>
       </div>

    );
}