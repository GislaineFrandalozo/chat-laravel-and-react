import { channelQuote } from '@/channels';
import { Link, Head } from '@inertiajs/inertia-react';
import { useState } from 'react';

export default function Welcome(props) {
    const defaultMessage = ' “ An unexamined life is not worth living. ” ';
    const defaultAutor = 'Socrates';
    const [quote, setQuote] = useState({message: defaultMessage, autor: defaultAutor});
    function setMessageQuote(event) {
        const message = event.message.toString();
        const formatedQuote = message.split('—');
        console.log(formatedQuote);
        setQuote({message: formatedQuote[0], autor: formatedQuote[1]});
    }
    channelQuote(setMessageQuote);
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('chat')} className="text-sm 2xl:text-xl text-gray-700 dark:text-gray-500 underline">
                            Chat
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm 2xl:text-xl text-gray-700 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm 2xl:text-xl text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="grid font-serif grid-cols-1 place-content-center max-w-6xl w-3/5 mx-auto lg:px-8 items-center ">
                    <div className='w-full'>
                        <h2 className='text-ls md:text-xl 2xl:text-3xl text-gray-700 dark:text-slate-100 underline decoration-pink-500 underline-offset-8'>
                            Welcome. I'm a developer and this is my first chat!
                        </h2>
                    </div>
                        <div className='max-w-fit my-8 md:px-12 bg-clip-text bg-gradient-to-r from-red-600 to-violet-700 flex flex-col text-transparent'>
                            <p className='max-w-fit italic text-xl md:text-3xl 2xl:text-5xl'>{quote.message}</p> 
                            <p className='text-end max-w-fit self-end md:mt-5 text-lg md:text-2xl 2xl:text-4xl'> — {quote.autor}</p>
                        </div>                        
                </div>
            </div>
        </>
    );
}
