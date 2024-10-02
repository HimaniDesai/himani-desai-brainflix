import './Upload.scss'
import { useNavigate } from 'react-router-dom';
import UploadVidImage from '../../assets/images/Upload-video-preview.jpg'
import { useState } from 'react';


function Upload() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const handleCancel = () => {
        navigate('/');
    }
    const handlePublish = () => {
        alert("Successfully Submitted form");
        navigate('/');   
    }
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
                        <label name='title' className='upload-label__title'>TITLE YOUR VIDEO</label>
                        <textarea placeholder='Add a title to your video' name='title' className='upload-form__title' onChange={(e) => setTitle(e.target.value)}></textarea>
                        <label name='desc' className='upload-label__desc'>ADD A VIDEO DESCRIPTION</label>
                        <textarea placeholder='Add a description to your video' name='desc' className='upload-form__desc' onChange={(e) => setDescription(e.target.value)}></textarea>
                    </form>
                </div>
                <div className='upload-buttons'>
                    <button  className='upload-buttons__publish buttons' onClick={handlePublish}>PUBLISH</button>
                    <button className='upload-buttons__cancel buttons' onClick={handleCancel}>CANCEL</button> 
                </div>
            </div>
        </div>
        </>
    );
}

export default Upload;