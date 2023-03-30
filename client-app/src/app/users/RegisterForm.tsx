import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Header, Label } from "semantic-ui-react";
import MyTextInput from "../common/form/MyTextInput";
import { useStore } from "../stores/store";
import * as Yup from 'yup';
import { isValid } from "date-fns";
import ValidationError from "../../features/errors/ValidationError";

export default observer(function RegisterForm(){
    const {userStore} = useStore();
    return(
        <Formik
        initialValues={{userName:'' ,email: '', password: '', error: null, displayName:''}}
        onSubmit={(values, {setErrors}) => userStore.register(values).catch(error => 
                setErrors({error}))}
                validationSchema={Yup.object({
                    displayName: Yup.string().required(),
                    userName: Yup.string().required(),
                    email: Yup.string().required(),
                    password: Yup.string().required(),
                })}
        >
            {({handleSubmit, isSubmitting, errors, dirty}) =>(
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Register to Reactivities'/>
                    <MyTextInput placeholder="Display Name" name="displayName"/>
                    <MyTextInput placeholder="User Name" name="userName"/>
                    <MyTextInput placeholder="Email" name="email"/>
                    <MyTextInput placeholder="Password" name='password' type='password'/>
                    <ErrorMessage name='error' render={() => 
                       <ValidationError errors={errors.error}/> }
                    />
                    <Button disabled={!isValid || !dirty || isSubmitting} loading={isSubmitting} positive content='Register' type="submit" fluid/>

                </Form>
            )}  
        </Formik>
    )
})