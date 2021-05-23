import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Head>
                <title>Intro to Nextjs | Home</title>
            </Head>
            <div>
                <div className='w-11/12 md:w-3/5 mx-auto px-4 py-20'>
                    <h1 className='text-3xl mb-4'>Home Page</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maxime minima, beatae repellat repellendus earum
                        consequatur quis expedita nam similique tempore.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maxime minima, beatae repellat repellendus earum
                        consequatur quis expedita nam similique tempore.
                    </p>
                </div>
            </div>
        </>
    );
}
