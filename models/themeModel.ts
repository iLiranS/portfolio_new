import { ContentBlock } from "draft-js";

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

export const getBlockStyle = (block: ContentBlock) => {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote'

    case 'code-block':
      return 'RichEditor-codeblock'
    
    case 'header-one':
      return 'RichEditor-h1'

    case 'header-two':
      return 'RichEditor-h2'

    case 'header-three':
      return 'RichEditor-h3'

    case 'header-four':
      return 'RichEditor-h4'

    case 'header-five':
      return 'RichEditor-h5'

    case 'header-six':
      return 'RichEditor-h6'
    
    case 'ordered-list-item':
    case 'unordered-list-item':
      return 'RichEditor-list-item'

    default:
      return 'RichEditor-default'
  }
}