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


const onCreateGames = function (event) {
api.reset(true);
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

$('.sign-up-form').on('submit', onSignUp);
$('.sign-in-form').on('submit', onSignIn);
$('.change-password-form').on('submit', OnChangePassword);
$('#sign-out').on('click', OnSignOut);
$('#create').on('click', onCreateGames);
$('#show').on('click', onShowGames);
$('.col-xs-4').on('click',api.showXo);
$('.col-xs-4').on('click',onUpdateGames);


};

module.exports = {
addHandlers,
};



// ||cellOne.includes(4,5,6)||cellOne.includes(7,8,9)||cellOne.includes(1,4,7)||cellOne.includes(2,5,8)||cellOne.includes(3,6,9)||cellOne.includes(1,5,9)||cellOne.includes(3,5,7)
