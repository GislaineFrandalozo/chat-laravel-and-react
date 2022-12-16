import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import InputMessage from '@/Components/InputMessage';
import ChatView from '@/Layouts/ChatView';
import Body from '@/Layouts/BodyLayout';

export default function Chat(props) {
   
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Chat</h2>}
        >
            <Head title="Chat" />
            <Body>
                <ChatView />
                <InputMessage />
            </Body>

        </AuthenticatedLayout>
    );
}