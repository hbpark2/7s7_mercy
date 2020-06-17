window.addEventListener('load', function(){
    
    const screenWidth = document.body.clientWidth;
    
    const gnb = document.querySelector('#gnb')
    const depth_1 = document.querySelectorAll('.depth_1')
    const depth_2 = document.querySelector('.depth_2')
    
    function mouseover(){
        gnb.style.height = 260 + 'px';
        gnb.style.backgroundColor = 'rgba(255,255,255,0.8)';
    
    }
    function mouseout(){
        gnb.style.height = 130 + 'px';
        gnb.style.backgroundColor = 'rgba(255,255,255,0.5)';
    }
    
   gnb.addEventListener('mouseover', mouseover);
   gnb.addEventListener('mouseout', mouseout);
    
    console.log(screenWidth)
    
})