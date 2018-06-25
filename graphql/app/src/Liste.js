import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Liste de Users
        {this.props.data.loading && <p>Chargement des données</p>}
        {!this.props.data.loading && (
          <ul>
            {this.props.data.listeUser.map(user => {
              return <li key={user.id}>{user.firstName}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const query = gql`
  {
    listeUser {
      firstName
      id
    }
  }
`;

export default graphql(query)(Liste);
