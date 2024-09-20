import './Comments.scss'

let comments=[
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

  function Comments({comment}){
    return (
        <div className='comment-card'>
            <div className='comment-card__img'></div>
                <div className='comment-card-wrapper'>
                    <div className='comment-card-wrapper-top'>
                        <p className='comment-card-wrapper-top__name'>{comment.name}</p>
                        <p className='comment-card-wrapper-top__date'>{new Date(comment.date).toLocaleDateString()}</p>
                    </div>
                    <p className='comment-card-wrapper__comment'>{comment.comment}</p>
                </div>
            </div>
            
    )
}
export default Comments;


