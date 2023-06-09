import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../app/stores/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/MyTextInput';
import MyTextArea from '../../app/common/form/MyTextArea';
import { Button, Form } from 'semantic-ui-react';

interface Props{
    setEditMode: (editMode: boolean) => void;
}

export default observer(function ProfileEditForm({setEditMode}:Props){
    const {profileStore: {profile, updateProfile}} = useStore();
    return(
        <Formik
            initialValues={{displayName: profile?.displayName, bio: profile?.bio}}
            onSubmit={values => {
                updateProfile(values).then(() => {
                    setEditMode(false);
                })
            }}
            validationSchema={Yup.object({
                displayName: Yup.string().required()
            })}
            >
                {({isSubmitting, isValid, dirty})=> (
                    <Form>
                        <MyTextInput placeholder='Display name' name='displayName'/>
                        <MyTextArea rows={3} placeholder='Add your bio' name='Bio'/>
                        <Button 
                            positive 
                            type='submit' 
                            loading={isSubmitting} 
                            content='Update your profile'
                            floated='right'
                            disabled={!isValid ||!dirty}/>
                    </Form>
                )}

        </Formik>
    )
})