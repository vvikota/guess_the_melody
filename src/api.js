import axios from "axios";
// import {ActionCreator} from "./reducer/user/user";

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/guess-melody`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 403) {
      history.pushState(null, null, `/login`);
      // eslint-disable-next-line no-console
      // console.log(`обработал ошибку 403`);
      // dispatch(ActionCreator.requiredAuthorization(true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

