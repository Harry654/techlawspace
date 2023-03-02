import { createContext } from "react";

export const ServerContext = createContext({
  API_SERVER_URL: "http://localhost:4000",
  IMAGE_SERVER_URL: "http://localhost:4000",
  authorizationToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzc1MzM5NzV9.klvPNKHNG3p4b6uDjOniUV47AUNWKuVmQHSaWd9L-O0",
});
