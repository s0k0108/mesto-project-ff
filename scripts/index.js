const cardsList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');


const createCard = (data) => {
    const card = cardTemplate.cloneNode(true);


    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const cardDeleteBtn = card.querySelector('.card__delete-button');

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    cardDeleteBtn.addEventListener('click', removeBtnClickHandler);

    return card
}

const renderTemplate = (template, container, flag = true) => {
    flag ? container.prepend(template) : container.append(template);
}

const removeBtnClickHandler = (evt) => {
    evt.target.parentNode.remove();
}

initialCards.forEach((element) => renderTemplate(createCard(element), cardsList, false));