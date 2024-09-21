import NextVideoPlay from '../NextVideoPlay/NextVideoPlay'
import './NextVideos.scss'


function NextVideos({videos}){
    return (
        <section className='next-videos'>
            <h3 className="next-videos__header">NEXT VIDEOS</h3>
            {
                videos.map(video => (
                    <NextVideoPlay key={video.id} video={video}/>
                ))
            }
        </section>
    )
}

export default NextVideos;