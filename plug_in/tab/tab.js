window.addEventListener('load', function () {

    var tabList = document.querySelectorAll('.tab_list_wrap .tab_list')

    Array.prototype.forEach.call(tabList, function (list) {
        
        list.children[0].addEventListener('click', function (e) {
            
            e.preventDefault()
            
            var tabContent = document.querySelectorAll('.tab_container .tab_content')
            var tabNum = this.parentElement.getAttribute('data-tabnum')
            
            Array.prototype.forEach.call(tabContent, function (cont, i) {
                cont.style.display = 'none'
                tabList[i].className = 'tab_list'
            })
            
            tabContent[tabNum].style.display = 'block'
            if (list.className.indexOf('tab_active') == -1) {
                list.className = 'tab_list tab_active'
            }
        })
        
    })
    
})
