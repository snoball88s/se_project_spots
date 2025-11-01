const profileEditButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(".modal__close-button");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescInput = editProfileModal.querySelector("#profile-description-input");

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

const profileNameElement = document.querySelector(".profile__name");
const profileDescElement = document.querySelector(".profile__description");

const newPostImgInput = newPostModal.querySelector("#image-link-input");
const newPostCaptionInput = newPostModal.querySelector("#caption-input");


profileEditButton.addEventListener("click", function() {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescInput.value = profileDescElement.textContent;
  openModal(editProfileModal);
})

editProfileCloseButton.addEventListener("click", function(){
  closeModal(editProfileModal);
})

newPostButton.addEventListener("click", function(){
  openModal(newPostModal);
})

newPostCloseButton.addEventListener("click", function(){
  closeModal(newPostModal);
})

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleEditProfileSubmit(evt){
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescElement.textContent = editProfileDescInput.value;
  closeModal(editProfileModal);
}

function handleNewPostSubmit(evt){
  evt.preventDefault();
  console.log(newPostImgInput.value);
  console.log(newPostCaptionInput.value);
  closeModal(newPostModal);

}

newPostModal.addEventListener("submit", handleNewPostSubmit);

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
