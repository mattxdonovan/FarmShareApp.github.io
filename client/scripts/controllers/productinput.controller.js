import { Controller } from 'angular-ecmascript/module-helpers';
import { Products } from '../../../lib/collections';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import Moment from 'moment';

export default class ProductInputCtrl extends Controller {
  constructor($scope) {
    super();
    $scope.product = {}
    $scope.showProduct = true
    $scope.reveal = function()  {
      $scope.showMember = !$scope.showProduct
    }

  };
  submit(){
    Products.insert({
       productName: this.productName,
       description:this.description,
       price: this.price,
       userId: Meteor.userId(),
       productType:this.selectType,
       organic: this.selectOrg,
       timestamp: Moment().subtract(1, 'hours').toDate()})
       this.reset();
  }
  reset(){
    this.productName = ""
    this.description = ""
    this.price = "";
    this.organic = "";
  }
}
