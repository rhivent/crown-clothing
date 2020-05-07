import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match, isCollectionFetching, isCollectionsLoaded, fetchCollectionsStartAsync}) => {
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
    fetchCollectionsStartAsync();
  },[fetchCollectionsStartAsync]);

  return (
  <div className="shop-page">
    <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} /> } />
  <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}/>
  </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching : selectIsCollectionFetching,
  isCollectionsLoaded : selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);