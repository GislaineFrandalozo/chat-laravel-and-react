import { channelGlobalChat } from "./channels";
import { useState, createContext, useContext } from 'react';

const ChatChannelContext = createContext({});

function ChatChannel({children}) {
    const [listen, setListen] = useState({});
    const [emitedMessage, setEmitedMessage] = useState({});
    function setMessageListenner(event) {

        setListen({message: event.message.message, user: event.message.user});
    }
    channelGlobalChat(setMessageListenner);
    return (
    <ChatChannelContext.Provider value={{
        listen, 
        setEmitedMessage,
        emitedMessage
        }}>
        {children}
    </ChatChannelContext.Provider>
    )
}

const useChatChannelContext = () => {
    return useContext(ChatChannelContext);
  }
  
export { ChatChannel, useChatChannelContext };