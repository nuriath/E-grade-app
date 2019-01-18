/*//Global Variable
var miss;
//Back-End Logic
//Constructor function for a miss
function Miss(name,turnPoints, totalPoints, active) {
    this.name = name;
    this.turnPoints = 0;
    this.totalPoints= 0;
    this.active = active;
}
//function to on what happen when a div is clicked
Miss.prototype.click = function (){
turnPoints=0;
totalPoints=0;
if ($(".m1").click(function(){
    turnPoints=10;
    totalPoints=totalPoints+turnPoints;
    alert("your total is" +totalPoints+);
}));
}*/

var mark=[mark1,mark2,mark3,mark4,mark5];
var mark1 =0;
var mark2=0;
var mark3=0;
var mark4=0;
var mark5=0;
var total=0;


if($('.mOne').on('click', function() {
    mark1= 10;
   $('#pointsOne').text(mark1);
    

    total=mark1;
    $('#totalMark').text(total);
       
  
 
        $(".mOne").toggleClass('active');
    
 

    }) );
    
    
if( $('.mTwo').on('click', function() {
    mark1= 6; 
    $('#pointsOne').text(mark1);

    total=mark1;
    $('#totalMark').text(total);

    $(".mTwo").toggleClass('active');
   
    
    }));

if($('.mThree').on('click', function() {
    mark1= 3; 
    $('#pointsOne').text(mark1);

    total=mark1;
    $('#totalMark').text(total);

    
 
        $(".mThree").toggleClass('active');
       
    
    

    }));

 if($('.mFour').on('click', function() {
    mark1= 0; 
   $('#pointsOne').text(mark1);

   total=mark1;
    $('#totalMark').text(total);

    
    
 
    $(".mFour").toggleClass('active');
    
    }));


if($('.cOne').on('click', function() {
    mark2= 10;
    $('#pointsTwo').text(mark2);

    total=mark1 + mark2;
    $('#totalMark').text(total);


    
 
    $(".cOne").toggleClass('active');
    }));

if( $('.cTwo').on('click', function() {
    mark2= 6; 
    $('#pointsTwo').text(mark2);

    total=mark1 + mark2;
    $('#totalMark').text(total);


   
 
    $(".cTwo").toggleClass('active');
    }));

if($('.cThree').on('click', function() {
    mark2= 3; 
    $('#pointsTwo').text(mark2);

    total=mark1 + mark2;
    $('#totalMark').text(total);


    
 
    $(".cThree").toggleClass('active');
    }));

if($('.cFour').on('click', function() {
    mark2= 0; 
    $('#pointsTwo').text(mark2);

    total=mark1 + mark2;
    $('#totalMark').text(total);


   
 
    $(".cFour").toggleClass('active');
    }));


if($('.sOne').on('click', function() {
    mark3= 10;
    $('#pointsThree').text(mark3);


    total=mark1 + mark2 + mark3;
    $('#totalMark').text(total);


    
 
    $(".sOne").toggleClass('active');
    }));

if( $('.sTwo').on('click', function() {
    mark3= 6; 
    $('#pointsThree').text(mark3);

    total=mark1 + mark2 + mark3;
    $('#totalMark').text(total);


   
 
    $(".sTwo").toggleClass('active');
    }));
    
if($('.sThree').on('click', function() {
    mark3= 3; 
    $('#pointsThree').text(mark3);

    total=mark1 + mark2 + mark3;
    $('#totalMark').text(total);


 
 
    $(".sThree").toggleClass('active');
    }));
    
if($('.sFour').on('click', function() {
    mark3= 0; 
    $('#pointsThree').text(mark3);

    total=mark1 + mark2 + mark3;
    $('#totalMark').text(total);


    
    $(".sFour").toggleClass('active');
    }));

if($('.rOne').on('click', function() {
    mark4= 10;
    $('#pointsFour').text(mark4);

    total=mark1 + mark2 + mark3 +mark4;
    $('#totalMark').text(total);


    
    $(".rOne").toggleClass('active');
    }));
        
if( $('.rTwo').on('click', function() {
    mark4= 6; 
    $('#pointsFour').text(mark4);

    total=mark1 + mark2 + mark3 +mark4;
    $('#totalMark').text(total);


    
    $(".rTwo").toggleClass('active');
    }));

if($('.rThree').on('click', function() {
    mark4= 3; 
    $('#pointsFour').text(mark4);

    total=mark1 + mark2 + mark3 +mark4;
    $('#totalMark').text(total);


    
    $(".rThree").toggleClass('active');
    }));

if($('.rFour').on('click', function() {
    mark4= 0; 
    $('#pointsFour').text(mark4);

    total=mark1 + mark2 + mark3 +mark4;
    $('#totalMark').text(total);


    
 
    $(".rFour").toggleClass('active');
    }));


if($('.tOne').on('click', function() {
    mark5= 10;
    $('#pointsFive').text(mark5);


    total=mark1 + mark2 + mark3 +mark4 +mark5;
    $('#totalMark').text(total);



 
    $(".tOne").toggleClass('active');
    }));
            
if( $('.tTwo').on('click', function() {
    mark5= 6; 
    $('#pointsFive').text(mark5);


    total=mark1 + mark2 + mark3 +mark4 +mark5;
    $('#totalMark').text(total);


    
    $(".tTwo").toggleClass('active');
    }));
            
if($('.tThree').on('click', function() {
    mark5= 3; 
    $('#pointsFive').text(mark5);

    total=mark1 + mark2 + mark3 +mark4 +mark5;
    $('#totalMark').text(total);


    
    $(".tThree").toggleClass('active');
    }));
            
if($('.tFour').on('click', function() {
    mark5= 0; 
    $('#pointsFive').text(mark5);

    total=mark1 + mark2 + mark3 +mark4 +mark5;
    $('#totalMark').text(total);

    $(".tFour").toggleClass('active');
    
    }));


               
        
    




