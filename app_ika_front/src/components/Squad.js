import React, {Component} from 'react';
import Button from '@material-ui/core/Button'

class Squad extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      error: null,
      players: []
    };
  }

  handleClick() {
    console.log('Se hizo click');
    const endpoint = 'https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=bba8098274645549534f074574aed490ecc8f73b842d2d2e9f67bb65c3074471';
    fetch(endpoint)
      .then(response => response.json())
      .then((teams) => {
        const players = teams
          .filter((team) => ( this.props.team_name === team.team_name ))
          .map((team) => ( team.players ))
          .shift()
        console.log("endpoint2",players)
        this.setState({
          players
        });
        
      },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            error
          });
        }
      )
    // .then(data => console.log(data[0].players[0].player_name))
  }

  // render() {
  //   return <Button onClick = {
  //     this.handleClick
  //   }> Clickéame </Button>;

  // }
  render() {
    const { error, players } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    } else {
      return (
        <div>
        <Button size="small" color="primary" onClick = {this.handleClick}> Clickéame </Button>
        <ul>
          {players.map( player => (
            <li key={player.player_key}>
              {player.player_name}
            </li>
          ))}
        </ul>
        </div>
      );
    }
  }

}

export default Squad;