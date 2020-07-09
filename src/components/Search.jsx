import React from "react";
import GetData from "./GetData";
import axios from "axios";
const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY;

class Search extends React.Component {
  state = {
    searchKey: "",
    request: false,
    entity_type: false,
    entity_id: false,
    city_name: false,
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
      let partial_api_key =
        API_KEY.substring(0, 4) +
        "..." +
        API_KEY.substring(API_KEY.length, API_KEY.length - 4);
      console.log("performing axios get with api: " + partial_api_key);
      const response = await axios.get(
        `https://developers.zomato.com/api/v2.1/locations?query=${searchKey}`,
        {
          headers: {
            "user-key": API_KEY,
          },
        }
      );
      console.log("zomato axios response: ", response);
      try {
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
        console.log(this.state);
      } catch (error) {
        console.log("location not found");
      }
      //   if (response.data.location_suggestions.length > 0) {
      //     const {
      //       entity_type,
      //       entity_id,
      //       city_name,
      //     } = response.data.location_suggestions[0];
      //     this.setState({
      //       city_name: city_name,
      //       entity_id: entity_id,
      //       entity_type: entity_type,
      //     });
      //     console.log(this.state);}
      // }
    }
  }

  render() {
    const { searchKey, ...data } = this.state;
        return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            id="searchKey"
            value={searchKey}
            placeholder="Enter city for best restaurants"
            onChange={this.onInputChange}
          />
          <GetData data={data} />

        </form>
      </>
    );
  }
}

export default Search;
