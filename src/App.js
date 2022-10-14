import React, { useState, useEffect } from "react";
import moment from 'moment';

const App = () => {
  const [value, setValue] = useState('');
  const [id, setId] = useState(0)
  const [comments, setComments] = useState('');

  useEffect(() => {
    setId((id) => id + 1)
  }, [comments])

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleSumbit = (e) => {
    value &&
    setComments([{
      'id': id,
      'value': value,
      'date': moment().calendar()
    }, ...comments]);
    setValue('');
    e.preventDefault();
  }

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      handleSumbit(e);
      e.preventDefault();
    } 
  }

  return (
    <div className="app">
      <h1 className="title">COMMENTS 2.0</h1>
      <form className="form">
        <textarea
          className={value ? 'textarea' : 'textarea-red'}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          value={value}
          placeholder='Enter comment...'
        />
        <button 
          className="send"
          onClick={(e) => {handleSumbit(e)}}>
            SEND
        </button>
      </form>
      <div className="comments">
      {
        comments && comments.map((comment, i) => (
          <div key={comment.id} className={ i === 0 ? 'comment-first' : 'comment'}>
            <p className="comment-text">{comment.value}</p>
            <p className="comment-date">{comment.date}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
