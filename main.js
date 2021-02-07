var icon=document.getElementById("ham-burger-icon");
var navbar=document.getElementById("show-full-list");
icon.addEventListener("click",function(){
    if (navbar.className === "active") {
        navbar.className = "show-full-list";
      } else {
        navbar.className = "active";
      }
});

var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);
//smooth scroll
// for(var i=0;i<navMenuAnchorTags.length;i++)
// {
//   navMenuAnchorTags[i].addEventListener('click',function(event){
//       event.preventDefault();//stopping the def bhviour of <a> tag

//       var targetSectionId=this.textContent.trim().toLowerCase();
//       // console.log(targetSectionId);

//       var targetSection=document.getElementById(targetSectionId);
//       //console.log(targetSection);

      
//       var interval=setInterval(function(){
//         var targetSectionCoordinates=targetSection.getBoundingClientRect();
//         if(targetSectionCoordinates.top<=0)
//         {
//           clearInterval(interval);
//           return;
//         }
//         window.scrollBy(0,50);
//       },50);
//   });
// }-> impl via css

var progressBars=document.querySelectorAll('.skill-progress>div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;


function initailseBars(){
  for(let bar of progressBars)
  {
      bar.style.width=0+'%';
  }
}

initailseBars();

function fillBars(){
  for(let bar of progressBars){
    let targetWidth=bar.getAttribute('data-bar-width');
    let currentwidth=0;
    let interval=setInterval(function(){
      if(currentwidth>targetWidth)
      {
        clearInterval(interval);
        return;
      }
      currentwidth++;
      bar.style.width=currentwidth+'%';
    },5);
  }
}

function checkScroll(){
  //check whether skill-container is visible or not
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight)
    {
      animationDone=true;
      console.log("skill secn visible");
      //fire the filling animation
      fillBars();
    }
    else if(coordinates.top>window.innerHeight)
    {
      animationDone=false;
      initailseBars();
    }
}