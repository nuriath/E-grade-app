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


if($('.m1').on('click', function() {
    mark1= 10;
   $('#points1').text(mark1);
    

    total=mark1;
    $('#totalMark').text(total);
       
    $("#rowOne").removeClass('active');
 
        $(".m1").addClass('active');
    
 

    }) );
    
    
if( $('.m2').on('click', function() {
    mark1= 6; 
    $('#points1').text(mark1);

    total=mark1;
    $('#totalMark').text(total);

    $("#rowOne").removeClass('active');
 
        $(".m2").addClass('active');
   
    
    }));

if($('.m3').on('click', function() {
    mark1= 3; 
    $('#points1').text(mark1);

    total=mark1;
    $('#totalMark').text(total);

    $("#rowOne").removeClass('active');
 
        $(".m3").addClass('active');
       
    
    

    }));

 if($('.m4').on('click', function() {
    mark1= 0; 
   $('#points1').text(mark1);

   total=mark1;
    $('#totalMark').text(total);

    
    $("#rowOne").removeClass('active');
 
    $("m4").addClass('active');
    
    }));


if($('.c1').on('click', function() {
    mark2= 10;
    $('#points2').text(mark2);

    total=mark1 + mark2;
    $('#totalMark').text(total);
    }));

if( $('.c2').on('click', function() {
    mark2= 6; 
    $('#points2').text(mark2);

    total=mark1 + mark2;
    $('#totalMark').text(total);
    }));

if($('.c3').on('click', function() {
    mark2= 3; 
    $('#points2').text(mark2);

    total=mark1 + mark2;
    $('#totalMark').text(total);
    }));

if($('.c4').on('click', function() {
    mark2= 0; 
    $('#points2').text(mark2);

    total=mark1 + mark2;
    $('#totalMark').text(total);
    }));


if($('.s1').on('click', function() {
    mark3= 10;
    $('#points3').text(mark3);


    total=mark1 + mark2 + mark3;
    $('#totalMark').text(total);
    }));

if( $('.s2').on('click', function() {
    mark3= 6; 
    $('#points3').text(mark3);

    total=mark1 + mark2 + mark3;
    $('#totalMark').text(total);
    }));
    
if($('.s3').on('click', function() {
    mark3= 3; 
    $('#points3').text(mark3);

    total=mark1 + mark2 + mark3;
    $('#totalMark').text(total);
    }));
    
if($('.s4').on('click', function() {
    mark3= 0; 
    $('#points3').text(mark3);

    total=mark1 + mark2 + mark3;
    $('#totalMark').text(total);
    }));

if($('.r1').on('click', function() {
    mark4= 10;
    $('#points4').text(mark4);

    total=mark1 + mark2 + mark3 +mark4;
    $('#totalMark').text(total);
    }));
        
if( $('.r2').on('click', function() {
    mark4= 6; 
    $('#points4').text(mark4);

    total=mark1 + mark2 + mark3 +mark4;
    $('#totalMark').text(total);
    }));

if($('.r3').on('click', function() {
    mark4= 3; 
    $('#points4').text(mark4);

    total=mark1 + mark2 + mark3 +mark4;
    $('#totalMark').text(total);
    }));

if($('.r4').on('click', function() {
    mark4= 0; 
    $('#points4').text(mark4);

    total=mark1 + mark2 + mark3 +mark4;
    $('#totalMark').text(total);
    }));


if($('.t1').on('click', function() {
    mark5= 10;
    $('#points5').text(mark5);


    total=mark1 + mark2 + mark3 +mark4 +mark5;
    $('#totalMark').text(total);
    }));
            
if( $('.t2').on('click', function() {
    mark5= 6; 
    $('#points5').text(mark5);


    total=mark1 + mark2 + mark3 +mark4 +mark5;
    $('#totalMark').text(total);
    }));
            
if($('.t3').on('click', function() {
    mark5= 3; 
    $('#points5').text(mark5);

    total=mark1 + mark2 + mark3 +mark4 +mark5;
    $('#totalMark').text(total);
    }));
            
if($('.t4').on('click', function() {
    mark5= 0; 
    $('#points5').text(mark5);

    total=mark1 + mark2 + mark3 +mark4 +mark5;
    $('#totalMark').text(total);
    }));

    
    

               
        
    




