let prepathname_ = "/Encoder";
if (window.location.hostname != 'j.is-a.dev') {
    prepathname_ = "";
}
setInterval(()=>{
    let __lng__ = localStorage.getItem('Language') || "en";
    let __pth__ = window.location.pathname;
    if (__pth__ == `${prepathname_}` || __pth__ == `${prepathname_}/`) {
        if (__lng__ == "ru") {
            __pth__ = `${prepathname_}/ru`;
        }
    } else if (__pth__ == `${prepathname_}/ru`) {
        if (__lng__ == "en") {
            __pth__ = `${prepathname_}/`;
        }
    } else if (__pth__ == `${prepathname_}/en`) {
        if (__lng__ == "ru") {
            __pth__ = `${prepathname_}/ru`;
        } else if (__lng__ == "en") {
            __pth__ = `${prepathname_}/`;
        }
    }
},10);