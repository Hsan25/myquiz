import axios, { AxiosInstance } from "axios";

const url: string = "https://opentdb.com";
export const axiosIstance: AxiosInstance = axios.create({
  baseURL: url,
});
