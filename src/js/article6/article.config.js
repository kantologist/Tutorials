function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article6', {
    url: '/article6',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article6/article.html',
    title: 'Article'
  });

};

export default ArticleConfig;
