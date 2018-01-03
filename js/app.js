(function (angular) {
	'use strict';

	angular.module('MainApp', []).controller('MainController',['$scope',function($scope){
		//文本框
		$scope.text='';
		//任务列表----结构{id：1，text：学习，completed：true}
		$scope.todos=[
		{id:0.11111,text:'学习',completed:false},
		{id:0.22222,text:'睡觉',completed:true},
		{id:0.33333,text:'打豆豆',completed:true}
		];
		//添加
		$scope.add=function(){
			$scope.todos.push({
				id:Math.random(),
				text:$scope.text,
				completed:false
			});
			//清空文本框
			$scope.text='';
		};
		$scope.remove=function(id){
			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].id==id) {
					$scope.todos.splice(i,1);
				};
			};
		};
		$scope.clear=function(){
			var result=[];
			for (var i = 0; i < $scope.todos.length; i++) {
				if(!$scope.todos[i].completed){
					result.push($scope.todos[i]);
				};
			};
			$scope.todos=result;
		};
		$scope.isCompleted=function(){
			for (var i = 0; i < $scope.todos.length; i++) {
				if($scope.todos[i].completed==true){
					return true;
				};
			};
			return false;
		};
		var now=true;
		$scope.toggleAll=function(){
			for (var i = 0; i < $scope.todos.length; i++) {
				$scope.todos[i].completed=now;
			};
			now=!now;
		};
		$scope.currtId=1;
		$scope.editing=function(id){
			$scope.currtId=id;
		};
		$scope.save=function(id){
			$scope.currtId=1;
		};

		  // $scope.currentEditingId = -1;
    // $scope.editing = function(id) {
    //   $scope.currentEditingId = id;
    // };
    // $scope.save = function() {
    //   $scope.currentEditingId = -1;
    // };

	}]);
	

})(angular);
