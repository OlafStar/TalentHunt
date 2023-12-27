import {ImageResponse} from 'next/og';

// Image metadata
export const alt = 'TalentHunting - Recruitment as a Service';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/jpg';

// Image generation
export default async function Image() {
    return new ImageResponse(
        <img src={'opg.jpg'} alt={alt} width={size.width} height={size.height} />,
    );
}
