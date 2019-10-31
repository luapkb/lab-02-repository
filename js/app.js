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

  // objArr.push(this);
}
function renderPhoto(arr) {
//find section on page to appmd
//create some ell for img
//append obj to '#photo ceiling'
  arr.forEach(value =>{
    $('#photo-ceiling').append(`<div class="${value.keyword}"><h2>${value.title}</h2><img src="${value.img}"><p>${value.description}</p></div>`);
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
        let temp = new Photo( value.image_url, value.title, value.description, value.keyword, value.horns);
        objArr.push(temp);
      });
      renderPhoto(objArr);
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
    $('select').append(`<option value="${value.keyword}">${value.keyword}</option>`)
  })
}

// $('select').on('change', value => {
//   $('section').hide();
//   $(`.${value.target[20].innerHTML}`).show();
//   console.log(value.target);
// })

$('select').change(function() {
  $('div').hide();
  let val = $(this).val();
  if(val === 'default'){
    $('div').show();
  } else {
    $(`.${val}`).show();
  }
})
//sort alphabetically
$('#abcButton').click(function(){
  objArr.sort(function(a, b){
    let nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
    if (nameA < nameB)
      return -1
    if (nameA > nameB)
      return 1
    return 0
  })
  $('#photo-ceiling').empty();
  renderPhoto(objArr);
})
//sort by horns
$('#hornButton').click(function(){
  objArr.sort(function(a,b){
    let hornsA = Number(a.horns);
    let hornsB = Number(b.horns);
    if(hornsA < hornsB){
      return -1;
    } else if(hornsA > hornsB){
      return 1;
    } else {
      return 0;
    }
  })
  $('#photo-ceiling').empty();
  renderPhoto(objArr);
})

// style
// clean and simple shows phots in grid pattern
// use floats
// use ONE googe font


// streach goal
// sort the images so that they have a render order
// sort images by title or # of horns
