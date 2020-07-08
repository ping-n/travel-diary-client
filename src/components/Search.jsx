import React from "react";

class Search extends React.Component {
  
  state = {
    searchKey: ""
  }

  onInputChange = (event) => {
    const searchKey = event.target.id;
    this.setState({
      [searchKey]: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { searchKey } = this.state;
    console.log(searchKey)
  }
  
  render() {
    const {searchKey} = this.state
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" id="searchKey" value={searchKey} placeholder="Enter city for best restaurants" onChange={this.onInputChange}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;
