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
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescInput.value = profileDescEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
})

editProfileCloseButton.addEventListener("click", function(){
  editProfileModal.classList.remove("modal_is-opened");
})

newPostButton.addEventListener("click", function(){
  newPostModal.classList.add("modal_is-opened");
})

newPostCloseButton.addEventListener("click", function(){
  newPostModal.classList.remove("modal_is-opened");
})

function handleEditProfileSubmit(evt){
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescEl.textContent = editProfileDescInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

function handleNewPostSubmit(evt){
  evt.preventDefault();
  console.log(newPostImgInput.value);
  console.log(newPostCaptionInput.value);
  newPostModal.classList.remove("modal_is-opened");

}

newPostModal.addEventListener("submit", handleNewPostSubmit);

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
