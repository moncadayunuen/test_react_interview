import httpClient from "@/app/utils/HttpClient";

const getAllMovies = async (page: number) => {
    try {
        const {data} = await httpClient.get(`/?page=${page}&results=10&seed=users`);
        return data;
    } catch(e: any) {
        console.error(e);
        throw new Error("error", e);
    }
}

export { getAllMovies };