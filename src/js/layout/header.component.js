class AppHeaderCtrl {
  constructor(AppConstants, User) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._User = User;  
  }
 logout(){
     this._User.logout();
 }   
    
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
