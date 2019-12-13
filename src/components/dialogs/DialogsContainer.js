import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreate, newMessageActionCreate } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsComponent: state.dialogsComponent
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;



