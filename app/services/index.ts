import axios from "axios";

const services = {
    getAllStarships: async () => {
        try {
            const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_DEMO}/starships`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return {
                next: data.next,
                prev: data.previous,
                totalPages: data.total_pages,
                totalRecords: data.total_records,
                data: data.results.map((item: any, i: any) => {
                    return {
                        ...item,
                        thumbnail: `https://picsum.photos/id/${i}/300/300`
                    }
                })
            };
        } catch(e: any) {
            console.error(e);
            throw new Error("error", e);
        }
    },

    getStarship: async (id: number) => {
        try {
            const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_DEMO}/starships/${id}`);
            return data.result;
        } catch(e: any) {
            console.error(e);
            throw new Error("error", e)
        }
    }

}

export default services;