import { Controller } from 'angular-ecmascript/module-helpers';
import { Products } from '../../../lib/collections';
export default class ProductspgCtrl extends Controller {
  constructor($scope) {
    super();
    $scope.helpers({
          data() {
            console.log(Products.find())
            return Products.find();
          }
    })


  }
}
