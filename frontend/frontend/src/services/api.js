import axios from 'axios';

const api = axios.create({
        baseURL: 'http://localhost:4500/usuario',
        headers: {
                'Content-Type': 'application/json',
        },
})

export default api