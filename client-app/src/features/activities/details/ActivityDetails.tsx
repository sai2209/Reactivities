import { Button } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activity: Activity;
  cancelActivity: () => void;
  openForm: (id: string) => void;
}

export default function ActivityDetails({
  activity,
  cancelActivity,
  openForm,
}: Props) {
  return (
    <>
      <div className="ui card fluid">
        <div className="image">
          <img src={`/assets/categoryimages/${activity.category}.jpg`} />
        </div>
        <div className="content">
          <a className="header">{activity.title}</a>
          <div className="meta">
            <span className="date">{activity.date}</span>
          </div>
          <div className="description">{activity.description}</div>
        </div>
        <div className="extra content">
          <Button.Group widths={2}>
            <Button
              basic
              color="blue"
              content="Edit"
              onClick={() => openForm(activity.id)}
            ></Button>
            <Button
              basic
              color="grey"
              content="Cancel"
              onClick={() => cancelActivity()}
            ></Button>
          </Button.Group>
        </div>
      </div>
    </>
  );
}
