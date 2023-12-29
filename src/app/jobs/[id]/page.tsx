import JobDescriptionComponent from '~components/molecues/JobDescription';
import {getJob} from '~utils/getJob';

const Page = ({params}: {params: {id: string}}) => {
    const job = getJob(params.id);
    return <main className='py-40 container'>{job && <JobDescriptionComponent {...job} />}</main>;
};

export default Page;
