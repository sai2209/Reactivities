import { Activity } from "../../../app/models/Activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
}: Props) {
  return (
    <>
      <div className="ui grid" style={{ marginTop: 30 }}>
        <div className="ten wide column" style={{ backgroundColor: "white" }}>
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}
          ></ActivityList>
        </div>

        <div className="six wide column">
          {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              cancelActivity={cancelActivity}
              openForm={openForm}
            ></ActivityDetails>
          )}

          {editMode && (
            <ActivityForm
              activity={selectedActivity}
              closeForm={closeForm}
              createOrEdit={createOrEdit}
            ></ActivityForm>
          )}
        </div>
      </div>
    </>
  );
}
