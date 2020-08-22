let items = document.querySelectorAll('.food-item');
let links = document.querySelectorAll('.food-item-wrapper a');
let buttons = document.querySelectorAll('.toggler');


items = [].slice.call(items);
links = Array.prototype.slice.call(links);


for (let i = 0; i < items.length; i++) {
    items[i].onclick = function (e) {
        if (!e.currentTarget.classList.contains('food-item_disabled')) {
            e.currentTarget.classList.toggle("food-item_selected");
            links[items.indexOf(e.currentTarget)].parentElement.classList.toggle("hide");
            links[items.indexOf(e.currentTarget)].parentElement.nextElementSibling.classList.toggle("hide");
        }
    };

    links[i].onclick = function (e) {
        if (!items[links.indexOf(e.currentTarget)].classList.contains('food-item_disabled')) {
            items[links.indexOf(e.currentTarget)].classList.toggle("food-item_selected");
            e.currentTarget.parentElement.classList.add("hide");
            e.currentTarget.parentElement.nextElementSibling.classList.toggle("hide");
        }
    };

    buttons[i].onclick = function (e) {
        e.currentTarget.parentElement.firstElementChild.classList.toggle("food-item_disabled");
        if (e.currentTarget.parentElement.firstElementChild.classList.contains("food-item_disabled")) {
            e.currentTarget.textContent = "Disabled"
        } else {
            e.currentTarget.textContent = "Enabled"
        }
    };
}

// let ht = document.documentElement.clientHeight;
// let wh = document.documentElement.clientWidth;
// let cf = document.querySelector('.cat-food');

// cf.style.height = ht + "px";