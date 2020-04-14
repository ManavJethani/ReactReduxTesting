import axios from 'axios'

export default axios.create({
    // baseURL : 'http://jsonplaceholder.typicode.com/'
    // baseURL : 'https://developers.zomato.com/api/v2.1',
    baseURL : 'http://localhost:3000',
    headers : {
        'authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZGFiZWU3NzhmM2Q3NzM5NmM2MDdlNjYiLCJpYXQiOjE1NzE1NDg3OTF9.OzMUUEfBzw94sPGYMKglSizvCqo1XWrWMQfj5wZMaUg'
    }
})


