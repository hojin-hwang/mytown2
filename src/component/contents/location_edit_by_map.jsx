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


const LocationEditByMap =  React.memo(({location_data,UserMap, locationChange}) => {   
    const classes = useStyles();
    const mapId = `shopmap_${location_data.id}`;
    const [locationInfo, setLocationInfo] = useState({address:location_data.address, town_name:location_data.town_name, city_name:location_data.city_name, lat:location_data.lat, lng:location_data.lng});
    
    useEffect(() => {
        const marker = new kakao.maps.Marker();
        const geocoder = new kakao.maps.services.Geocoder();
        const container = document.getElementById(mapId); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            draggable: true,
            center: new kakao.maps.LatLng(location_data.lat, location_data.lng), //지도의 중심좌표.
            level: 2 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        
        const searchDetailAddrFromCoords = function(coords, callback) {
            // 좌표로 법정동 상세 주소 정보를 요청합니다
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }
        
        const coords = new kakao.maps.LatLng(location_data.lat, location_data.lng);
        marker.setPosition(coords);
        marker.setMap(map);
        
        searchDetailAddrFromCoords(coords, function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                let detailAddr = !!result[0].road_address ? result[0].road_address.address_name : result[0].address.address_name;
                // 법정동 상세 주소정보를 표시합니다
                const locationInfo =
                {
                    lat: coords.Ma,
                    lng: coords.La,
                    city_name: result[0].address.region_2depth_name,
                    town_name: result[0].address.region_3depth_name,
                    address: detailAddr,
                }
                setLocationInfo(locationInfo);
                locationChange(locationInfo);
            }
         });

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
                        lat: mouseEvent.latLng.Ma,
                        lng : mouseEvent.latLng.La,
                        city_name : result[0].address.region_2depth_name,
                        town_name : result[0].address.region_3depth_name,
                        address : detailAddr,
                    }
                    setLocationInfo(locationInfo);
                    locationChange(locationInfo);
                }   
            });

        });

        map.setDraggable(true); 
        //setLocationInfo(location_data);
      }, [location_data, mapId]);


    return(
        <div>
            <div className={classes.postionInput}>
                {UserMap &&
                    <TextField type="hidden" name="address" value={locationInfo.address} />}
                {UserMap &&
                    <TextField name="city_name" className={classes.address} 
                    label="City" placeholder="지도에서 선택하세요" InputProps={{readOnly: true,}} 
                    value={locationInfo.city_name} InputLabelProps={{
                    shrink: true,}}/>
                }    
                {!UserMap &&
                    <TextField name="address" className={classes.address} 
                        label="Address" placeholder="지도에서 선택하세요" InputProps={{ readOnly: true, }}
                        value={locationInfo.address} InputLabelProps={{
                            shrink: true,
                        }} />}
                {!UserMap &&
                    <TextField type="hidden" name="city_name" value={locationInfo.city_name} />}
            <TextField name="town_name"  className={classes.town} label="Town" placeholder="동네"  value={locationInfo.town_name} InputProps={{readOnly: true,}} InputLabelProps={{
            shrink: true,}} />
            </div>
            <div className={classes.map} id={mapId}></div>
        </div>
    );

});
export default LocationEditByMap;
