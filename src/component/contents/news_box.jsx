import { makeStyles } from '@material-ui/core';
import React from 'react';
import NewsCard from './news_card';


const useStyles = makeStyles((theme) => ({
    root: {
      display : 'flex',
      flexDirection : 'column',
      flexGrow: 1,
      padding : '8px',
      backgroundColor : '#1ca23f21',
    },
}));

const news_data = [
    {
        id : 1,
        title : '포스코는 호주 원료공급사인 FMG(Fortescue Metal Gro',
        company : 'Koean Times',
        image : 'https://cdn.inflearn.com/wp-content/uploads/blockchain.jpg',
        article : '[에너지경제신문 여헌우 기자] 포스코는 호주 원료공급사인 FMG(Fortescue Metal Group)와 신재생에너지를 활용한 그린수소 사업에서 상호 협력키로 했다고 15일 밝혔..',
        date : '2020.01.12'
    },
    {
        id : 2,
        title : '2021년 첫 문제작, 아동학대 다룬 영화 찍은 이 배우',
        company : 'Seoul Article Times',
        image : 'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fkinolights%2F239e36d3b5784f3ba36cd77f4ea63797.JPG',
        article : `그녀는 11일 인스타그램에 '고백'이 2월 개봉한다는 사실을 알리며, "잇따른 사건들로 인해 무너지고 있다"며, "요즘 들어 '부모란 무엇인가'에 대해 더 생각하게 된다."`,
        date : '2020.01.13'
    },
];

const NewsBox = ({action}) => {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            {news_data.map((news) =>(
            <NewsCard key={news.id} newsData={news} />       
            ))}
        </div>
    );
};

export default NewsBox;