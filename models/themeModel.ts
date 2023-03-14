
export type themeModel = {theme:'light' | 'dark' , toggleTheme:()=>void}

export interface Project{
    _uid:string;
    _id?:any
    date:string;
    technologies:string[];
    title:string;
    data: {heading:string;text:string;image?:string}[];
    description:string;
    link?:string;
    preview:string;
  }
export interface Post{
  _id:string;
  title:string;
  date:string;
  description:string;
  data: {title:string;text:string;image?:string}[];
}