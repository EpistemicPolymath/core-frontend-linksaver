

const linkCategory = document.querySelector("#linkCategory");

let linkedCategories = [];

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