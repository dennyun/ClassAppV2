import authService from "../services/authService";

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';
export const LOGOUT = '@ACCOUNT/LOGOUT';
export const REGISTER = '@ACCOUNT/REGISTER';

const login = (email, password) => {
  return async (dispatch) => {
    const user = await authService.login(email, password);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user,
      },
    });
  };
}

const register = (fullName, email, password) => {
  return async (dispatch) => {
    const user = await authService.register(fullName, email, password);

    dispatch({
      type: REGISTER,
      payload: {
        user,
      },
    });
  };
};

const setUserData = () => {
  return async (dispatch) => {
    const user = await authService.loginToken()
    dispatch({
      type: SILENT_LOGIN,
      payload: {
        user,
      },
    });
  };
};

const logout = () => {
  return async (dispatch) => {
    await authService.logout()
    dispatch({
      type: LOGOUT,

    });
  };
};

export {
  login,
  setUserData,
  logout,
  register
};