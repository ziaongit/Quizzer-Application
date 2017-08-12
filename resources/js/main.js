$(function(){

    (function startQuiz(){
        
        this.loadQuiz = function(){
            $('.panel_one h1').show('drop', 500, function(){
                $('.start_quiz').addClass('started', 500);
            });

            $('.start_quiz').on('click', function(){
                showPanel(1);
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
            var wrapper = next.find('wrapper');
            
            wrapper.fadeIn('500', function(){
                manageOptions(next);
            });
        };


        this.manageOptions = function(next) {
            var counter = 0;
            var options = next.find('.options');
            var childrens = options.find('div');

            childrens.each(function(i, el){
                $(el).delay(counter).fadeIn(300);
            });
        };




        loadQuiz();

    })();
});