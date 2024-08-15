import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { createContext, useContext } from 'react';

export const loader = async ({ request }) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);

    try {
        const { data } = await customFetch.get('/jobs', { params });
        return { data, searchValues: { ...params } };
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

export const AllJobsContext = createContext();

export const useAllJobsContext = () => useContext(AllJobsContext);
