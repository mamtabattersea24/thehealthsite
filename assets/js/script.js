document.addEventListener("DOMContentLoaded", function () {


  /* Header Section
  --------------------------Start---*/

  // Header Sticky  ============ start =====>
  const header = document.querySelector("header");
  function handleScroll() {
    if (window.scrollY > 0) {
      header.classList.add("sticky-header");
    } else {
      header.classList.remove("sticky-header");
    }
  }

  window.addEventListener("scroll", handleScroll);

  // mobile search form code ============ start =====>
  let searchIcon = document.querySelector(".mob-search-btn");
  let searchForm = document.querySelector(".menu-search-form");
  let svg1 =
    `<svg width="16px" height="16px" viewBox="0 0 0.48 0.48" xmlns="http://www.w3.org/2000/svg"><path
  d = "M0.434 0.406 0.36 0.332A0.18 0.18 0 1 0 0.332 0.36l0.074 0.074a0.02 0.02 0 0 0 0.028 0 0.02 0.02 0 0 0 0 -0.028M0.22 0.36a0.14 0.14 0 1 1 0.14 -0.14 0.14 0.14 0 0 1 -0.14 0.14" /></svg >`;
  let svg2 =
    '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
  let isSvg1 = true;
  if (searchIcon) {
    searchIcon.addEventListener("click", function () {
      searchIcon.innerHTML = isSvg1 ? svg2 : svg1;
      isSvg1 = !isSvg1;

      searchForm.classList.toggle("search-bar-show");
    });
  }


  // Show mobile left canvas ============ start =====>
  const toggleslideBtn = document.querySelector(".menu-toggle-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const headerUl = document.querySelector("header .hs-menu ul");

  function toggleButtons(cancelBtn, headerUl) {
    cancelBtn.style.display = cancelBtn.style.display === "block" ? "none" : "block";
    $mobileNav = headerUl.classList.toggle("show-ul");

    if (!$mobileNav) {
      const backDrop = document.querySelector('.back-drop');
      backDrop.remove();
      enableScroll();
    }
    else {
      const backDrop = document.createElement('div');
      header.appendChild(backDrop);
      backDrop.classList.add('back-drop');
      disableScroll();

      backDrop.addEventListener("click", function () {
        headerUl.classList.remove("show-ul");
        backDrop.remove();
        enableScroll();
      });
    }

    function disableScroll() {
      document.body.style.overflow = 'hidden';
    }

    function enableScroll() {
      document.body.style.overflow = 'auto';
    }

  }

  toggleslideBtn.addEventListener("click", function () {
    toggleButtons(cancelBtn, headerUl);
  });

  cancelBtn.addEventListener("click", function () {
    toggleButtons(cancelBtn, headerUl);
  });



  // mobile Dropdown  ============ start =====>
  const navDropdowns = document.querySelectorAll(".dropdown");
  navDropdowns.forEach((parentDropdown) => {
    parentDropdown.addEventListener("click", function (e) {
      this.classList.toggle("showMenu");
    });

    const subDropdowns = parentDropdown.querySelectorAll(".dropdown ul");
    subDropdowns.forEach((subDropdown) => {
      subDropdown.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click event from reaching the parent dropdown
      });
    });
  });

  // Add a click event listener to the document to close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    navDropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("showMenu");
      }
    });
  });


  /* Header Section
  ---------------------------End---*/



  //   counter start
  // Counter function
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(function () {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }

  // Start counters when the DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    counter("counter1", 0, 4, 1000);   // From 0 to 4 in 1 second
    counter("counter2", 0, 200, 2000); // From 0 to 200 in 2 seconds
    counter("counter3", 0, 500, 2500); // From 0 to 500 in 2.5 seconds
    counter("counter4", 0, 10, 1000);  // From 0 to 10 in 1 second
  });
  //   counter end



});