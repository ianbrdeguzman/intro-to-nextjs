import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className='border-b w-11/12 md:w-3/5 mx-auto px-4 py-4 md:py-10 flex justify-between'>
            <div className='mt-1 cursor-pointer'>
                <Link href='/'>
                    <a>
                        <Image
                            src='/vercel.svg'
                            width={100}
                            height={100}
                        ></Image>
                    </a>
                </Link>
            </div>
            <ul className='flex items-center'>
                <li className='mr-4'>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li className='mr-4'>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
                <li className='mr-4'>
                    <Link href='/users'>
                        <a>Users</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
