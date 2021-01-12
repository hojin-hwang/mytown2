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

export default function ShopCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        action={<Typography className={classes.newsDate}>2020.01.12</Typography>}
        subheader = "Korean Times"
      />
      <Typography className={classes.newsTitle}>
      Shop card
      </Typography>
      <CardMedia
        className={classes.media}
        image="https://cdn.inflearn.com/wp-content/uploads/ethereum3_programmers-460x299.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        [에너지경제신문 여헌우 기자] 포스코는 호주 원료공급사인 FMG(Fortescue Metal Group)와 신재생에너지를 활용한 그린수소 사업에서 상호 협력키로 했다고 15일 밝혔..
        </Typography>
      </CardContent>
    </Card>
  );
}