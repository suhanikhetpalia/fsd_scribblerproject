var deleteFunctions = function(numberOfPosts) {

    for (var i = 0; i < numberOfPosts; i++) {
        var modal = document.getElementsByClassName("deleteButtonModal")[i];
        var div = document.getElementsByClassName("deleteButton")[i];
        var close = document.getElementsByClassName("noButton")[i];

        div.onclick = function() {
            modal.style.display = "block";
        }
        close.onclick = function() {
            modal.style.display = "none";
        }
    }
}

deleteFunctions(5)

function navigateToPost() {
    location.href = "post.html";
}
