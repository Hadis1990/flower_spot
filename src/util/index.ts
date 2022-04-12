export const setAuthToken = (token: string) =>
  localStorage.setItem("authToken", token);

export const isUserLoggedIn = (): boolean =>
  !!localStorage.getItem("authToken");
