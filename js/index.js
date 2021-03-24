//for check 
function checkEmail(){
    var email = document.getElementById("email").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat))
    {
        document.getElementById("email-res").innerHTML = " ";
        return true;
    }
    else
    {
    document.getElementById("email-res").innerHTML = "You have entered an invalid email address!";
    document.details_form.Email.focus();
    return false;
    }

}


function checkLen(){
    var num = document.getElementById("mobile").value;
    if(num.length <= 10){
        document.getElementById("num-res").innerHTML = "";
        return true;
    }
    else{
        document.details_form.mobile.focus();
        document.getElementById("num-res").innerHTML = "Mobile Number must be 10 digit"
        return false;
    }

}


function check_empty(){
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var res_box = document.getElementById("result-box");

    if(name === "" || mobile === "" || email ==="" ){
        alert("You can not submit empty form");
    }
}

document.getElementById("details-form").addEventListener("submit",function(e){
    e.preventDefault();
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var res_box = document.getElementById("result-box");

        res_box.style.display = "block";
        var para = document.createElement("P");
        para.setAttribute("class","res-para")
        para.innerHTML = "Name:"+name+"<br />Mobile:"+mobile+"<br />Email:"+email;
        var delete_btn = document.createElement("BUTTON");
        delete_btn.innerHTML = "DELETE";
        delete_btn.setAttribute("class","delete-btn");
    
        res_box.appendChild(para);
        res_box.appendChild(delete_btn);
        // var arr = new Array();
        // arr.push(para);
    
         document.getElementById("details-form").reset();
         
         document.getElementsByClassName("delete-btn")[0].addEventListener("click",function(){
             document.getElementsByClassName("res-para")[0].remove(); 
             document.getElementsByClassName("delete-btn")[0].remove();
         })
         document.getElementsByClassName("delete-btn")[1].addEventListener("click",function(){
             document.getElementsByClassName("res-para")[1].remove(); 
             document.getElementsByClassName("delete-btn")[1].remove();
         })
         document.getElementsByClassName("delete-btn")[2].addEventListener("click",function(){
             document.getElementsByClassName("res-para")[2].remove(); 
             document.getElementsByClassName("delete-btn")[2].remove();
         })
         document.getElementsByClassName("delete-btn")[3].addEventListener("click",function(){
             document.getElementsByClassName("res-para")[3].remove(); 
             document.getElementsByClassName("delete-btn")[3].remove();
         })
         document.getElementsByClassName("delete-btn")[4].addEventListener("click",function(){
             document.getElementsByClassName("res-para")[4].remove();
             document.getElementsByClassName("delete-btn")[4].remove(); 
         })
         document.getElementsByClassName("delete-btn")[5].addEventListener("click",function(){
             document.getElementsByClassName("res-para")[5].remove(); 
             document.getElementsByClassName("delete-btn")[5].remove();
         })
         document.getElementsByClassName("delete-btn")[6].addEventListener("click",function(){
             document.getElementsByClassName("res-para")[6].remove();
             document.getElementsByClassName("delete-btn")[6].remove(); 
         })
         document.getElementsByClassName("delete-btn")[7].addEventListener("click",function(){
            document.getElementsByClassName("res-para")[7].remove(); 
            document.getElementsByClassName("delete-btn")[7].remove();
        })
        document.getElementsByClassName("delete-btn")[8].addEventListener("click",function(){
            document.getElementsByClassName("res-para")[8].remove(); 
            document.getElementsByClassName("delete-btn")[8].remove();
        })
        document.getElementsByClassName("delete-btn")[9].addEventListener("click",function(){
            document.getElementsByClassName("res-para")[9].remove(); 
            document.getElementsByClassName("delete-btn")[9].remove();
        })

    


})





