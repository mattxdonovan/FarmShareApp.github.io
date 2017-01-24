import { Controller } from 'angular-ecmascript/module-helpers';
import { Farmers } from '../../../lib/collections';
export default class FarmerInputCtrl extends Controller {
  constructor($scope) {
    super();
    $scope.helpers({
          data() {
            console.log(Farmers.find());
            return Farmers.find();
          }
    })

  }
}
