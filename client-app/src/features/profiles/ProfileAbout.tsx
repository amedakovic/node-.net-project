import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useStore } from '../../app/stores/store';
import { Button, Grid, GridColumn, Header, Tab } from 'semantic-ui-react';
import ProfileEditForm from './ProfileEditForm';

export default observer(function ProfileAbout(){
    const {profileStore} = useStore();
    const {isCurrentUser, profile} = profileStore;
    const [editMode, setEditMode] = useState(false);
    return(
        <Tab.Pane>
            <Grid>
                <GridColumn width={16}>
                    <Header floated='left' icon='user' content={`About ${profile?.displayName}`}/>
                    {isCurrentUser && (
                        <Button floated='right' basic content='Edit profile' onClick={() => setEditMode(!editMode)}/>
                    )}
                </GridColumn>
                <GridColumn width={16}>
                    {editMode ? <ProfileEditForm setEditMode={setEditMode}/> :
                        <span style={{whiteSpace: 'pre-wrap'}}>{profile?.bio}</span>}
                </GridColumn>
            </Grid>
        </Tab.Pane>

    )
})