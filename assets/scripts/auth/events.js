  'use strict';
// // //
// const getFormFields = require('../../../lib/get-form-fields');
//
// const api = require('./api');
// const ui = require('./ui');
// // // //
// const onSignUp = function (event) {
  // let data = getFormFields(this);
  // event.preventDefault();
  // api.signUp(data)
  // .done(ui.success)
  // .fail(ui.failure);
// };
// // //
// // // const onSignIn = function (event) {
// // //   let data = getFormFields(this);
// // //   event.preventDefault();
// // //   api.signIn(data)
// // //   .done(ui.signInSuccess)
// // //   .fail(ui.failure);
// // // };
// // //
// // // const OnChangePassword = function OnChangePassword(event) {
// // //   let data = getFormFields(this);
// // //   event.preventDefault();
// // //   api.changePassword(data)
// // //   .done(ui.success)
// // //   .fail(ui.failure);
// // // };
// //
// //
   const showSignUp=function(){
    $('#sign-up').on('click', function(){
    $('.sign-up').modal('show');
  });

  $('sumbit').on('click', function(){
    console.log($('.user-name').val());

  });
};

const showSignIn=function(){
 $('#sign-in').on('click', function(){
 $('.sign-in').modal('show');
});
};

const showChangePassword=function(){
 $('#change-password').on('click', function(){
 $('.change-password').modal('show');
});
};

const showXo=function showXo(){
  let action=1;
  $('.col-xs-4').on('click',function(){
    if ( action === 1 ){
    $(this).css('background','yellow');
    action=2;
  }else{
    $(this).css('background','red');
    action=1;
  }
});
};
// $('#sign-up-submit').on('click', function(){
//  console.log($('#user-name').val());
//
// });
// };
// // // const OnSignOut = function (event) {
// // //   event.preventDefault();
// // //   api.signOut()
// // //   .done(ui.signOutSuccess)
// // //   .fail(ui.failure);
// // // };
// // //
// // //
// // //
 const addHandlers = () => {
   showSignUp();
   showSignIn();
   showChangePassword();
   showXo();
  // $('.sign-up').on('submit', onSignUp);

// //   // $('.sign-in').on('submit', onSignIn);
// //   // $('.change-password').on('submit', OnChangePassword);
// //   // $('.sign-out').on('submit', OnSignOut);
// //
 };
// //
module.exports = {
  addHandlers,
};
