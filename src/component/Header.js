import DropDown from "./DropDown"
import ProjectTag from "./ProjectTag"

export default function Header(){

    return (
        <>
        <div className="bg-slate-800 z-10  h-20 px-px py-px flex flex-row justify-between ">
        <div > 
            
            <DropDown/></div>
        
        <div className=" text-white mt-7">Projectify</div>
        <ProjectTag/>

        </div>
        
        </>
    )
}