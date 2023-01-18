import { useCallback } from 'react';

console.log("ex");

export var channelQuote = (setQuote) => {
    Echo.private('Quote').listen('QuoteBroadcasting', useCallback(setQuote));
}