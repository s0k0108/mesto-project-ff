import '../pages/index.css';
import {initialCards} from './cards.js'
import {openModal, closeModal} from './modal.js'
import {createCard, removeBtnClickHandler, likeBtnClickHandler} from './card.js'
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
const imageFullScreenModal = document.querySelector('.popup_type_image');
const imageFullScreenModalPicture = document.querySelector('.popup__image');
const imageFullScreenModalName = document.querySelector('.popup__caption');

profileEditBtn.addEventListener('click', function () {
    editProfileFormName.value = profileName.textContent;
    editProfileFormJob.value = profileJob.textContent;
    openModal(profileEditModal);

});

placeAddBtn.addEventListener('click', function () {
    openModal(placeAddModal);
});

const addCardFormSubmitHandler = function (evt) {
    evt.preventDefault();
    const name = addCardFormName.value;
    const link = addCardFormUrl.value;
    renderTemplate(createCard({name, link}, removeBtnClickHandler, onImageClickHandler, likeBtnClickHandler), cardsList, true);
    closeModal();
    addCardForm.reset();
}

const editProfileFormSubmitHandler = function (evt) {
    evt.preventDefault();
    if (profileName.textContent !== editProfileFormName.value) {
        profileName.textContent = editProfileFormName.value;
    }

    if (profileJob.textContent !== editProfileFormJob.value) {
        profileJob.textContent = editProfileFormJob.value;
    }

    closeModal();
}

const onImageClickHandler = function (evt) {
    openModal(imageFullScreenModal);
    imageFullScreenModalPicture.src = evt.target.src;
    imageFullScreenModalPicture.alt = evt.target.closest('.card').textContent;
    imageFullScreenModalName.textContent = evt.target.closest('.card').textContent;

}

const renderTemplate = (template, container, flag = true) => {
    flag ? container.prepend(template) : container.append(template);
}

editProfileForm.addEventListener('submit', editProfileFormSubmitHandler);
addCardForm.addEventListener('submit', addCardFormSubmitHandler);

initialCards.forEach((element) => renderTemplate(createCard(element, removeBtnClickHandler, onImageClickHandler, likeBtnClickHandler), cardsList, false));

export {addCardForm}