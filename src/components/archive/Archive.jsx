import React from 'react'
import './archive.css';
import ShortText from './shortText';
import { Route } from 'react-router-dom';
import Text from './text';


export default function Archive() {
  return (
    <div>
      <h2>Archive</h2>

      <ShortText />

      <Route path="/archive/archive-text" exact component={Text} />

    </div>
  )
}

