import { cn } from '@bem-react/classname';

import { ActorProps } from '../types';
import './index.scss';

export const Actor = ({ photo, name }: ActorProps) => {
  const cnActor = cn('Actor');

  return (
    <div className={cnActor('')}>
      <img className={cnActor('Photo')} src={photo} alt="actor's photo" />
      <p className={cnActor('Name')}>{name}</p>
    </div>
  );
};
