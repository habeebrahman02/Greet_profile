const userData = {
  userName: "HABEEB RAHMAN J",
  userTitle: "Full Stack Developer",
  userAbout: "Full Stack Developer skilled in building scalable web applications, optimizing performance, and delivering seamless user experiences. Passionate about innovation and problem-solving.",
  profileUrl: "habeee.jpg",
  coverUrl: "cover.jpg"
}
const userNameBox = document.querySelector(".user-name");
const userTitleBox = document.querySelector(".user-title");
const userAboutBox = document.querySelector(".user-about");
const coverWrapper = document.querySelector(".cover-wrapper");
const profileWrapper = document.querySelector(".avatar-wrapper");

const profileImg = document.createElement("img");
profileImg.src = userData.profileUrl;
const coverImg = document.createElement("img");
coverImg.src = userData.coverUrl

setTimeout(() => {
  insertUserDetails()
  document.querySelector(".profile-card").classList.remove("loading")
  removeSkeleton();
}, 1000);

const insertUserDetails = () => {
  userNameBox.innerHTML = userData.userName;
  userTitleBox.innerHTML = userData.userTitle;
  userAboutBox.innerHTML = userData.userAbout;
  coverWrapper.append(coverImg);
  profileWrapper.append(profileImg);
}

const removeSkeleton = () => {
  document.querySelectorAll(".skeleton").forEach((elem) => {
    elem.classList.remove("skeleton")
  })
}