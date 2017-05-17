function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article5', {
    url: '/article5',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article5/article.html',
    title: 'Article',
      resolve: {
            auth: function(User){
                return User.ensureAuthIs(true);
            }
        }
  });

};

export default ArticleConfig;
