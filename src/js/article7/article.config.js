function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article7', {
    url: '/article7',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article7/article.html',
    title: 'Article'
  });

};

export default ArticleConfig;
