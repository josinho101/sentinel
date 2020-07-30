import axios from "axios";

export default class RequestHandler {
  private static setAuthHeader = (token: string) => {
    if (token) {
      axios.defaults.headers.common["x-auth-token"] = token;
    }
  };

  /**
   * get request handler
   * @param url url
   */
  public static get = async (url: string, token?: string) => {
    try {
      RequestHandler.setAuthHeader(token!);
      return await axios.get(url);
    } catch (e) {
      console.error(e);
      return e.response;
    }
  };

  /**
   * post request handler
   * @param url url
   * @param data data to post
   */
  public static post = async (url: string, data: any, token?: string) => {
    try {
      RequestHandler.setAuthHeader(token!);
      return await axios.post(url, data);
    } catch (e) {
      console.error(e);
      return e.response;
    }
  };
}
