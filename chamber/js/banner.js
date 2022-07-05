let day = d.getDay();

let banner = document.querySelector('.banner')
if(day == 1 || day == 2){
    banner.classList.add("show-banner")
}