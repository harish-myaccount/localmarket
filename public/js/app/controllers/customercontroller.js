angular.module('offeringsApp').controller('customerController',['$scope','customerService','growl',function($scope,customerService,growl){

$scope.profile={pincode:''};

customerService.getprofile().then(function(profile){
	$scope.profile=profile;
})

$scope.save = function(){
	customerService.save($scope.profile).then(function(data){
		if(data=="success")
			growl.success("Saved",{ttl:5000});
	});
}

$scope.dueamount='calculating...';
$scope.payamount;
customerService.getDue().then(function(data){
$scope.dueamount = data;
$scope.payamount = data;
});

$scope.pay = function(){
	customerService.pay($scope.payamount).then(function(data){
		if(data=="success")
			growl.success("Transaction initiated",{ttl:5000});
	});
};
$scope.getBill=function(user){
	customerService.getBill(user).then(function(data){

	});
};



}]);