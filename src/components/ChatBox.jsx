import React, { useState } from 'react'
import Chat from './Chat'
import Profile from './Profile'
import Contact from './Contact'

const ChatBox = () => {
  const [isProfile, setProfile] = useState(false);
  const [isView, setView] = useState("contact");
  return (
    <div className='w-full bg-white flex-1 flex border-b-[1.5px] border-color-1/[0.5] overflow-x-hidden'>
      <Contact
        isView={isView}
        setView={setView}
      />
      <Chat
        isProfile={isProfile}
        setProfile={setProfile}
        isView={isView}
        setView={setView}
      />
      <Profile
        isProfile={isProfile}
        setProfile={setProfile}
        isView={isView}
        setView={setView}
      />
    </div>
  )
}

export default ChatBox