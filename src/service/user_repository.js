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

    /*
    removeCard(userId, card){
        firebaseDataBase.ref(`${userId}/cards/${card.id}`).remove();
    };
    */

    saveUser(userData)//로그인에 사용
    {
        const userId = userData.uid;
        const userInfo = {
            id: userData.uid, email: userData.email, name: userData.displayName,
            login_time: userData.metadata.lastSignInTime
        };
        firebaseDataBase.ref(`users/${userId}`).set(userInfo);
    }

    updateUser(userData)//사용자 업데이트
    {
        const userId = userData.uid;
        const userInfo = {
            id: userData.id,
            name: userData.name,
            email: userData.email, 
            user_email: userData.user_email, 
            user_name: userData.user_name,
            city_name: userData.city_name,
            town_name: userData.town_name,
            user_tel : userData.user_tel,
            lat: userData.lat,
            lng: userData.lng,
            login_time: userData.lastSignInTime
        };
        console.log(userInfo);
        console.log(userData);
        firebaseDataBase.ref(`users/${userId}`).set(userInfo);
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
        firebaseDataBase.ref(`shops/${userId}`).set(shopInfo);

    }
}

export default UserRepository;