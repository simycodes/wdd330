
const links = [
    {
      label: "Week-1 notes",
      url: "week-1/index.html"
    }
]

function loadIndex() {
  const ol = document.querySelector('#linkslist');

  links.forEach(link =>{
    const li = document.createElement('li');
    const notesLinkElement = document.createElement('a');
    notesLinkElement.setAttribute('href', link.url);
    notesLinkElement.innerText = link.label;

    li.appendChild(notesLinkElement);
    ol.appendChild(li);
  })
}
