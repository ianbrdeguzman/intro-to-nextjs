import axios from 'axios';
import Link from 'next/link';

export const getStaticPaths = async () => {
    try {
        const { data } = await axios.get(
            'https://intro-to-nextjs-kzawa4wbp-ianbrdeguzman.vercel.app/api/users'
        );
        const paths = data.map((user) => {
            return {
                params: { id: user.id.toString() },
            };
        });
        return {
            paths: paths,
            fallback: false,
        };
    } catch (error) {
        console.log(error);
    }
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    try {
        const { data } = await axios.get(
            `https://intro-to-nextjs-kzawa4wbp-ianbrdeguzman.vercel.app/api/users/${id}`
        );
        return {
            props: { user: data },
        };
    } catch (error) {
        console.log(error);
    }
};

const UserDetails = ({ user }) => {
    return (
        <div>
            <div className='w-11/12 md:w-3/5 mx-auto px-4 py-20'>
                <h1 className='text-3xl mb-4'>{user.name}</h1>
                <div className='mb-4'>
                    <p>
                        <span className='font-semibold'>Username:</span>{' '}
                        {user.username}
                    </p>
                    <p>
                        <span className='font-semibold'>Email:</span>{' '}
                        {user.email}
                    </p>
                    <p>
                        <span className='font-semibold'>Phone:</span>{' '}
                        {user.phone}
                    </p>
                    <p>
                        <span className='font-semibold'>City:</span>{' '}
                        {user.address.city}
                    </p>
                    <p>
                        <span className='font-semibold'>Company:</span>{' '}
                        {user.company.name}
                    </p>
                </div>
                <Link href='/users'>
                    <a className='text-blue-500 underline'>Back to list</a>
                </Link>
            </div>
        </div>
    );
};

export default UserDetails;
