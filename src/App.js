
import './App.css';
import Login from './component/Login';
import DropDown from './component/DropDown';
import Header from './component/Header'
import SubHeader from './component/SubHeader';
import TaskCol from './component/TaskCol';
import Main from './component/Main';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
   <>
   <div className='flex flex-col h-screen'>
   <Header/>
    <SubHeader/>
    <DndProvider backend={HTML5Backend}>
      <Main/>
   </DndProvider>
  
   </div>
   </>
    
  );
}

export default App;
