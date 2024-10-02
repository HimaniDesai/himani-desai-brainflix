import NextVideoPlay from '../NextVideoPlay/NextVideoPlay'
import './NextVideos.scss'


function NextVideos({ videoList, currentVideo }){
    return (
        <section className='next-videos'>
            <h3 className="next-videos__header">NEXT VIDEOS</h3>
                {videoList.filter(video => video.id !== currentVideo.id)
                    .map((video) => (
                      <NextVideoPlay
                        key={video.id}
                        id={video.id}
                        imageUrl={video.image}
                        title={video.title}
                        channel={video.channel}
                      />
                    ))}
        </section>
    )
}

export default NextVideos;