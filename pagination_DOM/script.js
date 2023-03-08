let heading1 = document.createElement("h1");
heading1.setAttribute("id", "title");
heading1.textContent = "Pagination DOM Task";
document.body.append(heading1);

let p = document.createElement("p");
p.setAttribute("id", "description");
p.textContent = "Using HTML, CSS and JS";
document.body.append(p);

let div1 = document.createElement("div");
div1.setAttribute("id", "div1");
div1.setAttribute("class", "table-responsive");
document.body.append(div1);

let divText = document.getElementById("div1");

let table = document.createElement("table");
table.setAttribute("class", "table");
divText.append(table);

let tab = document.querySelector(".table");
tab.classList.add("table-bordered");

let tr = document.createElement("tr");
tab.append(tr);

function createtabHEad(heading) {
  let th = document.createElement("th");
  th.textContent = heading;
  tr.append(th);
}

createtabHEad("Name:");
createtabHEad(`ID :`);
createtabHEad("Email:");

let tr1 = document.createElement("tr");
tab.append(tr1);

function createtabData(heading) {
  let td = document.createElement("th");
  td.setAttribute("id", `${heading}`);
  td.textContent = "Demo";
  tr1.append(td);
}

createtabData("name");
createtabData("idno");
createtabData("email");

let tableName = document.getElementById("name");
let tableid = document.getElementById("idno");
let tableemail = document.getElementById("email");

let divlast = document.createElement("div");
divlast.setAttribute("id", "buttons");
divlast.setAttribute("class", "d-flex");
document.body.append(divlast);

let divPage = document.getElementById("buttons");
divPage.classList.add("justify-content-center");

let unorderedList = document.createElement("ul");
unorderedList.setAttribute("id", "ulList");
unorderedList.setAttribute("class", "pagination");
unorderedList.setAttribute("data-current-page", "1");
divPage.append(unorderedList);

let unlist = document.getElementById("ulList");

let list = document.createElement("li");

let createlist = function (i) {
  let list = document.createElement("li");
  list.setAttribute("class", "page-item");
  let anchortag = document.createElement("a");
  anchortag.setAttribute("class", "page-link");
  anchortag.setAttribute("href", "#");
  anchortag.textContent = `${i}`;
  unlist.append(list);
  list.append(anchortag);
};

let order1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let order2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let order3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let order4 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
let order5 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
let order6 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
let order7 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
let order8 = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
let order9 = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
let order10 = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
let allorder = [
  order1,
  order2,
  order3,
  order4,
  order5,
  order6,
  order7,
  order8,
  order9,
  order10,
];
let currentpage = 1;
let presentpage = 1;
let jsonfile = new XMLHttpRequest();
jsonfile.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
);
jsonfile.send();
jsonfile.onload = function () {
  if (jsonfile.status == 200) {
    let users = JSON.parse(jsonfile.response);
    let usersLen = users.length;
    createlist("First");

    createlist("Previous");
    for (let i = 2; i <= usersLen; i++) {
      createlist(i);
    }
    createlist("Next");
    createlist("Last");
    let pageList = document.querySelectorAll(".page-item");
    console.log(pageList[0]);
    // pageList[0].classList.add("disabled");
    let firstpage = pageList[0];
    let previouspage = pageList[1];
    let nextpage = pageList[usersLen + 1];
    let lastpage = pageList[usersLen + 2];

    let pageinwindow = function (n) {
      pageList.forEach((t) => {
        t.classList.add("d-none");
        t.classList.remove("active");
      });
      firstpage.classList.remove("d-none");
      previouspage.classList.remove("d-none");
      nextpage.classList.remove("d-none");
      lastpage.classList.remove("d-none");

      allorder.forEach((arr) => {
        if (arr.includes(+n)) {
          arr.forEach((value) => {
            pageList[value].classList.remove("d-none");
          });
        }
      });
    };

    function showtodiv(n) {
      if (Number.isInteger(+n)) {
        let show = +n - 1;
        //     divText.innerHTML = `Name:${users[show].name}<br>
        // ID:${users[show].id}<br>
        // Email:${users[show].email}`;
        tableName.textContent = users[show].name;
        tableid.textContent = users[show].id;
        tableemail.textContent = users[show].email;
        pageinwindow(n);
        pageList[+n].classList.add("active");
        previouspage.classList.remove("active");
      }

      //   if (n == "First") {
      //     divText.innerHTML = `Name:${users[0].name}<br>
      // ID:${users[0].id}<br>
      // Email:${users[0].email}`;
      //     previouspage.classList.add("disable");
      //   }
    }
    firstpage.addEventListener("click", function () {
      presentpage = 1;
      showtodiv(presentpage);
      firstpage.classList.add("active");
    });
    lastpage.addEventListener("click", function () {
      presentpage = 100;
      showtodiv(presentpage);
      lastpage.classList.add("active");
    });
    nextpage.addEventListener("click", function () {
      if (presentpage == 100) lastpage.classList.add("active");
      if (presentpage <= 100) {
        presentpage += 1;
        showtodiv(presentpage);
      }
    });
    previouspage.addEventListener("click", function () {
      if (presentpage == 1) firstpage.classList.add("active");
      if (presentpage >= 2) {
        presentpage -= 1;
        showtodiv(presentpage);
      }
    });
    // it will show you the result as per button click
    unlist.addEventListener("click", function (e) {
      let n = e.target.textContent;
      if (Number.isInteger(+n)) {
        presentpage = +n;
      }
      showtodiv(n);

      //   if (Number.isInteger(+value.textContent)) {
      //     value.classList.add("d-none");
      //   }
    });
    showtodiv(presentpage);
  } else {
    console.log(xhr.status);
    is;
  }
};
