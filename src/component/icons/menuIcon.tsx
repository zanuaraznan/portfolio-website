const MenuIcon = ({ size, className }: { size: number; className: string }) => {
    return (
        <svg
            stroke='currentColor'
            fill='none'
            strokeWidth='2'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={className}
            height={size}
            width={size}
            xmlns='http://www.w3.org/2000/svg'>
            <line x1='20' x2='4' y1='12' y2='12'></line>
            <line x1='4' x2='20' y1='6' y2='6'></line>
            <line x1='4' x2='20' y1='18' y2='18'></line>
        </svg>
    );
};

export default MenuIcon;
