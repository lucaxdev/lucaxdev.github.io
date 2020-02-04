function eDesktop() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return false;
    } else {
        return true;
    }
}

if (!eDesktop) {
    $('.menu-mobile a').removeAttr('#img-home')
}