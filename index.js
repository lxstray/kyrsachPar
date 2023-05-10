//липкое меню
window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("head");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//рендер машин из json
fetch("cars/cars.json")
  .then((Response) => Response.json())
  .then((data) => {
    let car = data.cars;
    for (let i = 0; i < car.length; i++) {
      let card = document.createElement("div");
      card.className = "card";
      card.id = "card" + i;
      let span = document.createElement("span");
      span.className = "bio";
      let br = document.createElement("br");
      span.append(car[i].cmpn + " " + car[i].model);
      let price = document.createElement("span");
      price.className = "price";
      price.append(car[i].price);
      let img = document.createElement("img");
      img.className = "cardImg";
      img.src = car[i].img;

      let ind1 = document.createElement("div");
      ind1.className = "ind1"
      let svg1 = document.createElement("img");
      svg1.src = "img/ind/power.svg"
      svg1.className = "svg1"
      let hp = document.createElement("span")
      hp.className = "hp"
      hp.append(car[i].power)
      ind1.append(svg1)
      ind1.append(hp)

      let ind2 = document.createElement("div");
      ind2.className = "ind1"
      let svg2 = document.createElement("img");
      svg2.src = "img/ind/fuel.svg"
      svg2.className = "svg1"
      let fuel = document.createElement("span")
      fuel.className = "hp"
      fuel.append(car[i].con)
      ind2.append(svg2)
      ind2.append(fuel)


      card.append(img);
      card.append(span);
      card.append(br);
      card.append(ind1);
      card.append(ind2);
      card.append(price);
      document.getElementById("cars").append(card);
    }
  });
