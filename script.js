var app = angular.module('demo', []);

app.controller('demoCtrl', function($scope){

  $scope.taskList = ['cook', 'clean'];

  $scope.addTask = function(task){
    console.log(task);
    $scope.taskList.push(task);
    console.log($scope.taskList);
}
});


///look up ng-repeat with duplicates
