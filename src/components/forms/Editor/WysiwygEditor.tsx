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


const RTEditor = React.forwardRef(({ setContent }: Props,ref:React.ForwardedRef<Editor>|null) => {
  const [editorState, setEditorState] = useState(EditorState.createWithContent(emptyContentState))
  




  const onChange = (state: EditorState) => {
    setEditorState(state);
    const rawData = convertToRaw(editorState.getCurrentContent());
    setContent(rawData)
  }

  const mapKeyToEditorCommand = (e: any): string | null => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */)
      if (newEditorState !== editorState) {
        onChange(newEditorState)
      }
      return null
    }
    return getDefaultKeyBinding(e)
  }

  const handleKeyCommand = (
    command: string,
    editorState: EditorState,
    eventTimeStamp: number
  ): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const toggleBlockType = (blockType: string) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType))
  }

  const toggleInlineStyle = (inlineStyle: string) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle))

  }

  




  return (
    <div className='w-[95vw] max-w-2xl relative mx-auto h-full overflow-auto  p-2 rounded-md flex flex-col gap-2'>

      <section className='border-b-2 pb-2 w-full bg-lightBG dark:bg-darkBG z-10  border-darkBG/10 dark:border-lightBG/10 grid grid-cols-[repeat(auto-fill,40px)] gap-1'>
        <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
        />
        <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
        />
      </section>

      <div className='rounded-md p-2 mx-auto w-full overflow-auto'>
        <Editor
          ref={ref}
          editorState={editorState}
          placeholder='Enter Your Text...'
          blockStyleFn={(block: ContentBlock) => getBlockStyle(block)}
          keyBindingFn={(e) => mapKeyToEditorCommand(e)}
          onChange={onChange}
          spellCheck={true}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  )
})

RTEditor.displayName = 'RTEditor'
export default React.memo(RTEditor)


