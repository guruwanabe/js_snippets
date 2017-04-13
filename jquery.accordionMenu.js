accordionMenu: function() {
            var menu = $(".accordion-menu").children().children().children('li'),
                mobileMenu =  $('.mobile-menu').children(),
                menus = menu.add(mobileMenu);

            menus.each(function(){
               var submenu = $(this).children(".sub-menu"),
                   parentTitle = $(this).children('a[href]');

                /* if not already hidden, hide the submenu */
                if(submenu.children().length > 0){
                    submenu.css('display','none');
                }
                /* if we on homepage show the first submenu */
                if($('.home').length > 0 || $('.error404 ').length > 0){
                    menu.first().find('.sub-menu').css('display', 'block');
                    menu.first().addClass('current-menu-item');
                    menu.first().find('i[class^="fa fa-angle-"]').removeClass('fa-angle-right').addClass('fa-angle-down');
                }
                /* check if we are on a page in the current section and manage the menu state */
                if(submenu.children().hasClass('current-menu-item')){
                    submenu.css('display', 'block');
                    $(this).addClass('current-menu-item');
                    $(this).parent().siblings().removeClass('current-menu-item');
                    $(this).children().first().children('i[class^="fa fa-angle-"]').removeClass('fa-angle-right').addClass('fa-angle-down');
                    $(this).parent().children().first().children('i[class^="fa fa-angle-"]').removeClass('fa-angle-right').addClass('fa-angle-down');
                  //console.log($(this));
                }
                /* check if submenu exists and manage the clicks */
                if(submenu.length > 0){
                    parentTitle.bind("click", function(e){
                        e.preventDefault();
                        $(this).parent().addClass('current-menu-item');
                        $(this).parent().siblings().removeClass('current-menu-item');
                        if( !submenu.is(':visible') ){
                          $(this).children('i[class^="fa fa-angle-"]').removeClass('fa-angle-right').addClass('fa-angle-down');
                        }else{
                        	$(this).children('i[class^="fa fa-angle-"]').removeClass('fa-angle-down').addClass('fa-angle-right');
                        }
                        $(this).children().find('i[class^="fa fa-angle-"]').removeClass('fa-angle-down').addClass('fa-angle-right');
                        $(this).parent().siblings().children().children('i[class^="fa fa-angle-"]').removeClass('fa-angle-down').addClass('fa-angle-right');

                        /* manage the animation and refresh the sidebar position */
                        $(this).parent().children(".sub-menu").slideToggle(300);
                        $(this).parent().siblings().children(".sub-menu").slideUp(300);
                    });
                }
            });
        },
