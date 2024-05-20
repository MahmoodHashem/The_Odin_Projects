function Book(title, author, pages, state) {
    this.state = state;
    this.author = author;
    this.pages = pages;
    this.state = state;
}


const add = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const cancel = document.querySelector("[data-cancel]");

add.addEventListener('click', () => {
    modal.showModal();
})

cancel.addEventListener('click', () => {
    modal.close();
})
