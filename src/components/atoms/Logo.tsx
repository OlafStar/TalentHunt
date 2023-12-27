import {Anton} from 'next/font/google';
import Link from 'next/link';

import {PropsWithClassname} from '~types/general';
import {cn} from '~utils/shadcn';

const anton = Anton({weight: '400', subsets: ['latin']});

const Logo = ({className}: PropsWithClassname) => {
    return (
        <Link href="/">
            <div
                className={`${anton.className} ${cn(
                    className,
                )} font-bold text-logo `}
            >
                <span className='text-mainBlue'>{'TALENT'}</span>{'HUNTING'}
            </div>
        </Link>
    );
};

export default Logo;
