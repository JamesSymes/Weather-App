function changeBackground(condition) {
  let imageUrl;

  switch (condition) {
    case 'Thunderstorm':
      imageUrl = 'https://i.gifer.com/7TDT.gif';
      break;
    case 'Drizzle':
      imageUrl = 'https://i.gifer.com/fyDi.gif';
      break;
    case 'Rain':
      imageUrl = 'https://i.gifer.com/fyDi.gif';
      break;
    case 'Snow':
      imageUrl = 'https://i.gifer.com/NyDe.gif';
      break;
    case 'Clear':
      imageUrl = 'https://i.gifer.com/Lx0q.gif';
      break;
    case 'Clouds':
      imageUrl = 'https://i.gifer.com/1F1I.gif';
      break;
    default:
      imageUrl = 'https://i.gifer.com/XFbw.gif';
      break;
  }

  document.body.style.backgroundImage = `url(${imageUrl})`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
}



// Make changeBackground global so it can be accessed from other scripts
window.changeBackground = changeBackground;
