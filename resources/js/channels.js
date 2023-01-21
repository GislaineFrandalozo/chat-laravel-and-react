import { useCallback } from 'react';

export const channelGlobalChat = (setMessageListener) => {
    Echo.join(`GlobalChat`)
    .here((users) => {
        console.log(users);
    })
    .joining((user) => {
        // quando um novo usario logar
        console.log(user.name);
    })
    .leaving((user) => {
        // quando um usuario sair
        console.log(user.name);
    })
    .listen('NewMessage', useCallback(setMessageListener))
    .listen('NewMessage', (message) => {
        console.log(message)
    });
}

export const channelQuote = () => { 
    Echo.channel('Quote').listen('QuoteBroadcasting', (e) => {console.log(e.message)});
}