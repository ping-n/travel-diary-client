import React from "react";

class RenderData extends React.Component {
  state = {
    data: false,
  };

  constructor(props) {
    super(props);
    console.log("renderData props: ", this.props);
  }

  componentDidMount() {
    this.setState({data: this.props.data})
  }

  render() {
    console.log(`render function - props: `, this.props)
    
    let data = false;
    if (this.props.data !== false) {
      data  = this.props.data
    } else (
      data = false
    )
  
    return data ? (
      <div className="">
        {data.map((restaurant, index) => {
          return (
            <div key={index} className="restaurant">
              <img src={restaurant.restaurant.thumb} alt=""/>
              <h2>{restaurant.restaurant.name}</h2>
              <h3>{restaurant.restaurant.location.address}</h3>
            </div>
          );
        })}
      </div>
    ) : (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
}

export default RenderData;


