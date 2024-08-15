import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { redirect } from 'react-router-dom';

export const loader = async () => {
    try {
        const response = await customFetch('/users/admin/app-stats');
        return response.data;
    } catch (error) {
        toast.error('You are not allowed to view this page');
        return redirect('/dashboard');
    }
};
