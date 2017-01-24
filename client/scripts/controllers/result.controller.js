import { Controller } from 'angular-ecmascript/module-helpers';
import { Farmers } from '../../../lib/collections';
export default class ResultsCtrl extends Controller {
  constructor($scope) {
    super();
    $scope.helpers({
          data() {
            return Farmers.find();
          }
    })


  }
}
