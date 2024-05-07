function alphanumeric(str) { 
    return str.replace(/[^a-zA-Z0-9]/g, ''); 
}

function formatted(str) {
    return str.slice(0,2)+"-"+str.slice(2,5)+"-"+str.slice(5,8)+"-"+str.slice(8,11)
}

id = new URLSearchParams(window.location.search).get('cert')
if (id) {
    id = alphanumeric(id.toUpperCase())
    if (certLinks[id]) {
        document.getElementById("cert-id").innerHTML = formatted(id)
        document.getElementById("cert-name").innerHTML = certLinks[id][1];
        document.getElementById("cert-date").innerHTML = certLinks[id][2];
        document.getElementById("cert-link").href = "https://drive.google.com/file/d/" + certLinks[id][0] + "/view";
        document.getElementById("cert-view").src = "https://drive.google.com/file/d/" + certLinks[id][0] + "/preview";
        document.getElementById("cert-down").src = "https://drive.usercontent.google.com/u/0/uc?id=" + certLinks[id][0] + "&export=download";
        document.getElementById("verify-yes").style.display = "block";
    } else {
        document.getElementById("cert-id").innerHTML = id;
        document.getElementById("verify-no").style.display = "block";
    }
}