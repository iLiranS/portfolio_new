import {ContentState,ContentBlock, DraftDecorator, DraftDecoratorComponentProps} from 'draft-js'
import React from 'react';


// interface ImageProps {
//     contentState: ContentState;
//     entityKey: string;
//     children: React.ReactNode;
// }


// export const Img:React.FC<ImageProps> = ({ entityKey, contentState,children }) => {
//     const { url, alt } = contentState.getEntity(entityKey).getData();

//     return (
//         <div className=' relative w-full aspect-video RTEImageContainer'>
//                 <img className='w-auto max-w-full mx-auto' loading='lazy' src={url} alt={url}/>
//                 <section className='flex items-center gap-1 absolute bottom-2 right-2 bg-codeBackground text-codeForeground p-1 rounded-md text-sm opacity-80'>
//                     <p className='opacity-75'>Editor:</p> {children ?? ''}
//                 </section>
//         </div>)
// }

export const findImageEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(
    (character) => {
        const entityKey = character.getEntity();
        return entityKey !== null && contentState.getEntity(entityKey).getType() === 'IMG';
    },
    callback
    );
}
// vercel deployment typesafe error solution
// interface CustomDraftDecorator extends DraftDecorator<ImageProps> {
//     component: (props: DraftDecoratorComponentProps & ImageProps | any) => React.ReactNode;
// }

export const testImage = {strategy:findImageEntities,component:(props) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData();
    return(
        <div className=' relative w-full aspect-video RTEImageContainer'>
        <img className='w-auto max-w-full mx-auto' loading='lazy' src={url} alt={url}/>
        <section className='flex items-center gap-1 absolute bottom-2 right-2 bg-codeBackground text-codeForeground p-1 rounded-md text-sm opacity-80'>
            <p className='opacity-75'>Editor:</p> {props.children ?? ''}
        </section>
</div>
    )

}}