// this is a self-invoking anonymous function
// it is also called a module (my variation of the module pattern)
// it emcapsulates all of your custom code and makes it private

(() => {
  // make associations (select) with elements in the HTML markup using CSS selectors
  let theHeading = document.querySelector(".main-heading"),
      theIcons = document.querySelectorAll(".icon");

  // debugger; //this is like a breakpoint / pasue point in your code
  // -> when you finish building all code, there is no debugger in this file.
  // so, you should enter // or remove the debugger.


  // script your behaviour with functions
  function logElement() {
    // same as print ("blah blah")
    // the "this" keyword refers to the thing that invokes the function
    // so the "thing" that you click on, mouse over, interact with on the page
    console.log('clicked on an element:', this.id);
  }

  // add event handling here (user "triggers") - this is a 1 to 1 relationship
  // assign the event you want to listen for, and the function that should be run
  theHeading.addEventListener("click", logElement);

  // one to many relationship (selecting a group of elements) - you have to process this collection and work with each element sequentially in a loop

  theIcons.forEach(icon => icon.addEventListener("click", logElement));
})();
