function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article12', {
    url: '/article12',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article12/article.html',
    title: 'Article',
      resolve: {
            auth: function(User){
                return User.ensureAuthIs(true);
            }
        }
  });

};

export default ArticleConfig;
