let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

menu.onclick = () => {
 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
}

navLinks.forEach(link => {
 link.addEventListener('click', () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
 });
});
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
 }
 

let reviewIndex = 0;
showReviews();

function showReviews() {
 let x;
 let review_slides = document.getElementsByClassName("review-slide");

 for (x = 0; x < review_slides.length; x++){
  review_slides[x].style.display = "none";
 }
 reviewIndex++;
 if (reviewIndex > review_slides.length) {reviewIndex = 1}
 review_slides[reviewIndex-1].style.display = "block";

 setTimeout(showReviews,6000);
}


document.querySelectorAll('.box .content p').forEach(paragraph => {
    const fullText = paragraph.textContent.trim();
    const chunkSize = 200;
  
    if (fullText.length <= chunkSize) return;
  
    // 1) Split into 200‑char chunks
    const chunks = [];
    for (let i = 0; i < fullText.length; i += chunkSize) {
      chunks.push(fullText.slice(i, i + chunkSize));
    }
  
    // 2) Build spans
    const visibleSpan = document.createElement('span');
    visibleSpan.textContent = chunks[0];
  
    const extraContainer = document.createElement('span');
    extraContainer.classList.add('extra-container');
    extraContainer.style.display = 'inline'; 
    // will manually show each child
  
    // create spans for chunks[1..]
    const hiddenSpans = chunks.slice(1).map(text => {
      const s = document.createElement('span');
      s.textContent = text;
      s.style.display = 'none';
      extraContainer.appendChild(s);
      return s;
    });
  
    // 3) Buttons
    const readMoreBtn = document.createElement('button');
    readMoreBtn.textContent = ' Read more...';
    readMoreBtn.classList.add('read-more');
  
    const showLessBtn = document.createElement('button');
    showLessBtn.textContent = ' Show less';
    showLessBtn.classList.add('show-less');
    showLessBtn.style.display = 'none';
  
    // 4) Clear & append
    paragraph.textContent = '';
    paragraph.appendChild(visibleSpan);
    paragraph.appendChild(extraContainer);
    paragraph.appendChild(readMoreBtn);
    paragraph.appendChild(showLessBtn);
  
    // 5) State: how many extra chunks are visible
    let visibleCount = 0; 
  
    // 6) Handlers
    readMoreBtn.addEventListener('click', e => {
      if (visibleCount < hiddenSpans.length) {
        // show next chunk
        hiddenSpans[visibleCount].style.display = 'inline';
        visibleCount++;
      }
      // now that at least one extra is shown, show “Show less”
      showLessBtn.style.display = 'inline';
  
      // if we just revealed the last chunk, hide “Read more”
      if (visibleCount === hiddenSpans.length) {
        readMoreBtn.style.display = 'none';
      }
    });
  
    showLessBtn.addEventListener('click', e => {
      // hide all extra chunks
      hiddenSpans.forEach(s => s.style.display = 'none');
      visibleCount = 0;
  
      // reset buttons
      showLessBtn.style.display = 'none';
      readMoreBtn.style.display = 'inline';
    });
  });
  
  