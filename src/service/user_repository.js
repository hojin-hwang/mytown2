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

    /*
    removeCard(userId, card){
        firebaseDataBase.ref(`${userId}/cards/${card.id}`).remove();
    };
    */

    saveUser(userData)
    {
        const userId = userData.uid;
        const userInfo = {id:userData.uid, email:userData.email, name:userData.displayName, login_time:userData.metadata.lastSignInTime};
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
            shop_sign : shopData.shop_sign, 
            shop_tel : shopData.shop_tel, 
            shop_desc : shopData.shop_desc 
        }
        firebaseDataBase.ref(`shops/${userId}`).set(shopInfo);

    }
}

export default UserRepository;