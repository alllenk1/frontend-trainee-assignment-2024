import { useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';

import { useGetReviewsQuery } from '@/shared/api';
import { Pagination } from '@/shared/pagination';

import { EmptyContent } from '../../empty-content';
import type { ReviewsProps } from '../types';
import './index.scss';

export const Reviews = ({ movieId }: ReviewsProps) => {
    const cnReviews = cn('Reviews');

    const [currentPage, setCurrentPage] = useState(1);
    const [isFullReview, setFullReview] = useState(false);

    const { data, isLoading } = useGetReviewsQuery({ currentPage, movieId });

    useEffect(() => {
        setFullReview(false);
    }, [currentPage, movieId]);

    useEffect(() => {
        setCurrentPage(1);
    }, [movieId]);

    return (
        !isLoading && (
            <div className={cnReviews('')}>
                {data.docs.length > 0 ? (
                    <div
                        className={cnReviews('Content', {
                            positive: data.docs[0].type === 'Позитивный',
                            negative: data.docs[0].type === 'Негативный',
                            neutral: data.docs[0].type === 'Нейтральный'
                        })}
                    >
                        {data.docs[0].title && (
                            <p className={cnReviews('Title')}>
                                {data.docs[0].title}
                            </p>
                        )}
                        <p
                            className={cnReviews('Text')}
                            dangerouslySetInnerHTML={{
                                __html: isFullReview
                                    ? data.docs[0].review
                                    : data.docs[0].review.length > 600
                                      ? data.docs[0].review.substring(0, 600) +
                                        '...'
                                      : data.docs[0].review
                            }}
                        ></p>
                        {!isFullReview && data.docs[0].review.length > 600 && (
                            <button
                                className={cnReviews('MoreDetailsButton')}
                                onClick={() => setFullReview(true)}
                            >
                                Показать всю рецензию
                            </button>
                        )}
                    </div>
                ) : (
                    <EmptyContent />
                )}
                {data.docs.length > 1 && (
                    <Pagination
                        totalPages={data.pages}
                        currentPage={currentPage}
                        onPageChange={(page: number) => setCurrentPage(page)}
                        type="secondary"
                    />
                )}
            </div>
        )
    );
};
