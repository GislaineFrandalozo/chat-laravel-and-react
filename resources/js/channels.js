import { useCallback } from 'react';

export var channelGlobalChat = (setListen) => {
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
    .listen('NewMessage', useCallback(setListen));
}