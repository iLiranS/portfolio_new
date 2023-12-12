import {ContentState,ContentBlock} from 'draft-js'
import { ReactNode } from 'react';



export const Link = (props:any) => {
  const {url} = props.contentState.getEntity(props.entityKey).getData();
  if (!url) return props.children;
  return (
    <a title={url} className='a_link' target='a_blank' href={url} >
      {props.children}
    </a>
  ) as ReactNode;
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

