import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoginForm from "../../app/users/LoginForm";
import RegisterForm from "../../app/users/RegisterForm";

export default observer(function HomePage(){
    const {userStore, modalStore} = useStore();
    return( 
        <Segment inverted textAlign="center" vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottom: 12}}/>

                </Header>
                {userStore.isLogedIn ? (
                    <>
                        <Header as='h2' content='Welcome to reactivities' inverted/>
                        <Button as={Link} to='/activities' size="huge" inverted>Go to Activties</Button>
                    </>

                ): (
                    <>
                    <Button onClick={() => modalStore.openModal(<LoginForm />)} size="huge" inverted>Login</Button>
                    <Button onClick={() => modalStore.openModal(<RegisterForm />)} size="huge" inverted>Register</Button>
                    </>  
                )}
                
            </Container>
        </Segment>
    )
})