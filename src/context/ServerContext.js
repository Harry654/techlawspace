import { createContext } from "react";

export const ServerContext = createContext({
  API_SERVER_URL: "http://localhost:4000",
  IMAGE_SERVER_URL: "http://localhost:4000"
});
