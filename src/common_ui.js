
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

window.addEventListener('scroll', ()=>{
    if(window.scrollY > window.innerHeight/3){
      $('.btn-top').css('opacity', '1');
    }else{
      $('.btn-top').css('opacity', '0');
    }    
  });
  $('.btn-top').on('click', function(){
    $('html, body').animate({ scrollTop:0}, 600);
    return false;
  });

  $('.btn-search').on('click', function(){
    $('.main-search-wrap').toggleClass("show");
  });