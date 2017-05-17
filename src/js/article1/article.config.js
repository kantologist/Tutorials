function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article1', {
    url: '/article1',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article1/article.html',
    title: 'Article',
    resolve: {
            auth: function(User){
                return User.ensureAuthIs(true);
            }
        }
  });

};

export default ArticleConfig;
