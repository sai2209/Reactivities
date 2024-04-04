import React from "react";
import { Activity } from "../../../app/models/Activity";
import { Button, Label } from "semantic-ui-react";
interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <>
      <div className="ui divided items">
        {activities.map((activity) => (
          <div className="item" key={activity.id}>
            <div className="content">
              <a className="header">{activity.title}</a>
              <div className="meta">
                <span>{activity.date}</span>
              </div>
              <div className="description">
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </div>
              <div className="extra">
                <Button
                  floated="right"
                  content="View"
                  color="blue"
                  onClick={() => selectActivity(activity.id)}
                ></Button>
                <Button
                  floated="right"
                  content="Delete"
                  color="red"
                  onClick={() => deleteActivity(activity.id)}
                ></Button>
                <Label basic content={activity.category}></Label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
