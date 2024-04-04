import { Button, ButtonGroup, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";
import { ChangeEvent, useState } from "react";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
}: Props) {
  const intitalState = selectedActivity ?? {
    id: "",
    title: "",
    date: "",
    description: "",
    category: "",
    city: "",
    venue: "",
  };

  const [activty, setActivity] = useState(intitalState);

  function handleSubmit() {
    createOrEdit(activty);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activty, [name]: value });
  }
  return (
    <>
      <Segment>
        <form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <div className="field">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={activty.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <textarea
              name="description"
              placeholder="Description"
              value={activty.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={activty.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="date"
              placeholder="Date"
              value={activty.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={activty.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={activty.venue}
              onChange={handleInputChange}
            />
          </div>
          <ButtonGroup>
            <Button
              floated="right"
              positive
              type="submit"
              content="Submit"
            ></Button>

            <Button
              floated="right"
              type="button"
              content="Cancel"
              onClick={() => {
                closeForm();
              }}
            ></Button>
          </ButtonGroup>
        </form>
      </Segment>
    </>
  );
}
