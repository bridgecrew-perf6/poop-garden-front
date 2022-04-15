import axios from 'axios'
import useSWR from 'swr'

import { useAuth } from '../contexts/auth'
const baseUrl = process.env.REACT_APP_BACKEND;
export const apiUrl = baseUrl + '/api/friends/requests/'

export default function useResourceRequests() {

    const { tokens, logout } = useAuth()

    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResourceRequests);

    async function fetchResourceRequests(url: string) {

        if (!tokens) {
            return;
        }

        try {
            const response = await axios.get(url, config());

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

    async function createResourceRequests(info: any) {

        try {
            await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteResourceRequests(id: string) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function updateResourceRequests(resource: any) {
        // STRETCH
        // Add ability for user to update an existing resource
    }


    // helper function to handle getting Authorization headers EXACTLY right
    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        }
    }

    function handleError(error: unknown) {
        console.error(error);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        resourcesRequests: data,
        error,
        loadingRequests: tokens && !error && !data,
        createResourceRequests,
        deleteResourceRequests,
        updateResourceRequests,
    }
}