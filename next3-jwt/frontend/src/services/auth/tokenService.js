import nookies from "nookies";

const ACCESS_TOKEN_KEY = "lk23j4l2k3j4l23kj42l3k4jl233";

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365;
// const ONE_YEAR = 1 * 60 * 60 * 24 * 365;

export const tokenService = {
  save(accessToken, ctx = null) {
    globalThis?.localStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
    globalThis?.sessionStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
    nookies.set(ctx, ACCESS_TOKEN_KEY, accessToken, {
      maxAge: ONE_YEAR,
      path: "/",
    });
  },
  get(ctx = null) {
    const cookies = nookies.get(ctx);
    return cookies[ACCESS_TOKEN_KEY] || "";
    // return globalThis?.localStorage?.getItem(ACCESS_TOKEN_KEY);
    //return globalThis?.sessionStorage?.getItem(ACCESS_TOKEN_KEY);
  },
  delete() {
    return globalThis?.localStorage?.removeItem(ACCESS_TOKEN_KEY);
    //return globalThis?.sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
  },
};
