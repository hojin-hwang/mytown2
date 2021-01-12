import { useEffect } from 'react';

const kakaoConfig = {
  kakaoKey: process.env.REACT_APP_KAKAO_API_KEY,
  mapURL: process.env.REACT_APP_KAKAO_MAP_SCRIPT_URL,
  apiFirebaseKey: process.env.REACT_APP_FIREBASE_API_KEY,
  FirebaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const url = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoConfig.kakaoKey}&libraries=services`;

const UseKakoMapScript = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = url;
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [url]);
};

export default UseKakoMapScript;