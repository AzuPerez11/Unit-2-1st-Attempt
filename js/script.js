/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
//These consts connect to the student list and student item classes through the DOM

const studentList = document.querySelector(".student-list");
let shorterList = studentList.querySelectorAll("li.student-item");

//This block calls the input and div elements added to the html file specific to adding a search box and button.
const div = document.createElement('div');
const pageHeader = document.querySelector('.page-header');
div.className ="student-search";
pageHeader.appendChild(div);

// The showPage function shows only 10 items from the length of the student list while hiding the rest.

const showPage = (list, page) => {
   const firstItem = (page * 10) - 10;
   const lastItem = (page * 10) - 1; 
   for (let i=0; i<list.length; i ++) {
      if (i >= firstItem && i <= lastItem){
      list[i].style.display = "block"; 
       } else {
          list[i].style.display = "none";
       }
      }
   }   
// The showPage function is called.
   showPage(shorterList, 1);

// The appendPageLinks function divides the length of the items into groups of 10. 
const appendPageLinks = (list) => {
   let pageNumbers = Math.ceil(list.length / 10);
   const page = document.querySelector('.page');
   const ul = document.createElement ('ul');
div.className = "pagination";
page.appendChild(div);
div.appendChild(ul);

// This loop adds two elements to create numbere buttons based on the quotient from the length of the student list being divided by 10 at the bottom of the page. 
for (let i = 1; i <= pageNumbers; i++){
   const li = document.createElement('li');
   const a = document.createElement ('a');
   ul.appendChild(li);
   li.appendChild(a);
   a.textContent = i;
   a.addEventListener('click', (e) => {
      showPage(list, i);
      const eachA = document.querySelectorAll("a");
// This block highlights the button belonging to the page that is currently active and unhighlights it when the page is no longer being viewed. 
   for (let i=0; i < eachA.length; i++){
     eachA[i].classList.remove("active");
   }
     e.target.className = "active";
    })
   }
};

// The appendPageLinks function is called. 
appendPageLinks(shorterList);