import { createContext } from "react";

const defaultUser = {
  token: null,
  user: null,
};

const UserContext = createContext({
  user: defaultUser,
});

export default UserContext;
