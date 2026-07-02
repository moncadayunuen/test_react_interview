"use client"

import {useQuery} from "@tanstack/react-query";
import services from "@/app/services";

export type Starship = {
    uid: string,
    name: string,
    url: string,
    thumbnail: string
}

type StarshipResponse = {
    total_records: number,
    total_pages: number,
    prev: null,
    next: string,
    data: Starship[],
}

export const useStarships = () => {
    return useQuery<StarshipResponse, Error>({
        queryKey: ["starship"],
        queryFn: () => services.getAllStarships()
    });
}