import { useState } from 'react';
import { cn } from '@bem-react/classname';

import { Search } from '../search';
import './index.scss';

export const FilterForm = () => {
  const cnFilterForm = cn('FilterForm');

  return (
    <form className={cnFilterForm('')}>
      <Search />
    </form>
  );
};
