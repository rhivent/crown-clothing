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
        imageurl:'https://i.ibb.co/cvpntL1/hats.png',
        subtitle:'SHOP NOW',
        linkUrl:'shop/hats',
      },{
        id:1,
        title:'JACKETS',
        imageurl:'https://i.ibb.co/px2tCc3/jackets.png',
        subtitle:'SHOP NOW',
        linkUrl:'shop/jackets',
      },{
        id:1,
        title:'SNEAKERS',
        imageurl:'https://i.ibb.co/0jqHpnp/sneakers.png',
        linkUrl:'shop/sneakers',
        subtitle:'SHOP NOW'
      },{
        id:1,
        title:'WOMENS',
        imageurl:'https://i.ibb.co/GCCdy8t/womens.png',
        size:'large',
        linkUrl:'shop/womens',
        subtitle:'SHOP NOW'
      },{
        id:1,
        title:'MENS',
        imageurl:'https://i.ibb.co/R70vBrQ/men.png',
        size:'large',
        linkUrl:'shop/mens',
        subtitle:'SHOP NOW'
      },
    ]);
  },[]);

  return (
    <div className="directory-menu">
      {section.map(({id,...otherSectionProps}) => {
        return (
        <MenuItem key={id} {...otherSectionProps} />
        );
      })}
    </div>
  );
}

export default Directory;