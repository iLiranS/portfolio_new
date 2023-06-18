
export type themeModel = {theme:'light' | 'dark' , toggleTheme:()=>void , isModelVisible:boolean , toggleModel:()=>void}

export interface Project{
    _id:string;
    date:string;
    technologies:string[];
    title:string;
    data: {heading:string;text:string}[];
    description:string;
    link?:string;
    preview:string;
    images?:string[]
  }
export interface Post{
  _id:string;
  title:string;
  date:string;
  description:string;
  data: {heading:string;text:string;image?:string}[];
}
export type  data= {heading:string,text:string} | null;
export type formData ={
  project_Type:string,
  title:string,
  date: string,
  description:string,
  data:data[] | [],
  images?:string[] | null,
  preview?:string,
  link?:string,
  technologies?:string[] | null,
  github_link?:string,
  _id?:string,
  
}