
const links = [
    {
      label: "Week-1 notes",
      url: "week-1/index.html"
    },
    {
      label: "Week-2 notes",
      url: "week-2/index.html"
    },
     {
      label: "Week-3 notes",
      url: "week-3/index.html"
    },
     {
      label: "Week-4 notes",
      url: "week-4/index.html"
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
