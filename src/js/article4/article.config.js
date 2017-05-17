function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article4', {
    url: '/article4',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article4/article.html',
    title: 'Article',
      resolve: {
            auth: function(User){
                return User.ensureAuthIs(true);
            }
        }
  });

};

export default ArticleConfig;
