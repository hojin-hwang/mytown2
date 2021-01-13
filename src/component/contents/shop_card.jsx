import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import KakaoMap from './kakao_map';
import ShopRating from './shop_rating';


const useStyles = makeStyles((theme) => ({
  root: {
    with: '100%',
    marginBottom: '16px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  signMedia:{
    height: 0,
    paddingTop: '56.25%', // 16:9
    maxHeight : '200px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    
  },
  headerTitle: {
    fontSize: '1.2rem',
  },
  kakaoBtn:{
    paddingTop: '6px',
    paddingBottom: 0,
  },
  map:{
    width : '100%',
    maxHeight : '350px',
  }
  
}));

export default function ShopCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="shop-profile" className={classes.avatar} src="https://blog.kakaocdn.net/dn/R3xKL/btqv7glmyDo/ezkHvlMkdNsrgfQYRKBZP1/img.png" />
        }
        action={
          <IconButton aria-label="pin">
            <AttachFileIcon />
          </IconButton>
        }
        classes={{title: classes.headerTitle}}

        title="Shrimp and Chorizoz"
      />
      <CardMedia
        className={classes.media}
        image="https://cdn.inflearn.com/wp-content/uploads/ethereum3_programmers-460x299.jpg"
        title="shop event"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        
        <IconButton aria-label="share" className={classes.kakaoBtn}>
          <a id="kakao-link-btn" href="https://www.daum.net">
            <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="kakao share" width="24px;"/>
          </a>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardMedia
          className={classes.signMedia}
          image="https://www.ilovepc.co.kr/news/photo/201912/32681_60313_3113.jpg"
          title="shop sign"
        />

        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          
           <KakaoMap />
           <ShopRating />
        </CardContent>
      </Collapse>
    </Card>
  );
}