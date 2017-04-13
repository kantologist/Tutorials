function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article7', {
    url: '/article7',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article7/article.html',
    title: 'Article',
      resolve: {
            auth: function(User){
                return User.ensureAuthIs(true);
            }
        }
  });

};

export default ArticleConfig;
