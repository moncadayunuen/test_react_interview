import axios from "axios";

const httpClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    timeout: 5000,
    headers: { accept: 'application/json', cache: "no-store" },
});

export default httpClient;