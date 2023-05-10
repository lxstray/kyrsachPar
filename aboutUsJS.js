function test1() {
  var number = document.querySelector(".number1"),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML,
    end = +number.dataset.max;

  window.addEventListener("scroll", function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener("scroll", onScroll);
      var interval = setInterval(function () {
        number.innerHTML = ++start;
        if (start == end) {
          clearInterval(interval);
        }
      }, 80);
    }
  });
}
test1();

function test2() {
  var number = document.querySelector(".number2"),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML,
    end = +number.dataset.max;

  window.addEventListener("scroll", function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener("scroll", onScroll);
      var interval = setInterval(function () {
        number.innerHTML = ++start;
        if (start == end) {
          clearInterval(interval);
        }
      }, 10);
    }
  });
}
test2();

function test3() {
  var number = document.querySelector(".number3"),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML,
    end = +number.dataset.max;

  window.addEventListener("scroll", function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener("scroll", onScroll);
      var interval = setInterval(function () {
        number.innerHTML = ++start;
        if (start == end) {
          clearInterval(interval);
        }
      }, 50);
    }
  });
}
test3();

function test4() {
  var number = document.querySelector(".number4"),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML,
    end = +number.dataset.max;

  window.addEventListener("scroll", function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener("scroll", onScroll);
      var interval = setInterval(function () {
        number.innerHTML = ++start;
        if (start == end) {
          clearInterval(interval);
        }
      }, 80);
    }
  });
}
test4();
