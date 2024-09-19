import { cn } from '@bem-react/classname';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import { Actor } from '@/shared/current-movie/actor';

import { CurrentMovieProps } from '../types';
import './index.scss';

export const CurrentMovie = ({
    name,
    alternativeName,
    year,
    ageRating,
    description,
    poster,
    videos,
    persons
}: CurrentMovieProps) => {
    const cnCurrentMovie = cn('CurrentMovie');

    return (
        <>
            <div className={cnCurrentMovie('')}>
                <div className={cnCurrentMovie('Promo')}>
                    <img
                        className={cnCurrentMovie('Poster')}
                        src={poster.url}
                        alt="movie's poster"
                    />
                    {videos.trailers.length > 0 && (
                        <video
                            className={cnCurrentMovie('Trailer')}
                            src={videos.trailer}
                        ></video>
                    )}
                </div>
                <div className={cnCurrentMovie('Info')}>
                    <p
                        className={cnCurrentMovie('NameAndYear')}
                    >{`${name}, ${year}`}</p>
                    <p className={cnCurrentMovie('AltNameAndRating')}>
                        {`${alternativeName}, ${ageRating}+`}
                    </p>
                    <p className={cnCurrentMovie('Description')}>
                        {description}
                    </p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Страна</td>
                                <td>Такой-то</td>
                            </tr>
                            <tr>
                                <td>Режиссер</td>
                                <td>Такой-то</td>
                            </tr>
                            <tr>
                                <td>Сценарий</td>
                                <td>Такой-то</td>
                            </tr>
                            <tr>
                                <td>Бюджет</td>
                                <td>Такой-то</td>
                            </tr>
                            <tr>
                                <td>Премьера в мире</td>
                                <td>Такой-то</td>
                            </tr>
                            <tr>
                                <td>Время</td>
                                <td>Такой-то</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Splide
                className={cnCurrentMovie('Splide')}
                aria-label="Actors"
                extensions={{ AutoScroll }}
                options={{
                    perPage: 5,
                    perMove: 1,
                    autoWidth: true,
                    arrows: false,
                    gap: '10px',
                    type: 'loop',
                    drag: 'free',
                    autoScroll: {
                        speed: 1
                    },
                    classes: {
                        pagination: 'Splide-pagination',
                        page: 'Splide-page'
                    }
                }}
            >
                {persons.length > 0 &&
                    persons.slice(0, 12).map((person) => (
                        <SplideSlide key={person.name}>
                            <Actor photo={person.photo} name={person.name} />
                        </SplideSlide>
                    ))}
            </Splide>
        </>
    );
};
