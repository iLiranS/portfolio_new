import React from 'react';
import { ContentState, ContentBlock, DraftDecorator, DraftDecoratorComponentProps } from 'draft-js';

interface DividerProps {
    contentState: ContentState;
    entityKey: string;
    children: React.ReactNode;
}

const Divider: React.FC<DividerProps> = ({ contentState, children }) => {
    return (
        <div className='w-full h-[0.1rem] bg-darkBG/10 dark:bg-lightBG/10 relative'>
            <p className='opacity-0'>{children}</p>
        </div>
    );
};

function findDividerEntities(contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState) {
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

// Vercel deployment typesafe error solution
interface CustomDraftDecorator extends DraftDecorator<DividerProps> {
    component: (props: DraftDecoratorComponentProps & DividerProps) => React.ReactNode;
}

export const DividerDecorator: CustomDraftDecorator = {
    strategy: findDividerEntities,
    component: (props: DraftDecoratorComponentProps & DividerProps) => {
        return(
            <div className='w-full h-[0.1rem] bg-darkBG/10 dark:bg-lightBG/10 relative'>
                <p className='opacity-0'>{props.children}</p>
            </div>
        )
    },
};
