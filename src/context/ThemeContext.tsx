// here we are making theme context 

import React, {createContext, useContext, useState} from "react";


interface themeProvider{
    mode: string | boolean,
    setMode: (theme: boolean | string) => void
}

const themeContext = createContext<themeProvider | null>(null);

interface ThemeProps {
    children: React.ReactNode,
}

//making custom hook to acces theme
export const useTheme = () => {
    return useContext(themeContext);
}

export const ThemeProvider: React.FC<ThemeProps> = (props) => {

    const [mode, setMode] = useState<string | boolean>('light');
    return (
        <themeContext.Provider value={{mode, setMode}}>
            {props.children}
        </themeContext.Provider>
    )
}