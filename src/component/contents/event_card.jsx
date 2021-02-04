import React, { useEffect, useState } from 'react';
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
import ShopMap from './shop_map';
import ShopRating from './shop_rating';


const useStyles = makeStyles((theme) => ({
  root: {
    with: '100%',
    marginBottom: '16px',
  },
  media: {
    minHeight: '180px',
    maxHeight: '480px',
    width : '100%',
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
  },
  favorite : { color : 'pink'},
  clip : { color : '#1ca23f'},
}));

export default function EvnetCard({eventData, closeOtherExpand, expanedExeceptId}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [favorited, setFavorite] = useState(eventData.shop.favorite? true:false);
  const [cliped, setClip] = useState(eventData.clip? true:false);
  const geoData = {id:eventData.shop.id, lat:eventData.shop.lat, lng:eventData.shop.lng};
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
    /***펼친다면 현재 이벤트 아이디를 shopBox에 보낸다  */
    if(!expanded){
      closeOtherExpand(eventData.id);
    }
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorited);

  };

  const handleClipClick = () => {
    setClip(!cliped);

  };

  useEffect(()=>{
    /** shopbox에서 전달한 현재 펼침 가게의 아이디와 이 가계 아이디를 비교하여 
     *  펼쳐져있는데 아이디가 다르다면 접는다.
    */
    if(expanded && expanedExeceptId !== eventData.id){
      setExpanded(false);
    }
  
  }, [expanedExeceptId, expanded, eventData.id]);


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="shop-profile" className={classes.avatar} src={eventData.shop.shopSign} />
        }
        action={
          <IconButton aria-label="pin" onClick={handleClipClick} className={ clsx({[classes.clip]:cliped}) } >
            <AttachFileIcon />
          </IconButton>
        }
        classes={{title: classes.headerTitle}}

        title={eventData.shop.shopName}
      />
      <CardMedia
        className={classes.media}
        image={eventData.eventImage}
        title="shop event"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className={clsx({
            [classes.favorite]: favorited,
          })} 
          onClick={handleFavoriteClick}
          aria-label="add to favorites" >
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
          image = {eventData.shop.shopSign}
          title="shop sign"
        />

        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          
           <ShopMap geoData = {geoData}/>
           <ShopRating />
        </CardContent>
      </Collapse>
    </Card>
  );
}