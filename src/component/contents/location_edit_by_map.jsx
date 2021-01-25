/* global kakao */
import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    postionInput: {
        display: "flex",
        margin: theme.spacing(1),
        justifyContent: "space-between",
    },
    address : {width : "68%"},
    town : {width : "30%"},
    margin: {
        margin: theme.spacing(1),
    },
    
    map: {
        width: '100%',
        minHeight: '400px',
        marginTop : "1.5em",
    },

}));;



/*export default LocationEditByMap = React.memo(function ({shop_data}){*/
const LocationEditByMap =  React.memo(({shop_data, locationChagne}) => {   
    const classes = useStyles();
    const mapId = `shopmap_${shop_data.id}`;
    const [locationInfo, setLocationInfo] = useState({address:'', town_name:'', city_name:'', lat:'', lng:''});
    
    useEffect(() => {
        const geoData = { id: shop_data.id, lat: shop_data.lat, lng: shop_data.lng, city_name:shop_data.city_name, town_name:shop_data.town_name };
        const marker = new kakao.maps.Marker();
        const geocoder = new kakao.maps.services.Geocoder();
        const container = document.getElementById(mapId); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            draggable: true,
            center: new kakao.maps.LatLng(geoData.lat, geoData.lng), //지도의 중심좌표.
            level: 4 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        
        const searchDetailAddrFromCoords = function(coords, callback) {
            // 좌표로 법정동 상세 주소 정보를 요청합니다
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    let detailAddr = !!result[0].road_address ? result[0].road_address.address_name : result[0].address.address_name;
                    // 마커를 클릭한 위치에 표시합니다 
                    marker.setPosition(mouseEvent.latLng);
                    marker.setMap(map);
                    // 법정동 상세 주소정보를 표시합니다
                    const locationInfo = 
                    {
                        lat : mouseEvent.latLng.La,
                        lng : mouseEvent.latLng.Ma,
                        city_name : result[0].address.region_2depth_name,
                        town_name : result[0].address.region_3depth_name,
                        address : detailAddr,
                    }
                    setLocationInfo(locationInfo);
                    locationChagne(locationInfo);
                }   
            });
        });

        map.setDraggable(true); 
      }, [shop_data,mapId]);


    return(
        <div>
            <div className={classes.postionInput}>
            <TextField name="address" className={classes.address} 
            label="Address" placeholder="지도에서 선택하세요" InputProps={{readOnly: true,}} 
            value={locationInfo.address} InputLabelProps={{
            shrink: true,}}/>

            <TextField type="hidden" name="city_name" value={locationInfo.city_name} />
            <TextField name="town_name"  className={classes.town} label="Town" placeholder="동네"  value={locationInfo.town_name} InputProps={{readOnly: true,}} InputLabelProps={{
            shrink: true,}} />
            </div>
            <div className={classes.map} id={mapId}></div>
        </div>
    );

});
export default LocationEditByMap;
