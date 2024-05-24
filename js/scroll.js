window.onscroll = function() {
    shrinkNavOnScroll();
  };
  
  function shrinkNavOnScroll() {
    const headerPanel = document.querySelector(".headerPanel");
    const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  
    if (scrollPosition > 50) {
      headerPanel.classList.add("shrink");
    } else {
      headerPanel.classList.remove("shrink");
    }
  }