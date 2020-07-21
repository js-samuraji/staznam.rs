import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

const Category = () => {
  let cat = [
      { id: uuidv4(), title: 'Plejliste', path: '/forum/playlistforum'},
      { id: uuidv4(), title: 'Alati', path: '/forum/toolsforum' },
      { id: uuidv4(), title: 'Igrice', path: '/forum/gamesforum' },
      { id: uuidv4(), title: 'Arhiva', path: '/forum/archiveforum' }
  ]

  return(
        <div style={{fontSize: "1.5rem"}}>
            {cat.map(one => <Link to={one.path} style={{display: "block"}} key={one.id}>{one.title}</Link>)}
        </div>
  );
};

export default Category;

