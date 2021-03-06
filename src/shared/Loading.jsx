import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const Loading = () => {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </Segment>
  );
};

export default Loading;
