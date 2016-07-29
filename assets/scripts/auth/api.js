'use strict';

const app=require('./app');
const events=require('./events');
// const getFormFields = require('../../../lib/get-form-fields');

const signUp = (data) => {
  return $.ajax({
      url: app.api +"/sign-up",
      method:'POST',
      data, //data: data,
  });
};

const signIn = function(data){
  return $.ajax({
    url: app.api +"/sign-in",
    method:'POST',
    data, //data: data,
  });
};

const changePassword = function(data){
  return $.ajax({
    url: app.api + "/change-password/" + app.user.id,
    method:'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

const signOut = () => $.ajax({
      url: app.api + "/sign-out/" + app.user.id,
      method:'DELETE',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });

// game logic







const create = function () {
    return $.ajax({
    url: app.api + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: '',
  });
};

const show = function () {
  return $.ajax({
    url: app.api + '/games',  // + app.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
  };




module.exports = {
  events,
  signUp,
  signIn,
  changePassword,
  signOut,
  create,
  show,

};
