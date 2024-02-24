import './App.css'
import { Outlet } from 'react-router-dom'
import Landing from '../components/Landing/Landing'

function App() {

  return (
      <>
      <Landing />
      </>
    )
}

export default App

/*
 const coords = { x: 0, y: 0 };
 const circles = document.querySelectorAll(".circle");
  // const colors = ["#000000","#080808","#191919","#2d2d2d","#474747","#666666","#888888","#ababab","#cbcbcb","#e6e6e6","#f8f8f8","#ffffff",
 // ];
 const colors = ["#000000"];
  circles.forEach(function (circle, index) {
   circle.x = 0;
   circle.y = 0;
   circle.style.backgroundColor = colors[index % colors.length];
 });
  window.addEventListener("mousemove", function(e){
   coords.x = e.clientX;
   coords.y = e.clientY;
 });
  function animateCircles() {
  
   let x = coords.x;
   let y = coords.y;
  
   circles.forEach(function (circle, index) {
     circle.style.left = x - 12 + "px";
     circle.style.top = y - 12 + "px";
    
     circle.style.scale = (circles.length - index) / circles.length;
    
     circle.x = x;
     circle.y = y;
      const nextCircle = circles[index + 1] || circles[0];
     x += (nextCircle.x - x) * 0.3;
     y += (nextCircle.y - y) * 0.3;
   });
 
   requestAnimationFrame(animateCircles);
 }
  animateCircles();
  const VisuallyHiddenInput = styled('input')({
   clip: 'rect(0 0 0 0)',
   clipPath: 'inset(50%)',
   height: 1,
   overflow: 'hidden',
   position: 'absolute',
   bottom: 0,
   left: 0,
   whiteSpace: 'nowrap',
   width: 1,
 });
*/
/*
return (
   <>
     <div className='flex items-center justify-center h-screen'>
       <div className= '@apply w-[700px] h-[700px] bg-[#48484893] mb-24 mt-24 rounded-lg'>
         <div>
             <p className="text-2xl font-semibold text-gray-900 dark:text-white ml-12 mt-8 ">Create your Free Account </p>
             <div className='mt-4 ml-12'>
               <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                 <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                 </svg>
                 Sign in with Google
               </button>
               <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                 <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                 </svg>
                 Sign in with Github
               </button>
             </div>
            //  horizontal line 
             <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px',marginBottom:'4px'}}>
               <div style={{flex: 1, height: '1px', backgroundColor: 'grey',marginLeft:'10px'}} />
               <div>
                 <p style={{width: '70px', textAlign: 'center',color:'white'}}>or</p>
               </div>
               <div style={{flex: 1, height: '1px', backgroundColor: 'grey', marginRight:'10px'}} />
             </div>

             <div className="flex text-lg font-semibold text-gray-100 ml-12 mt-4">
               <p className='ml-1' >Email</p><p className='pl-72'>Full Name </p>
             </div>
             <form>
               <div className="grid gap-6 mb-6 md:grid-cols-2">
                   <div>
                       <input type="text" id="first_name" className=" border border-gray-600 text-gray-900  bg-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2 pl-1 pr-9 ml-12 w-50 h-11 " placeholder="pranav.sarwe@gmail.com" required/>
                   </div>
                   <div>
                       <input type="text" id="last_name" className=" border border-gray-600 text-gray-900  bg-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-2 px-1 ml-4 w-88 h-11"  placeholder="Pranav Sarwe" required/>
                   </div>
               </div>
             </form>
             <div className="flex text-lg font-semibold text-gray-100 ml-12 mt-4">
               <p className='ml-1' >Username </p><p className='pl-60'>Password </p>
             </div>
             <form>
               <div className="grid gap-6 mb-6 md:grid-cols-2">
                   <div>
                       <input type="text" id="username" className=" border border-gray-600 text-gray-900  bg-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2 pl-1 pr-9 ml-12 w-50 h-11 " placeholder="implus007" required/>
                   </div>
                   <div>
                       <input type="text" id="password" className=" border border-gray-600 text-gray-900  bg-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-2 px-1 ml-4 w-88 h-11"  placeholder="AGCTF#%3245SFG" required/>
                   </div>
               </div>
             </form>
             <div className="flex text-lg font-semibold text-gray-100 ml-12 mt-4">
               <p className='ml-1' >Invite code (optional)</p>
             </div>
             <form>
               <div className="grid gap-6 mb-6 md:grid-cols-2">
                   <div>
                       <input type="text" id="invitecode" className=" border border-gray-600 text-gray-900  bg-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2 pl-1 pr-9 ml-12 w-50 h-11 "/>
                   </div>
               </div>
               <div className='ml-12'>
                 <label class="block mb-2 text-lg font-medium text-gray-900 dark:text-white" for="avatar">Add an Avatar</label>
                 <div className='w-80'><input class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300" id="avatar" type="file" /></div>

               </div>
             </form>
             <div style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 marginTop:'40px'
               }}>
               <Button component="label" variant="contained">
                 <p className='px-10 py-2'>Create an Account</p>
               </Button>
             </div>
             <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop:'5px pb-24',color:'white'}}>
               <p>Have an account already? <a href='/' className='hover:underline text-blue-700'>Sign in here</a></p>
             </div>
           </div>
         </div>
       </div>
   </>
 )
*/
/*
function App() {

  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");
  
  // const colors = ["#000000","#080808","#191919","#2d2d2d","#474747","#666666","#888888","#ababab","#cbcbcb","#e6e6e6","#f8f8f8","#ffffff",
  // ];
  const colors = ["#000000"];
  
  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });
  
  window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
  });
  
  function animateCircles() {
    
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      
      circle.style.scale = (circles.length - index) / circles.length;
      
      circle.x = x;
      circle.y = y;
  
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
   
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();
  
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className= '@apply w-[700px] h-[700px] bg-[#48484893] mb-24 rounded-lg'>
          <div>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white ml-12 mt-8 ">Create your Free Account </p>
              <div className='mt-4 ml-12'>
                <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                </svg>
                Sign in with Google
                </button>
                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillrule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                </svg>
                Sign in with Github
                </button>
              </div>
              <div className="flex items-center justify-center font-semibold text-gray-500 ml-4 mt-4 ">
                <p className='mb-2 mr-4 '>______________________________________</p>
                <p className='text-xl font-semibold'>or</p>
                <p className='mb-2 ml-4'>______________________________________</p>
              </div>
              <div className="flex text-lg font-semibold text-gray-100 ml-12 mt-8">
                <p className='ml-1' >Your email</p><p className='pl-60'>Full Name </p>
              </div>
              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <input type="text" id="first_name" className=" border border-gray-600 text-gray-900  bg-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2 pl-1 pr-9 ml-12 mt-2 w-50 h-11 " placeholder="pranav.sarwe@gmail.com" required/>
                    </div>
                    <div>
                        <input type="text" id="last_name" className=" border border-gray-600 text-gray-900  bg-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-2 px-1 ml-4 mt-2 w-88 h-11"  placeholder="Pranav Sarwe" required/>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}
//email fullName password usename avatar 
export default App

*/
/*
return (
  <div>
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Create Account</button>
    </form>

    <p>
      Already have an account? <a href='/' className='hover:underline text-blue-700'>Sign in here</a></p>
  </div>
)
*/