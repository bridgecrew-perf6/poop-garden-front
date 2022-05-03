import axios from "axios";
import useSWR from "swr";

import { useAuth } from "../contexts/auth";
const baseUrl = process.env.REACT_APP_BACKEND;
export const apiUrl = baseUrl + "/api/data_profiles/poop_profiles/";

export default function useResourcePoop() {
  const { tokens, logout } = useAuth();

  const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResourcePoop);

  async function fetchResourcePoop(url: string) {
    if (!tokens) {
      return;
    }

    try {
      const response = await axios.get(url, config());

      localStorage.setItem("poop", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  async function createResourcePoop(info: any) {
    try {
      let response = await axios.post(apiUrl, info, config());
      mutate(); // mutate causes complete collection to be refetched
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  // async function updateResourcePoop(resource: any) {
  //   // Add ability for user to update poop profile
  // }

  // helper function to handle getting Authorization headers EXACTLY right
  function config() {
    return {
      headers: {
        Authorization: "Bearer " + tokens.access,
      },
    };
  }

  function handleError(error: unknown) {
    console.error(error);
    // currently just log out on error
    logout();
  }

  return {
    resourcesPoop: data,
    error,
    loadingPoop: tokens && !error && !data,
    createResourcePoop,
    // updateResourcePoop,
  };
}
