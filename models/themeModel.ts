
export type themeModel = {theme:'light' | 'dark' , toggleTheme:()=>void , isModelVisible:boolean , toggleModel:()=>void}


export type formData ={
  project_Type:string,
  title:string,
  date: string,
  description:string,
  data:string,
  images?:string[] | null,
  preview?:string,
  link?:string,
  technologies?:string[] | null,
  github_link?:string,
  _id?:string,
  
}

