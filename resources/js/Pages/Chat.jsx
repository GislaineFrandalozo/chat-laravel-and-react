import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { channelGlobalChat } from '@/channels';
import { Head, useForm } from '@inertiajs/inertia-react';



export default function Chat(props) {
    const [listen, setListen] = useState({ message: '' })
    const { data, setData, post, processing } = useForm({
        message: '',
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('setMessage'));
        setData({message: ""});
    };
    channelGlobalChat(setListen)
    console.log(listen)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Chat</h2>}
        >
            <Head title="Chat" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-3 my-8 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={submit}>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <div>
                                    <InputLabel forInput="message" value="Message" />
                                    <input 
                                    type="text" 
                                    className="mt-3 w-full bg-current  dark:bg-gray-700"
                                    name='message' 
                                    value={data.message} 
                                    onChange={e => setData('message', e.target.value)} />
                                </div>
                            </div>
                            <PrimaryButton className="ml-4" processing={processing}>
                                ok
                            </PrimaryButton>
                        </form>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}