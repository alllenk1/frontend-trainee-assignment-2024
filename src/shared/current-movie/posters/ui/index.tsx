import { memo, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { cn } from '@bem-react/classname';

import { useGetPostersQuery } from '@/shared/api';

import { EmptyContent } from '../../empty-content';
import type { PosterType, PostersProps } from '../types';
import './index.scss';

export const Posters = memo(({ movieId }: PostersProps) => {
    const cnPosters = cn('Posters');

    const { data, isLoading } = useGetPostersQuery(movieId);

    const [posters, setPosters] = useState<PosterType[]>([]);

    useEffect(() => {
        if (data && data.docs) {
            setPosters(data.docs);
        }
    }, [data]);

    useEffect(() => {
        setPosters([]);
    }, [movieId]);

    return (
        !isLoading && (
            <div className={cnPosters('')}>
                {posters.length > 0 ? (
                    <Splide
                        aria-label="Posters"
                        options={{
                            type: 'loop',
                            width: '100%',
                            pagination: false,
                            gap: '10px',
                            autoWidth: true,
                            height: 'auto',
                            perMove: 1,
                            classes: {
                                arrow: cnPosters('Arrow'),
                                prev: cnPosters('Prev'),
                                next: cnPosters('Next')
                            }
                        }}
                    >
                        {posters.length > 0 &&
                            posters.map((item: PosterType, index: number) => (
                                <SplideSlide key={index}>
                                    <img
                                        className={cnPosters('Poster')}
                                        src={item.url}
                                        alt="poster"
                                        height="240"
                                        loading="lazy"
                                    />
                                </SplideSlide>
                            ))}
                    </Splide>
                ) : (
                    <EmptyContent />
                )}
            </div>
        )
    );
});
