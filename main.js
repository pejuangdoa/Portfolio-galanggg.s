/* --------------------------- toogle icon navbar --------------------------- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');
}

/* ----------------------------- project onclick ---------------------------- */
var Project = document.querySelector('.project');

Project.onclick = () => {
     alert('Mohon maaf halaman ini sedang dalam tahap perkembangan :)')
}

/* ----------------------------- scroll sections ---------------------------- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
     sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 100;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
               // active navbar links
               navLinks.forEach(links => {
                    links.classList.remove('active')
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
               });
          }
     });
     // sticky header
     let header = document.querySelector('header');

     header.classList.toggle('sticky', window.scrollY > 100);

     // remove toggle icon and navbar when click navbar links (scroll)
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
}

// email js start
function validate() {
     let name = document.querySelector(".name");
     let email = document.querySelector(".email");
     let msg = document.querySelector(".message");
     let sendBtn = document.querySelector(".send-btn");

     sendBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (name.value == "" || email.value == "" || msg.value == "") {
               emptyerror();
          } else {
               sendmail(name.value, email.value, msg.value);
               success();
          }
     });
}
validate();

function sendmail(name, email, msg) {
     emailjs.send("service_7qu6mdj", "template_6nmtq7o", {
          from_name: email,
          to_name: name,
          message: msg,
     });
}

function emptyerror() {
     swal({
          title: "Ohh Tidakk.....",
          text: "Sepertinya kamu belum mengisi apa apa:(",
          icon: "error",
     });
}

function success() {
     swal({
          title: "Pesan Berhasil Terkirim",
          text: "Mohon tunggu dalam beberapa saat:)",
          icon: "success",
     });
}