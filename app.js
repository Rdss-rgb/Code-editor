var html=document.getElementById('html-edit');
var css=document.getElementById('css-edit');
var js=document.getElementById('js-edit');
var output=document.querySelector('#displayed');

function editor(){
    output.contentDocument.body.innerHTML=html.value+'<style>'+ css.value + '</style>';
    output.contentWindow.eval(js.value);
}
