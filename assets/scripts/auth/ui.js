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

const showGameSuccess = (data) => {
  let gamefinished=0;
  let oWin=0;
  let xWin=0;
  for (let i = 0; i < data.games.length; i++) {
    if(data.games[i].over){
      gamefinished++;
      for (let j = 1; j < 8; j++) {
        if(data.games[i].cells[j+1]!==''){
          data.games[i].cells[j]=data.games[i].cells[j+1];
        }else{
          data.games[i].cells[j+1]=data.games[i].cells[j];
        }
      }
      if(data.games[i].cells[7]==='o'){
        oWin++;
      }else if(data.games[i].cells[data.games[i].cells.length-1]==='x'){
        xWin++;
    }
  }
}

  $('.record').find('.total-finished-game').text(gamefinished);
  $('.record').find('.total-game').text(data.games.length);
  $('.record').find('.o-win').text(oWin);
  $('.record').find('.x-win').text(xWin);
  $('.record').modal('show');
  console.log(data.games[1].cells[0]);
  console.log(oWin);
  console.table(data.games);
};

module.exports = {
  app,
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  createSuccess,
  updateSuccess,
  showGameSuccess,
};
