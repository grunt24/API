fetch('https://fakestoreapi.com/products')
  .then((data) => {
    // Convert the response to JSON
    return data.json();
  })
  .then((completedata) => {
    let data1 = '';
    // Iterate through the first 5 items in the array
    for (let i = 0; i < 5; i++) {
      const values = completedata[i];
      data1 += `
        <div id="cards">
          <div class="cards shadow">
              <h4 class="title">${values.title}</h4>
              <img src="${values.image}" alt="img" class="images">
              <p>${values.description}</p>
              <p class="category">${values.category}</p>
              <p class="price">${values.price}</p>
          </div> 
        </div>`;
    }
    // Set the HTML content of the 'cards' container
    document.getElementById('cards').innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
