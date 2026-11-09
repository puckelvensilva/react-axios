import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Length": "Application/json"
    }
})

export default blogFetch