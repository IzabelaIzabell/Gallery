/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
// punkt 2 
var allLi = document.querySelectorAll('.gallery li');
var body = document.querySelector('body');
// console.log(body);

// punkt 3 i 4 i 5 i 6 
var images = document.querySelectorAll('img');
// console.log(images);

for (i=0; i<images.length; i++){
  images[i].addEventListener('click', function() {
    var newDiv = document.createElement("div");
    body.appendChild(newDiv);
    newDiv.classList.add("fullScreen");
    var img= document.createElement("img");
    newDiv.appendChild(img);
    var url1 = this.src;
    img.setAttribute("src",url1);
    console.log('clik');
    var newButton= document.createElement("button");
    newDiv.appendChild(newButton);
    newButton.classList.add("close");
    var buttonForRemove = document.querySelector(".close");
    console.log(buttonForRemove);
    buttonForRemove.addEventListener('click',function(){
      newDiv.parentElement.removeChild(newDiv);
    });   
    
  });
}
