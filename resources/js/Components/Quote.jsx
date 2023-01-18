import { useCallback } from 'react';

console.log("foigdfhg")

export var channelQuote = (setQuote) => {
    Echo.private('Quote').listen('QuoteBroadcasting', useCallback(setQuote));
}