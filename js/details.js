// PAGE DETAILS
const stored = Number(localStorage.getItem("detail"))
console.log(stored)

function detailsRender(ev) {
  const detailsCards = document.getElementById("details__cards");

  detailsCards.innerHTML = `
      <div class="container__details">
          <div class="content__image">
          </div>
          <div class="content__infoDetails">
              <h2 class="name__events">${ev.eventos[stored].name}</h2>
              <p class="price__events">${ev.eventos[stored].price}</p>
              <p class="category__events">${ev.eventos[stored].category}</p>
              <!-- <p>Ver formas de pago</p> -->
              <p class="descriptions__events">${ev.eventos[stored].description}</p>
              <button type="button" class="button__buy">Buy Tickets</button>
          </div>
      </div>
      `;
      
}
detailsRender(data);
