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
}
function renderPhoto() {
//find section on page to appmd
//create some ell for img
//append obj to '#photo ceiling'
  $('#photo-ceiling').append(`<img src="${image_url}">`);
}

// function grabPhoto(){
//   $.get('data/page-1.json', { title: 'UniWhal'},
// }
//.then to dostuff
$(document).ready(function() {
  $.get('data/page-1.json')
    .then(function(data){
      console.log(data);
    });
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
