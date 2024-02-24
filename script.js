window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.forEach(function(section) {
        let offset = section.offsetTop;
        let distance = (scrollPosition - offset) * 0.5;

        section.style.backgroundPositionY = distance + 'px';
    });
});

// This is just an example, you can remove it if you don't need it
const buyButton = document.querySelector('.buy-button');

buyButton.addEventListener('click', () => {
  alert('Your purchase is being processed. Thank you for your support!');
});