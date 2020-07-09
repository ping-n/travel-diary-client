import React from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY;

class GetData extends React.Component {
  state = { data: [] };
  async componentDidMount() {
    const response = await axios.get(
      `https://developers.zomato.com/api/v2.1/location_details?entity_id=259&entity_type=city`,
      {
        headers: {
          "user-key": API_KEY,
        },
      }
    );
    const data = response.data;
    this.setState({ data: data });
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default GetData;
