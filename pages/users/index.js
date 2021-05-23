import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';

export const getStaticProps = async () => {
    try {
        const { data } = await axios.get('http://localhost:3000/api/users');
        return {
            props: { users: data },
        };
    } catch (error) {
        console.log(error);
    }
};

const Users = ({ users }) => {
    return (
        <>
            <Head>
                <title>Intro to Nextjs | Users</title>
            </Head>
            <div>
                <div className='w-11/12 md:w-3/5 mx-auto px-4 py-20'>
                    <h1 className='text-3xl mb-4'>All Users</h1>
                    {users.map((user) => {
                        return (
                            <div
                                key={user.id}
                                className='text-xl my-4 border-l-4 border-transparent hover:border-blue-500 pl-4 transition-all'
                            >
                                <Link href={`/users/${user.id}`}>
                                    <a>{user.name}</a>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Users;
