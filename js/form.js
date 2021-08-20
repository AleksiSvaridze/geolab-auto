$(function() {

	

$('#error-name').hide();
$('#error-email').hide();
$('#error-subject').hide();
$('#error-text').hide();

var errorName = false;
var errorEmail = false;
var errorSubject = false;
var errorText = false;


$('#name').focusout(function() {
  check_username();
});

$('#email').focusout(function() {
  check_email();
});

$('#subject').focusout(function() {
  check_subject();
});

$('#text').focusout(function() {
  check_text();
});



function check_username() {
  var userName_length = $('#name').val().length;

  if( userName_length == '') {
    $('#error-name').html('Please write your name');
    $('#error-name').show();
    errorName = true;
  } else {
    $('#error-name').hide();
  }
};


function check_email() {
  var email_length = $('#email').val().length;

  if( email_length == '') {
    $('#error-email').html('Please write email address');
    $('#error-email').show();
    errorName = true;
  } else {
    $('#error-email').hide();
  }
};

function check_subject() {
  var subject_length = $('#subject').val().length;

  if( subject_length == '') {
    $('#error-subject').html('Please write subject');
    $('#error-subject').show();
    errorSubject = true;
  } else {
    $('#error-subject').hide();
  }
};

function check_text() {
  var text_length = $('#text').val().length;

  if( text_length == '') {
    $('#error-text').html('Please write text');
    $('#error-text').show();
    errorText = true;
  } else {
    $('#error-text').hide();
  }
};




$('#form').submit(function(e){

  var success = $('#success-message');

  e.preventDefault();

   errorName = false;
   errorEmail = false;
   errorSubject = false;
   errorText = false;


  check_username();
  check_email();
  check_subject();
  check_text();



  if( errorName == false && errorEmail == false && errorSubject == false && errorText == false ) {

    success.html('Thank you for your intereset for us, your message has been sent!');
    return true;


  } else { return false; }




});

});