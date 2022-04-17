function showSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "flex";
  }

  function hideSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
  }

  function showSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "flex";
  }

  function hideSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
  }

function incCounter(){
  var cntr = document.getElementById('counterLikedBy');
  var val = parseInt(cntr.innerText);
  cntr.innerText = val+1;

}

function EditSave(){
  var toggleSave = '<button class="Edit">Save '+
  '<i style="font-size: 14px;font-weight: bolder;" '+
  'class="fa fa-save" aria-hidden="true"></i>'+
  '</button>';
  var toggleEdit = '<button class="Edit">Edit '+
  '<i style="font-size: 14px;font-weight: bolder;" '+
  'class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
  '</button>';

  var EditPostButton = document.getElementById('Edit');
  var ToDO = (EditPostButton.innerText).toString().trim();
  console.log(ToDO.localeCompare('Edit'));
  if(ToDO.localeCompare('Edit')===0){
    var blogSave = document.getElementById('Edit');
    blogSave.innerHTML = toggleSave;
    enableEditableText();

  }
  else{
    var blogEdit = document.getElementById('Edit');
    blogEdit.innerHTML = toggleEdit;
    updateEditedBlog();
  }
}

function enableEditableText(){
  var ContentElement = document.getElementById('blogBody');
  var getBlogContent = ContentElement.innerText;
  var getElement = document.getElementById('blogBody');
  var inputElement = '<textarea class="txtBlog" id="txtEditedBlog" rows="10" cols="220">'+
  getBlogContent+
  '</textarea>'
  getElement.innerHTML = inputElement;
}

function addComment(){
  var x = document.getElementById("CommentPost").addEventListener("onchange", function(){
    document.getElementById("CommentPost").innerHTML;
  });

  var x = document.getElementById("CommentPost").value;
  var postElement = '<p >'+ x + '</p>';
  var getElement = document.getElementById('listAllComments');
  getElement.innerHTML = postElement + getElement.innerHTML;
}
