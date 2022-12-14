
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
    },
    {
      label: "Week-5 notes",
      url: "week-5/index.html"
    },
    {
      label: "Week-6-TodoApplication",
      url: "Week-6-TodoApplication/index.html"
    },
    {
      label: "Week-7 notes",
      url: "week-7/index.html"
    },
     {
      label: "Week-8 notes",
      url: "week-8/index.html"
    },
    {
      label: "Week-9 notes",
      url: "week-9/index.html"
    },
    {
      label: "Week-10 notes",
      url: "week-10/index.html"
    },
    {
      label: "Challenge Two Project - Scripture Daily App",
      url: "challengeTwoProject/index.html"
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
