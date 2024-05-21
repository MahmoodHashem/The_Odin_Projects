

function Book(title, author, pages, state) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.state = state;
}



const openModal = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const cancel = document.querySelector("[data-cancel]");
const addbtn = document.querySelector("[data-add]")


const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("page");

const bookLists = document.querySelector(".book-lists");
const lastChild = document.querySelector(".add-book");


// This array is for storing the books
let itemArr = [];


openModal.addEventListener('click', () => {
    title.value = "";
    author.value = "";
    pages.value = "";
    modal.showModal();

});

addbtn.addEventListener("click", () => {
    if (title.value !== "" && author.value !== "" && pages.value !== "") {
        const state = getSelectedRadioValue();
        const book = new Book(title.value, author.value, pages.value, state === '1' ? true : false);
        itemArr.push(createItem(book.title, book.author, book.pages, book.state ? "Read" : "Unread"));


        /* This is iterating over each item in the `itemArr` array and inserting each item
        into the `bookLists` element before the `lastChild` element. This means that for each item in
        the `itemArr`, it is being added to the list of books displayed on the webpage before the
        "Add Book" button. */
        itemArr.forEach(item => {
            bookLists.insertBefore(item, lastChild);
        })
    }
})

cancel.addEventListener('click', () => {
    modal.close();

});


/**
 *  Retrieves the value of the selected radio button in a group of radio buttons with the name 'state'.
 * 
 * @returns {string} The value of the selected radio button.
 */
function getSelectedRadioValue() {
    let radioButtons = document.querySelectorAll("input[name ='state']");
    let selectedValue;
    radioButtons.forEach(radio => {
        if (radio.checked) {
            selectedValue = radio.value;
        }
    });

    return selectedValue;
}



/**
 * Creates an item element for a book with the provided title, author, pages, and state.
 * 
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {string} pages - The number of pages in the book.
 * @param {string} state - The state of the book (Read or Unread).
 * @returns {HTMLElement} - The created item element containing book details and buttons.
 */
function createItem(title, author, pages, state) {
    let itemWrapper = document.createElement("div");
    itemWrapper.classList.add('item-wrapper');

    let item = document.createElement("div");
    item.classList.add("item");


    let bookName = document.createElement("div");
    bookName.classList.add('book-name');
    bookName.textContent = `"${title}"`;

    item.appendChild(bookName);

    let authorCon = document.createElement('div');
    authorCon.classList.add("autho-con");
    authorCon.innerHTML = `<br>by<br><br><strong class="author">${author}</strong>`

    item.appendChild(authorCon);


    const page = document.createElement('div');
    page.classList.add('pages');
    page.innerHTML = `<br>${pages} pages`;
    item.appendChild(page);

    const status = document.createElement('div');
    status.classList.add('state');
    status.innerHTML = `<br>${state}`;
    item.appendChild(status);

    const btns = document.createElement('div');
    btns.classList.add('btns');

    const readBtn = document.createElement('button');
    readBtn.classList.add('btn', 'read-btn');
    readBtn.textContent = state === "Read" ? "Unread" : "Read";

    readBtn.onclick = function () {
        /* This block of code is handling the functionality for toggling the read status of a book item
        displayed on the webpage. Here's what each line is doing: */
        state = state === "Read" ? "Unread" : "Read";
        status.innerHTML = `<br>${state === "Read" ? "Unread" : "Read"}`
        readBtn.textContent = state === "Read" ? "Read" : "Unread";

    };
    btns.appendChild(readBtn);




    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'delete-btn');
    deleteBtn.textContent = 'Delete';
    /* This block of code is handling the functionality for deleting a book item from the webpage. Here's
    a breakdown of what it does: */
    deleteBtn.onclick = function () {
        if (itemArr !== null) {
            bookLists.removeChild(itemArr[itemArr.length - 1])
            itemArr.pop();
        }
    }
    btns.appendChild(deleteBtn);
    itemWrapper.appendChild(item);
    itemWrapper.appendChild(btns);

    console.log(itemWrapper)

    return itemWrapper;

}
