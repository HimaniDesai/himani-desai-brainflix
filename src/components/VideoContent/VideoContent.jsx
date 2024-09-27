import './VideoContent.scss';
import likesIcon from '../../assets/icons/likes.svg';
import viewsIcon from '../../assets/icons/views.svg';

function VideoDetails({currentVideo}) {
  const date = new Date(currentVideo.timestamp).toLocaleDateString();
    return (
        <div className='video-text'>
        <div >
          <h1 className='video__title'>{currentVideo.title}</h1>
        </div>
        <div className='video-info'>
          <div className='video-info-left'>
            <p className='video-info-left__author'>By {currentVideo.channel}</p>
            <p className='video-info-left__date'>{date}</p>
          </div>
          <div className='video-info-right'>
            <div className='video-info-right-views'>
              <img src={viewsIcon} alt="views-svg" className='video-info-right-views__img'/>
              <p className='video-info-right-views__viewcount'>{currentVideo.views}</p>
            </div> 
            <div className='video-info-right-likes'>
              <img src={likesIcon} alt="likes-svg" className='video-info-right-likes__img'/>
              <p className='video-info-right-likes__likecount'>{currentVideo.likes}</p>
            </div>
          </div> 
        </div>
         <p className='video__desc'>{currentVideo.description}</p>
        </div>
    )
}

export default VideoDetails;