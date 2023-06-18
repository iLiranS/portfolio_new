import { themeModel } from "models/themeModel";
import { create } from "zustand";

let lastStoredTheme: 'light' | 'dark' = 'dark';
if (typeof window !== 'undefined') {
    lastStoredTheme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  }

const useThemeStore = create<themeModel>((set)=>({
    isModelVisible:true,
    theme: lastStoredTheme,
    toggleTheme: ()=> set((state)=>{
        const newTheme = state.theme ==='light' ? 'dark' : 'light'
        localStorage.setItem('theme',newTheme);
        return{
            theme:newTheme
        }
    }),
    toggleModel: ()=> set((state)=>{
        const newModelState = !state.isModelVisible;
        return{
            isModelVisible:newModelState
        }
    })
}))

export default useThemeStore;