const requestURL = 'https://marcosbarrozo.github.io/wdd230/chamber/directory/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
    prophets.forEach(displayBusiness);
});

function displayBusiness(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let phone = document.createElement('p');
    let website = document.createElement('p');
   
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = business.name;
    phone.textContent = business.phone;
    website.textContent = business.website;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', `images/${business.image}`);
    portrait.setAttribute('alt', `Logo of  ${business.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);    
    card.appendChild(phone);  
    card.appendChild(website);
    card.appendChild(portrait);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }