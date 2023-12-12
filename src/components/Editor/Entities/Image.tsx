import {ContentState,ContentBlock} from 'draft-js'
import React, { ReactNode } from 'react';


interface ImageProps {
    contentState: ContentState;
    entityKey: string;
    children: React.ReactNode;
}


export const Img:React.FC<ImageProps> = ({ entityKey, contentState,children }) => {
    const { url } = contentState.getEntity(entityKey).getData();

    return (
        <div className=' relative w-full aspect-video RTEImageContainer'>
                <img className='w-auto max-w-full mx-auto' loading='lazy' src={url} alt={url}/>
                <section className='flex items-center gap-1 absolute bottom-2 right-2 bg-codeBackground text-codeForeground p-1 rounded-md text-sm opacity-80'>
                    <p className='opacity-75'>Editor:</p> {children}
                </section>
        </div>);
}

export const findImageEntities = (contentBlock:ContentBlock, callback:(start: number, end: number)=>void, contentState:ContentState) => {
    contentBlock.findEntityRanges(
    (character:any) => {
        const entityKey = character.getEntity();
        return entityKey !== null && contentState.getEntity(entityKey).getType() === 'IMG';
    },
    callback
    );
}
