import {ContentState,ContentBlock} from 'draft-js'



export const Link = (props:any) => {
  const {url} = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a className='a_link' target='a_blank' href={url} >
      {props.children}
    </a>
  );
};

export function findLinkEntities(contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState) {
  contentBlock.findEntityRanges(
    (character:any) => {
      const entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
    },
    callback
  );
}

