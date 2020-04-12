import React from 'react';
import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match,collections}) => {
  return (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverviewComponent}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
  );
}

export default ShopPage;