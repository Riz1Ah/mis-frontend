import apiClient from "./api-client";
import httpService from "./http-service";

export interface BasicAuth {
    username: string;
    password:string;
  }

export interface LoginResponse {
    message: string;
    sessionId: number
}


// export default login
export default httpService('/auth/login')