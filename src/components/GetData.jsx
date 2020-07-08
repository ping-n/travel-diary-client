import React from "react";

class GetData extends React.Component {
  async componentDidMount() {
    const response = await fetch(
      "https://developers.zomato.com/api/v2.1/location_details?entity_id=259&entity_type=city",
      {
        headers: {
          "user-key": "f2ea61b02be1143e24989f9ee88b44d4",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default GetData;

