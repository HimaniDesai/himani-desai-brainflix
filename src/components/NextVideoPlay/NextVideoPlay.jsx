import { Link } from 'react-router-dom';
import './NextVideoPlay.scss'
// import { Link } from 'react-router-dom';

function NextVideoPlay({video}) {
    return (
        <>
        <Link to={'/video/${video.id}'}>
            <div className='next-video'>
                <img className='next-video__thumbnail' 
                alt='thumbnail' 
                src={video.image}>
                </img>
                <div className='next-video-wrapper'>
                    <h3 className='next-video-wrapper__title'>{video.title}</h3>
                    <p className='next-video-wrapper__channel'>{video.channel}</p>
                </div>
            </div>
        </Link>
        </>
    )
}

export default NextVideoPlay;