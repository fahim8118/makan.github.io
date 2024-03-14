
// Tab 

const select = document.querySelector('.mobile-select');
const selectDynamicText = () => {
    //mobile select
    Array.from(select.nextElementSibling.children).forEach(li => {
        Array.from(li.children).forEach(child => {
            if (child.classList.contains('active')) {
                let activeText = child.textContent;
                select.textContent = activeText;
            }
        });
    });
}
select.addEventListener('click', function () {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
});

const handleCloseSelect = () => {
    select.classList.remove('active');
    select.nextElementSibling.classList.remove('show');
}

//custom tabs
const tabContainer = document.querySelector('.tab-container');

tabContainer.addEventListener('click', e => {
    e.stopPropagation();
    const tabNavs = document.querySelectorAll('.tab-nav button');
    const tabItems = document.querySelectorAll('.tab-item');
    if (e.target.classList.contains('tab-btn')) {
        tabNavs.forEach(tabNav => tabNav.classList.remove('active'));
        tabItems.forEach(tabItem => {
            tabItem.classList.add('hide');
            let tabId = tabItem.getAttribute('data-id');

            if (e.target.getAttribute('id') === tabId) {
                e.target.classList.add('active');
                tabItem.classList.remove('hide');
            }
        });
        selectDynamicText();
        handleCloseSelect();
    }
});


selectDynamicText();

// End Tab
// Slider
$(document).ready(function(){
    $('.testimonials').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-arrow-left left_tik"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right right_tik"></i>',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            
            slidesToShow: 1
          }
        }
      ]
    
    });
});
$(document).ready(function(){
    $('.heroslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-chevron-left left_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right_arrow"></i>',

    });
});





// phone nev

$('.phone-nav').click(function () {
    $("body").toggleClass("navShown");
});



