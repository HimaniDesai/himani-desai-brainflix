import './NewComment.scss'
import mohan from '../../assets/images/Mohan-muruge.jpg'
import Comments from '../Comments/Comments.jsx'


function NewComment({video}) {
    const getCommentCountText = () => {
        const count = video.comments.length;
        return count === 1 ? '1 Comment' : `${count} Comments`;
    };
    return (
        <div className='comment-section'>
            <p className='comment-section__number'>{getCommentCountText()}</p>
            <div className='input'>
                <img className='input-img' src={mohan}></img>
                <div className='input-wrapper'>
                    <form className='input-wrapper'>
                        <div className='text-wrapper'>
                            <div className='input-wrapper__label' htmlFor='text'>JOIN THE CONVERSATION</div>
                            <textarea className='input-wrapper__text' placeholder='Add a new comment' required name='text'></textarea>
                            <div htmlFor='submit' ></div>
                        </div>
                        
                        <button name='submit' className='input-wrapper__submit'>COMMENT</button>
                    </form>
                </div>   
            </div>
            {video.comments.map(comment => <Comments comment={comment}/>)}
        </div>
    )
}

export default NewComment;