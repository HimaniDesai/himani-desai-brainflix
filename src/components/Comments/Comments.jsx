import './Comments.scss'
import { timeConvDetail } from '../../TimeConversionUtil';

function Comments({handleOnClickDelete, comment}){
    
    return (
        <div className='comment-card'>
            <div className='comment-card__img'></div>
                <div className='comment-card-wrapper'>
                    <div className='comment-card-wrapper-top'>
                        <p className='comment-card-wrapper-top__name'>{comment.name}</p>
                        <p className='comment-card-wrapper-top__date'>{timeConvDetail(comment.timestamp)}</p>
                    </div>
                        <div className='comment-card-wrapper-bottom'>
                        <div className='comment-card-wrapper-bottom__comment'>{comment.comment}</div>
                        <button
                            onClick={() => {
                                handleOnClickDelete(comment.id);
                            }}
                            className="comment-card-wrapper-bottom__delete"
                            >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            
    )
}
export default Comments;