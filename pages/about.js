import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>Intro to Nextjs | About</title>
            </Head>
            <div>
                <div className='w-11/12 md:w-3/5 mx-auto px-4 py-20'>
                    <h1 className='text-3xl mb-4'>About Page</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora unde consectetur pariatur quae sunt iste quam
                        dolor veniam officiis deserunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora unde consectetur pariatur quae sunt iste quam
                        dolor veniam officiis deserunt.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
