function select_file(el) {
    if (document.getElementById('selected')) {
        document.getElementById('selected').removeAttribute('id');
    }
    el.setAttribute('id', 'selected');
    load_file(el);

    if (document.getElementById("menu_button_pressed")) {
        document.getElementById("menu_button_pressed").removeAttribute('id');
    }
}

function load_file(el) {
    if (el.classList.length > 1) {
        document.getElementById('main_content').innerHTML = document.getElementsByClassName(el.classList[1])[1].innerHTML;
    }
}

function dropd_menu() {
    document.getElementsByClassName('learn-pages')[0].setAttribute('id', 'menu_button_pressed');
}