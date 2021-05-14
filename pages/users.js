import Link from "next/link";
import styles from "../styles/users.module.css"
import axios from "axios";

const Users = ({users}) => {
    return (
        <div className={styles.asd}>
            <Link href='/'>
                <a>Main</a>
            </Link>
            <Link href="/users">
                <a>Users</a>
            </Link>
            <h1>Users lists</h1>
            {users.map(user =>
                <div key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        <a>
                            {user.name}
                        </a>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Users;

export async function getStaticProps(context) {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    const users = data
    return {
        props: {users}, // will be passed to the page component as props
    }
}
