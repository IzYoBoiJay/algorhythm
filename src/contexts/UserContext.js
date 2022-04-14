import { createContext } from "react";

const defaultUser = {
  token: null,
  user: null,
};

const UserContext = createContext(defaultUser);

export default UserContext;
