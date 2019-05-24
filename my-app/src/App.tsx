import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CHARACTERS = gql`
  query launchList {
    characters {
      name,
      status,
      image
    }
  }
`;

const App: React.FC = () => {


  return (
    <div className="App">
      <div className="container">
        <Query query={GET_CHARACTERS}>
          {({ data, loading, error }: any) => {
            console.log("Rendering")
            console.log(data.characters);
            if (!data.characters) return null;
            return (
              data.characters.map((char: any) =>
                <div key={char.name} className="card">
                  <img src={char.image} />
                  <div className="name">{char.name}</div>
                  <div className="status">{char.status}</div>
                </div>
              )
            );
          }
          }
        </Query>
      </div>

    </div>
  );
}

export default App;
