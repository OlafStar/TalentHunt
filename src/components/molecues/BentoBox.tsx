import {PropsWithChildren} from 'react';

import {PropsWithClassname} from '~types/general';

const BentoBox = ({children, className}: PropsWithChildren & PropsWithClassname) => {
    return (
        <div
            className={`rounded-[17px] border border-white/100 bg-gradient-to-r from-white/70 to-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.10)] backdrop-blur-[10px] ${className}`}
        >
            {children}
        </div>
    );
};

export default BentoBox;
