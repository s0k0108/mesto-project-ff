import '../pages/index.css';
import {initialCards} from './cards.js'
import {modalOpen, modalClose} from './modal.js'
import {createCard, onImageClickHandler, renderTemplate, removeBtnClickHandler, likeBtnClickHandler} from './card.js'
const cardsList = document.querySelector('.places__list');
const profileEditModal = document.querySelector('.popup_type_edit');
const profileEditBtn = document.querySelector('.profile__edit-button');
const placeAddBtn = document.querySelector('.profile__add-button');
const placeAddModal = document.querySelector('.popup_type_new-card');
const addCardForm = document.querySelector('.popup__add-card-form');
const addCardFormName = document.querySelector('.popup__input_type_card-name');
const addCardFormUrl = document.querySelector('.popup__input_type_url');
const editProfileForm = document.querySelector('.popup__form-edit-profile');
const editProfileFormName = document.querySelector('.popup__input_type_name');
const editProfileFormJob = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');


profileEditBtn.addEventListener('click', function () {
    editProfileFormName.value = profileName.textContent;
    editProfileFormJob.value = profileJob.textContent;
    modalOpen(profileEditModal);
    editProfileForm.addEventListener('submit', editProfileFormSubmitHandler);
});

placeAddBtn.addEventListener('click', function () {
    modalOpen(placeAddModal);
    addCardForm.addEventListener('submit', addCardFormSubmitHandler);
});

const addCardFormSubmitHandler = function (evt) {
    evt.preventDefault();
    const name = addCardFormName.value;
    const link = addCardFormUrl.value;
    renderTemplate(createCard({name, link}, removeBtnClickHandler, onImageClickHandler, likeBtnClickHandler), cardsList, true);
    modalClose();
    addCardForm.reset();
    addCardForm.removeEventListener('submit', addCardFormSubmitHandler);
}

const editProfileFormSubmitHandler = function (evt) {
    evt.preventDefault();
    if (profileName.textContent !== editProfileFormName.value) {
        profileName.textContent = editProfileFormName.value;
    }

    if (profileJob.textContent !== editProfileFormJob.value) {
        profileJob.textContent = editProfileFormJob.value;
    }

    modalClose();
    editProfileForm.removeEventListener('submit', editProfileFormSubmitHandler);
}


initialCards.forEach((element) => renderTemplate(createCard(element, removeBtnClickHandler, onImageClickHandler, likeBtnClickHandler), cardsList, false));

export {addCardForm}