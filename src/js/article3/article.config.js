function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article3', {
    url: '/article3',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article3/article.html',
    title: 'Article'
  });

};

export default ArticleConfig;
