//memberをカッコ良くするスクリプト

(function () {
  var grid;
  function init() {
    grid = new Minigrid({
      container: '.cards',
      item: '.card',
      gutter: 12
    });
    grid.mount();
  }
  
  // mount
  function update() {
    grid.mount();
  }

  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('resize', update);



})();

$(window).load(function () {
  $(".card").mouseenter(function(){
  	console.log("in");
	$(this).find('.mdl-hide').show();
	}).mouseleave(function(){
	$(this).find('.mdl-hide').hide();
	});

});