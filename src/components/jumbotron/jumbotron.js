import React from 'react'
import { Button } from 'reactstrap'

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hi, I'm Nathan</h1>
      <p className="lead">
        I'm a full-stack web designer. I like making websites from the ground
        up.
      </p>
      <hr className="my-2" />
      <p className="lead">
        <Button
          className="button"
          href="https://github.com/usrs"
          color="primary"
        >
          GitHub
        </Button>
        <Button
          className="button"
          href="https://www.linkedin.com/in/nathan-mcneil-design/"
          color="secondary"
        >
          LinkedIn
        </Button>
      </p>
    </div>
  );
}

export default Jumbotron
