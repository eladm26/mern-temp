import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post('/auth/login', data);
        toast.success('Login success');
        return redirect('/dashboard');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};