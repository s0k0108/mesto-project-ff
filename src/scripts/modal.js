const escape = 'Escape';


const modalOpen = function (popup) {
    popup.classList.add('popup_is-opened');
    popup.querySelector('.popup__close').addEventListener('click', modalClose,{once: true});
    document.addEventListener('keydown', escClickHandler);
    document.addEventListener('click', overlayClickHandler);
}

const modalClose = () => {
    document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
    document.removeEventListener('keydown', escClickHandler);
    document.removeEventListener('click', overlayClickHandler);
}

const overlayClickHandler = function (evt) {
    const popup = document.querySelector('.popup_is-opened');
    if (evt.target === popup) {
        modalClose();
    }
}

const escClickHandler = function (evt) {
    if (evt.key === escape) {
        modalClose();
    }
}

export {modalOpen, modalClose};