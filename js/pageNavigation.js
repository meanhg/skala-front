var menuLinks = document.querySelectorAll("nav a[data-page]");
var homeContent = document.getElementById("home-content");
var pageContent = document.getElementById("page-content");

for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function (event) {
        event.preventDefault();
        showPage(this.dataset.page);
    });
}

function showPage(page) {
    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].classList.remove("active");
    }

    document.querySelector('nav a[data-page="' + page + '"]').classList.add("active");

    if (page === "home") {
        homeContent.hidden = false;
        pageContent.hidden = true;
        return;
    }

    homeContent.hidden = true;
    pageContent.hidden = false;
    pageContent.innerHTML = "페이지를 불러오는 중입니다.";

    fetch(page)
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            var documentData = new DOMParser().parseFromString(html, "text/html");
            var pageContainer = documentData.querySelector(".container");

            pageContent.innerHTML = pageContainer.innerHTML;
        })
        .catch(function () {
            pageContent.innerHTML = "페이지를 불러오지 못했습니다.";
        });
}
