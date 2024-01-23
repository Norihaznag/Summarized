import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function Editor() {
  
  const [value, setValue] = useState('');
 const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  return <div >
    <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} />
  </div>
  
}

export default Editor 