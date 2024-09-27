import { Link } from 'react-router-dom';
import './NextVideoPlay.scss'

function NextVideoPlay({ id, imageUrl, title, channel }) {
    const onClickScrollToTop = function () {
        window.scrollTo(0, 0);
      };
    return (
        <>
        <Link to={`/videos/${id}`} onClick={onClickScrollToTop}>
            <div className='next-video'>
                <img className='next-video__thumbnail' 
                alt='thumbnail' 
                src={imageUrl}>
                </img>
                <div className='next-video-wrapper'>
                    <h3 className='next-video-wrapper__title'>{title}</h3>
                    <p className='next-video-wrapper__channel'>{channel}</p>
                </div>
            </div>
        </Link>
        </>
    )
}

export default NextVideoPlay;