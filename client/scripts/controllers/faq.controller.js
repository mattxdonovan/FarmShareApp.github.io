import { Controller } from 'angular-ecmascript/module-helpers';
export default class faq extends Controller {

  constructor ($scope) {
    super()
    $scope.showAnswer = false
    $scope.showAnswer1 = false
    $scope.showAnswer2 = false
    $scope.showAnswer3 = false
    $scope.showAnswer4 = false
    $scope.showAnswer5= false
    $scope.showAnswer6= false

    $scope.toggleAnswerView = function () {
      $scope.showAnswer = !$scope.showAnswer;
    }
    $scope.toggleAnswerView1 = function () {
      $scope.showAnswer1 = !$scope.showAnswer1;
    }
    $scope.toggleAnswerView2 = function () {
      $scope.showAnswer2 = !$scope.showAnswer2;
    }
    $scope.toggleAnswerView3 = function () {
      $scope.showAnswer3 = !$scope.showAnswer3;
    }
    $scope.toggleAnswerView4 = function () {
      $scope.showAnswer4 = !$scope.showAnswer4;
    }
    $scope.toggleAnswerView5 = function () {
      $scope.showAnswer5 = !$scope.showAnswer5;
    }
    $scope.toggleAnswerView6 = function () {
      $scope.showAnswer6 = !$scope.showAnswer6;
    }
  }
}
