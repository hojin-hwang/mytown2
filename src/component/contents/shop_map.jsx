/* global kakao */
import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
    map: {
      width: '100%',
      minHeight: '400px',
    },
}));;

export default function ShopMap({geoData}){
    
    const classes = useStyles();
    const mapId = `shopmap_${geoData.id}`;

    useEffect(() => {

        const container = document.getElementById(mapId); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            draggable: true,
            center: new kakao.maps.LatLng(geoData.lat, geoData.lng), //지도의 중심좌표.
            level: 4 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        map.setDraggable(true); 
      }, [geoData,mapId]);

    return(
        <div className={classes.map} id={mapId}></div>
    );

}
