import apiClient from "./api-client";
import httpService from "./http-service";

export interface Users {
    id: number;
    name:string;
  }


export default httpService('/users')