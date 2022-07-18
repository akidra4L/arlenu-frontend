import { getToken, removeTokenCookies } from "../utils/tokenCookies";

export function setAuthorizationHeader(request, token) {
  request.headers.Authorization = `Bearer ${token}`;
}

function onRequest(request) {
  const token = getToken();
  token && setAuthorizationHeader(request, token);
  return request;
}

function onRequestError(error) {
  return Promise.reject(error);
}

function onResponse(response) {
  return response;
}

function onResponseError(error) {
  if (error?.response?.status === 401) {
    removeTokenCookies();
  }

  return Promise.reject(error);
}

export function setupInterceptors(axiosInstance) {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
