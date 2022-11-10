import React from 'react';

import './index.css';

function Post({title, date, author, text, highlights, image}) {
  return <article>
  <h1>{title}</h1>
  <h2>{date}</h2>
  <h>{author}</h>
  <p>{text}</p>
  <p>{highlights}</p>
  <p>{image}</p>
  </article>;
}

export default Post;
