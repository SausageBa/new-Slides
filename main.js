var $buttons = $('#buttonWrapper > button')
var $images = $('.images img')
$('.images').css({transform:'translateX(-400px)'})
var current = 0
makeFakeSlides()

bindEvents()




console.log( $images)
function bindEvents(){
    $('#buttonWrapper').on('click','button',function(e){
        $button = $(e.currentTarget)
        index = $button.index()
        goToSilde(index)
        
    })
    /*$buttons.eq(0).on('click',function(){
        if(current === 4){
            console.log('从最后一张到第一张')
            $('.images').css({transform:'translateX(-2400px)'})
            .one('transitionend',function(){
                console.log('动画完毕')
                $('.images').hide()
                .offset()
                $('.images').css({transform:'translateX(-400px)'})
                $('.images').show()
            })       
        }else{
            $('.images').css({transform:'translateX(-400px)'})
        }
        current = 0
    })
    $buttons.eq(1).on('click',function(){
        console.log(current)    
        $('.images').css({transform:'translateX(-800px)'})
       current = 1
    })
    $buttons.eq(2).on('click',function(){
        console.log(current)    
        $('.images').css({transform:'translateX(-1200px)'})
        current = 2
    })
    $buttons.eq(3).on('click',function(){
        console.log(current)    
        $('.images').css({transform:'translateX(-1600px)'})
        current = 3
    })
    $buttons.eq(4).on('click',function(){
        if(current === 0){
            console.log('从第一张到最后一张')
            $('.images').css({transform:'translateX(0)'})
            .one('transitionend',function(){
                $('.images').hide()
                .offset()
                $('.images').css({transform:'translateX(-2000px)'})
                $('.images').show()
            })
        }else{
            $('.images').css({transform:'translateX(-2000px)'})
        }
        current = 4
    })*/
}




function makeFakeSlides(){
    var $firstCopy = $images.eq(0).clone(true)
    var $lastCopy = $images.eq($images.length - 1 ).clone(true)
    $('.images').append($firstCopy)
    $('.images').prepend($lastCopy)
}

function goToSilde(index){
    if( current === $images.length - 1 && index === 0){
        console.log(1)
        $('.images').css({transform:`translateX(${-($images.length+1)*400}px)`})
        .one('transitionend',function(){
            console.log('动画完毕')
            $('.images').hide()
            .offset()
            $('.images').css({transform:'translateX(-400px)'})
            $('.images').show()
        })       
    }else if( current === 0 && index === $images.length - 1 ){
        console.log(2)
        $('.images').css({transform:'translateX(0)'})
        .one('transitionend',function(){
            $('.images').hide()
            .offset()
            $('.images').css({transform:`translateX(${-(index+1)*400}px)`})
            $('.images').show()
        })
    }else{
        console.log(3)
        $('.images').css({transform:`translateX(${-(index+1)*400}px)`})
    }
        current =index
}
