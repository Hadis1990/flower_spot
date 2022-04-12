export const setAuthToken = (token: string) =>
  localStorage.setItem("authToken", token);

export const removeAuthToken = () => localStorage.removeItem("authToken");

export const isUserLoggedIn = (): boolean =>
  !!localStorage.getItem("authToken");

export const getAuthToken = (): string | undefined | null =>
  localStorage.getItem("authToken");
