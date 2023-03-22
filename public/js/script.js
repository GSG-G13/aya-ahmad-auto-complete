const apiUrl = ' https://www.googleapis.com/books/v1/volumes/'
const searchInput = document.querySelector('input');
const submit = document.querySelector('form button');
const results = document.querySelector('.results');

const getSearchResults = (data) => {
  results.textContent = '';
  data.forEach((e) => {
    let card = document.createElement('div');
    let title = document.createElement('p');
    let btn = document.createElement('button');
    let icon = document.createElement('i');

    btn.addEventListener('click', () => fetch(`${apiUrl}${e.id}`, renderDetails) )

    results.classList = 'results';
    card.classList = 'card';
    card.id = e.id;
    icon.classList = 'fa-solid fa-chevron-right';

    title.textContent = e.title;

    results.appendChild(card);
    card.appendChild(title);
    card.appendChild(btn);
    btn.appendChild(icon);
  });
};

searchInput.addEventListener('input', () => {
  fetch(`/search/${searchInput.value}`, getSearchResults);
});



const renderDetails = (data) => {
  const title = data.volumeInfo.title;
  const authors = data.volumeInfo.authors.join(' & ');
  const img = data.volumeInfo.imageLinks.medium;
  const description = data.volumeInfo.description;
  const publisher = `${data.volumeInfo.publishedDate}, ${data.volumeInfo.publisher}`

  document.querySelector('.modal img').src = img;
  document.querySelector('.modal-title').innerText = title;
  document.querySelector('.modal-author').innerText = authors;
  document.querySelector('.modal-description span').innerHTML = description;
  document.querySelector('.modal img').innerText = img;
  document.querySelector('.modal-date span').innerText = publisher;

  document.querySelector('.upmodal').setAttribute('show', '')
}
window.addEventListener('load', () => {
  window.setTimeout(() => {
    spinner.style.opacity = '0';
    spinner.style.display = 'none';
  }, 1500);
});
btnClose.addEventListener('click', () => {
  document.querySelector('.upmodal').removeAttribute('show')
})