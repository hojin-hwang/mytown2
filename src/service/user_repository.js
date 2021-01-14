import { firebaseDataBase } from './firebase';

class UseRepository{
    /*syncCards(userId, onUpdate){
        const ref = firebaseDataBase.ref(`${userId}/cards/`);
        ref.on('value', snapshot =>{
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }*/
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
}

export default UseRepository;