const regex = /waze:\/\/\?ll=([\d.]*),([\d.]*)/g;

window.addEventListener('load', () => {
  const links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
	  const link = links[i];
    const groups = regex.exec(link.href);
    if(groups && groups.length === 3) {
      const longitude = groups[1];
      const latitude = groups[2];
      link.href = `https://www.google.com/maps/search/?api=1&query=${longitude},${latitude}`;
      link.target = 'wazeLinks';
    }
	}
});
