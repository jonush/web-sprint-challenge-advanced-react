import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [ darkMode, setDarkMode ] = useLocalStorage('darkModeToggler', false);

  useEffect(() => {
    if(darkMode === true) {
      document.querySelector('body').classList.add('dark-mode');
      document.querySelector('.title').style.color = 'white';
    } else {
      document.querySelector('body').classList.remove('dark-mode');
      document.querySelector('.title').style.color = 'black';
      //document.getElementsByClassName('.plant-details').style.color = 'white';
    }
  }, [darkMode])

  return [darkMode, setDarkMode];
}