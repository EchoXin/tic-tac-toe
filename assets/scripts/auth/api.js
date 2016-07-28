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

let cellOne=[];
let cellTwo=[];
let move=0;
let gameover=false;
const showXo=function showXo(){

  if ( move%2===0 ){
  $(this).css('background','url(http://cdn.istoresinc.com/odi/images/fullsize/REX00LB1o.jpg)');
  $(this).css('background-position','center');
  $(this).css('background-size','cover');
  cellOne[move/2]=$(this).data('cell');
  move++;
  console.log(move);
  console.log(cellOne);
  console.log(cellTwo);
} else{
  $(this).css('background','url(https://image.freepik.com/free-icon/letter-x_318-26692.png)');
  $(this).css('background-position','center');
  $(this).css('background-size','cover');
  cellTwo[(move-1)/2]=$(this).data('cell');
  move++;
  console.log(move);
  console.log(cellOne);
  console.log(cellTwo);
}

if((cellOne.includes(1)&&cellOne.includes(2)&&cellOne.includes(3))||(cellOne.includes(4)&&cellOne.includes(5)&&cellOne.includes(6))||(cellOne.includes(7)&&cellOne.includes(8)&&cellOne.includes(9))||(cellOne.includes(1)&&cellOne.includes(4)&&cellOne.includes(7))){
  $('.win').children().children().children().next().find('p').text('Player O Win!');
  $('.win').modal('show');
  gameover=true;

}
else if((cellOne.includes(2)&&cellOne.includes(5)&&cellOne.includes(8))||(cellOne.includes(3)&&cellOne.includes(6)&&cellOne.includes(9))||(cellOne.includes(1)&&cellOne.includes(5)&&cellOne.includes(9))||(cellOne.includes(3)&&cellOne.includes(5)&&cellOne.includes(7))){
  $('.win').children().children().children().next().find('p').text('Player O Win!');
  $('.win').modal('show');
  gameover=true;

}
else if((cellTwo.includes(1)&&cellTwo.includes(2)&&cellTwo.includes(3))||(cellTwo.includes(4)&&cellTwo.includes(5)&&cellTwo.includes(6))||(cellTwo.includes(7)&&cellTwo.includes(8)&&cellTwo.includes(9))||(cellTwo.includes(1)&&cellTwo.includes(4)&&cellTwo.includes(7))){
  $('.win').children().children().children().next().find('p').text('Player X Win!');
  $('.win').modal('show');
  console.log(cellOne);
  console.log(cellTwo);
  gameover=true;
}
else if((cellTwo.includes(2)&&cellTwo.includes(5)&&cellTwo.includes(8))||(cellTwo.includes(3)&&cellTwo.includes(6)&&cellTwo.includes(9))||(cellTwo.includes(1)&&cellTwo.includes(5)&&cellTwo.includes(9))||(cellTwo.includes(3)&&cellTwo.includes(5)&&cellTwo.includes(7))){
  $('.win').children().children().children().next().find('p').text('Player X Win!');
  $('.win').modal('show');
  console.log(cellOne);
  console.log(cellTwo);
  gameover=true;
}
else if(cellOne.length+cellTwo.length===9){
  $('.win').children().children().children().next().find('p').text("Cat's game!");
  $('.win').modal('show');
  gameover=true;
}
};







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
    url: app.api + '/games/' + app.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
  };
let index=-1;
let value='';

const update = function () {

  index++;
  if(index%2===0){
    value='o';
  }else{
    value='x';
}
  let gameObject = $.ajax({
    url: app.api + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },

    data: {
  "game": {
    "cell": {
      "index": index,
      "value": value
    },
    "over": gameover
  }
}
  });
  if(gameover===true){
    index=-1;
    value='x';
  }
  return gameObject;
};

const reset=function(reset){
  if(reset){
  move=0;
  cellOne=[];
  cellTwo=[];
  gameover=false;
  index=-1;
  value='';
}
};




module.exports = {
  events,
  signUp,
  signIn,
  changePassword,
  signOut,
  create,
  show,
  update,
  showXo,
  cellOne,
  cellTwo,
  gameover,
  move,
  reset,
};
