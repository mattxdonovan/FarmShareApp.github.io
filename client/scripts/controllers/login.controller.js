import { _ } from 'meteor/underscore';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Users } from '../../../lib/collections';
import Moment from 'moment';

// export default class LoginCtrl extends Controller {
//
//   login() {
//     if (_.isEmpty(this.username)) return;
//     console.log(this.username)
//     Users.insert({product: this.username, timestamp: Moment().subtract(1, 'hours').toDate()});
//
//   }
// }
// LoginCtrl.$name = 'LoginCtrl';
// LoginCtrl.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$log'];
