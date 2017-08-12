$(function(){

    (function startQuiz(){
        
        this.loadQuiz = function(){
            $('.panel_one h1').show('drop', 500, function(){
                $('.start_quiz').addClass('started', 500);
            });

            $('.start_quiz').on('click', function(){
                showPanel(1);
                lessonNext();
            });
        };

        // ShowPanel 
        this.showPanel = function(position){
            var current = $('div[data-panel="'+ (position - 1) +'"]');
            current.find('.wrapper').animate({left: "-=100px", opacity:0},500, function(){
                
                current.addClass('hidden');

                var next = $('div[data-panel="'+ position +'"]');
                next.removeClass('hidden');
                showNext(next);

            });
        };

        this.showNext = function(next){
            var wrapper = next.find('.wrapper');
            
            wrapper.fadeIn('500', function(){
                manageOptions(next);
            });
        };

        this.manageOptions = function(next) {
            var options = next.find('.options');
            var childrens = options.find('div');
            var counter = 0;
            childrens.each(function(i, el){
                $(el).delay(counter).fadeIn(300);
                counter += 500;
            });
            childrens.on('click', function(){
                childrens.removeClass('active');
                next.addClass('valid');
                $(this).addClass('active');
            });
        };

        this.lessonNext = function(){
            $('.next_question').on('click', function(){
                var next = $(this).data('next');
                if(validateSelection($(this))){
                    showPanel(next);
                }
            });
        };

        this.validateSelection = function($this){
            var parents = $this.parents().eq(1);
            if(parents.hasClass('valid')){
                return true;
            }else{
                $('.error').fadeIn('300', function(){
                    $(this).delay(1000).fadeOut('300');
                });
                return false;
            }
        };


        loadQuiz();

    })();
});