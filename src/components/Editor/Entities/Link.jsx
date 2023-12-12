import {ContentState,ContentBlock, EntityInstance, DraftDecorator, DraftDecoratorComponentProps} from 'draft-js'

// interface LinkProps {
//   contentState: ContentState;
//   entityKey: string;
//   children: React.ReactNode;
// }


function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
    },
    callback
  );
}

// vercel deployment typesafe error solution
// interface CustomDraftDecorator extends DraftDecorator<LinkProps> {
//   component: (props: DraftDecoratorComponentProps & LinkProps) => React.ReactNode;
// }

export const testLink = {strategy:findLinkEntities,component:(props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  const Mutability = props.contentState.getEntity(props.entityKey).getMutability();


  const handleClick = (event) => {
    if (!Mutability.includes('IMMUTABLE')) {
      event.preventDefault();
      // Handle the link click (e.g., open a new window or navigate)
      window.open(url, '_blank');
    }
  };
  return(
    <a title={url} href={url} onClick={handleClick} className='a_link' target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
  )
}}
