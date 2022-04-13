import { createContext } from "react";

const defaultUser = {
  access_token: null,
};

const UserContext = createContext({
  user: defaultUser,
});

export default UserContext;
