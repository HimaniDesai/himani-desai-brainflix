import './Home.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import videoList from './data/video-details.json'
import axios from 'axios'
import NewComment from '../../components/NewComment/NewComment'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoContent from '../../components/VideoContent/VideoContent'
import NextVideos from '../../components/NextVideos/NextVideos'

const apikey = '?api_key=de643465-7777-40f7-9f8b-6bd5cd814bbb'
const api = 'https://project-2-api.herokuapp.com';
function Home () {
    // const [count, setCount] = useState(0)

  const { idFromParams } = useParams();
  const [videos, setVideos] = useState([]);
  let defaultVideoId = null;

  if(videos.length > 0) {
    defaultVideoId = videos[0].id;
  }

  let videoIdDisplayed = idFromParams || defaultVideoId;

  const filteredVideos = videos.filter(video => video.id !== videoIdDisplayed)
  console.log(filteredVideos);
  useEffect(() => {
    axios.get(api + '/videos'+apikey)
        .then(res => {
            setVideos(res.data);
        })
  }, [])
  console.log(videos);
  const [video, setVideo] = useState(null)
  console.log(video);
  useEffect(() => {
    if(videoIdDisplayed === null){
      return;
    }
    axios.get(api + `/videos/${videoIdDisplayed}` + apikey)
        .then(response => {
            setVideo(response.data);
        })
  }, [videoIdDisplayed])

  if(video=== null) {
    return <div className='loader-wrapper'><div className='loader'></div></div>
  } 

  return (
    <>
    <VideoPlayer video={video}/>
    <div className='desktop-bottom'>
      <div className='desktop-bottom-left'>
        <VideoContent video={video}/>
        <NewComment video={video}/>
      </div>
      <NextVideos videos={filteredVideos}/>
    </div>
    </>
  )
}

export default Home;