import { connect } from 'react-redux';
import { compose } from "redux";

import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreate, newMessageActionCreate } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogsComponent: state.dialogsComponent,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newMessageSend: () => {
            let action = newMessageActionCreate();
            dispatch(action);
        },
        updateText: (text) => {
            let action = updateNewMessageTextActionCreate(text);
            dispatch(action);
        }

    };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)



