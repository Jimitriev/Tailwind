import React from 'react';

import LazyLoading from './LazyLoading';

type propsType = {
    className?: string,
    text: string,
    onClick?: () => void
    loading?: boolean,
};

const Button = (props: propsType) => {
    const clickHandle = () => {
        if (props.onClick) props.onClick();
    }

    return (
        <button className={`w-full transition-all rounded text-white h-[40px] bg-primary ${props.loading ? '' : 'hover:bg-warning'} py-1 relative flex items-center justify-center ` + props.className}
            onClick={() => clickHandle()}
        >
            {
                props.loading ? (
                    <LazyLoading className='h-[24px] aspect-[1/1]' />
                ) : <span className='h-[24px]'>{props.text}</span>
            }
        </button>
    )
};

export default Button;