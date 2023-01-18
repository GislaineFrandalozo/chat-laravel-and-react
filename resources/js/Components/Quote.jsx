import { useCallback } from 'react';

export var channelQuote = (setQuote) => {
    Echo.private('Quote').listen('QuoteBroadcasting', useCallback(setQuote));
}