import React from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY;

class GetData extends React.Component {
  state = {
    data: this.props.data,
    request: false,
    entity_id: "",
    entity_type: "",
  };

  componentDidMount() {
    console.log(this.props);
    if (this.props.data.entity_id !== false) {
      console.log(this.state)
      this.setState({
        entity_id: this.props.data.entity_id,
        entity_type: this.props.data.entity_type,
        request: true,
      });
    }
  }

  async componentDidUpdate() {
    console.log("update")
    if (this.state.request) {
      console.log("axios request via GetData");
      const { entity_id, entity_type } = this.state;
      const response = await axios.get(
        `https://developers.zomato.com/api/v2.1/location_details?entity_id=${entity_id}&entity_type=${entity_type}`,
        {
          headers: {
            "user-key": API_KEY,
          },
        }
      );
      const data = response.data;
      console.log(data);
      this.setState({ data: data, request: false  });
    }
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default GetData;
