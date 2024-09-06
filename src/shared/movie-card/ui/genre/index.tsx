import { cn } from '@bem-react/classname';

import type { MoviesGenre } from '../../types';

import './index.scss';

export const Genre = ({ name }: MoviesGenre) => {
  const cnGenre = cn('Genre');

  return <div className={cnGenre('')}>{name}</div>;
};
