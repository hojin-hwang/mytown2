
/** Dont use this class */
/*global kakao*/
class UseMapTest{

    geocoder = new kakao.maps.services.Geocoder();
    position = Object();
    locationInfo = Array();
    

    getLocationInfo(position,locationInfo)
    {
        const lat = position.latitude;
        const lng = position.longitude; 

        this.geocoder.coord2RegionCode(lng, lat, function(results, status) {
            locationInfo = results.filter(result => result.region_type === 'B');
        });
        
    }

    searchAddrFromCoords = function(lng, lat, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        this.geocoder.coord2RegionCode(lng, lat, callback);         
    }

}

export default UseMapTest;