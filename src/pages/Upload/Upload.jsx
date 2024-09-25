import './Upload.scss'
import { Link } from 'react-router-dom';
import UploadVidImage from '../../assets/images/Upload-video-preview.jpg'
import { useState } from 'react';

function Upload() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handlePublish = () => {
        const newVideo = {
            title,
            description,
        };

        // axios.post(api + '/videos', newVideo)
        //     .then(res => {
        //         console.log(res.data);
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     });
    };
    return (
        <>
        <div className='upload'>
            <div className='upload-wrapper'>
                <div className='upload__heading'>Upload Video</div>
                <div className='desktop-wrapper'>
                    <div className='upload__img-wrapper'>
                       <div className='upload-label__img'>VIDEO THUMBNAIL</div>
                        <img className='upload__img' alt='test-thumbnail' src={UploadVidImage}></img> 
                    </div>
                    <form className='upload-form'>
                        <label for='title' className='upload-label__title'>TITLE YOUR VIDEO</label>
                        <textarea placeholder='Add a title to your video' name='title' className='upload-form__title' onChange={(e) => setTitle(e.target.value)}></textarea>
                        <label for='desc' className='upload-label__desc'>ADD A VIDEO DESCRIPTION</label>
                        <textarea placeholder='Add a description to your video' name='desc' className='upload-form__desc' onChange={(e) => setDescription(e.target.value)}></textarea>
                    </form>
                </div>
                <div className='upload-buttons'>
                    <Link to={'/'}><button  className='upload-buttons__publish buttons' onClick={handlePublish}>PUBLISH</button></Link>
                    <button className='upload-buttons__cancel buttons'>CANCEL</button> 
                </div>
            </div>
        </div>
        </>
    );
}

export default Upload;