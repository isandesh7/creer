function loadScript(javaScriptFileName){
    var jsLoad = document.createElement("loadScript");
    jsLoad.type = "text/javascript"
    jsLoad.src = javaScriptFileName;
    document.head.appendChild(jsLoad);
}
