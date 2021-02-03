import { firebaseDataBase } from './firebase';

class UserRepository{
    syncShops(userId, onUpdate){
        const ref = firebaseDataBase.ref(`/shops/${userId}`);
        ref.on('value', snapshot =>{
            const value = snapshot.val();
            value && onUpdate(value);
        });
        
        return () => ref.off();
    }

    syncUser(userId, onUpdate){
        const ref = firebaseDataBase.ref(`/users/${userId}`);
        ref.on('value', snapshot =>{
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }

    syncUserInfo(userId, onUpdate){
        const ref = firebaseDataBase.ref(`/user_info/${userId}`);
        ref.on('value', snapshot =>{
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }

    /*
    removeCard(userId, card){
        firebaseDataBase.ref(`${userId}/cards/${card.id}`).remove();
    };
    */

    saveUser(userAccount)//로그인에 사용
    {
        const userId = userAccount.uid;
        const userInfo = {
            id: userAccount.uid, email: userAccount.email, name: userAccount.displayName,
            login_time: userAccount.metadata.lastSignInTime
        };
        firebaseDataBase.ref(`users/${userId}`).set(userInfo);
    }

    saveUserInfo(userData)//사용자 업데이트
    {
        const userId = userData.id;
        const userInfo = {
            id: userData.id,
            user_email: userData.user_email, 
            user_name: userData.user_name,
            city_name: userData.city_name,
            town_name: userData.town_name,
            user_tel : userData.user_tel,
            lat: userData.lat,
            lng: userData.lng,
        };
        
        firebaseDataBase.ref(`user_info/${userId}`).set(userInfo);
    }

    saveShop(shopData)
    {
        const userId = shopData.uid;
        const shopInfo = {
            uid : shopData.uid,  
            id : shopData.id, 
            shop_name : shopData.shop_name, 
            lat : shopData.lat, 
            lng :  shopData.lng, 
            city_name : shopData.city_name, 
            town_name : shopData.town_name, 
            address : shopData.address, 
            shop_sign: shopData.shop_sign, 
            shop_type : shopData.shop_type, 
            shop_tel : shopData.shop_tel, 
            shop_desc : shopData.shop_desc 
        }
        console.log(shopInfo)
        //firebaseDataBase.ref(`shops/${userId}`).set(shopInfo);

    }
}

export default UserRepository;