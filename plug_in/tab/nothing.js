window.addEventListener('load', function(){
    
    var tabList = document.querySelectorAll('.tab_list_wrap .tab_list')
    
    Array.prototype.forEach.call(tabList, function (list){
        
        list.children[0].addEventListener('click', function(e){
            
            e.preventDefault()
            
            var tabContent = document.querySelectorAll('.tabcontainer .tab_content')
            var tabNum = this.parentElement.getAttribute('data-tabnum')
            
            Array.prototype.forEach.call(tabContent)
            
        })
        
    })
    
})