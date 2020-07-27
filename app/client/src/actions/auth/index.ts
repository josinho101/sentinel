import Base from "../base";
import * as urls from "../urls";
import { Dispatch } from "react";
import httpStatus from "http-status-codes";
import { Auth } from "../../reducers/auth";
import * as settings from "../../appsettings.json";
import localeHelper from "../../utils/localehelper";
import RequestHandler from "../../utils/requesthandler";

/**
 * Enum for the different auth actions
 */
export enum Types {
  LOGIN_INITIATED = "LOGIN_INITIATED",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED",
}

/* Auth action */
export interface AuthAction extends Base {
  type: Types;
  payload: Auth;
}

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: Types.LOGIN_INITIATED,
      payload: undefined!,
    });

    const url = settings.baseUrl + urls.LOGIN;
    const response = await RequestHandler.post(url, {
      email: email,
      password: password,
    });

    if (response?.status === httpStatus.OK) {
      const data = response.data;
      dispatch({
        type: Types.LOGIN_SUCCESS,
        payload: {
          user: data.user,
          token: data.token,
          isAuthenticated: true,
        },
      });
    } else {
      dispatch({
        type: Types.LOGIN_FAILED,
        payload: {
          isAuthenticated: false,
          error: localeHelper.translate("login.failure-message"),
        },
      });
    }
  };
};
