import './Comments.scss'

  function Comments({comment}){
    return (
        <div className='comment-card'>
            <div className='comment-card__img'></div>
                <div className='comment-card-wrapper'>
                    <div className='comment-card-wrapper-top'>
                        <p className='comment-card-wrapper-top__name'>{comment.name}</p>
                        <p className='comment-card-wrapper-top__date'>{new Date(comment.timestamp).toLocaleDateString()}</p>
                    </div>
                    <p className='comment-card-wrapper__comment'>{comment.comment}</p>
                </div>
            </div>
            
    )
}
export default Comments;


