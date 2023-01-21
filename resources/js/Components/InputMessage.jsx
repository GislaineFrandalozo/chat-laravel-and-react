import { useChatChannelContext } from "@/chatChannelContext";
import setMessage from "@/routes";
import { useState } from "react"

export default function InputMessage(props) {
   const [data, setData] = useState({message: ""})
   const { setEmitedMessage } = useChatChannelContext();
   const handleClick = (event) => {
    function handleError(error) {
        console.log(error);
    }
    event.preventDefault();
    if(data.message.length > 0){
        setMessage(data, handleError);
        setData({ message: "" });
        setEmitedMessage(data);
    }
   }
    return (
        <div className="bg-white sm:rounded-lg sm:my-3 sm:mx-4 dark:bg-gray-800 fixed bottom-0 left-0 right-0">
            <form className="flex p-3 items-stretch">
                <div className="text-gray-900 w-5/6 flex dark:text-gray-100">
                    <input
                        type="text"
                        className="w-full bg-slate-500/50 rounded-md dark:bg-slate-900 border-transparent"
                        name='message'
                        value={data.message}
                        onChange={e => setData({ ...data, message: e.target.value })} />
                </div>
                <div className="self-center px-1 w-1/6 grid justify-items-center">
                    <button onClick={handleClick} className="h-8 w-12 rounded-md text-neutral-900 dark:text-neutral-200 hover:bg-green-600 hover:dark:bg-green-600 bg-green-400 dark:bg-green-800">ok</button>
                </div>
            </form>
        </div>
    )
}