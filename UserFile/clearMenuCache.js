// JavaScript source code
function clearMenuCache(pageName) {
    if (typeof menuStorage !== "undefined") {
        delete menuStorage[pageName];
    }
    if (typeof Forguncy.MenuCellTypeBase !== "undefined" && typeof Forguncy.MenuCellTypeBase.menuStorage !== "undefined") {
        delete Forguncy.MenuCellTypeBase.menuStorage[pageName];
    }
}