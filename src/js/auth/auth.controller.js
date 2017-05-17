class AuthCtrl {
    constructor(User, $state){
        'ngInject';
        
        this._User = User;
        this.title = $state.current.title;
        this.authType = $state.current.name.replace('app.', '');
        this._$state = $state;
    }
    
    submitForm () {
        this.isSubmitting = true;
        
        this._User.attempAuth(this.authType, this.formData).then(
            // callback for success
            (res) => {
                this._$state.go('app.home');
            },
            // callback for failure
            (err) => {
                this.isSubmitting = false;
                this.errors = err.data.errors;
            }
        );
    }
}


export default AuthCtrl;