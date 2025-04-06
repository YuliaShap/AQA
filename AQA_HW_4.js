// Easy level 
// $x("//h1")
// $x("//img[@alt]")
// $x(''//button[normalize-space(text())="Start forming a habit!"]')
// $x('//li[@class="search-icon"]')
// $x('//input[@type="checkbox"]') 


// Medium level
// Task 1
document.evaluate('//h1', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

// Task 2
const imagesWithAlt = document.evaluate('//img[@alt]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (let i = 0; i < imagesWithAlt.snapshotLength; i++) {
    let img = imagesWithAlt.snapshotItem(i);
    console.log(`Image #${i + 1}:`, img.src, `Alt: ${img.alt}`);
}

// Task 3
const buttons = document.evaluate('//button[normalize-space(text())="Start forming a habit!"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
if (buttons.snapshotLength > 0) {
    for (let i = 0; i < buttons.snapshotLength; i++) {
        console.log(buttons.snapshotItem(i));
    }
} else {
    console.log('No button with the text "Start forming a habit!" found.');
}

// Task 4
const searchIcon = document.evaluate('//li[contains(@class, "search-icon")]//img[@alt="Internal search button"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (searchIcon) {
    const isVisible = searchIcon.offsetWidth > 0 && searchIcon.offsetHeight > 0;
    const altText = searchIcon.alt;
    const srcPath = searchIcon.src;

    if (isVisible) {
        console.log('Search icon is visible.');
    } else {
        console.log('Search icon is not visible.');
    }

    if (altText && srcPath) {
        console.log(`Search icon has the correct alt text: "${altText}"`);
        console.log(`Search icon src path: ${srcPath}`);
    } else {
        console.log('Search icon is missing alt text or src path.');
    }
} else {
    console.log('Search icon not found on the page.');
}

// Task 5
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let checkedCount = 0;
let uncheckedCount = 0;

checkboxes.forEach(checkbox => {
  if (checkbox.checked) {
    checkedCount++;
  } else {
    uncheckedCount++;
  }
});
console.log(`Number of checked checkboxes: ${checkedCount}`);
console.log(`Number of unchecked checkboxes: ${uncheckedCount}`);