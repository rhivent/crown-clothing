import React from 'react';
import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';

const ShopPage = ({match,updateCollections}) => {
  const unsubscribeFromSnapshot = null;

  React.useEffect(() =>{
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  },[]);

  return (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverviewComponent}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);