$(document).ready(function() {
    var paras = readParameter();
    if (paras != null) {
        var id = paras.split("-");
        bindTopicHeader(decodeURIComponent(id[1].replace("_", " ")));
        BindImage(id[0]);
    } else {
        $("viewImage").html('').append("No more images")
    }
});

function bindTopicHeader(topic) {
    document.getElementById('TopicHeader').innerText = topic;

}

function readParameter() {
    var text = window.location.hash.substring(1);
    return text;
}

function BindImage(folderName) {
    var folder = folder = "assets/images/gallery_600x600/" + folderName
    var imageCount = 0;
    var html = "";
    switch (folderName) {
        case "1":
            imageCount = 4;
            break;
        case "2":
            imageCount = 4;
            break;
        case "3":
            imageCount = 4;
            break;
    }
    for (i = 1; i <= imageCount; i++) {
        html = html + " <li class='col-lg-2 col-md-2 col-sm-3 col-xs-4'><img class='img-responsive' src='" + folder + "/" + i + ".jpg' alt='Sree Muruga swamy'> </li>";

    }
    document.getElementById('imageUI').innerHTML = html;
}