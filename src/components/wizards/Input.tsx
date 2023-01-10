import React from 'react';

import LazyLoading from './LazyLoading';

type propsType = {
    className?: string,
    value: any,
    type?: string,
    setValue?: (e: any) => {},
    loading?: boolean,
    placeholder?: string
};

const Input = (props: propsType) => {
    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.setValue) props?.setValue(e.target.value);
    }

    return (
        <div className={'w-full relative flex items-center ' + props.className}>
            <input type={props.type ? props.type : 'text'}
                className={`w-full px-4 py-2 text-textDarkPrimary rounded bg-input`}
                placeholder={props?.placeholder}
                value={props.loading ? " " : props.value}
                onChange={(e) => changeHandle(e)}
            />
            {
                props.loading ? (
                    <LazyLoading className='absolute left-4 h-[20px] aspect-[1/1]' />
                ) : ""
            }
        </div>
    )
};

export default Input;