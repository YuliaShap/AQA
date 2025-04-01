// Find all images on the page.
// $ ('img')

// Find images that are icons on the web.
// $ ('img[src*="icon"]')

// Find all button elements present on a specified web page
// $ ('button')
// $ ('.btn')
// $ ('.primary-global-button btn')

// Find all input fields on a web page.
// $ ('input')

// Find the link that is responsible for going to the map to find a place to buy eco-bags.
// $$ ('a[href="#/places"]')[0]



// Task 1
// On a Home page, there are a series of images. Write a script 
// Iterates through all the images on the page.
// Logs to the console those images that have a height greater than 300 pixels.
// After analyzing all images, displays in the console the total number of images that meet the condition.

const images = document.querySelectorAll('img');
let count = 0;
images.forEach(image => {
    if (image.height > 300) {
        console.log(`Image with URL: ${image.src} has a height of ${image.height}px`);
        count++;
    }
});
console.log(`Total number of images with a height greater than 300 pixels: ${count}`);



// Task 2 
// Display the number of unique colors used in the elements on the page.

let uniqueColors = new Set();
const elements = document.querySelectorAll('*');
elements.forEach(element => {
    const color = window.getComputedStyle(element).color;
    const backgroundColor = window.getComputedStyle(element).backgroundColor;
    if (color) {
        uniqueColors.add(color);
    }
    if (backgroundColor) {
        uniqueColors.add(backgroundColor);
    }
});
console.log(`Number of unique colors: ${uniqueColors.size}`);

// Task 3
// Find all button elements present on a specified web page and output the cumulative quantity of these buttons.

const buttons = document.querySelectorAll('button');
console.log('Number of buttons on the page:', buttons.length);

// Task 4
// Find and determine the types of all input fields (input) on a web page.

const inputFields = document.querySelectorAll('input');
inputFields.forEach((input, index) => {
    console.log(`Input field ${index + 1}: Type - ${input.type}`);
});


// Task 5
// Utilizing CSS selectors in conjunction with JavaScript, identify all the social media button elements present on a specified web page and determine their respective destination URLs.

const socialMediaButtons = document.querySelectorAll('a.footer_social-link'); // Вибираємо всі елементи з класом footer_social-link
socialMediaButtons.forEach((button, index) => {
    const img = button.querySelector('img');
    if (img) {
        const altText = img.alt.toLowerCase();
        if (altText.includes("twitter") || altText.includes("facebook") || altText.includes("instagram") || altText.includes("linkedin")) {
            console.log(`Social media button ${index + 1}: URL - ${button.href}`);
        }
    }
});

