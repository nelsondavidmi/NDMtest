import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as userActions from '../actions/user';
import LoadingScreen from '../screens/LoadingScreen';

const mapStateToProps = ({userReducer}) => {
  return {
    user: userReducer.user,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(userActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
