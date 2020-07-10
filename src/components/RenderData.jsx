import React from "react";
import { Grid, Card, Image, Icon } from "semantic-ui-react";
import Loading from "../shared/Loading";

class RenderData extends React.Component {
  state = {
    data: false,
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    let data = false;
    if (this.props.data !== false) {
      data = this.props.data;
    } else data = false;

    return data ? (
      <Grid>
        <Grid.Row columns={5}>
          {data.map((restaurant, index) => {
            return (
              <Grid.Column>
                <Card key={index}>
                  <Image src={restaurant.restaurant.thumb} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>
                      {restaurant.restaurant.name}
                    </Card.Header>
                  </Card.Content>
                  <Card.Meta>{restaurant.restaurant.cuisines}</Card.Meta>
                  <Card.Description>
                    <p>
                      Address: {restaurant.restaurant.location.address},{" "}
                      {restaurant.restaurant.location.zipcode}
                    </p>
                    <p>Phone: {restaurant.restaurant.phone_numbers}</p>
                  </Card.Description>
                  <Card.Content extra>
                    <Icon name="star" />
                    {restaurant.restaurant.user_rating.aggregate_rating}
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    ) : (
      <Loading />
    );
  }
}

export default RenderData;
