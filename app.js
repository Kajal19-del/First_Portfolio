const menu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hambug-menu');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.setAttribute('style', 'display: block !important');
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const workCards = [
  {
    id: 1,
    title: 'Tonic',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    dot: './img/Counter.png',
    class: 'sectionLabel',
    para1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  specimen book.",
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    imageMob: './images/Portfolio1.png',
    imageDesk: './images/Desktop1.png',
    live: '#',
    source: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    dot: './img/Counter.png',
    class: 'desk-content',
    para1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    imageMob: './images/Portfolio2.png',
    imageDesk: './images/Desktop2.png',
    live: '#',
    source: '#',
  },
  {
    id: 3,
    title: 'Tonic',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    dot: './img/Counter.png',
    class: 'sectionLabel',
    para1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    imageMob: './images/Portfolio3.png',
    imageDesk: './images/Desktop3.png',
    live: '#',
    source: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    dot: './img/Counter.png',
    class: 'desk-content',
    para1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. It has survived not only five centuries.",
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    imageMob: './images/Portfolio4.png',
    imageDesk: './images/Desktop-4.png',
    live: '#',
    source: '#',
  },
];

const sectionLabel = document.getElementById('work');

workCards.forEach((item2) => {
  sectionLabel.innerHTML += `
  <div class="${item2.class}">
    <img class="portfolios" src="${item2.imageMob}" alt="card1">
    <img class="desk-img" src="${item2.imageDesk}" alt="card1">
    <div class="label-inside">
      <h2 class="section-title">${item2.title}</h2>
      <div class="section-options">
        <h3 class="optionBold">${item2.canopy[0]}</h3>
        <span class="dot"></span>
        <h3 class="options">${item2.canopy[1]}</h3>
        <span class="dot"></span>
        <h3 class="options">${item2.canopy[2]}</h3>
      </div>
      <p class="section-text">${item2.para1}</p>
      <ul class="section-skills">
        <li class="skills">${item2.tech[0]}</li>
        <li class="skills">${item2.tech[1]}</li>
        <li class="skills">${item2.tech[2]}</li>
      </ul>
      <a href="javascript:void(0)" class="btn-text" name="${item2.id}">See Project</a>
    </div>
  </div>
  `;
});

sectionLabel.innerHTML += '<div id="popUp" class="popUp hide"></div>';

const seeProject = document.querySelectorAll('.btn-text');
const popUp = document.getElementById('popUp');

seeProject.forEach((item) => {
  item.addEventListener('click', () => {
    const name = parseInt(item.getAttribute('name'), 10);

    const card = workCards.filter((it) => {
      if (it.id === name) {
        return it;
      }
      return false;
    });

    popUp.innerHTML = `
      <div class="popUp-content">
        <div class="sectionLabel">
          
          <div class="label-inside">
            <div class="popTitle">
              <h2 class="section-title">${card[0].title}</h2>
              <img class="crossblack" src="./images/crossblack.png" alt="crossblack" onclick="popUp.classList.toggle('hide')">
            </div>
            <div class="section-options">
              <h3 class="optionBold">${card[0].canopy[0]}</h3>
              <span class="dot"></span>
              <h3 class="options">${card[0].canopy[1]}</h3>
              <span class="dot"></span>
              <h3 class="options">${card[0].canopy[2]}</h3>
            </div>
            <img class="portfolios" src=${card[0].imageMob} alt="card1">
            <img class="desk-img popup-img" src=${card[0].imageDesk} alt="card1">
            <div class="deskColum">
              <p class="section-text cardParaMob">${card[0].para}</p>
              <p class="section-text cardParaDesk">${card[0].para2}</p>
              <div class="sectionFlex">
                <ul class="section-skills">
                  <li class="skills">${card[0].tech[0]}</li>
                  <li class="skills">${card[0].tech[1]}</li>
                  <li class="skills">${card[0].tech[2]}</li>
                </ul>
                <ul class="section-skills">
                  <li class="skills cardParaDesk">${card[0].tech[3]}</li>
                  <li class="skills cardParaDesk">${card[0].tech[4]}</li>
                  <li class="skills cardParaDesk">${card[0].tech[5]}</li>
                </ul>
                <div class="borderPop"></div>
                <div class="buttonPop">
                  <a href="${card[0].live}" class="btn-text" name="1">See live <img class="imgButton" src="./images/live.png" alt="live" width="24"></a>
                  <a href="${card[0].source}" class="btn-text" name="1">See Source <img class="imgButton" src="./images/IconGitHub.png" alt="IconGitHub" width="24"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    popUp.classList.toggle('hide');
  });
});

// Form Validation
const contactBtn = document.getElementById('contactBtn');
const form = document.querySelector('form');
const warning = document.querySelector('.warning');

contactBtn.addEventListener('click', (e) => {
  const { email } = form.elements;

  if (email.value !== email.value.toLowerCase()) {
    warning.style.padding = '10px';
    warning.innerHTML = `
      Please type the email in lowercase!
    `;
    e.preventDefault();
  } else {
    warning.innerHTML = '';
  }
});

// Local Storage
const formData = {
  name: '',
  email: '',
  textArea: '',
};

function fillDatas() {
  let storageData = localStorage.getItem('form-data');
  storageData = JSON.parse(storageData);
  document.getElementById('form-name').value = storageData.name;
  document.getElementById('form-email').value = storageData.email;
  document.getElementById('text-area').value = storageData.textArea;
}

function populateDatas() {
  formData.name = document.getElementById('form-name').value;
  formData.email = document.getElementById('form-email').value;
  formData.textArea = document.getElementById('text-area').value;
  localStorage.setItem('form-data', JSON.stringify(formData));
  fillDatas();
}

const inputList = [];
inputList.push(document.getElementById('form-name'));
inputList.push(document.getElementById('form-email'));
inputList.push(document.getElementById('text-area'));

inputList.forEach((value) => {
  value.onchange = function trig() {
    populateDatas();
  };
});

if (!localStorage.getItem('form-data')) {
  populateDatas();
} else {
  fillDatas();
}