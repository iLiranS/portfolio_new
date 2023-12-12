import React from 'react';
import { ContentState, ContentBlock } from 'draft-js';



export const Divider = (props:any) => {
    return (
        <div className='w-full h-[0.1rem] bg-darkBG/10 dark:bg-lightBG/20 relative'>
            <p className='opacity-0'>{props.children}</p>
        </div>
    );
};

export function findDividerEntities(contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState) {
    const text = contentBlock.getText();
    let start = 0;

    while (start < text.length) {
        const index = text.indexOf('---', start);

        if (index === -1) {
            break;
        }

        const end = index + 3; // Adjusted to include all three characters

        callback(index, end);
        start = end;
    }
}

