import React from 'react';
import axios from 'axios';
import { toast } from 'sonner';

export function usePost() {
    const [loading, setLoading] = React.useState(false);
    const [responseData, setData] = React.useState(null);
    const [postError, setError] = React.useState(null)

    const postData = async (url, body) => {
        setLoading(true);
        try {
            const response = await axios.post(import.meta.env.VITE_CLIENT_URL + url, body);
            setData(response.data);
            toast.success(response.data.message); // Display success toast after successful response
        } catch (error) {
           setError(error.response?.data);
           toast.error(error.response?.data.message); // Display error toast from error response
           console.log(error);
        } finally {
            setLoading(false);
        }
    };
    

    return { loading, responseData, postData, postError };
}
