import { DraftEntityMutability, DraftEntityType } from "draft-js";


type DraftEntity = {
    type: DraftEntityType;
    mutability: DraftEntityMutability;
    data: any;
};

export const customEntityTransform = (entity: DraftEntity, text: string):string | undefined => {
    if (entity.type === 'IMG')
    return(
    `<div className=' relative w-full aspect-video RTEImageContainer'>
        <Image  fill objectFit='contain' loading='lazy' src=${entity.data.url} alt=${entity.data.url}/>
        <section className='flex items-center gap-1 absolute bottom-2 right-2 bg-darkBG/75 dark:bg-lightBG/75 text-lightBG dark:text-darkBG text-foreground p-1 rounded-md text-sm opacity-80'>
            <p className='opacity-50'>Editor:</p> {children}
        </section>
    </div>`
    )
  // LINK
    if (entity.type === 'LINK') return `<a title=${entity.data.url} href="${entity.data.url}" target="_blank" rel="noopener noreferrer">${text}</a>`
};


/*
        <div className=' relative w-full aspect-video RTEImageContainer'>
                <Image  fill objectFit='contain' loading='lazy' src='${url}' alt='${url}'/>
                <section className='flex items-center gap-1 absolute bottom-2 right-2 bg-darkBG/75 dark:bg-lightBG/75 text-lightBG dark:text-darkBG text-foreground p-1 rounded-md text-sm opacity-80'>
                    <p className='opacity-50'>Editor:</p> {children}
                </section>
        </div>
*/