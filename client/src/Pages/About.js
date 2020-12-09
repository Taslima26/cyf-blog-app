import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const AboutUs = () => {
const useStyles = makeStyles({
  root: {
    minWidth: 275,
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


  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Welcome to Code Your Future blog site.
        </Typography>
        <Typography variant='h5' component='h2'>
          Here you can share your experience with Code Your Future.
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          adjective
        </Typography>
        <Typography variant='body2' component='p'>
          We believe in a future where everyone has a real opportunity to lead a
          thriving life. CodeYourFuture (CYF) is a UK based non-profit
          organisation that trains refugees and other disadvantaged people to
          become web developers and helps them to find work in the tech
          industry. CYF students are trained in full-stack web development by
          professional volunteers developers from the industry, putting a strong
          emphasis on collaboration and product development through tech
          projects. CYF graduates work in companies like FT, BBC, STV,
          Ticketmaster and startups like Adzuna, Sensible Object, tlr and
          WeGotPop. Image Our Values We believe in creating a supportive family
          where everyone belongs Everything we do, we do with kindness and
          respect We believe in the equality of all voices We firmly believe
          that through challenge, people can achieve their best We empower our
          students and volunteers, and they represent us Everything we do
          creates a real impact in the world Image.
           Our Working Principles
          Empower volunteers through defined roles & responsibilities Events and
          classes with agendas and with assigned leaders running different
          sections Create interactive events that encourage the participation of
          all students and attendees Ensure interaction with students and
          attendees in smaller groups to promote collaboration and discussion
          Encourage feedback from all students and attendees after every event
          Create social spaces where people can meet and socialise - discussions
          are essential in any class or event
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}


 
export default AboutUs;