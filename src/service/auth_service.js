import {firebaseAuth, googleProvider} from './firebase';

class AuthService {
  login(providerName) //공급자..그러니까 구글, 카카오, Apple
  {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout(){
    firebaseAuth.signOut();
  }
  
  onAuthChange(onUserChanged){
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    })
  }

  getProvider(providerName)
  {
    switch ((providerName)) {
      case 'Google':
        return googleProvider;
      default:
        throw new Error('Not provider');
    }
  }

}

export default AuthService;