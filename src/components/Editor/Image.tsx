import {ContentState,ContentBlock} from 'draft-js'
import Image from 'next/image';


interface ImageProps {
    contentState: ContentState;
    entityKey: string;
    children: React.ReactNode;
}





export const Img = ({ entityKey, contentState,children }:ImageProps) => {
    const { url, alt } = contentState.getEntity(entityKey).getData();

    return (
        <div className=' relative w-full aspect-video RTEImageContainer'>
                <Image  fill objectFit='contain' loading='lazy' src={url} alt={url}/>
                <section className='flex items-center gap-1 absolute bottom-2 right-2 bg-darkBG/75 dark:bg-lightBG/75 text-lightBG dark:text-darkBG text-foreground p-1 rounded-md text-sm opacity-80'>
                    <p className='opacity-50'>Editor:</p> {children}
                </section>
        </div>)
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


export const testImage = {strategy:findImageEntities,component:Img as React.ComponentType<ImageProps>}