import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);

    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div>
                <div className='w-11/12 md:w-3/5 mx-auto px-4 py-20'>
                    <h1 className='text-3xl'>Oops...</h1>
                    <h2>That page is not found.</h2>
                    <p>
                        Go back to{' '}
                        <Link href='/'>
                            <a className='text-blue-500 underline'>Home Page</a>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default NotFound;
