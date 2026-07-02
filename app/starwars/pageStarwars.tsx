"use client"

import {Starship, useStarships} from "@/app/hooks/useStarships";
import Image from 'next/image';
import Link from "next/link";

const PageStarwars = () => {
    const {isPending, data, error, isError, isFetching} = useStarships();
    console.log(data)
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-7xl mx-auto">
                {
                    (isPending || isFetching) ?
                        <div className={"min-h-screen flex justify-center items-center w-full"}>
                            <div role="status" className="flex flex-col items-center mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-8 animate-[spin_0.8s_linear_infinite] fill-blue-600 dark:fill-blue-500"
                                     viewBox="0 0 24 24"
                                     aria-hidden="true">
                                    <path
                                        d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                                        data-original="#000000"/>
                                </svg>
                                <span className="">Cargando…</span>
                            </div>
                        </div>
                        :
                        <>
                            {
                                data?.data.map((item: Starship) => {
                                    return (
                                        <div key={item.uid}
                                             className="w-full p-4 bg-slate-800 border border-blue-800 rounded-2xl flex flex-col items-center justify-center gap-y-4">
                                            <h2 className={"text-2xl font-bold uppercase text-blue-400"}>{item.name}</h2>
                                            <div className="relative">
                                                <Image src={item.thumbnail} alt={item.name} width={400} height={400}
                                                       className="rounded-2xl"/>
                                                <Link href={`/starwars/${item.uid}`}
                                                      className={"absolute bottom-4 left-0 right-0 bg-blue-500 rounded-2xl w-max px-8 py-4 mx-auto cursor-pointer hover:bg-blue-600 transition"}>Ver
                                                    información</Link>
                                            </div>
                                        </div>
                                    )
                                }) ?? <>
                                    No hay naves por mostrar
                                </>
                            }
                        </>
                }
            </div>
        </>
    );
}

export default PageStarwars;