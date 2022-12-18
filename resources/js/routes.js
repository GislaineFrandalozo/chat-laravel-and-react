import axios from 'axios';

export default function setMessage(data, handleError) {
    axios.post('/setMessage', data)
         .catch(handleError);
}
