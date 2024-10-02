import './Upload.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UploadVidImage from '../../assets/images/Upload-video-preview.jpg'
import { useState } from 'react';
import BrainflixAPI from '../../BrainflixApi';

const {postForm} = BrainflixAPI;
function Upload() {

    const navigate = useNavigate();
    //STATE TO STORE THE INPUT VALUES OF INPUT BOXES
    const [title, setTitle] = useState("");
    const [descript, setDescript] = useState("");
    const [file, setFile] = useState(null);

    //SET STATE TO SHOW PREVIEWED IMAGE AFTER CHOOSING AN UPLOADED FILE
    const [previewFile, setPreviewFile] = useState(null);

    //FUNCTION TO UPDATE STATES OF INPUT BOXES
    const handleChangeTitle = function (event) {
        setTitle(event.target.value);
    };

    const handleChangeDescript = function (event) {
        setDescript(event.target.value);
    };

    const handleChangeFile = function (event) {
        if (event.target.files && event.target.files[0]) {
        setFile(event.target.files[0]);
        const newUrl = window.URL.createObjectURL(event.target.files[0]);
        setPreviewFile(newUrl);
        }
    };
    //FUNCTION TESTING IF INPUT VALUES ARE VALID OR NOT
    const isTitleValid = function () {
        if (title && [...title].length > 10) {
        return true;
        }
        return false;
    };

    const isDescriptValid = function () {
        if (descript && [...descript].length > 10) {
        return true;
        }
        return false;
    };

    const isFileValid = function () {
        if (file) {
        return true;
        }
        return false;
    };

    const isFormValid = function () {
        if (!isTitleValid()) {
        return false;
        } else if (!isDescriptValid()) {
        return false;
        } else if (!isFileValid()) {
        return false;
        }
        return true;
    };

    const handleCancel = () => {
        navigate('/');
    }
    const handleOnClickPublish = (event) => {
        event.preventDefault();
        if (!isFormValid()) {
        alert(
            "Make sure to insert the uploaded file and at least 10 letters for each input box!"
        );
        } else {
        const formData = new FormData();
        // formData.append("image", "SomeURL");
        formData.append("description", descript);
        formData.append("title", title);
        console.log(formData)
        axios
            .post(postForm, formData, {
                headers: { "Content-Type": "multipart/form-data" },
              }
            )
            .then((response) => {
            alert("Successfully Submitted form");
            navigate("/");
            })
            .catch((error) => {
            console.log(error);
            });
        }
          
    }
    return (
        <>
        <div className='upload'>
            <form onSubmit={handleOnClickPublish} >
                <div className='upload-wrapper'>
                    <div className='upload__heading'>Upload Video</div>
                    <div className='desktop-wrapper'>
                        <div className='upload__img-wrapper'>
                        <div className='upload-label__img'>VIDEO THUMBNAIL</div>
                            <img 
                                className={
                                    previewFile
                                    ? 'upload__img'
                                    : 'upload__img-display__none' }
                                alt='test-thumbnail' 
                                src={previewFile}></img> 
                            <input
                                className="upload__file-input"
                                type="file"
                                id="file"
                                name="file"
                                onChange={handleChangeFile}
                            />
                        </div>
                        <div className='upload-form'>
                        
                            <label name='title' className='upload-label__title'>TITLE YOUR VIDEO</label>
                            <textarea 
                                placeholder='Add a title to your video' 
                                name='title'
                                id="vid-title"
                                value={title}
                                className= {
                                    isTitleValid() 
                                    ? 'upload-form__title'
                                    : 'upload-form__title--error' }
                                onChange={handleChangeTitle}
                            ></textarea>
                            <label name='desc' className='upload-label__desc' htmlFor='vid-descript'>ADD A VIDEO DESCRIPTION</label>
                            <textarea 
                                placeholder='Add a description to your video' 
                                name="description"
                                id="vid-descript"
                                wrap="hard"
                                value={descript}
                                // className='upload-form__desc'
                                className={
                                    isDescriptValid()
                                    ? "upload-form__desc"
                                    : "upload-form__desc--error"
                                } 
                                onChange={handleChangeDescript}
                            ></textarea>
                        </div>
                    </div>
                    <div className='upload-buttons'>
                        <button  className='upload-buttons__publish buttons'>PUBLISH</button>
                        <button className='upload-buttons__cancel buttons' onClick={handleCancel}>CANCEL</button> 
                    </div>
                </div>
            </form> 
        </div>
        </>
    );
}

export default Upload;