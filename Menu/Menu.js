/* This is the data we will be using, study it but don't change anything, yet. */
window.addEventListener('load', (event) => {
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  */

let menuButton = document.querySelector('.menu-button');
let header = document.querySelector('.header');
header.appendChild(webpageMenu(menuItems));

function webpageMenu(data) {
  //declaring elements
  const menuDiv = document.createElement('div');
  const listItem = document.createElement('ul');

  //appending to menu
  menuDiv.appendChild(listItem);

  //set class
  menuDiv.classList.add('menu');

  

  //iterating over list
  data.forEach(item => {
    const list = document.createElement('li');
    listItem.appendChild(list);
    list.textContent = item;
  });

  //event listener
  menuButton.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open');
  });

  return menuDiv;
}
});