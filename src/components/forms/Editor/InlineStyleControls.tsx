import React from 'react'
    import { EditorState } from 'draft-js'
    
    import StyleButton from './StyleButton'
    
    const INLINE_STYLES = [
        { label: 'B', style: 'BOLD', title:'Bold' },
        { label: 'I', style: 'ITALIC', title:'Italic' },
        { label: 'U', style: 'UNDERLINE', title:'Underline' },
        { label: 'M', style: 'CODE', title:'Monospace' },
    ]
    
    type Props = {
        editorState: EditorState
        onToggle: (bockType: string) => void
    }
    
    const InlineStyleControls = ({ editorState, onToggle }: Props) => {
    const currentStyle = editorState.getCurrentInlineStyle()
    
    return (
        <>
        {INLINE_STYLES.map((type) => (
            <StyleButton
                key={type.label}
                active={currentStyle.has(type.style)}
                label={type.label}
                onToggle={onToggle}
                style={type.style}
                title={type.title}
            />
        ))}
        </>
    )
    }
    
    export default React.memo(InlineStyleControls)