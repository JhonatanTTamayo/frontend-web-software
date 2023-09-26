const SERVER_IP = "http://localhost:3000/";

const API_PATH = "api/v1/";

export const ENV = {
  BASE_API_URL: SERVER_IP + API_PATH,
  // Encabezado rutas para almacenamiento, edición y eliminación de archivos
  BASE_URL: SERVER_IP,
  API_ROUTES: {
    // http://localhost:3000/api/v1/signup
    AUTH: "signup",
    // http://localhost:3000/api/v1/login
    LOGIN: "login",
    // http://localhost:3000/api/v1/get-me
    // LOGIN: "get-me",
    // http://localhost:3000/api/v1/users/
    USERS: "users/",
    // http://localhost:3000/api/v1/users/new-user
    CREATE_USER: "users/new-user",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
};
