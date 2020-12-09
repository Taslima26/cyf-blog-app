import React, {useState, useEffect, Fragment, useRef, useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import './AddNewPost.css';
import {BlogsContext} from '../Contex/BlogsContext';
import client from '../api';
import { useForm } from 'react-hook-form';


const AddNewPost = () => {
  let history = useHistory ();
  const [title, setTitle] = useState ('');
  const [subTitle, setSubTitle] = useState ('');
  const [content, setContent] = useState('');
  const { register, errors } = useForm();
  const getTitle = useRef ();
  const getsubTitle = useRef ();
  const getContent = useRef ();
  //let history = useHistory();
  const {blogs, setBlogs, addBlogs} = useContext (BlogsContext);

  const savePost = async event => {
    // event.preventDefault();
    try {
      const response = await client.post ('/addblog', {
        title: title,
        sub_title: subTitle,
        main_content: content,
      });
      console.log (response);
      addBlogs (response.data.data.blog);
      history.push ('/');
    } catch (error) {
      console.log (error.message);
    }
  };
  const goToAllPost = () => {
    history.push (`/`);
  };
  console.log(register);
  return (
    <Fragment>
      <div className='container '>
        <form onSubmit={savePost} className='mt-5'>
          <h3 className='h4 text-center main-header'>Create new post here </h3>

          <div className='form-group'>
            <label htmlFor='Subject'>Subject</label>
            <input
              type='text'
              placeholder='Title'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='form-control'
              name='title'
              ref={register({
                required: 'sub title can not be empty',
              })}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='Subject'>Summary</label>
            <input
              type='text'
              id='subTitle'
              placeholder='Sub-title'
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              ref={register({
                required: 'sub title can not be empty',
              })}
              className='form-control'
              name='subtitle'
            />
            {errors.subtitle && 'subtitle is required.'}
          </div>

          <div className='form-group'>
            <label htmlFor='exampleFormControlTextarea1'>Blog Content</label>
            <textarea
              className='form-control'
              placeholder='content'
              input
              type='text'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              ref={register({
                required: 'content can not be empty',
              })}
              id='exampleFormControlTextarea1'
              rows='4'
              name='maincontent'
            />
            {errors.maincontent && 'subtitle is required.'}
          </div>

          <div className='form-group'>
            <button
              style={{ backgroundColor: 'rgb(237,67,67)', color: 'white' }}
              type='button'
              className='save-button btn btn-large'
              onClick={savePost}
              data-toggle='modal'
              data-target='#myModal'
              value='Submit'
            >
              Save!
            </button>
          </div>
        </form>
      </div>
      <div className='modal fade' id='myModal' role='dialog'>
        <div className='modal-dialog'>
          {/* Modal content */}
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
              ></button>
              <h4 className='modal-title' style={{ color: 'rgb(237,67,67)' }}>
                Blog created
              </h4>
            </div>
            <div className='modal-body'>
              <p>Blogs sucessfully saved.</p>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn'
                onClick={goToAllPost}
                style={{ backgroundColor: 'rgb(237,67,67)', color: 'white' }}
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddNewPost;
