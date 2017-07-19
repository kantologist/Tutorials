function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article2', {
    url: '/article2',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article2/article.html',
    title: 'Article'
  });

};

export default ArticleConfig;
