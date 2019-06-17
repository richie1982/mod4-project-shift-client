import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MediaPlayer from './MediaPlayer'


const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: "auto",
    width: "70%",
    padding: "20px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} >
      <CardContent>
        <div>
        <MediaPlayer videoId={props.videoId}/>
        </div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Now playing
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title 
          ? props.title
          :<p>No video selected</p>
          }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}