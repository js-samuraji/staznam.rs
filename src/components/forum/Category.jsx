import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

const Category = ({ title }) => {
  let cat = [
      { id: uuidv4(), title: 'Plejliste', path: '/forum/playlistforum'},
      { id: uuidv4(), title: 'Alati', path: '/forum/toolsforum' },
      { id: uuidv4(), title: 'Igrice', path: '/forum/gamesforum' },
      { id: uuidv4(), title: 'Arhiva', path: '/forum/archiveforum' }
  ]

  return(
        <div>
            {cat.map(one => <Link to={one.path}>{one.title}</Link>)}
        </div>
  );
};

export default Category;
