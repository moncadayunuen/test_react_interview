"use client"

import {useQuery} from "@tanstack/react-query";
import services from "@/app/services";

export type Starship = {
    uid: string,
    name: string,
    url: string,
    thumbnail: string
}

export const useStarship = (id:number) => {
    return useQuery<any, Error>({
        queryKey: ["starshipID",id],
        queryFn: () => services.getStarship(id)
    });
}