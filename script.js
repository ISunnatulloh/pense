window.addEventListener('load', function (e) {
    var box = document.querySelector('header nav .box');
    var icon = document.querySelector('.bars');

    icon.addEventListener('click' , function(){
        console.log(box.style.left);
        if(box.style.left == '' || box.style.left == '-1000px'){
            box.style.transition = '1s'
            box.style.left = '0px'
        }else{
            box.style.transition = '2s'
            box.style.left = '-1000px'
        }
    })
});