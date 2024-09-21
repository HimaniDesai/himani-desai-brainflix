import './VideoPlayer.scss';
// import videoImage from '../../assets/images/Upload-video-preview.jpg';

function VideoPlayer({video}){
    return (
        <>
            <div className='player-wrapper'>
                <div className='player-wrapper__player-background'>
                    <video className="player-wrapper__player" controls poster={video.image}></video>
                </div>
            </div>
        </>
    )
}

export default VideoPlayer;