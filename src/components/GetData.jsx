import React from "react";
import axios from "axios";
import RenderData from "./RenderData";
const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY;

class GetData extends React.Component {
  state = {
    data: this.props.data,
    request: false,
    entity_id: "",
    entity_type: "",
  };

  componentDidMount() {
    console.log("component did mount", this.props);
    if (this.props.data.entity_id !== false) {
      this.setState({
        entity_id: this.props.data.entity_id,
        entity_type: this.props.data.entity_type,
        request: true,
      });
    }
  }

  async componentDidUpdate(prevProps) {
    console.log(prevProps, this.props)
    if (prevProps.data['city_name'] !== this.props.data['city_name']) {
      this.setState({
        entity_id: this.props.data.entity_id,
        entity_type: this.props.data.entity_type,
        request: true,
      });
    }
    console.log("GetData componentDidUpdate", this.props);
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
      console.log(data.best_rated_restaurant);
      this.setState({ data: data, request: false });
    }
  }

  render() {
    const { data } = this.state;
    return data.best_rated_restaurant ? (
      <RenderData data={data.best_rated_restaurant} />
    ) : (
      <div></div>
    );
  }
}

export default GetData;
