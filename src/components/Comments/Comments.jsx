import './Comments.scss'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

  function Comments({comment}){
    const getDynamicTimeStamp = (date) => {
        return (<ReactTimeAgo date={date} locale="en-US"/>)
    }
    return (
        <div className='comment-card'>
            <div className='comment-card__img'></div>
                <div className='comment-card-wrapper'>
                    <div className='comment-card-wrapper-top'>
                        <p className='comment-card-wrapper-top__name'>{comment.name}</p>
                        <p className='comment-card-wrapper-top__date'>{getDynamicTimeStamp(comment.timestamp)}</p>
                    </div>
                    <p className='comment-card-wrapper__comment'>{comment.comment}</p>
                </div>
            </div>
            
    )
}
export default Comments;


