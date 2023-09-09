import React from "react";
import { Container, Header, Icon, Grid } from "semantic-ui-react";

function ChooseUs() {
  return (
    <Container style={{ padding: "40px 0" }}>
      <Header as="h2" icon textAlign="center">
        <Icon name="handshake" />
        Why Choose Us
        <Header.Subheader>
          Discover the reasons to choose our services
        </Header.Subheader>
      </Header>
      <Grid stackable columns={3} textAlign="center">
        <Grid.Column>
          <Icon name="shield" size="huge" color="teal" />
          <Header as="h3">Quality Service</Header>
          <p>
            We provide top-notch service with a focus on quality and
            satisfaction.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Icon name="users" size="huge" color="blue" />
          <Header as="h3">Experienced Team</Header>
          <p>Our team consists of experienced professionals in the industry.</p>
        </Grid.Column>
        <Grid.Column>
          <Icon name="thumbs up" size="huge" color="green" />
          <Header as="h3">Customer Satisfaction</Header>
          <p>
            Your satisfaction is our priority. We aim to exceed your
            expectations.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Icon name="time" size="huge" color="orange" />
          <Header as="h3">Timely Delivery</Header>
          <p>
            We guarantee on-time delivery of our services or products to meet
            your deadlines.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Icon name="star" size="huge" color="yellow" />
          <Header as="h3">Exceptional Quality</Header>
          <p>
            Our commitment to quality ensures that you receive exceptional
            products and services.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Icon name="money" size="huge" color="green" />
          <Header as="h3">Affordable Prices</Header>
          <p>
            We offer competitive and budget-friendly pricing to fit your
            financial needs.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Icon name="hand peace" size="huge" color="teal" />
          <Header as="h3">Customer-Centric Approach</Header>
          <p>
            We prioritize your needs and preferences, making your satisfaction
            our primary goal.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Icon name="certificate" size="huge" color="blue" />
          <Header as="h3">Certified Experts</Header>
          <p>
            Our team consists of certified experts who are proficient in their
            respective fields.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Icon name="hand heart" size="huge" color="red" />
          <Header as="h3">Dedicated Support</Header>
          <p>
            Our dedicated customer support team is always ready to assist you
            with your inquiries and concerns.
          </p>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default ChooseUs;
