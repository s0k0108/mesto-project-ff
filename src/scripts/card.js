const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

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

const removeBtnClickHandler = (evt) => {
    evt.target.closest('.card').remove();
}

const likeBtnClickHandler = function (evt) {
    evt.target.classList.toggle('card__like-button_is-active');
}

export {createCard, removeBtnClickHandler, likeBtnClickHandler}