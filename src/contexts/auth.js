import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND;
const tokenUrl = baseUrl + "/api/token/";

const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("You forgot AuthProvider!");
  return auth;
}

export function AuthProvider(props) {
  let storedUser = localStorage.getItem("user");
  let parsedUser = JSON.parse(storedUser);

  let storedToken = localStorage.getItem("token");
  let parsedToken = JSON.parse(storedToken);

  const [state, setState] = useState({
    tokens: parsedToken || null,
    user: parsedUser || null,
    login,
    logout,
  });

  async function login(username, password) {
    const response = await axios.post(tokenUrl, { username, password });

    const decodedAccess = jwt_decode(response.data.access);

    const newState = {
      tokens: response.data,
      user: {
        username: decodedAccess.username,
        email: decodedAccess.email,
        id: decodedAccess.user_id,
      },
    };

    setState((prevState) => ({ ...prevState, ...newState }));
    localStorage.setItem("token", JSON.stringify(newState.tokens));
    localStorage.setItem("user", JSON.stringify(newState.user));
  }

  function logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
