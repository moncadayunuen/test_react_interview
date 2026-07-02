"use client"

import Image from 'next/image'
import {useMemo, useState} from "react";
import { useRouter } from 'next/navigation'

type User = {
    email: string,
    gender: string,
    id: string,
    name: string,
    thumbnail: string,
}

type Users = {
    users: User[]
    page: number
}

export const PageClient = ({users, page} : Users) => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const filteredUsers = useMemo(() => {
        const value = search.toLowerCase();

        return users.filter((user: User) => {
            return user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);
        })
    },[users,search,page]);

    return (
        <div className={"w-full min-h-screen bg-slate-800 py-8 px-4"}>
            <div className="flex flex-col justify-center items-center w-full pb-16 pt-16">
                <h1 className={"text-4xl font-bold text-orange-400"}>Busca amigos</h1>
                <div className={"w-full max-w-7xl mx-auto flex items-center gap-x-4"}>
                    <label htmlFor="website" className="block mb-2.5 text-sm font-medium text-heading pt-2">Buscar</label>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="url" id="website"
                       className="bg-slate-900 border border-slate-700 text-heading text-sm rounded-2xl focus:border-slate-800 outline-none block w-full px-3 py-2.5 shadow-xs placeholder:text-body h-[50px]"
                       placeholder="Ejem: Luis Villa" required
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8  max-w-7xl mx-auto">
                {
                    filteredUsers?.map((item: User) => {
                        return (
                            <div className={"w-full px-6 py-8 bg-slate-900 rounded-2xl border border-orange-600"}
                                 key={item.id}>
                                <div className={"w-full flex flex-col items-center justify-center gap-y-4 text-center"}>
                                    <Image loading={"lazy"} src={`${item.thumbnail}`} alt={item.name} width={250} height={250} className="rounded-full  w-[100px]" />
                                    <h3 className={"text-2xl font-bold text-orange-400"}>{item.name}</h3>
                                </div>
                                <div className={"w-full flex flex-col items-center justify-center text-center gap-y-2"}>
                                    <p>
                                        {item.email}
                                    </p>
                                    <p className={"uppercase bg-slate-700 px-2 text-sm rounded-2xl"}>
                                        {item.gender}
                                    </p>
                                </div>
                            </div>
                        )
                    }) ?? <>
                        <p>No hay registros de usuarios</p>
                    </>
                }
            </div>
            <div className="flex gap-x-4 justify-center items-center w-full pb-16 pt-16">
                <button
                    disabled={page === 1}
                    type={"button"}
                    onClick={() => router.push(`/?page=${page - 1}`)}
                    className={"bg-slate-500 p-3 rounded-2xl hover:bg-slate-600 cursor-pointer focus:outline-none disabled:opacity-40"}
                >
                    Anterior</button>
                <div>
                    Página {page}
                </div>
                <button
                    type={"button"}
                    onClick={() => router.push(`/?page=${page + 1}`)}
                    className={"bg-slate-500 p-3 rounded-2xl hover:bg-slate-600 cursor-pointer focus:outline-none disabled:opacity-40"}
                >
                    Siguiente</button>
            </div>
        </div>
    )
}