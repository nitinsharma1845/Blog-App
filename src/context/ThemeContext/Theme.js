import React, { useContext } from 'react'

const ThemeContext = React.createContext({
    themeMode : localStorage.getItem('app-theme') || 'light',
    toggleTheme : ()=> {}
})


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}