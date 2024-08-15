import { toast } from 'react-toastify';

import customFetch from '../utils/customFetch';
import { redirect } from 'react-router-dom';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.post('/jobs', data);
        toast.success('job added successfully');
        return redirect('all-jobs');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};
