import React from 'react'
import { Card, Button, CardTitle, CardText, Col } from "reactstrap";

const ProjectCard = (props) => {
  return (
    // <Col sm="3">
    //   <div className="card" style={{ width: "18rem" }}>
    //     <div className="card-body">
    //       <h5 className="card-title">{props.title}</h5>
    //       <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
    //       <p className="card-text">{props.text}</p>
    //       <a href={props.link} className="card-link">
    //         {props.linkText}
    //       </a>
    //     </div>
    //   </div>
    // </Col>
    <Col sm="4">
      <Card body>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.text}</CardText>
        <Button className="button"  color="primary" href={props.link}>
          {props.linkText}
        </Button>
        <Button className="button" color="secondary" href={props.githubLink}>
          GitHub Repo
        </Button>
      </Card>
    </Col>
  );
}

export default ProjectCard
