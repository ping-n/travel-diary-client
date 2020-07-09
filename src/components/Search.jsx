import React from "react";
import GetData from "./GetData";
import axios from "axios";
const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY;

class Search extends React.Component {
  state = {
    searchKey: "",
    request: false,
    entity_type: "",
    entity_id: "",
    city_name: "",
  };

  onInputChange = (event) => {
    const searchKey = event.target.id;
    this.setState({
      [searchKey]: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("onFormSubmit");
    this.setState({ request: true });
  };

  async componentDidUpdate() {
    let { searchKey, request } = this.state;
    console.log("componentDidUpdate - ", "request status: " + request);
    if (searchKey && request) {
      this.setState({ request: false });
      console.log("performing axios get with api: " + API_KEY);
      const response = await axios.get(
        `https://developers.zomato.com/api/v2.1/locations?query=${searchKey}`,
        {
          headers: {
            "user-key": API_KEY,
          },
        }
      );
      console.log("zomato axios response: ", response);
      if (response.data.location_suggestions.length > 0) {
        const {
          entity_type,
          entity_id,
          city_name,
        } = response.data.location_suggestions[0];
        this.setState({
          city_name: city_name,
          entity_id: entity_id,
          entity_type: entity_type,
        });
        console.log(this.state);}
    }
  }

  render() {
    const { searchKey } = this.state;
    return (
      // <GetData data={this.state}/>
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          id="searchKey"
          value={searchKey}
          placeholder="Enter city for best restaurants"
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default Search;
