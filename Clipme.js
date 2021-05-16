
document.body.insertAdjacentHTML('beforeend',`

<style>
.clipme {
  user-select:all;
}
.clipmealert{
  background: rgb(231, 113, 113);
  color: aqua;
  font-weight: 400;
  font-size: 25px;
  position: fixed;
  right: 4px;
  top: 4px;
  padding: 6px;
  display: none;
  z-index: 20;
}
</style>
<div class="clipmealert"></div>
`)
function copy(selector,command){
  if(selector) document.querySelector(selector).select();
  if(!command)command = 'copy';
  document.execCommand(command);
  console.log('Copied Something!');
  document.querySelector('.clipmealert').style.display = 'block';
  setTimeout(function(){document.querySelector('.clipmealert').style.display = 'none';},1000)
}

var clipme = document.querySelectorAll('.clipme');

for (var i = 0; i < clipme.length; i++) {
  clipme[i].setAttribute('onclick','copy()')
}