import { useState, useEffect } from "react";

export default function useLocalStorage(
  key: string,
  defaultValue: string = ""
) {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
