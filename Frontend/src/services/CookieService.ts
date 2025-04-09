import Cookies from "universal-cookie";

const cookies = new Cookies();

class CookieService {
  get(name: string) {
    return cookies.get(name);
  }
  set(name: string, value: string) {
    cookies.set(name, value);
  }
  remove(name: string) {
    cookies.remove(name);
  }
}

export default new CookieService();
