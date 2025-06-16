import Link from 'next/link';

const list = ['Work', 'About'];

const NavList = () => {
    return (
        <ul className='flex items-center gap-2'>
            {list.map((li) => (
                <Link key={li} href={`/${li.toLowerCase()}`} className='p-2 px-4 rounded-lg'>
                    {li}
                </Link>
            ))}
        </ul>
    );
};

export default NavList;
