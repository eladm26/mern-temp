import { JobsContainer, SearchContainer } from '../components';
import { useLoaderData } from 'react-router-dom';
import { AllJobsContext } from './AllJobs.utils';

const AllJobs = () => {
    const { data, searchValues } = useLoaderData();
    return (
        <AllJobsContext.Provider value={{ data, searchValues }}>
        <SearchContainer />
            <JobsContainer />
        </AllJobsContext.Provider>
    );
};

export default AllJobs;
