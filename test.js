var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.records = [
     { title: 'Open a chequing account'},
        { title: 'Open a savings account'},
        { title: 'Open a U.S. Dollar account'},
        { title: 'Review my everyday banking needs'},
        { title: 'Switch to TD'},
        { title: 'Apply for Overdraft Protection'},];
  
});