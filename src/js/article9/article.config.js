function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article9', {
    url: '/article9',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article9/article.html',
    title: 'Article',
      resolve: {
            auth: function(User){
                return User.ensureAuthIs(true);
            }
        }
  });

};

export default ArticleConfig;
