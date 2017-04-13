function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article2', {
    url: '/article2',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article2/article.html',
    title: 'Article',
      resolve: {
            auth: function(User){
                return User.ensureAuthIs(true);
            }
        }
  });

};

export default ArticleConfig;
