import {PageClient} from "@/app/pageClient";
import {getAllMovies} from "@/app/services/movies";

type item = {
    cell: string,
    dob: object,
    email: string,
    gender: string,
    id: object,
    location: object,
    login: object,
    name: object,
    nat: string,
    phone: string,
    picture: object,
    registered: object,
}

type Props = {
    searchParams: Promise<{
        page?: string;
    }>;
};

const Page = async ({searchParams} : Props) => {
    const params = await searchParams;
    const page = Number(params?.page ?? "1");
    const {results} = await getAllMovies(page);
    const data = results.map((item:item) => {
        return {
            email: item.email,
            gender: item.gender,
            id: item.login.uuid,
            name: item.name.first + ' ' + item.name.last,
            thumbnail: item.picture.large,
        }
    });

    return (
    <>
      <PageClient users={data} page={page} />
    </>
    );
}

export default Page;