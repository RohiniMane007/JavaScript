document.getElementById('img3').onclick = function () {
    alert("image3 clicked")
}

document.getElementById('img1').addEventListener('click',function(){
    alert('image1 clicked')
})


// study
//type,timestamp, defaultPrevented
//target,toElement.srcElement
//clientX, clientY, screenX,screenY
//altkey. ctrlkey,shiftkey, keyCode

document.getElementById('images').addEventListener('click',function(e){
    // console.log('ul-------------------');
    
},false)
document.getElementById('img3').addEventListener('click',function(e){
    // console.log('img3=================');
    e.stopPropagation()
},false)

document.getElementById('img6').addEventListener('click',function(e){
    e.preventDefault()
    // console.log('img6=================');
},false)

//-------------------------------//

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tagName);
    console.log(e.target.parentNode);
    if (e.target.tagName === 'DIV') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()    
    }
},false);