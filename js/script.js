        function num() {
            $('.number').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        };
        // 
         
        // lock  
        let open = document.querySelector('#contact');
        let contact = document.querySelector('.contact');
        let body = document.querySelector('#lock');
        open.addEventListener('click', () => {
            contact.style.display = 'flex';
            body.classList.add('lock');
            document.addEventListener("keyup", closeCartEsc);
        });
        let close = document.querySelector('.close');
        close.addEventListener('click', () => {
            contact.style.display = 'none';
            body.classList.remove('lock');
        });
        // Через ESC
        const closeCartEsc = even => {
        if (even.keyCode === 27) {
            contact.style.display = "";
            console.log(event.keyCode);
            document.removeEventListener("keyup", closeCartEsc);
            body.classList.remove('lock');
        }
        };
        let next = document.querySelector('.next');
        let back = document.querySelector('.back');
        next.addEventListener('click', () => {
            document.querySelector('.item1').style.left = '-1000px';
            document.querySelector('.item2').style.filter = 'blur(0)';
            document.querySelector('.item1').style.filter = 'blur(10px)';
            document.querySelector('.item2').style.left = '-890px';
        });
        back.addEventListener('click', () => {
            document.querySelector('.item1').style.left = '0px';
            document.querySelector('.item1').style.filter = 'blur(0)';
            document.querySelector('.item2').style.filter = 'blur(10px)';
            document.querySelector('.item2').style.left = '890px';
        });
        // scroll
        window.onload = function () {
            var scrolled;
            var timer;

            document.querySelector(".btn-scroll").onclick = function () {
                scrolled = window.pageYOffset;
                scrollToTop();
            };

            function scrollToTop() {
                if (scrolled > 0) {
                    window.scrollTo(0, scrolled);
                    scrolled = scrolled - 50;
                    timer = setTimeout(scrollToTop, 5);
                } else {
                    clearTimeout(timer);
                    window.scrollTo(0, 0);
                }
            }
        };
        // scroll-anim
        let anim_items = document.querySelectorAll('.anim-item');
        if (anim_items.length > 0) {
            window.addEventListener('scroll', animOnScroll);

            function animOnScroll() {
                for (let index = 0; index < anim_items.length; index++) {
                    const anim_item = anim_items[index];
                    const anim_item_Height = anim_item.offsetHeight;
                    const anim_item_offset = offset(anim_item).top;
                    const anim_start = 10;

                    let anim_item_point = window.innerHeight - anim_item_Height / anim_start;
                    if (anim_item_Height > window.innerHeight) {
                        anim_item_point = window.innerHeight - window.innerHeight / anim_start;
                    }
                    if ((pageYOffset > anim_item_offset - anim_item_point) && pageYOffset < (anim_item_offset + anim_item_Height)) {
                        anim_item.classList.add('_active');
                    } else {
                        if (!anim_item.classList.contains('_anim-no-hide')) {
                            anim_item.classList.remove('_active');
                        }
                    }
                }
            };

            function offset(el) {
                const rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return {
                    top: rect.top + scrollTop,
                    left: rect.left + scrollLeft
                }
            }
            animOnScroll();
            num();
        };
        // 
        window.addEventListener("scroll", function () {
            var button = document.querySelector(".btn-scroll");
            // this.console.log(pageYOffset);

            if (pageYOffset > 100) {
                button.style.opacity = "1";
                button.style.cursor = "pointer";
            } else {
                button.style.opacity = "0";
                button.style.cursor = "default";
            }
        });
       
        let menu__toggle = document.querySelector('#menu__toggle');
        menu__toggle.addEventListener('click',()=>{
            body.classList.toggle('lock');
        });
    