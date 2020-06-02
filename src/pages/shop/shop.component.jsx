import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({match, fetchCollectionsStart}) => {
  // const [loading,setLoading] = React.useState(true);
  
  // React.useEffect(() =>{
  //   let unsubscribeFromSnapshot = null;
  //   const collectionRef = firestore.collection('collections');

  //   unsubscribeFromSnapshot = collectionRef.get().then(async snapshot => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     updateCollections(collectionsMap);
  //     setLoading(false);
  //   });

  //   return () => unsubscribeFromSnapshot();
  // },[updateCollections]);

  React.useEffect(() => {
    fetchCollectionsStart();
  },[fetchCollectionsStart]);

  return (
  <div className="shop-page">
    <Route exact path={`${match.path}`} 
      component={CollectionsOverviewContainer}
    />
    <Route path={`${match.path}/:collectionId`} 
      component={CollectionPageContainer}
    />
  </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);