import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
    try {
        const { data } = await customFetch.get(`/jobs/${params.id}`);
        return data;
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return redirect('dashboard/all-jobs')
    }

};

export const action = async ({request, params}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.patch(`/jobs/${params.id}`, data)
        toast.success('Job edited successfully');
        return redirect('/dashboard/all-jobs');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};
