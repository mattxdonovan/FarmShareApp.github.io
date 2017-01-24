import { Controller } from 'angular-ecmascript/module-helpers';
import { Products } from '../../../lib/collections';
export default class ProductCtrl extends Controller {
  constructor($scope, $stateParams) {
    super();
    $scope.helpers({
          data() {
            console.log(Products.find({userId: $stateParams.id}).fetch())
            return Products.find({userId: $stateParams.id});
          }
    })

  }
}


ProductCtrl.$inject = ['$scope','$stateParams'];
// this.$stateProvider
