import {Anton} from 'next/font/google';
import {ImageResponse} from 'next/og';
const anton = Anton({weight: '400', subsets: ['latin']});

// Image metadata
export const alt = 'TalentHunting - Recruitment as a Service';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                className={`${anton.className}`}
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <span className='text-mainBlue'>{'TALENT'}</span><span>{'HUNTING'}</span>
            </div>
        ),
        {
            ...size,
        },
    );
}
