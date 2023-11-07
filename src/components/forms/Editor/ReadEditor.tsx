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
import { getBlockStyle } from 'models/themeModel'


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
  




  const handleKeyCommand = (
    command: string,
    editorState: EditorState,
    eventTimeStamp: number
  ): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      return 'handled'
    }
    return 'not-handled'
  }


  




  return (
    <div className='w-[95vw] max-w-2xl relative mx-auto h-full overflow-auto  p-2 rounded-md flex flex-col gap-2'>

      <div className='rounded-md p-2 mx-auto w-full overflow-auto'>
        <Editor
          editorState={editorState}
          blockStyleFn={(block: ContentBlock) => getBlockStyle(block)}
          onChange={()=>{}}
          spellCheck={true}
          handleKeyCommand={handleKeyCommand}
          readOnly={true}
        />
      </div>
    </div>
  )
}

RTEditor.displayName = 'RTEditor'
export default React.memo(RTEditor)


