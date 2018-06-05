var myStorage = window.localStorage;
var loadName = myStorage.getItem("character_name");

document.getElementById("textInput").value = loadName;
