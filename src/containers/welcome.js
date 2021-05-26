import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as userActions from '../actions/user';
import WelcomeScreen from '../screens/WelcomeScreen';

const mapStateToProps = ({userReducer}) => {
  return {
    user: userReducer.user.data,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(userActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
