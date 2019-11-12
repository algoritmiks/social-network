import React from 'react';
import css from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div className={`${css.dialog} ${css.active}`}>
                    Sveta
                </div>

                <div className={css.dialog}>
                    Matt
                </div>

                <div className={css.dialog}>
                    Peter
                </div>

                <div className={css.dialog}>
                    Jon
                </div>

            </div>
            <div className={css.messages}>
                <div className={css.msg}>
                    Hello!
                </div>
                <div className={css.msg}>
                    How are you?
                </div>
                <div className={css.msg}>
                    I'm OK! And how are you?
                </div>
            </div>
        </div>
    );
}

export default Dialogs;