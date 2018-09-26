console.log('scripts loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var moreInfoText = document.getElementById('more-info');
var toolTip = document.getElementById('tooltip');

burger.addEventListener('click', function(){
  console.log('burger-clicked');
  mobileNav.style.width = '50%';
  mobileNav.style.transition = '.5s ease';
  content.style.color = 'transparent';
  content.style["text-shadow"] = '0 0 5px rgba(0,0,0,0.5)';
});

closeBtn.addEventListener('click', function(){
  console.log('close-btn-clicked');
  mobileNav.style.width = '0px';
  mobileNav.style.transition = '.5s ease';
  content.style.color = '#000';
  content.style["text-shadow"] = 'none';
});

moreInfoText.addEventListener('mouseenter', function(event){
  tooltip.style.opacity = '1';
  var x = event.pageX;
  var y = event.pageY;
  console.log(x);
  tooltip.style.top = (y + 25) + 'px';
  tooltip.style.left = (x - 75) + 'px';
});

moreInfoText.addEventListener('mouseleave', function(event){
  tooltip.style.opacity = '0';
});
