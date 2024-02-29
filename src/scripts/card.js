import {modalOpen} from './modal.js';
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

const imageFullScreenModal = document.querySelector('.popup_type_image');
const imageFullScreenModalPicture = document.querySelector('.popup__image');
const imageFullScreenModalName = document.querySelector('.popup__caption');

const createCard = (data, removeFunction, showFullScreenFunction, likeBtnFunction) => {
    const card = cardTemplate.cloneNode(true);


    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const cardDeleteBtn = card.querySelector('.card__delete-button');
    const likeBtn = card.querySelector('.card__like-button');

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    cardDeleteBtn.addEventListener('click', removeFunction);

    cardImage.addEventListener('click', showFullScreenFunction);

    likeBtn.addEventListener('click', likeBtnFunction);

    return card;
}

const onImageClickHandler = function (evt) {
    modalOpen(imageFullScreenModal);
    imageFullScreenModalPicture.src = evt.target.src;
    imageFullScreenModalPicture.alt = evt.target.closest('.card').textContent;
    imageFullScreenModalName.textContent = evt.target.closest('.card').textContent;

}

const renderTemplate = (template, container, flag = true) => {
    flag ? container.prepend(template) : container.append(template);
}

const removeBtnClickHandler = (evt) => {
    evt.target.closest('.card').remove();
}

const likeBtnClickHandler = function (evt) {
    evt.target.classList.toggle('card__like-button_is-active');
}

export {createCard, onImageClickHandler, renderTemplate, removeBtnClickHandler, likeBtnClickHandler}