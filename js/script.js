/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
let shorterList = document.querySelectorAll(".student-item");
const studentList = document.querySelector(".student-list");
const page = document.querySelector('.page');
const ul = document.createElement ('ul');
const div = document.createElement('div');
const pageHeader = document.querySelector('.page-header');
const li = document.createElement('li');
const a = document.createElement ('a');

div.className ="student-search";
pageHeader.appendChild(div);

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
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
   };   

   showPage(shorterList, 1);
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
   let pageNumbers = Math.round(list.length / 10);
div.className = "pagination";
page.appendChild(div);
div.appendChild(ul);

for (let i = 1; i <= pageNumbers.length; i++){
   ul.appendChild(li);
   li.appendChild(a);
   a.textContent = i;
   a.addEventListener('click', (e) => {
      const eachA = document.querySelectorAll("a");
      showPage(list, i);
      const button = e.target;
   })

     if (event.target.tagName === 'a')
      for (let i=1; i <= eachA.length; i++){
        eachA[i].classList.remove("active");
      }
        a.target.tagName = "active";
     
   }
 
};
appendPageLinks(shorterList);

// Remember to delete the comments that came with this file, and replace them with your own code comments.