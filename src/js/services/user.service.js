export default class User {
    constructor (JWT, AppConstants, $http, $state, $q, Base64){
        'ngInject';
        
        this._JWT = JWT;
        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$state = $state;
        this._$q = $q;
        this._Base64 = Base64;
        
        // object to store our user properties
        this.current = null;
    }
    
    // authenticate registering and logging in
    attempAuth(type, credentials) {
        let route = (type === 'login') ? '/login' : '';
        console.log(credentials);
        return this._$http({
            url: this._AppConstants.api + route,
            method: 'POST',
            data: {
                "email": credentials.email,
                "password": credentials.password
            }
        }).then(
            // success
            (res) => {
                // saving JWT token
                this._JWT.save(res.data.token);
                
                // store user's info
                this.current = res.data.id;
                
                return res;
            }
        ); 
    }
    
    logout(){
      this.current = null;
      this._JWT.destroy();
      
      // a hard reload of current state to flush all data
      this._$state.go(this._$state.$current, null, {reload: true});
  }    
    
verifyAuth(){
     let deferred = this._$q.defer();
     
     // check for JWt token
     
     if(!this._JWT.get()){
         deferred.resolve(false);
         return deferred.promise;
     }
     
     //thers's JWT and user is already set
     if (this.current) {
         deferred.resolve(true);
         
    
         // if current user is not set get from server.
         // if server doesn't return 401, set current user and resolve promise.
     } else {
//      
         this._$http({
             url: this._AppConstants.api + '/user',
             method: 'GET',
             headers: {
                 Authorization : 'Basic ' + this._Base64.encode(this._JWT.get() + ':')
             }
        
         }). then(
             (res) => {
                 this.current = res.data.id;
                 deferred.resolve(true);
             },
             // if error means invalid user token
             (err) => {
                 this._JWT.destroy();
                 deferred.resolve(false);
             }
             // Reject authomatically handle by auth interceptor
             // will boot them to homepage
         );
     }
     
     return deferred.promise;
 } 

ensureAuthIs(bool){
    let deferred = this._$q.defer();
    
    this.verifyAuth().then((authValid) => {
        // if it's the opposite redirect home
        if (authValid !== bool){
            this._$state.go('app.home');
            deferred.resolve(false);
        } else {
            deferred.resolve(true);
        }
    })
    return deferred.promise;
}
}