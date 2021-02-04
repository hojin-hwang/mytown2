import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import CardHeader from '@material-ui/core/CardHeader';
import { Label } from '@material-ui/icons';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    second: {
        marginTop: 30,
    },
    media: {
        height: 140,
    },
    select_text: {
        fontSize: "1.2em"
    },
    text_event_paper:{
        margin: "0 10px",
        height: "82px",
        fontSize: "2.2em",
        textAlign: "center",
        padding: "0.2em 1.4em",
        background: "#1ca23f21"
    },
});

export default function ShopEventType() {
const classes = useStyles();
const [selectedValue, setSelectedValue] = React.useState('p');
    const handleChange = (event) => {
    setSelectedValue(event.target.getAttribute('value'));
        console.log(event.target.getAttribute('value'));
}

return (
<div>
    <Card className={classes.root } >
        <CardActionArea >
            <CardActions onClick={handleChange} value="p">
                <Radio checked={selectedValue==='p' } onClick={handleChange} value="p"  color="default"
                    name="radio-button-demo" inputProps={{ 'aria-label': 'P' }} />
                <Typography className={classes.select_text} onClick={handleChange} value="p" >
                    사진으로 이벤트를 준비하세요
                </Typography>
            </CardActions>
            <CardMedia onClick={handleChange} value="p" className={classes.media} image="/images/event_sample_1.jpg" title="Contemplative Reptile" />
            <CardContent>
                <Typography variant="body2" fontSize="1.1em" component="p" onClick={handleChange} value="p">
                    늘 신선한 과일과 채소를 공급합니다. 농수산마트로 오세요. 오늘 특별히 토마토 50% 세일합니다.
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>

    <Card className={classes.root, classes.second} >
        <CardActionArea >
            <CardActions onClick={handleChange} value="t">
                <Radio checked={selectedValue==='t' } onChange={handleChange} value="t" color="default"
                    name="radio-button-demo" inputProps={{ 'aria-label': 'T' }} />
                <Typography className={classes.select_text} onClick={handleChange} value="t" >
                    글씨로 이벤트를 표현하세요
                </Typography>
            </CardActions>
                <Paper elevation={3} className={classes.text_event_paper} onClick={handleChange} value="t" >
                    오늘만 토마토 50% 할인
                </Paper>
            <CardContent>
                <Typography variant="body2" fontSize="1.1em" component="p" onClick={handleChange} value="t" >
                    늘 신선한 과일과 채소를 공급합니다. 농수산마트로 오세요. 오늘 특별히 토마토 50% 세일합니다.
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
</div>
);
}