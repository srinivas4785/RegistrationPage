function myfunction(){
    if(document.mymain.fname.value == ""){
        alert("please give your first name");
        document.mymain.fname.focus();
        return false;
        
    }
    if(document.mymain.lname.value == ""){
        alert("please give your last name");
        document.mymain.lname.focus();
        return false;
    }
    if(document.mymain.number.value == ""){
        alert("please give your number");
        document.mymain.number.focus();
        return false;
    }
    if(document.mymain.email.value == ""){
        alert("please give your email");
        document.mymain.email.focus();
        return false;
    }
      return (true);
        
}