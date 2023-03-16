document.body.innerHTML = `<div class="container1">
<div class="websiteName">
  <div class="headline text-white">
    <h1 class="text-white headline_h">Brewery DB</h1>
    <p class="headline_p">Free and Open-source</p>
  </div>
</div>
<div class="header">
  <form class="row g-1">
    <div class="col-auto">
      <input
        type="text"
        class="form-control"
        placeholder="Search anything..."
      />
    </div>
    <div class="col-auto">
      <button type="submit" class="btn custom-btn">Search</button>
    </div>
  </form>
</div>
</div>
<div class="result row pt-5 m-auto row1"></div>`;

const form = document.querySelector("form");
const input = document.querySelector("input");
const breweryContent = document.querySelector(".result");
breweryContent.innerHTML =
  "<p class='text-center'>Powered by www.openbrewerydb.org</p>";

async function fetchBreweries(search) {
  try {
    const response = await fetch(
      `https://api.openbrewerydb.org/breweries/search?query=${search}`
    );
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}
function card(name, type, street, city, state, pcode, web, phone) {
  let div1 = document.createElement("div");
  div1.setAttribute("class", "col-sm-6 col-md-4 col-lg-3 col-xl-3");
  div1.innerHTML = ` <div class="card h-100 card-custom border-warning rounded-5 text-left">
        <div class="card-header card-custom-img rounded-5 rounded-bottom h3 bg-dark text-white">
          ${name}
        </div>
        <div class="card-body bg-warning">
          
          <div class="card-text brewery-type h5">Type : ${type}</div>
          <div class="card-text h5">Address: ${street}, ${city}, ${state}, <small>${pcode}</small></div>
          <div class="card-text h5">Phone : ${phone}</div>
          
          
          <div class="card-footer bg-warning border-0">
              <a href="${web}" target="_blank" class="btn custom-btn">Website</a>
            </div>
        </div>
    </div>`;
  breweryContent.append(div1);
}

function displayData(breweries) {
  breweryContent.innerHTML = "";
  let breweriesLength = breweries.length;
  if (breweriesLength === 0) {
    breweryContent.innerHTML = "<p class='text-center'>No breweries found.</p>";
  } else {
    breweryContent.innerHTML = `<p class='text-center'>${breweriesLength} breweries found.</p>`;
    breweries.forEach((obj) => {
      card(
        obj.name,
        obj.brewery_type,
        obj.street,
        obj.city,
        obj.state,
        obj.postal_code,
        obj.website_url,
        obj.phone
      );

      //   const breweryDiv = document.createElement("div");
      //   breweryDiv.classList.add("brewery");
      //   breweryDiv.innerHTML = `
      //     <h2>${brewery.name}</h2>
      //     <p>Type: ${brewery.brewery_type}</p>
      //     <p>Address: ${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}</p>
      //     <p>Website: <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
      //     <p>Phone: ${brewery.phone}</p>
      //   `;
      //   breweryContent.appendChild(breweryDiv);
    });
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let search = input.value;
  fetchBreweries(search);
});
