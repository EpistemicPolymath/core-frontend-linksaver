

const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");

let linkedCategories = [];
let links = [];


addBtn.addEventListener('click', () => {
    // Upon click of the + button the panel will show
    showFormPanel();
});

cancelButton.addEventListener('click', () => {
    // Stop form from submitting
    event.preventDefault();

    // Upon click of the cancel button the panel will be hidden
    hideFormPanel();
});


const showFormPanel = () => {
    // Removes the hidden class from the panel
    addLinkPanel.classList.remove("hidden");
}

const hideFormPanel = () => {
    // Adds the hidden class to the panel
    addLinkPanel.classList.add("hidden");
}

linkCategory.addEventListener('keydown', (event) => {
    if(event.keyCode === 188) { // Comma Keycode
        event.preventDefault();
        // Add that value to our array
        linkedCategories.push(linkCategory.value);
        // Then clear the input value
        linkCategory.value = '';

        // Display the updated categories
        displayLinkCatgeories();
    }
});

const displayLinkCatgeories = () => {
    console.log("Display Link Categories");
}

submitButton.addEventListener('click', (event) => {

      // Stop form from submitting
      event.preventDefault();

    // Take values from the form
    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkedCategories;
    
    // Create a new link object
    const newLink = {
        title,
        url,
        categories
    }

    // Push new link to array of links
    links.push(newLink);

    // Clear out all of the inputs in the form
    linkTitle.value = '';
    linkUrl.value = '';
    linkCategory.value = '';
    linkedCategories = [];

    // Display the link Categories
    displayLinkCatgeories();

    // Hide the Panel after submission
    hideFormPanel();
});