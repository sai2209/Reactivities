import { useEffect, useState } from "react";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { Activity } from "../models/Activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  function handleSelectedActivity(id: string) {
    setSelectedActivity(activities.find((x) => x.id === id));
  }

  function handleCanceledActivity() {
    setSelectedActivity(undefined);
    setEditMode(false);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectedActivity(id) : handleCanceledActivity();
    setEditMode(true);
  }

  function handleCloseForm() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([
          ...activities.filter((x) => x.id != activity.id),
          activity,
        ])
      : setActivities([...activities, { ...activity, id: uuid() }]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter((x) => x.id != id)]);
  }

  return (
    <>
      <NavBar openForm={handleFormOpen}></NavBar>
      <Container style={{ margintop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelActivity={handleCanceledActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleCloseForm}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        ></ActivityDashboard>
      </Container>
    </>
  );
}

export default App;
