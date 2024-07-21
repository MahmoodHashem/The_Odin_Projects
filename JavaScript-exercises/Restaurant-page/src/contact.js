

export default function createContact(){
    // Create the section element
const contactSection = document.createElement('section');
contactSection.id = 'contact';

// Create the form element
const form = document.createElement('form');
form.setAttribute('action', '#');

// Create the heading
const heading = document.createElement('h2');
heading.textContent = 'Contact with Us';

// Create the name input
const nameLabel = document.createElement('div');
nameLabel.classList.add('name-label', 'label');
const nameLabel_label = document.createElement('label');
nameLabel_label.setAttribute('for', 'name');
nameLabel_label.textContent = 'Name';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.required = true;
nameInput.id = 'name';
nameLabel.appendChild(nameLabel_label);
nameLabel.appendChild(nameInput);

// Create the email input
const emailLabel = document.createElement('div');
emailLabel.classList.add('email', 'label');
const emailLabel_label = document.createElement('label');
emailLabel_label.setAttribute('for', 'email');
emailLabel_label.textContent = 'Email';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.required = true;
emailInput.id = 'email';
emailLabel.appendChild(emailLabel_label);
emailLabel.appendChild(emailInput);

// Create the message textarea
const messageLabel = document.createElement('div');
messageLabel.classList.add('message', 'label');
const messageLabel_label = document.createElement('label');
messageLabel_label.setAttribute('for', 'message');
messageLabel_label.textContent = 'Message';
const messageTextarea = document.createElement('textarea');
messageTextarea.cols = '30';
messageTextarea.rows = '8';
messageTextarea.name = 'message';
messageTextarea.id = 'message';
messageLabel.appendChild(messageLabel_label);
messageLabel.appendChild(messageTextarea);

// Create the submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';

// Assemble the form and add it to the section
form.appendChild(heading);
form.appendChild(nameLabel);
form.appendChild(emailLabel);
form.appendChild(messageLabel);
form.appendChild(submitButton);
contactSection.appendChild(form);

// Append the contact section to the document
const main = document.querySelector("main"); 
main.appendChild(contactSection);
}