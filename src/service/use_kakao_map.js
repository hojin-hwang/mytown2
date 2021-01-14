/*global kakao*/

import React, { useEffect } from 'react';

const UseKakoMap = ({position, getLocationInfo}) => {
    const geocoder = new kakao.maps.services.Geocoder();
        
    //좌표정보, 지역코드를 전달한다.
    const updateTownInfo = function(currntTownInfo){
        getLocationInfo(currntTownInfo);
    };   
    
    useEffect(()=>{
        position && getTownName(position);
    },[position]);



    const searchAddrFromCoords = function(lng, lat, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(lng, lat, callback);         
    }

    const getTownName = function(position) 
    {
        const lat = position.latitude;
        const lng = position.longitude;
        
        searchAddrFromCoords(lng, lat, function(results, status) {
            let city_name = "";
            let town_name = "";
            let code = "";
            results.map((result) =>{
                if(result.region_type === 'B')
                {
                    const address_name =  result.address_name.split(' ');
                    city_name = address_name[1];
                    town_name = address_name[2];
                    code = result.code;
                }
                return result;                
            });

            const current_town_info = {
                code : code,
                cityName : city_name,
                townName : town_name
            }

           updateTownInfo(current_town_info);
        });
    };

    return(
        <>
        </>
    );
}

export default UseKakoMap;




