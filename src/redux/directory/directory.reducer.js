const INITIAL_STATE = {
  sections: [
    {
      id:1,
      title:'HATS',
      imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
      subtitle:'SHOP NOW',
      linkUrl:'shop/hats',
    },{
      id:1,
      title:'JACKETS',
      imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
      subtitle:'SHOP NOW',
      linkUrl:'shop/jackets',
    },{
      id:1,
      title:'SNEAKERS',
      imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkUrl:'shop/sneakers',
      subtitle:'SHOP NOW'
    },{
      id:1,
      title:'WOMENS',
      imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
      size:'large',
      linkUrl:'shop/womens',
      subtitle:'SHOP NOW'
    },{
      id:1,
      title:'MENS',
      imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
      size:'large',
      linkUrl:'shop/mens',
      subtitle:'SHOP NOW'
    },
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    default:
      return state;
  }
};

export default directoryReducer;