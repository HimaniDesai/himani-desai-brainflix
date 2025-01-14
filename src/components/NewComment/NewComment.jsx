import './NewComment.scss'
import mohan from '../../assets/images/Mohan-muruge.jpg'
import Comments from '../Comments/Comments.jsx'
import { useState } from 'react';
import { getCommentCountText } from '../../TimeConversionUtil.jsx';
function NewComment({handleOnSubmitComment, handleOnClickDelete, commentArr}) {
    

    //STATE FOR THE COMMENT
    const [comment, setComment] = useState("");

    //FUNCTION TO OBSERVE THE COMMENT INPUT
    const handleChangeComment = function (event) {
        setComment(event.target.value);
    };

    //FUNCTION TO CHECK FOR THE VALIDATION OF COMMENT
    const IsCommentValid = function () {
        if (comment && [...comment].length > 10) {
        return true;
        }
        return false;
    };

    return (
        <div className='comment-section'>
            <p className='comment-section__number'>{getCommentCountText(commentArr)}</p>
            <div className='input'>
                <img className='input-img' src={mohan}></img>
                <div className='input-wrapper'>
                    <form onSubmit={(event) => {
                                        handleOnSubmitComment(event, comment);
                                        setComment('')
                                    }} className='input-wrapper'>
                        <div className='text-wrapper'>
                            <div className='input-wrapper__label' htmlFor='text'>JOIN THE CONVERSATION</div>
                            <textarea 
                                className= {IsCommentValid()? 
                                    'input-wrapper__text' : ' input-wrapper__text input-wrapper__text-error' } 
                                placeholder='Add a new comment' 
                                id='input'
                                value={comment}
                                onChange={handleChangeComment} 
                                name='input'
                            ></textarea>
                        </div>
                        <button name='submit' className='input-wrapper__submit'>COMMENT</button>
                    </form>
                </div>   
            </div>
            {commentArr.map((comnt) => <Comments key={comnt.id} comment={comnt} handleOnClickDelete={handleOnClickDelete} />)}
        </div>
    )
}

export default NewComment;