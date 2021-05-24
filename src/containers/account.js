import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as userActions from '../actions/user';
import AccountScreen from '../screens/AccountScreen';

const mapStateToProps = ({userReducer}) => {
  return {
    user: userReducer.user,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(userActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
