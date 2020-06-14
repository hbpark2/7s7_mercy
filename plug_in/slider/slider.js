$(".slider").each(function(){
    var $this = $(this)
    var $group = $this.find('.slide_group')
    var $slides = $this.find('.slide')    
    var buttonArray = []
    var currentIndex = 0
    var timeout


    function move(newIndex) {          // 이전 슬라이드에서 새 슬라이드로 이동한다
    var animateLeft, slideLeft;      // 변수를 선언한다

        advance();                       // 슬라이드가 이동할 때 advanced() 함수를 다시 호출한다

        // 현재 슬라이드가 보여지고 있으며 애니메이션이 진행 중이면 아무것도 하지 않는다
        if ($group.is(':animated') || currentIndex === newIndex) {  
          return;
        }

        buttonArray[currentIndex].removeClass('active'); // 아이템에서 클래스를 제거한다
        buttonArray[newIndex].addClass('active');        // 새 아이템에 클래스를 추가한다

        if (newIndex > currentIndex) {   // 새 슬라이드의 인덱스가 현재 슬라이드의 인덱스보다 크면
          slideLeft = '100%';            // 새 슬라이드를 오른쪽에 배치한다
          animateLeft = '-100%';         // 현재 슬라이드 그룹을 왼쪽으로 이동한다
        } else {                         // 그렇지 않으면
          slideLeft = '-100%';           // 새 슬라이드를 왼쪽에 배치한다Sit the new slide to the left
          animateLeft = '100%';          // 현재 슬라이드 그룹을 오른쪽으로 이동한다
        }
        // 새 슬라이드를 왼쪽(인덱스가 작은 경우) 또는 오른쪽 (인덱스가 큰 경우)에 배치한다
        $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

        $group.animate( {left: animateLeft}, function() {    // 슬라이드에 애니메이션을 적용하고
          $slides.eq(currentIndex).css( {display: 'none'} ); // 이전 슬라이드를 숨긴다
          $slides.eq(newIndex).css( {left: 0} ); // 새 슬라이드의 위치를 지정한다
          $group.css( {left: 0} );               // 슬라이드 그룹의 위치를 지정한다
          currentIndex = newIndex;               // 새로운 이미지의 인덱스를 currentIndex 변수에 저장한다
        });
  }


function advance(){
    clearTimeout(timeout)
    
    timeout = setTimeout(function(){
        if(currentIndex<($slides.length-1)){
            move(currentIndex + 1)
        }else{
            move(0)
        }
    },4000)
}

$.each($slides, function(index){
    
    var $button = $('<button type="button" class="slide_btn">&bull;</button>')
    if(index == currentIndex){
        $button.addClass('active')
        
    }
    $button.on('click', function(){
        move(index)
    }).appendTo('.slide_buttons')
    buttonArray.push($button)
    
})

advance()
    
})