import axios from 'axios';
import { useChatChannelContext } from './chatChannelContext';

export default function setMessage(data, handleError) {
    axios.post('/setMessage', data)
        .catch(handleError);
}
