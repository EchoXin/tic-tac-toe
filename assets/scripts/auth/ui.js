'use strict';

const app=require('./app');


const signInSuccess = (data) => {
  app.user=data.user;
  console.log(app);
  $('.navbar').find('h4').text("Welcome~~ "+data.user.email);
};

const success = (data) => {
  console.log(data);
  return data;

};

const failure = (error) => {
  console.error(error);
};

const signOutSuccess = () => {
  $('.navbar').find('h4').text("Welcome");
  delete app.user;
  console.log('Sign out successfully!');
};

const createSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.table(data.games);
  }
  app.game=data.game;
};

const updateSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.table(data.games);
  }
};


module.exports = {
  app,
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  createSuccess,
  updateSuccess,
};
