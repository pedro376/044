var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked
    if (id==true){
        location.href="pagina_principal.html"
    }
    else{
        location.href="main_page.html"
    }
}