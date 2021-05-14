import {useRouter} from "next/router";
import axios from "axios";

export default function User ({user}){
    const {query} = useRouter()
    return (
        <div>
            <h1>
                User with id: {query.id}
            </h1>
            <p>phone: {user.phone}</p>
        </div>

    )
}

export async function getServerSideProps({params}) {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = data
    return {
        props: {user}, // will be passed to the page component as props
    }
}