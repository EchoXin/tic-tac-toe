'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const app=require('./app');
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





const update = function (i,v,g) {

  return $.ajax({
    url: app.api + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },

    data: {
  "game": {
    "cell": {
      "index": i,
      "value": v
    },
    "over": g
  }
}
  });

};


let cellOne=[];
let cellTwo=[];
let move=0;
let gameover=false;
let index=-1;
let value='';

const onCreateGames = function (event) {
 cellOne=[];
 cellTwo=[];
 move=0;
 gameover=false;
 index=-1;
 value='';
$('.col-md-4').data('on',1);
event.preventDefault();
$(this).parent().next().children().find('.col-md-4').css('background','white');
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
let cellNumber=$(this).data('cell');
let cellChange=$(this).data('on');

const check=function(){
  if((cellOne.includes(1)&&cellOne.includes(2)&&cellOne.includes(3))||(cellOne.includes(4)&&cellOne.includes(5)&&cellOne.includes(6))||(cellOne.includes(7)&&cellOne.includes(8)&&cellOne.includes(9))||(cellOne.includes(1)&&cellOne.includes(4)&&cellOne.includes(7))){
  $('.win').children().children().children().next().find('p').text('Player O Win!');
  $('.win').modal('show');
  $('.col-md-4').data('on',0);
  gameover=true;
  }
  else if((cellOne.includes(2)&&cellOne.includes(5)&&cellOne.includes(8))||(cellOne.includes(3)&&cellOne.includes(6)&&cellOne.includes(9))||(cellOne.includes(1)&&cellOne.includes(5)&&cellOne.includes(9))||(cellOne.includes(3)&&cellOne.includes(5)&&cellOne.includes(7))){
  $('.win').children().children().children().next().find('p').text('Player O Win!');
  $('.win').modal('show');
  $('.col-md-4').data('on',0);
  gameover=true;
  }
  else if((cellTwo.includes(1)&&cellTwo.includes(2)&&cellTwo.includes(3))||(cellTwo.includes(4)&&cellTwo.includes(5)&&cellTwo.includes(6))||(cellTwo.includes(7)&&cellTwo.includes(8)&&cellTwo.includes(9))||(cellTwo.includes(1)&&cellTwo.includes(4)&&cellTwo.includes(7))){
  $('.win').children().children().children().next().find('p').text('Player X Win!');
  $('.win').modal('show');
  console.log(cellOne);
  console.log(cellTwo);
  $('.col-md-4').data('on',0);
  gameover=true;
  }
  else if((cellTwo.includes(2)&&cellTwo.includes(5)&&cellTwo.includes(8))||(cellTwo.includes(3)&&cellTwo.includes(6)&&cellTwo.includes(9))||(cellTwo.includes(1)&&cellTwo.includes(5)&&cellTwo.includes(9))||(cellTwo.includes(3)&&cellTwo.includes(5)&&cellTwo.includes(7))){
    console.log($('.win').children().children().children().next().find('p').text());
  $('.win').children().children().children().next().find('p').text('Player X Win!');
  $('.win').modal('show');
  $('.col-md-4').data('on',0);
  gameover=true;
  }
  else if(cellOne.length+cellTwo.length===9){
  $('.win').children().children().children().next().find('p').text("Cat's game!");
  $('.win').modal('show');
  $('.col-md-4').data('on',0);
  gameover=true;
  }
};
console.log(cellChange);
if(cellChange===1){
  console.log(cellChange);

if ( move%2===0 ){

console.log(gameover);
value='o';
$(this).css('background','url(http://cdn.istoresinc.com/odi/images/fullsize/REX00LB1o.jpg)');
$(this).css('background-position','center');
$(this).css('background-size','cover');
cellOne[move/2]=cellNumber;
console.log(gameover);
move++;
console.log(gameover);

} else{
value='x';
$(this).css('background','url(https://image.freepik.com/free-icon/letter-x_318-26692.png)');
$(this).css('background-position','center');
$(this).css('background-size','cover');
cellTwo[(move-1)/2]=cellNumber;

move++;

}
}
check();
index++;
update(index,value,gameover)
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

$('.sign-up-form').on('submit', onSignUp);
$('.sign-in-form').on('submit', onSignIn);
$('.change-password-form').on('submit', OnChangePassword);
$('#sign-out').on('click', OnSignOut);
$('#create').on('click', onCreateGames);
$('#show').on('click', onShowGames);
$('.col-xs-4').on('click',onUpdateGames);


};

module.exports = {
addHandlers,
};



// ||cellOne.includes(4,5,6)||cellOne.includes(7,8,9)||cellOne.includes(1,4,7)||cellOne.includes(2,5,8)||cellOne.includes(3,6,9)||cellOne.includes(1,5,9)||cellOne.includes(3,5,7)
