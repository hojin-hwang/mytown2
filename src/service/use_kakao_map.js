/*global kakao*/
class UseKakoMap {
    
    geocoder = new kakao.maps.services.Geocoder();
    
    getTownName(position)
    {
        const lat = position.latitude;
        const lng = position.longitude;
        let townInfo = {};
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
            level: 1 // 지도의 확대 레벨
        };  
        //const map = new kakao.maps.Map(mapContainer, mapOption); 
        this.searchAddrFromCoords(lng, lat, function(results, status) {
            let city_name = "";
            let town_name = "";
            let code = "";
            results.map((result)=>{
                if(result.region_type === 'B')
                {
                    const address_name =  result.address_name.split(' ');
                    city_name = address_name[1];
                    town_name = address_name[2];
                    code = result.code;
                }
            });
            const townInfo = {
                code : code,
                cityName : city_name,
                townName : town_name
            }
        });
        
        return townInfo;
    }
    
    test(position){ console.log(position);}

    searchAddrFromCoords(lng, lat, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        this.geocoder.coord2RegionCode(lng, lat, callback);         
    }
    
    searchDetailAddrFromCoords(lng, lat, callback) {
        // 좌표로 법정동 상세 주소 정보를 요청합니다
        this.geocoder.coord2Address(lng, lat, callback);
    }
    

  }
  
  export default UseKakoMap;



