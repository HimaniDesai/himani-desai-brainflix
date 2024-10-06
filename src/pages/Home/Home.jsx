import './Home.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NewComment from '../../components/NewComment/NewComment'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoContent from '../../components/VideoContent/VideoContent'
import NextVideos from '../../components/NextVideos/NextVideos'
import BrainFlixAPI from '../../BrainflixApi'

const {getVideo, getList, postComment, deleteComment, likeComment} = BrainFlixAPI

function Home () {
  //STATE FOR THE CURRENT VIDEO
  const [currentVideo, setCurrentVideo] = useState(null);

  //STATE FOR THE VIDEO LIST
  const [videoList, setVideoList] = useState([]);

  //USE USEPARAMS TO GET THE VIDEO ID
  const {idFromParams} = useParams();

  //GET DATA ARRAY AN STORE IT IN THE VIDEOLIST STATE
  useEffect(() => {
    axios
      .get(getList)
      .then((response) => {
        setVideoList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let getId = (videoList &&
      videoList.filter((obj) => obj.id === idFromParams).length > 0 && idFromParams) ||(videoList[0] && videoList[0].id);

  //USE ID TO GET DATA OF THE VIDEO OBJECT AND STORE IT IN THE CURRENTVIDEO STATE
  useEffect(() => {
    if (getId) {
      axios
        .get(getVideo(getId))
        .then((response) => {
          setCurrentVideo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [getId, videoList]);

  //FUNCTION USED TO GET THE CURRENT VIDEO OBJECT AND UPDATE THE OBJECT TO THE CURRENTVIDEO STATE
  const getAndUpdateCurrentVideo = function () {
    axios
      .get(getVideo(currentVideo.id))
      .then((response) => {
        setCurrentVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //SUBMIT FUNCTION
  const handleOnSubmitComment = function (event, comment) {
    event.preventDefault();
    if (comment && [...comment].length > 10) {
      const commentPost = {
        name: "BrainStation Guy",
        comment: comment,
      };
      axios
        .post(postComment(currentVideo.id), commentPost)
        .then((response) => {
          getAndUpdateCurrentVideo();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Comment at least 10 letters");
    }
  };

  //DELETE FUNCTION
  const handleOnClickDelete = function (commentId) {
    axios
      .delete(deleteComment(currentVideo.id, commentId))
      .then((response) => {
        getAndUpdateCurrentVideo();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //LIKE FUNCTION
  const handleOnClickLike = function () {
    axios.put(likeComment(currentVideo.id)).then((response) => {
      getAndUpdateCurrentVideo();
    });
  };

  return (
    <>
    {currentVideo && <VideoPlayer videoPoster={currentVideo.image} />}
    <div className='desktop-bottom'>
      <div className='desktop-bottom-left'>
        {currentVideo &&<VideoContent handleOnClickLike={handleOnClickLike} currentVideo={currentVideo}/>}
        {currentVideo &&<NewComment 
                  handleOnSubmitComment={handleOnSubmitComment}
                  handleOnClickDelete={handleOnClickDelete}
                  commentArr={currentVideo.comments.sort(
                  (a, b) => b.timestamp - a.timestamp
                )}/>} 
      </div>
      {currentVideo &&<NextVideos videoList={videoList} currentVideo={currentVideo}/>}
    </div>
    </>
  )
}

export default Home;