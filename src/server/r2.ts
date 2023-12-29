'use server';

import {PutObjectCommand} from '@aws-sdk/client-s3';
import {getSignedUrl} from '@aws-sdk/s3-request-presigner';
import { z } from 'zod';

import {formSchema} from '~components/molecues/ApplyForm';
import {r2} from '~lib/r2';

export const uploadToR2 = async (data: FormData) => {
    if (!data) {
        throw new Error('Data is not provided');
    }

    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
        throw new Error('Cannot get a file');
    }

    const signedUrl = await getSignedUrl(
        r2,
        new PutObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME,
            Key: file.name,
        }),
        {expiresIn: 60},
    );

    await fetch(signedUrl, {
        method: 'PUT',
        body: data,
    });
};

export const createCandidate = async (
    values: z.infer<typeof formSchema>,
    position: string,
    fileName: string,
) => {
    const data = JSON.stringify({...values, position: position, fileName: fileName});

    const blob = new Blob([data], {type: 'text/plain'});

    const signedUrl = await getSignedUrl(
        r2,
        new PutObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME,
            Key: `${position}-${values.fullname}.txt`,
        }),
        {expiresIn: 60},
    );

    await fetch(signedUrl, {
        method: 'PUT',
        body: blob,
    });
};
