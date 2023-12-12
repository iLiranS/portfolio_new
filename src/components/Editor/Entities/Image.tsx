import {ContentState,ContentBlock} from 'draft-js'





export const Img = (props:any) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData();

    return (
        <div className=' relative w-full aspect-video RTEImageContainer'>
                <img className='w-auto max-w-full mx-auto' loading='lazy' src={url} alt={url}/>
                <section className='flex items-center gap-1 absolute bottom-2 right-2 bg-codeBackground text-codeForeground p-1 rounded-md text-sm opacity-80'>
                    <p className='opacity-75'>Editor:</p> {props.children}
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
