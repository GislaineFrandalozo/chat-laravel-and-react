import { useCallback } from 'react';

console.log("xxx")

export var channelQuote = (setQuote) => {
    Echo.private('Quote').listen('QuoteBroadcasting', useCallback(setQuote));
}