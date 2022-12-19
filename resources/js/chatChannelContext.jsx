import { channelGlobalChat } from "./channels";
import { useState, createContext } from 'react';

const ChatChannelContext = createContext({});

function ChatChannel({children}) {
    const [listen, setListen] = useState({ message: '' })
    channelGlobalChat(setListen)
    console.log(listen)
    return (
    <ChatChannelContext.Provider value={{}}>
        {children}
    </ChatChannelContext.Provider>
    )
}

const useChatChannelContext = () => {
    return useContext(ChatChannelContext)
  }
  
export { ChatChannel, useChatChannelContext }