'use strict';

// display photos
// use
// $.get(url or ie page-1.json', {name:'Steve'}, function (data, textStatus, jqXHR) {
//   $('p').append(data.firstName);
// });

// <p></p>
// for each obj fill in template
// append the template to DOM


function Photo( img, title, description, keyword, horns){
  this.img = img;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;

  objArr.push(this);
}
function renderPhoto() {
//find section on page to appmd
//create some ell for img
//append obj to '#photo ceiling'
  for(let i = 0 ; i < objArr.length; i++){
    $('#photo-ceiling').append(`<section><h2>${objArr[i].title}</h2><img src="${objArr[i].img}"><p>${objArr[i].description}</p></section>`);

  }
}

// function grabPhoto(){
//   $.get('data/page-1.json', { title: 'UniWhal'},
// }
//.then to dostuff
const objArr = [];
$(document).ready(function() {
  $.get('data/page-1.json')
    .then(function(data){
      console.log(data);
      for(let i = 0; i < data.length; i++){
        new Photo(data[i].image_url, data[i].title, data[i].description, data[i].keyword, data[i].horns);
      }
    //     data.forEach(new Photo(data[i].image_url, data[i].title, data[i].description, data[i].keyword, data[i].horns))
    }); console.log(objArr);
});
// filter images
// selet eliment
// event handler to respond to select
// run funtion for keyword selction
// hide all except


// style
// clean and simple shows phots in grid pattern
// use floats
// use ONE googe font


// streach goal
// sort the images so that they have a render order
// sort images by title or # of horns
