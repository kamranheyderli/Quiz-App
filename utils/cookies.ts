import Cookies from "js-cookie";

export const getCookie = (name: string) => {
  if (typeof window === "undefined") return null;
  return Cookies.get(name);
};

export const setCookie = (name: string, value: string) => {
  if (typeof window === "undefined") return;
  Cookies.set(name, value);
};

export const getLocalStorage = <T>(key: string): T | null => {
  if (typeof window === 'undefined') return null;

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return null;
  }
};

export const setLocalStorage = <T>(key: string, value: T): void => {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
};

export const removeLocalStorage = (key: string): void => {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
  }
};
