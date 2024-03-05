

export default function Login(){
    return(
      <>
         <div className="h-screen w-screen bg-indigo-200 pt-px"> 
            <div className="bg-white mt-24 w-96 mx-auto  pt-px rounded-3xl shadow-md  shadow-black">
               <div className="text-center mt-5 text-2xl pt-px cursor-default">Login
               </div>
               <div >
               <form>
                  <div className="mt-9 flex flex-col p-px">
                     <label  className="mr-9 mt-9 text-m pt-px pl-5" htmlFor="userfield">
                     Username:
                     </label>
                     <input name="username" id="userfield" type="text" placeholder="enter your username"  className=" border-0 focus:border-blue-500 mt-2 ml-3 mr-5  pl-3 pt-1 pb-1 rounded-lg shadow-md"></input>

                     <label  className="mr-9 mt-9 text-m pt-px pl-5" htmlFor="passwordfield">
                     Password:
                    
                     </label>
                     <input name="username" id="passwordfield" type="text" placeholder="enter the password" className=" border-0 focus:border-blue-500 mt-2 ml-3 mr-5  pl-3 pt-1 pb-1 rounded-lg shadow-md"></input>
                     <span className="mt-3 ml-auto pr-5 text-m">forget password?</span>
                     <button className="border-2 border-black mt-7 ml-36 mr-36 rounded-3xl"> login</button>

                     <div className="mt-7 text-center text-sm">or sign up using</div>
                     <div className="mt-1 text-center text-sm"> gmail</div>
                     <div className="mt-11 mb-3 text-center text-sm">sign up</div>


                  </div>
               </form>
               </div>
            </div>
         </div>

         {/* <div class="h-screen w-screen bg-indigo-500  pt-4">
            <div class="mt-9 bg-white mb-2 pt-px box-border border-black border-2  ">

                hello
            </div>
            <div class="mt-7  bg-yellow-200 pt-px ">saurav</div> 


         </div> */}
      
      </>
    );
}