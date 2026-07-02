"use client"

import {useStarship} from "@/app/hooks/useStarship";
import {useParams} from "next/navigation";
import Link from "next/link";


const PageStarshipDetail = () => {
    const {id} = useParams();
    const {isPending, data, error, isError, isFetching} = useStarship(Number(id[0]));

    return (
        <>

            <div className="max-7xl mx-auto flex mt-16">
                <Link href={"/starwars"} className={"px-4 bg-slate-600 rounded-2xl py-4 px-8 cursor-pointer transitions hover:bg-slate-700"}>Regresar</Link>
            </div>
            {
                (isPending) ?
                    <>
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
                    </>
                    : (
                    <div className="flex flex-col gap-8 max-7xl mx-auto text-white bg-slate-800 p-8 rounded-2xl mt-16 border border-blue-500">
                        <h3 className={"text-2xl font-bold text-center text-blue-500"}>{data?.properties?.name}</h3>
                        <ul>
                            <li>
                                <strong>Manufactura:</strong> {data?.properties.manufacturer}
                            </li>
                            <li>
                                <strong>Modelo:</strong> {data?.properties.model}
                            </li>
                            <li>
                                <strong>Capacidad:</strong> {data?.properties.cargo_capacity}
                            </li>
                            <li>
                                <strong>Clase:</strong> {data?.properties.starship_class}
                            </li>
                            <li>
                                <strong>Pasajeros:</strong> {data?.properties.passengers}
                            </li>
                        </ul>
                    </div>
                )
            }
        </>
    );
}

export default PageStarshipDetail;