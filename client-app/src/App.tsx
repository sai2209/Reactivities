import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Header, List, ListItem } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);
  return (
    <>
      <Header as="h2" icon="users" content="Reactivities"></Header>
      <ul>
        <List animated={true} bulleted={true}>
          {activities.map((activity: any) => (
            <ListItem key={activity.id}>{activity.title}</ListItem>
          ))}
        </List>
      </ul>
    </>
  );
}

export default App;