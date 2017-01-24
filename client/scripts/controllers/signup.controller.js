import { Controller } from 'angular-ecmascript/module-helpers';
import { Farmers } from '../../../lib/collections';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import Moment from 'moment';


export default class FarmerInputCtrl extends Controller {
  constructor($scope) {
    super();
    $scope.farmer = {}
    $scope.showFarmer = true
    $scope.reveal = function () {
      $scope.showFarmer = !$scope.showFarmer
    }
  };
  submit(){
    Farmers.insert({farmName: this.farmName,
    phoneNumber: this.phoneNumber,
    imageUrl: this.imageUrl,
    location: this.location,
    info: this.info,
    user_id: Meteor.userId(),
    timestamp: Moment().subtract(1, 'hours').toDate(),
  });
    this.reset();

  }
  reset(){

    this.farmName = ""
    this.phoneNumber = ""
    this.imageUrl = ""
    this.location = ""
    this.info = "";


  }

}
