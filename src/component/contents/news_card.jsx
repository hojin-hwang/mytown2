import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    with: '100%',
    marginBottom: '16px',
  },
  header: {
    paddingBottom: '8px',
  },
  newsDate : {
    paddingTop: '7px',
    paddingRight: '7px',
    color: 'gray', 
  },
  newsTitle : {
    paddingTop: 0,
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: '8px',
  },
  media: {
    width: '100%',
    maxHeight: '500px',
    paddingTop: '56.25%', // 16:9
  },

}));

export default function NewsCard({newsData}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        action={<Typography className={classes.newsDate}>{newsData.date}</Typography>}
        subheader = {newsData.company}
      />
      <Typography className={classes.newsTitle}>
      {newsData.title}
      </Typography>
      <CardMedia
        className={classes.media}
        image={newsData.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {newsData.article}
        </Typography>
      </CardContent>
    </Card>
  );
}