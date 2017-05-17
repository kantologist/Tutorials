function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article10', {
    url: '/article10',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article10/article.html',
    title: 'Article',
      resolve: {
            auth: function(User){
                return User.ensureAuthIs(true);
            }
        }
  });

};

export default ArticleConfig;
