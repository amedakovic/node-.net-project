import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

    useEffect(() => {
      axios.get<Activity[]>('http://localhost:5000/api/activities')
          .then(response => {
            setActivities(response.data)
          })
    }, [])

    function handleSelectActivity(id : string){
      setSelectedActivity(activities.find(x => x.id === id));
    }

    function handleCancelSelectedActivity(){
      setSelectedActivity(undefined);
    }

    function handleFormOpen(id?: string){
      id ? handleSelectActivity(id) : handleCancelSelectedActivity();
      setEditMode(true);
    }

    function handleFormClose(){
      setEditMode(false);
    }

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop:'7em'}}>
       <ActivityDashboard 
        selectedActivity={selectedActivity}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectedActivity}
        activities={activities}
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}/>
      </Container>
      

    </>
  );
}

export default App;
