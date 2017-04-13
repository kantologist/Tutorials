function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article11', {
    url: '/article11',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article11/article.html',
    title: 'Article',
      resolve: {
            auth: function(User){
                return User.ensureAuthIs(true);
            }
        }
  });

};

export default ArticleConfig;
