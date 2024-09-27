import BrainFlixAPI from '../../BrainflixApi';
import './VideoPlayer.scss';

const {getVideofile} = BrainFlixAPI

function VideoPlayer({videoPoster}){
    return (
        <>
            <div className='player-wrapper'>
                <div className='player-wrapper__player-background'>
                    <video className="player-wrapper__player" controls poster={videoPoster}>
                        {/* <source src={getVideofile(video.video)} type="video/mp4"></source> */}
                    </video>
                </div>
            </div>
        </>
    )
}

export default VideoPlayer;