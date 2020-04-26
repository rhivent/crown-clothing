import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match,updateCollections}) => {
  const [loading,setLoading] = React.useState(true);
  
  React.useEffect(() =>{
    let unsubscribeFromSnapshot = null;
    const collectionRef = firestore.collection('collections');

    unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });

    return () => unsubscribeFromSnapshot();
  },[updateCollections]);

  return (
  <div className="shop-page">
    <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> } />
    <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}/>
  </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);