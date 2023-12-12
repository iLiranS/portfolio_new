import {ContentState,ContentBlock, EntityInstance, DraftDecorator, DraftDecoratorComponentProps} from 'draft-js'

interface LinkProps {
  contentState: ContentState;
  entityKey: string;
  children: React.ReactNode;
}


function findLinkEntities(contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState) {
  contentBlock.findEntityRanges(
    (character:any) => {
      const entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
    },
    callback
  );
}

// vercel deployment typesafe error solution
interface CustomDraftDecorator extends DraftDecorator<LinkProps> {
  component: (props: DraftDecoratorComponentProps & LinkProps) => React.ReactNode;
}

export const testLink:CustomDraftDecorator = {strategy:findLinkEntities,component:(props: DraftDecoratorComponentProps & LinkProps) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  const Mutability = props.contentState.getEntity(props.entityKey).getMutability();


  const handleClick = (event: React.MouseEvent) => {
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
