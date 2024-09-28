import { useEffect, useMemo, useState } from 'react';
import { cn } from '@bem-react/classname';

import { Pagination } from '@/shared/pagination';

import { EmptyContent } from '../../empty-content';
import { ActorsProps } from '../types';
import './index.scss';

const limit = 9;

export const Actors = ({ persons }: ActorsProps) => {
    const cnActors = cn('Actors');

    const [currentPage, setCurrentPage] = useState(1);

    const actors = useMemo(() => {
        return persons.filter(
            (person) =>
                person.profession === 'актеры' ||
                person.enProfession === 'actor'
        );
    }, [persons]);

    useEffect(() => {
        setCurrentPage(1);
    }, [actors]);

    return (
        <div className={cnActors('')}>
            <div className={cnActors('Content')}>
                {actors.length > 0 ? (
                    actors
                        .slice(currentPage - 1, currentPage + limit)
                        .map((person, index) => (
                            <div className={cnActors('Actor')} key={index}>
                                <img
                                    className={cnActors('Photo')}
                                    src={person.photo}
                                    alt="actor's photo"
                                    width="95"
                                    height="150"
                                />
                                <p className={cnActors('Name')}>
                                    {person.name ?? person.enName}
                                </p>
                            </div>
                        ))
                ) : (
                    <EmptyContent />
                )}
            </div>
            {actors.length >= limit && (
                <Pagination
                    totalPages={Math.ceil(actors.length / 10)}
                    currentPage={currentPage}
                    onPageChange={(page: number) => setCurrentPage(page)}
                    type="secondary"
                />
            )}
        </div>
    );
};
