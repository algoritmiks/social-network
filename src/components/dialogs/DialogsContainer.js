import { connect } from 'react-redux';
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;



