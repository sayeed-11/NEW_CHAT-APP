import React from 'react'

const Profile = ({isProfile, setProfile, setView, isView}) => {
  return (
    <div style={{
      height: "calc(100vh - 47.5px)"
    }} className={`${isProfile ? "w-[100%] right-0  lg:w-[30%] xl:w-[25%] overflow-y-auto" : "w-[0%] right-[-100%] overflow-hidden"} ${isView === "profile" ? "z-50" : "z-50"} absolute lg:static font-poppins space-y-3 transition-all duration-[0.3s] bg-white z-20`}>


      {/* title */}
      <div className='w-full bg-white shadow-sm py-4 sticky top-[0px] flex justify-between px-3 items-center'>
        <h1 className='text-center text-xl text-color-1 py-0.5'>Profile</h1>
        <button onClick={() => {setProfile(false); setView("chat")}} className=' p-2 rounded-md'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0057ff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
        </button>
      </div>


      {/* image */}
      <div className='px-2 flex flex-col items-center gap-2'>
        <div className='w-[60%] bg-slate-50 p-1 shadow-md rounded-full'>
          <img className='w-full aspect-square object-cover rounded-full shadow-md' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-color-1 font-semibold text-xl'>Carolin Judas</h1>
          <p className='text-xs text-color-1/[0.5]'>ACtive now</p>
        </div>
        <div className='flex gap-x-3 justify-center *:bg-bgColor-1/[0.1] *:p-2 *:rounded-md w-full'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#0057ff"><path d="M360-320h80v-120h120v-80H440v-120h-80v120H240v80h120v120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" /></svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#0057ff"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#0057ff"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#0057ff"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>
          </button>
        </div>
      </div>



      {/* details */}

      <div className='px-3 pt-5 space-y-3 py-2'>
        <div>
          <p className='text-sm text-color-1/[0.7]'>Email</p>
          <p className='text-[0.65rem]'>carolin@gmail.com</p>
        </div>
        <div>
          <p className='text-sm text-color-1/[0.7]'>Phone Number</p>
          <p className='text-[0.65rem]'>9874532032</p>
        </div>
        <div>
          <p className='text-sm text-color-1/[0.7]'>Address</p>
          <p className='text-[0.65rem]'>9404 Bald Hill LaneBrooklyn, NY 11228</p>
        </div>
        <div>
          <p className='text-sm text-color-1/[0.7]'>Joined</p>
          <p className='text-[0.65rem]'>12/07/2024 11:20 PM</p>
        </div>
        <button className='w-full bg-bgColor-1 py-2 text-white rounded-md'>BLOCK</button>
      </div>

    </div>
  )
}

export default Profile