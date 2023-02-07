import './style.css';

const rootEl = document.querySelector<HTMLDivElement>('#app');

rootEl!.innerHTML = `
  <div>
    <input id="search-box" type="text" placeholder="Search...">
    <p id="text-target"></p>
  </div>
`;

const inputField = document.querySelector<HTMLInputElement>('#search-box');
const paragraph = document.querySelector<HTMLParagraphElement>('#text-target');

inputField!.addEventListener('input', (e) => {
  paragraph.innerText = e.target.value;
});

console.log(inputField);
