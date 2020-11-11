import { connect } from 'react-redux';
import { compose } from "redux";

import Dialogs from './Dialogs';
import { newMessageAdd } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogsComponent: state.dialogsComponent,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newMessageSend: (newMessage) => {
            let action = newMessageAdd(newMessage);
            dispatch(action);
        }
    };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
  // connect(mapStateToProps, {newMessageAdd})
)(Dialogs)



