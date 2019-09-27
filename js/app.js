// DOM Elements
const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");
const addedCategories = document.querySelector("#addedCategories");

const linksList = document.querySelector("#linksList");

let linkedCategories = [];
let links = [
    {
        title: "My Website",
        url: "http://jentillman.com",
        categories: ['blog','personal']
    },
        
    {
        title: "Flexbox Resource",
        url: "https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties",
        categories: ['learning','web-dev', 'coding']
    },

    {
        title: "JS This Keyword",
        url: "https://ultimatecourses.com/blog/understanding-the-this-keyword-in-javascript",
        categories: ['javascript','coding', 'learning']
    }
];


// Displays the Saved Links on the Page
const displayLinks = () => {
    linksList.innerHTML = '';

    for (let link of links) {
        let linkHTMLString = `
        
            <div class="link panel">
                <div class="link-options">
                    <button class="btn-sm">Delete</button>
                    <button class="btn-sm">Edit</button>
                </div>

                <a href="${link.url}"><h1 class="header">${link.title}</h1></a>
                <p class="link-date">${Date.now()}</p>

                <div class="categories">
                    Categories:`;
                for (let category of link.categories) {
                    linkHTMLString += `<span class="category">${category}</span>`;
                }
                    
                linkHTMLString += `
                    </div>
                </div>
                `;

        linksList.innerHTML += linkHTMLString;
    }
}

displayLinks();

// "+" Button Functionality to Add New Links
addBtn.addEventListener('click', () => {
    // Upon click of the + button the panel will show
    showFormPanel();
});

// Cancel Button Functionality
cancelButton.addEventListener('click', () => {
    // Stop form from submitting
    event.preventDefault();

    // Upon click of the cancel button the panel will be hidden
    hideFormPanel();
});

// Shows the Add Link Panel
const showFormPanel = () => {
    // Removes the hidden class from the panel
    addLinkPanel.classList.remove("hidden");
}

// Hides the Add Link Panel
const hideFormPanel = () => {
    // Adds the hidden class to the panel
    addLinkPanel.classList.add("hidden");
    clearLinkForm();
}

// Checks for "," keyCode as the user adds categories
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

// Displays the Link Categories as you are creating a new link
const displayLinkCatgeories = () => {
    addedCategories.innerHTML = '';
    for (let category of linkedCategories) {
        let categoryHTMLString = `<span class="category">${category}</span>`;
        addedCategories.innerHTML += categoryHTMLString;   
    }
}

// Clears the Add Link Form
const clearLinkForm = () => {
        // Clears out all of the inputs in the form
        linkTitle.value = '';
        linkUrl.value = '';
        linkCategory.value = '';
        linkedCategories = [];
        addedCategories.innerHTML = '';
}

// Submit Button Functionality
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
    links.unshift(newLink); // We could use push, but unshift pushes it to top

    // Clears out all of the inputs in the form
    clearLinkForm();

    // Display the link Categories
    displayLinkCatgeories();

    // Hide the Panel after submission
    hideFormPanel();

    // Display the Links
    displayLinks();
});

