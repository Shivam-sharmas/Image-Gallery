let fullImgBox = document.getElementById("fullImgBox")
let img = document.getElementById("fullImg");
let closeImg = document.querySelector("#close");
let gallimg = document.querySelector("#galleryImg");


function OpenImg(pic) {
    fullImgBox.style.display = "flex";
    img.src = pic

}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

function toggleMode() {
    const body = document.body;
    const btn = document.getElementById('mode-toggle');
  
    body.classList.toggle('dark-mode');
  
    const isDark = body.classList.contains('dark-mode');
    btn.textContent = isDark ? '🌙 Night' : '☀️ Bright';
  
    // Store preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  

  