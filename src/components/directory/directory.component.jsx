import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = () => {
  const [section,setSection] = React.useState([]);

  React.useEffect(() => {
    setSection([
      {
        id:1,
        title:'HATS',
        imageurl:'https://via.placeholder.com/500',
        subtitle:'SHOP NOW'
      },{
        id:1,
        title:'JACKETS',
        imageurl:'https://via.placeholder.com/500',
        subtitle:'SHOP NOW'
      },{
        id:1,
        title:'SNEAKERS',
        imageurl:'https://via.placeholder.com/500',
        subtitle:'SHOP NOW'
      },{
        id:1,
        title:'WOMENS',
        imageurl:'https://via.placeholder.com/500',
        size:'large',
        subtitle:'SHOP NOW'
      },{
        id:1,
        title:'MENS',
        imageurl:'https://via.placeholder.com/500',
        size:'large',
        subtitle:'SHOP NOW'
      },
    ]);
  },[]);

  return (
    <div className="directory-menu">
      {section.map(({id,title,subtitle,imageurl,size}) => {
        return (
        <MenuItem key={id} title={title} subtitle={subtitle} imageurl={imageurl} size={size} />
        );
      })}
    </div>
  );
}

export default Directory;