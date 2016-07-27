  'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  console.log(data);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const OnChangePassword = function OnChangePassword(event) {
  let data = getFormFields(this);
  event.preventDefault();

  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const OnSignOut = function (event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

let cellOne=[];
let cellTwo=[];
const showXo=function showXo(){
  let move=0;
  $('.col-xs-4').on('click',function(){
    if ( move%2===0 ){
    $(this).css('background','url(https://image.freepik.com/free-icon/letter-x_318-26692.png)');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
    cellOne[move/2]=$(this).data('cell');
    move++;
  } else{
    $(this).css('background','url(http://cdn.istoresinc.com/odi/images/fullsize/REX00LB1o.jpg)');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
    cellTwo[(move-1)/2]=$(this).data('cell');
    move++;
  }

  if((cellOne.includes(1)&&cellOne.includes(2)&&cellOne.includes(3))||(cellOne.includes(4)&&cellOne.includes(5)&&cellOne.includes(6))||(cellOne.includes(7)&&cellOne.includes(8)&&cellOne.includes(9))||(cellOne.includes(1)&&cellOne.includes(4)&&cellOne.includes(7))){
    console.log('yellow win!');
    console.log(cellOne);
    $('.win').modal('show');
    cellOne=[];

  }
  if((cellOne.includes(3)&&cellOne.includes(6)&&cellOne.includes(9))||(cellOne.includes(1)&&cellOne.includes(5)&&cellOne.includes(9))||(cellOne.includes(3)&&cellOne.includes(5)&&cellOne.includes(7))){
    console.log('yellow win!');
    console.log(cellOne);
    $('.win').modal('show');
    cellOne=[];
  }
  if((cellTwo.includes(1)&&cellTwo.includes(2)&&cellTwo.includes(3))||(cellTwo.includes(4)&&cellTwo.includes(5)&&cellTwo.includes(6))||(cellTwo.includes(7)&&cellTwo.includes(8)&&cellTwo.includes(9))||(cellTwo.includes(1)&&cellTwo.includes(4)&&cellTwo.includes(7))){
    console.log('red win!');
    $('.win').modal('show');
    cellTwo=[];
  }
  if((cellTwo.includes(3)&&cellTwo.includes(6)&&cellTwo.includes(9))||(cellTwo.includes(1)&&cellTwo.includes(5)&&cellTwo.includes(9))||(cellTwo.includes(3)&&cellTwo.includes(5)&&cellTwo.includes(7))){
    console.log('red win!');
    $('.win').modal('show');
    cellTwo=[];
  }
});
};
const onCreateGames = function (event) {
  event.preventDefault();
  $(this).parent().next().children().find('.col-md-4').css('background','white');
  cellOne=[];
  cellTwo=[];
  api.create(event.target)
    .done(ui.createSuccess)
    .fail(ui.Failure);
};
const onShowGames = function (event) {
  event.preventDefault();
  api.show(event.target)
    .done(ui.createSuccess)
    .fail(ui.onError);
};

const onUpdateGames = function (event) {
  event.preventDefault();
  api.update(event.target)
    .done(ui.updateSuccess)
    .fail(ui.onError);
};

 const showSignUp=function(){
  $('#sign-up').on('click', function(){
  $('.sign-up').modal('show');
});
  $('.sign-up-form').on('submit', function(){
  $('.sign-up').modal('hide');
});
};


const showSignIn=function(){
 $('#sign-in').on('click', function(){
 $('.sign-in').modal('show');
});
$('.sign-in-form').on('submit', function(){
$('.sign-in').modal('hide');
});
};

const showChangePassword=function(){
 $('#change-password').on('click', function(){
 $('.change-password').modal('show');
});
$('.change-password-form').on('submit', function(){
$('.change-password').modal('hide');
});
};

 const addHandlers = () => {
   showSignUp();
   showSignIn();
   showChangePassword();
   showXo();

  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', OnChangePassword);
  $('#sign-out').on('click', OnSignOut);
  $('#create').on('click', onCreateGames);
  $('#show').on('click', onShowGames);
  $('#update').on('click', onUpdateGames);


 };

module.exports = {
  addHandlers,
};



// ||cellOne.includes(4,5,6)||cellOne.includes(7,8,9)||cellOne.includes(1,4,7)||cellOne.includes(2,5,8)||cellOne.includes(3,6,9)||cellOne.includes(1,5,9)||cellOne.includes(3,5,7)
