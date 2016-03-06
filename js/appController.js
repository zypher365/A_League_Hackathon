var app= angular.module('myApp', []);
app.controller('hackathon', function($scope, $http, $sce, $timeout){
		
		
	    //Jobsearch page call
		$scope.mainline = function() 
		{
			alert('as');
			$scope.tabShowfx = false;
			$scope.getTab = function () {
				return '../Writers/jobsearch';
			}//Loading the respective page
			
			
			
			
			
				
    	};//Job search tab click fxn end
	
	
	
	//Job details table call
	$scope.jobDetails = function(index) 
		{
			$scope.tabShowfx = false;
		
			$scope.selected_job_topic = index; // Set the selected order key
		
			$scope.getTab = function () {
				return '../Writers/jobDetails';
			}//Loading the respective page
			
			$scope.conn_error=false; //Error message
			$scope.loading = true;  //Loading gif
			$http.get("../orderdetails/jobsearch.json").success(function(response){
				
				
				$scope.job_detail_list = response.OrderDetails;
				
    			
    
			})
				.catch(function (err) {
					$scope.loading = false;
      				$scope.conn_error=true;
				})
				
				.finally(function () {
					// Hide loading spinner whether our call
					$scope.loading = false;
					$scope.tabShowfx = true;
				});
			
			
    	};//Job detail tab click fxn end
	
	
	
	//payment tab click function
	$scope.payment = function()
		{
			$scope.tabShowfx = false;
		
			$scope.getTab = function () {
				return '../Writers/payment';
			}//Loading the respective page
			
			$scope.conn_error=false; //Error message
			$scope.loading = true;  //Loading gif
			$http.get("../WriterBankdetails/balanceBankinfo.json").success(function(response){
				
				$scope.balance = response.WriterBalance;
				$scope.bankDetail = response.WriterBankdetail;
				
				
    			
    
			})
				.catch(function (err) {
					$scope.loading = false;
      				$scope.conn_error=true;
				})
				
				.finally(function () {
					// Hide loading spinner whether our call
					$scope.loading = false;
					$scope.tabShowfx = true;
				});
			
			
    	}//payment tab end
		
	
	
	//Profile function
	$scope.profile = function()
		{
			$scope.tabShowfx = false;
		
			$scope.getTab = function () {
				return '../Writers/profile';
			}//Loading the respective page
			
			$scope.conn_error=false; //Error message
			$scope.loading = true;  //Loading gif
			
			$http.get("../Writers/writerPersonalDetails").success(function(personalDetails){
				
				$scope.writerDetails = personalDetails.Writer;
			});
		
			$http.get("../WriterCredits/credit.json").success(function(response){
				
				$scope.user_credits = response.WriterCredit;
			})
				.catch(function (err) {
					$scope.loading = false;
      				$scope.conn_error=true;
				})
				
				.finally(function () {
					// Hide loading spinner whether our call
					$scope.loading = false;
					$scope.tabShowfx = true;
				});
			
			
    	}//Profile tab end
	
	
	//Claimed project page call list
		$scope.claimedProjects = function() 
		{
			$scope.tabShowfx = false;
			$scope.getTab = function () {
				return '../Writers/claimedProjects';
			}//Loading the respective page
			
			$scope.conn_error=false; //Error message
			$scope.loading = true;  //Loading gif
			
			$http.get("../WriterClaims/recentClaims.json").success(function(response){
				
				
				$scope.claimedProjectStatus = response.claimedProjects;
				$scope.claimedProjectDetails = response.ProjectDetails;
				
    			
    
			})
				.catch(function (err) {
					$scope.loading = false;
      				$scope.conn_error=true;
				})
				
				.finally(function () {
					// Hide loading spinner whether our call
					$scope.loading = false;
					$scope.tabShowfx = true;
					
				});
			
				
    	};//Claimed projects list tab click fxn end
	
	
	
	
	
	//Content sample submit for skill upgrade
		$scope.contentSampleSubmit = function() 
		{
			$scope.tabShowfx = false;
			$scope.getTab = function () {
				return '../Writers/contentSample';
			}//Loading the respective page
			
			$scope.conn_error=false; //Error message
			$scope.loading = true;  //Loading gif
			
			$http.get("../WriterClaims/recentClaims.json").success(function(response){
				
				
				$scope.claimedProjectStatus = response.claimedProjects;
				$scope.claimedProjectDetails = response.ProjectDetails;
				
    			
    
			})
				.catch(function (err) {
					$scope.loading = false;
      				$scope.conn_error=true;
				})
				
				.finally(function () {
					// Hide loading spinner whether our call
					$scope.loading = false;
					$scope.tabShowfx = true;
					
				});
			
				
    	};//Content sample submit for skill upgrade
	
	
	
	
	//Project submission page call
	$scope.projectSubmission = function(index) 
		{
			$scope.tabShowfx = false;
		
			$scope.selected_job_topic = index; // Set the selected order key
		
			$scope.getTab = function () {
				return '../Writers/projectSubmission';
			}//Loading the respective page
			
			$scope.conn_error=false; //Error message
			$scope.loading = true;  //Loading gif
			$http.get("../WriterClaims/recentClaims.json").success(function(response){
				
				
				$scope.job_detail_list = response.ProjectDetails;
				
    			
    
			})
				.catch(function (err) {
					$scope.loading = false;
      				$scope.conn_error=true;
				})
				
				.finally(function () {
					// Hide loading spinner whether our call
					$scope.loading = false;
					$scope.tabShowfx = true;
				});
			
			
    	};//Project submission function end
	
	
	
	
	//submitting form initialize
	$scope.submission = false;
	// Updated code thanks to Yotam
	var param = function(data) {
		var returnString = '';
		for (d in data){
			if (data.hasOwnProperty(d))
				returnString += d + '=' + data[d] + '&';
		}
		// Remove last ampersand and return
		return returnString.slice( 0, returnString.length - 1 );
	};
	
	//initialize end
	
	
	
	//function for different simple update forms
	function form_names(passvar)
	{
		switch (passvar)
			{
				case ('reference'):
					{
						window.dataVar = param($scope.writerDetails);
						return '../Writers/referencesUpdate';
						break;
				
					}
				case ('personalInfo'):
					{
						window.dataVar = param($scope.writerDetails);
						return '../Writers/personalInfoUpdate';
						break;
					}
				case ('bankDetails'):
					{
						window.dataVar = param($scope.bankDetail);
						return '../WriterBankdetails/bankdetailsUpdate';
						break;
					}
			}
	}//update switch end
	
	
	
	
	
	//form update code
	$scope.myformUpdate = function (formNamePass)
	{
		$http({
			method : 'POST',
			url : form_names(formNamePass),
			data : dataVar, // pass in data as strings
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 		// set the headers so angular passing info as form data (not request payload)
		})
			.success(function (response) {
			
			    
			toaster.pop('success', "Update Successful", "");
			//success response part not working
		
			
		});
		toaster.pop('note', "Updating your data...", "");
		
	}//simple form update function ends
		
	
	
	
	//Function for claiming projects
	$scope.claimProject = function (projectID, paygrade, area)
	{
		$http({
			method : 'POST',
			url : '../WriterClaims/claimProject',
			data : 'order_id='+projectID+'&paygrade='+paygrade+'&area='+area, // pass in data as strings
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 		// set the headers so angular passing info as form data (not request payload)
		})
			.success(function (response) {
//			alert(response.status);
			toaster.pop(response.status, response.message, "");
			//success response part not working
		
			
		});
		toaster.pop('note', "Processing...", "");
	}//claiming function end
	
	
	
	
	//Skill upgrade area sample submit form load
	$scope.sampleSubmissionSelectArea = function(areaID){
		
		$scope.loading2 = true;
		$scope.loadAreasampleTopic = function () {
				return '../Writers/contentSampleTopics?areaID='+areaID;
			}
		$scope.area_id =  areaID;

	}//skill page load end
	
	

	$scope.NoOptionChecked = false;
	$scope.topicSelected = function(topic){
		$scope.NoOptionChecked = true;
		$scope.topic_id = topic;
	}
	
	//Sample text submit
	$scope.submitAreaSample = function (sample)
	{
		if ($scope.NoOptionChecked){
			toaster.pop('note', "Processing...", "");
			$http({
				method : 'POST',
				url : '../Writers/submitAreaSample',
				data : 'area_id='+$scope.area_id +'&topic_id='+$scope.topic_id +'&sample='+sample, // pass in data as strings
				headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 				// set the headers so angular passing info as form data (not request payload)
			})
				.success(function (response) {
				//alert(response.status);
				toaster.pop(response.status, response.message, "");
				//success response part not working
			});
		}
		
		else{
			toaster.pop("error", "Select a topic first", "");
		}
	
		
		
		
		
	}//sample submit function end
	
	
	
	
	
	
	//file uploading function
	$scope.uploadedFile = function(element) {
		$scope.$apply(function($scope) {
			$scope.files = element.files;         
		});
	}
	
	$scope.addFile = function() {
		uploadfile($scope.files, function( msg ) // success
								 {
			
			console.log('uploaded');
			
		},
								 function( msg ) // error
								 {
			console.log('error');
		});
	}

	
	
	
function uploadfile( files,success, error )
{

	
 var fd = new FormData();

 var url = '../Writers/fileUpload';
	var x=files[0];
	alert(JSON.stringify(x));
 angular.forEach(files,function(file){
 fd.append('file',file);
	 $scope.filetype = file['type'];
	 $scope.filename = file['name'];
	 $scope.filex = file;
	

//	var filename = file['name'];

 });

 //sample data

 var data = {
  name : $scope.filename,
  type : $scope.filetype,
  xx : $scope.filex
 };


 fd.append("data", JSON.stringify(data));

	
 $http.post(url, fd, {
  withCredentials : false,
  headers : {
  'Content-Type' : undefined
  },
  transformRequest : angular.identity
 })
 .success(function(data)
 {
  console.log(data);
 })
 .error(function(data)
 {
  console.log(data);
 });
}

	
	
    
        
    $http.get("./mynotification.php").success(function(response){
        $scope.mynotifications=response.notifications;
        
        });
    
    $http.get("./claimedprojects.php").success(function(response){
        $scope.myclaimedproject=response.myclaims;
        
        });
    
    
    
    $scope.selectedTab = 0; //set selected tab to the 1st by default.
        
        /** Function to set selectedTab **/
        $scope.selectTab = function(index){
            $scope.selectedTab = index;
        }
        
        
   	$scope.claimed = 0; //set selected tab to the 1st by default.
        
        /** Function to set selectedTab **/
        $scope.claimed = function(index){
            $scope.myclaimed=index;
        }
             
                                                       
});

app.directive('myDirective', function(){
  return {
    restrict: 'AE',
    compile: function(element, attrs){
      //here your all jQuery code will lie to ensure binding
      element.load('http://localhost:8080/Gitlab/WPcollaboration/whitepanda_webapp/Writers/dashboard', function (data) {
        console.log(data);
      });
    }
  }
});



	    
	





