const console = (function (oldCons) {
    let drop = false;
    let newCons = {...oldCons};
    window.console = oldCons;
    if (drop) {
        oldCons.log(
            "%c                          ",
            "font-size:300px; background: url(https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766__340.png) no-repeat");
        oldCons.log(
            "%c%s",
            "color: red; font-size: 14px; padding: 6px;",
            "CAUTION: This space is only for developers. Please do not copy-paste any scripts here. It can be harmful!"
        );
        newCons.log = function () {
        };
        newCons.warn = function () {
        };
    }
    return newCons;
})(window.console)

window.console = console;