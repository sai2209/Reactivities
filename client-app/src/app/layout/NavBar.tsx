import React from "react";
import { Button, Container } from "semantic-ui-react";

interface Props {
  openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
  return (
    <>
      <div className="ui pointing  menu">
        <a className="active item" style={{ marginLeft: 100 }}>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Reactivities
        </a>
        <a className="item">Activities</a>
        <a className="item">
          <Button
            positive
            content="Create Activity"
            onClick={openForm}
          ></Button>
        </a>
      </div>
    </>
  );
}
