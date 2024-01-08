   function showSection(sectionId) {
    document.getElementById('main').style.display = 'none';
    document.getElementById('whyUs').style.display = 'none';
    document.getElementById('clients').style.display = 'none';
    document.getElementById('socialMedia').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
    
  }

  function pauseMarquee() {
    document.querySelector('.client-container').classList.add('paused');
  }

  function resumeMarquee() {
    document.querySelector('.client-container').classList.remove('paused');
  }

  function animateBox(box) {
    box.style.animation = 'boxAnimation 0.5s ease-in-out';
    setTimeout(() => {
      box.style.animation = '';
    }, 500);
  }