import {JobDescription, jobDescriptions} from '~config/jobs';

export const getJob = (id: string): JobDescription | undefined => {
    return jobDescriptions.find((item) => item.id === id);
};
