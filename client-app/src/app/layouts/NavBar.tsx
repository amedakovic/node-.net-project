import { observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem, Image, Dropdown } from "semantic-ui-react";
import { useStore } from "../stores/store";



export default observer(function NavBar() {
    const {userStore: {user, logout}} = useStore();
    return(
        <Menu inverted fixed="top">
            <Container>
                <MenuItem header as={NavLink} to='/'>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivities
                </MenuItem>
                <MenuItem name="Activities"as={NavLink}  to='/activities'/>
                <MenuItem name="Errors"as={NavLink}  to='/errors'/>
                <MenuItem >
                    <Button as={NavLink} to='/createActivity' positive content="Create Activity"/>
                </MenuItem> 
                <MenuItem position="right">
                    <Image  src={user?.image || '/assets/user.png'} avatar spaced='right'/>
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text='My profile' icon='user'/>
                            <Dropdown.Item onClick={logout} text='Logout' icon='power'/>
                        </Dropdown.Menu>
                     </Dropdown>
                </MenuItem>
            </Container>
        </Menu>
    )
})