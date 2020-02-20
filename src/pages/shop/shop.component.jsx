import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = (props) => {
  const [collections,setcollections] = React.useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {
        collections.map(({id,...otherCollectionProps}) => {
          return (
            <CollectionPreview key={id} {...otherCollectionProps} />
          )
        })
      }
    </div>
  );
}

export default ShopPage;