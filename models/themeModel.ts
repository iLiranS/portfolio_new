
export type themeModel = {theme:'light' | 'dark' , toggleTheme:()=>void}
export type Post = {_id:string;message:string} 

export interface Project{
    _uid:string;
    date:string;
    technologies:string[];
    title:string;
    data: {heading:string;text:string;image?:string}[];
    description:string;
    link?:string;
    preview:string;
  }
