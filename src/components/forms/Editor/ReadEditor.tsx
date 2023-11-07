'use client'
import React, { useState } from 'react'
    
import {
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  ContentBlock,
  DraftHandleValue,
  convertFromRaw,
  convertToRaw,
  RawDraftContentState,
  Editor,
} from 'draft-js'
import 'draft-js/dist/Draft.css'

import BlockStyleControls from './BlockStyleControls'
import InlineStyleControls from './InlineStyleControls'


type Props = {
  setContent: (state: RawDraftContentState) => void,
  data:string
}

const emptyContentState =convertFromRaw({
  entityMap: {},
  blocks: [
  {
      text: '',
      key: 'foo',
      type: 'unstyled',
      entityRanges: [],
      depth:0,
      inlineStyleRanges:[]
  },
  ],
});


const RTEditor = ({ setContent,data }: Props) => {
  const parsedState = JSON.parse(data) as RawDraftContentState;
  const contentState = convertFromRaw(parsedState);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(contentState))
  

  const getBlockStyle = (block: ContentBlock) => {
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


  return (
    <div className=' relative mx-auto h-full  w-full rounded-md flex flex-col gap-2'>

      <div className='rounded-md pl-4 mx-auto w-full overflow-auto'>
        <Editor
          editorState={editorState}
          blockStyleFn={(block: ContentBlock) => getBlockStyle(block)}
          onChange={()=>{}}
          readOnly={true}
        />
      </div>
    </div>
  )
}

RTEditor.displayName = 'RTEditor'
export default React.memo(RTEditor)


