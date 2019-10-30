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
  objArr.forEach(value =>{
    $('#photo-ceiling').append(`<section id="${value.keyword}"><h2>${value.title}</h2><img src="${value.img}"><p>${value.description}</p></section>`);
  });
}


// function grabPhoto(){
//   $.get('data/page-1.json', { title: 'UniWhal'},
// }
//.then to dostuff
const objArr = [];
$(document).ready(function() {
  $.get('data/page-1.json')
    .then(function(data){
      data.forEach(value => {
        new Photo( value.image_url, value.title, value.description, value.keyword, value.horns);
      });
      renderPhoto();
      keywordOptions();
    });
});
// filter images
// selet eliment
// event handler to respond to select
// run funtion for keyword selction
// hide all except
function keywordOptions() {
  objArr.forEach(value => {
    $('select').append(`<option value="keyword">${value.keyword}</option>`)
  })
}

$('select').change(function(){
  $('section').toggle();
  $(`#${$(this).text()}`).toggle();
})

// style
// clean and simple shows phots in grid pattern
// use floats
// use ONE googe font


// streach goal
// sort the images so that they have a render order
// sort images by title or # of horns
