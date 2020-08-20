import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Flexbox from 'flexbox-react';
import Squad from './Squad'
//Aqui le tengo que pasar Name a button para que a partir de ahi busque el equipo.

const Team = ({name, fundate, escudo}) =>{
   

 const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

      const classes = useStyles();

      
   
      return (
        <Flexbox flexDirection="column" minHeight="40vh" >
        <Card className={classes.root}>
          <CardActionArea>
            <img src={escudo} alt="escudo de equipo" margin="20px" height="200px" width="200px"></img>
            <CardContent>
            <span><h2>{name}</h2></span>
            <span><h2>{fundate}</h2></span>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Squad team_name={name}>
              Players
            </Squad>
          </CardActions>
        </Card>
        </Flexbox>
      );
     
}
export default Team;