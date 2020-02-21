users = [
  {
    name: 'John Doe',
    status: 1,
    position: 'Department',
    rating: 9.5,
    date: 'date',
    avatar:'assets/images/icons/avatar.png',
  },
  {
    name: 'Name Username',
    status: 4,
    position: 'Department',
    rating: 7.5,
    date: 'date',
    avatar:'assets/images/header/user1.png',

  },
  {
    name: 'Your name',
    status: 2,
    position: 'Department',
    rating: 8.0,
    date: 'date',
    avatar:'assets/images/icons/avatar.png',

  },
  {
    name: 'John Doe',
    status: 1,
    position: 'Department',
    rating: 9.5,
    date: 'date',
    avatar:'assets/images/icons/avatar.png',
  },
  {
    name: 'Name Username',
    status: 4,
    position: 'Department',
    rating: 7.5,
    date: 'date',
    avatar:'assets/images/header/user1.png',

  },
  {
    name: 'Your name',
    status: 2,
    position: 'Department',
    rating: 8.0,
    date: 'date',
    avatar:'assets/images/icons/avatar.png',

  },
  {
    name: 'John Doe',
    status: 1,
    position: 'Department',
    rating: 9.5,
    date: 'date',
    avatar:'assets/images/icons/avatar.png',
  },
  {
    name: 'Name Username',
    status: 4,
    position: 'Department',
    rating: 7.5,
    date: 'date',
    avatar:'assets/images/header/user1.png',

  },
  {
    name: 'Your name',
    status: 2,
    position: 'Department',
    rating: 8.0,
    date: 'date',
    avatar:'assets/images/icons/avatar.png',

  },
]

ul = document.querySelector("#usersbox ul")
for(let i=0; i<users.length; i++){
  li = document.createElement('li')
  if (i==1){
    li.setAttribute('class','user-active')
  }

  imgdiv = document.createElement('div')
  imgdiv.setAttribute('id', 'img')
  img = document.createElement('img')
  img.setAttribute('src', users[i].avatar)
  imgdiv.append(img)

  infodiv = document.createElement('div')
  infodiv.setAttribute('id', 'info')
  namediv = document.createElement('div')
  namediv.innerHTML = users[i].name
  namediv.setAttribute('id', 'name')
  statusdiv = document.createElement('div')
  statusdiv.innerHTML = "Status " + users[i].status
  statusdiv.setAttribute('id', 'status')
  positiondiv = document.createElement('div')
  positiondiv.innerHTML = users[i].position
  positiondiv.setAttribute('id', 'position')
  infodiv.append(namediv, statusdiv, positiondiv)

  additiondiv = document.createElement('div')
  additiondiv.setAttribute('id', 'addition')
  datediv = document.createElement('div')
  datediv.innerHTML = users[i].date
  datediv.setAttribute('id', 'date')
  ratingdiv = document.createElement('div')
  ratingdiv.innerHTML = users[i].rating
  ratingdiv.setAttribute('id', 'rating')
  additiondiv.append(datediv, ratingdiv)

  li.append(imgdiv, infodiv, additiondiv)
  ul.append(li)
}
list = document.querySelectorAll("#usersbox li")
for(let i=0; i<list.length; i++){
  list[i].addEventListener('click', function(){
    name = this.querySelector("#name").innerHTML
    if(document.querySelector('.user-active')){
      active = document.querySelector('.user-active')
      active.classList.remove("user-active");
    }
    this.setAttribute('class','user-active')
    target = document.querySelector('.profile-fullname')
    target.innerHTML = name
    if(document.querySelector('#dashboard').style.display == 'none'){
      document.querySelector('#dashboard').style.display = 'block'
    }
  })
}


function hideUser(){
  element = document.querySelector('#dashboard')
  element.style.display = "none";
}


toggle = true
function changeFavorite() {
  element = document.querySelector('.favorite a img')
  if(toggle === true){
    element.src = "assets/images/icons/favorite_gray.svg"
    toggle = false
  }
  else{
    element.src = "assets/images/icons/favorite.svg"
    toggle = true
  }
}
