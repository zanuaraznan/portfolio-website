import clsx from 'clsx';
import { LuX } from 'react-icons/lu';
import MenuIcon from '../icons/menuIcon';
import { useModalStore } from '@/app/store';
import { useEffect } from 'react';

const MobileNav = () => {
    const { isOpen, toggle, isAnimating } = useModalStore();

    useEffect(() => {});

    return (
        <>
            <button
                className={clsx(
                    'p-3 rounded-lg relative flex items-center justify-center *:[stroke-dasharray:24] *:transition-all *:duration-300',
                    isAnimating && 'open'
                )}
                onClick={() => toggle()}>
                <LuX size={18} className='[stroke-dashoffset:24] [.open_&]:[stroke-dashoffset:0]' />
                <MenuIcon size={18} className='absolute [.open_&]:[stroke-dashoffset:24]' />
            </button>
            {isOpen && (
                <div
                    className={clsx(
                        'absolute left-0 p-4 top-full bg-white w-full transition-all origin-top ease-smooth duration-300 overflow-clip',
                        isAnimating ? 'max-h-96' : 'max-h-0'
                    )}>
                    Tes <br />
                    ini <br />
                    adalah <br />
                </div>
            )}
        </>
    );
};

export default MobileNav;
