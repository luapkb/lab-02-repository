'use strict';

//////////////////////////////////////////////////////////////////////////////////////////////
//GLOBAL VARIABLES////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
let source   = document.getElementById('entry-template').innerHTML;
let template = Handlebars.compile(source);
const objArr = [];

///////////////////////////////////////////////////////////////////////////////////////////////
//PHOTO CONSTRUCTOR FUNCTION///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// display photos
// $.get(url or ie page-1.json', {name:'Steve'}, function (data, textStatus, jqXHR) {
//   $('p').append(data.firstName);
// });
function Photo( img, title, description, keyword, horns){
  this.img = img;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//RENDER FUNCTIONS/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//find section on page to appmd
//create some ell for img
//append obj to '#photo ceiling'
function renderPhoto(arr) {
  arr.forEach(value =>{
    let context = {class: `${value.keyword}`, title: `${value.title}`, img: `${value.img}`, description:`${value.description}`};
    let html    = template(context);
    $('#photo-ceiling').append(html);
  });
}
// filter images / select element
// event handler to respond to select
// run funtion for keyword selction
// hide all except
function renderOptions() {
  let tempArr = [];
  objArr.forEach(value => {
    if(!tempArr.includes(value.keyword)){
      tempArr.push(value.keyword);
      $('select').append(`<option value="${value.keyword}">${value.keyword}</option>`)
    }
  })
}
//write a function that 1.gets data 2.instantiates new Photos 3.invokes renderPhoto and renderOptions
function renderData(page) {
  $.get(page)
    .then(function(data){
      data.forEach(value => {
        let temp = new Photo( value.image_url, value.title, value.description, value.keyword, value.horns);
        objArr.push(temp);
      });
      renderPhoto(objArr);
      renderOptions();
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////
//EVENT LISTENERS///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  if($('title')[0].innerHTML === 'The Gallery of Horns Page 2'){
    let pageNum = 'data/page-2.json';
    renderData(pageNum);
  } else {
    let pageNum = 'data/page-1.json';
    renderData(pageNum);
  }
});
//show only selected div from dropdown
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
    let nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
    if (nameA < nameB){
      return -1;
    }if (nameA > nameB){
      return 1;
    }else{
      return 0;
    }
  });
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
});
