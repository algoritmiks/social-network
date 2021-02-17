import React from 'react';
import { reduxForm, Field } from 'redux-form';
import css from './ProfileInfo.module.css';

const ProfileDataForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            {props.error && <div className={css.red}>ERROR: {props.error}</div>}
            <div>
                <Field
                    placeholder="fullName"
                    component="input"
                    name="fullName"
                    type="text"
                />
            </div>    
            <div>
                <Field
                    component="input"
                    type="textarea"
                    placeholder="about me"
                    name="aboutMe"
                /> 
            </div>
            <div>
                <Field
                    component="input"
                    type="checkbox"
                    name="lookingForAJob"
                /> Looking for a job
            </div>
            <div>
                <Field
                    component="input"
                    type="textarea"
                    placeholder="job description"
                    name="lookingForAJobDescription"
                /> 
            </div>


            <div>
                <p><b>Contacts:</b></p>

                {Object.keys(props.profile.contacts).map( (key, ind) => {
                    return <div key={ind}> 
                                <b>{key} :</b>
                                <Field
                                    component="input"
                                    type="textarea"
                                    placeholder={key}
                                    name= {"contacts." + key}
                                /> 
                            </div>
                })}
            </div>
            <div>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}



const ReduxProfileDataForm = reduxForm({form: 'profile'})(ProfileDataForm);


export default ReduxProfileDataForm