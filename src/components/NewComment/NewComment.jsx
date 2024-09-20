import './NewComment.scss'
import mohan from '../../assets/images/Mohan-muruge.jpg'
import Comments from '../Comments/Comments.jsx'

let comm=[
    {
      name: "Victor Pinto",
      date: "11/02/2023",
      comment:
        "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      name: "Christina Cabrera",
      date: "10/28/2023",
      comment:
        "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
      name: "Isaac Tadesse",
      date: "10/20/2023",
      comment:
        "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
  ];
function NewComment() {
    const getCommentCountText = () => {
        
        return comm.length;
    };
    return (
        <div className='comment-section'>
            <p className='comment-section__number'>{getCommentCountText()} Comments</p>
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
            {comm.map(commnt => <Comments comment={commnt}/>)}
        </div>
    )
}

export default NewComment;