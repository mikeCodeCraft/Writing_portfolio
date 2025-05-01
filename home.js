let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
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

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.card').forEach(card => {
//       const btn = card.querySelector('.read-more');
//       const extra = card.querySelector('.extra-text');
      
//       btn.addEventListener('click', () => {
//         const isExpanded = extra.classList.toggle('expanded');
//         btn.textContent = isExpanded ? 'Show Less' : 'Read More…';
//       });
//     });
//   });


//   document.addEventListener('DOMContentLoaded', () => {
//     const readMoreLink = document.getElementById('read-more');
//     const extraText    = document.querySelector('.content .extra-text');

//     readMoreLink.addEventListener('click', function(e) {
//       e.preventDefault(); // don’t jump to top

//       // toggle visibility
//       if (extraText.style.display === 'inline') {
//         extraText.style.display = 'none';
//         readMoreLink.textContent = 'Read more...';
//       } else {
//         extraText.style.display = 'inline';
//         readMoreLink.textContent = 'Show less';
//       }
//     });
//   });

//  document.querySelectorAll('.box').forEach(box => {
//     const btn = box.querySelector('.read-more');
//     const extra = box.querySelector('.extra-text');
       
//        btn.addEventListener('click', () => {
//          const isExpanded = extra.classList.toggle('expanded');
         
//          // Update button label
//          btn.textbox = isExpanded ? 'Show Less' : 'Read More…';
         
//          // If you want instant instead of transition-based show/hide:
//          // extra.style.display = isExpanded ? 'inline' : 'none';
//        });
//      });

// const parentcontainer = document.querySelector('.box-container .box .content');
// parentcontainer.addEventListener('click', event=>{
//   const current = event.target.closest('.read-more');
//   const isReadMoreBtn = current.className.includes("read-more");
//   if (!isReadMoreBtn) return;
//     const currentText = event.target.parentNode.querySelector('.extra-text');
//   currentText.classList.toggle('expanded');
//   current.textContent = currentText.classList.contains('expanded') ? 'Show Less' : 'Read More...';
// })

// document.querySelectorAll('.box .content').forEach(content => {
//     content.addEventListener('click', event => {
//       const readMoreBtn = event.target.closest('.read-more'); // Ensure the click is on the "Read more" button
//       if (!readMoreBtn) return; // Exit if the click is not on the button
  
//       const extraText = content.querySelector('.extra-text'); // Select the extra text span
//       extraText.classList.toggle('expanded'); // Toggle the "expanded" class
  
//       // Update button text
//       readMoreBtn.textContent = extraText.classList.contains('expanded') ? 'Show Less' : 'Read More...';
//     });
//   });

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
  
  