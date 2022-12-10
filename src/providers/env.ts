import { LoginApi, Configuration, UsersApi, TasksApi } from "../generated";

const readApiBaseFromEnv = (): string => {
  // Get API base URL from env
  // Priority is given to same host in the browser when environment is production
  if (
    process.env.NODE_ENV === "production" &&
    !document.location.host.startsWith("localhost")
  ) {
    return `https://${document.location.host}`;
  } else if (process.env.REACT_APP_API_BASE) {
    return process.env.REACT_APP_API_BASE;
  }
  return "http://localhost:8000";
};

export const readTimeZone = () => {
  return "Europe/Moscow";
};

const readAccessToken = async (): Promise<string> => {
  return localStorage.getItem("token") || "";
};

export const basePath: string = readApiBaseFromEnv();

const apiConfig: Configuration = new Configuration({
  basePath,
  accessToken: readAccessToken,
});

export const authApi: LoginApi = new LoginApi(apiConfig);
export const userApi: UsersApi = new UsersApi(apiConfig);
export const taskApi: TasksApi = new TasksApi(apiConfig);
