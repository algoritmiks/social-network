import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreate, newMessageActionCreate } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let dialogsComponent = store.getState().dialogsComponent;

//                     const updateText = (text) => {
//                         let action = updateNewMessageTextActionCreate(text);
//                         store.dispatch(action);
//                     };

//                     const newMessageSend = () => {
//                         let action = newMessageActionCreate();
//                         store.dispatch(action);
//                     };

//                     return (
//                         <Dialogs
//                             updateText={updateText}
//                             newMessageSend={newMessageSend}
//                             dialogsComponent={dialogsComponent}
//                         />
//                     );
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

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



