function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article8', {
    url: '/article8',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article8/article.html',
    title: 'Article'
  });

};

export default ArticleConfig;
