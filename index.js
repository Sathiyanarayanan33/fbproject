

function validate(){

    

    var firstname = $('#textf').val();
    var secondname= $('#texts').val();
    var mobilenum=$('#tel').val();
    var emailvalid=$('#emailsign').val();
    var passwords=$('#passwordsign').val();
    var repassword=$('#repassword').val();
    var birthdate=$('#dob').val();
    var radiovalue=$('#radiotype').val();
    var checkvalue=$('#check').val();
    
     if(firstname == ''){
         $("#textf").focus();
      $('.firstname-error').css('display','block');
    //   return false;
     }
     else if(secondname == ''){
      $("#texts").focus();
      $('.firstname-error').css('display','none');
      $('.Secondname-error').css('display','block');
    //   return false;
     }
     else if(mobilenum == '' ||  mobilenum.length < 10){
    
      $("#tel").focus();
      $('.firstname-error').css('display','none');
      $('.Secondname-error').css('display','none');
      $('.mobileno-error').css('display','block');
   
        $(document).on("keyup", "#tel", function () {
             mobilenum = $(this).val();
            var mobileNumberPattern = /^[6-9]\d{9}$/;
           
            if (mobilenum.length < 10 || !mobileNumberPattern.test(mobilenum)) {
                $('.firstname-error').css('display', 'none');
                $('.Secondname-error').css('display', 'none');
                $('.mobileno-error').css('display', 'block');

            } else {
                $('.firstname-error').css('display', 'none');
                $('.Secondname-error').css('display', 'none');
                $('.mobileno-error').css('display', 'none');
            }
        });


      return false;
     }
     
     else if(emailvalid == ''){
         
      $("#emailsign").focus();
      $('.firstname-error').css('display','none');
      $('.Secondname-error').css('display','none');
      $('.mobileno-error').css('display','none');
      $('.email-error').css('display','block');
  
        $("#emailsign").on("keyup", function () {
            var emailvalid = $(this).val();
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
            if (!emailPattern.test(emailvalid)) {
                $('.firstname-error').css('display', 'none');
                $('.Secondname-error').css('display', 'none');
                $('.mobileno-error').css('display', 'none');
                $('.email-error').css('display', 'block');
            } else {
                $('.firstname-error').css('display', 'none');
                $('.Secondname-error').css('display', 'none');
                $('.mobileno-error').css('display', 'none');
                $('.email-error').css('display', 'none');
            }
        });
    
  
    //   return false;
     }
     else if(passwords == '' ){
      
      $("#passwordsign").focus();
      $('.firstname-error').css('display','none');
      $('.Secondname-error').css('display','none');
      $('.mobileno-error').css('display','none');
      $('.email-error').css('display','none');
      $('.password-error').css('display','block')
  
      $(document).ready(function () {
        $("#passwordsign").on("keyup", function () {
            var password = $(this).val();
  
            if (password.length < 8) {
                $('.firstname-error').css('display', 'none');
                $('.Secondname-error').css('display', 'none');
                $('.mobileno-error').css('display', 'none');
                $('.email-error').css('display', 'none');
                $('.password-error').css('display', 'block');
            } else {
                $('.firstname-error').css('display', 'none');
                $('.Secondname-error').css('display', 'none');
                $('.mobileno-error').css('display', 'none');
                $('.email-error').css('display', 'none');
                $('.password-error').css('display', 'none');
            }
        });
    });
    
      return false;
     }
  
     else if(repassword == '' || repassword != passwords ){
      $("#repassword").focus();
      $('.firstname-error').css('display','none');
      $('.Secondname-error').css('display','none');
      $('.mobileno-error').css('display','none');
      $('.email-error').css('display','none');
      $('.password-error').css('display','none');
      $('.repassword-error').css('display','block');
  
      $(document).ready(function () {
        $("#repassword").on("keyup", function () {
            var repassword = $(this).val();
            var password = $("#passwordsign").val(); // Get the original password
            
            if (repassword !== password) {
                $('.firstname-error').css('display', 'none');
                $('.Secondname-error').css('display', 'none');
                $('.mobileno-error').css('display', 'none');
                $('.email-error').css('display', 'none');
                $('.password-error').css('display', 'none');
                $('.repassword-error').css('display', 'block');
            } else {
                $('.firstname-error').css('display', 'none');
                $('.Secondname-error').css('display', 'none');
                $('.mobileno-error').css('display', 'none');
                $('.email-error').css('display', 'none');
                $('.password-error').css('display', 'none');
                $('.repassword-error').css('display', 'none');
            }
        });
    });
  
      return false;
     }
     else if(birthdate == ''){
      $("#dob").focus();
      $('.firstname-error').css('display','none');
      $('.Secondname-error').css('display','none');
      $('.mobileno-error').css('display','none');
      $('.email-error').css('display','none');
      $('.password-error').css('display','none');
      $('.repassword-error').css('display','none');
      $('.dob-error').css('display','block');

      return false;
     }
  
     else if(radiovalue == ''){
        $("#radiotype").focus();
        $('.firstname-error').css('display','none');
        $('.Secondname-error').css('display','none');
        $('.mobileno-error').css('display','none');
        $('.email-error').css('display','none');
        $('.password-error').css('display','none');
        $('.repassword-error').css('display','none');
        $('.dob-error').css('display','none');
        $('.radio-error').css('display','block');
  
        return false;
       }

       else if(checkvalue == ''){
        $("#check").focus();
        $('.firstname-error').css('display','none');
        $('.Secondname-error').css('display','none');
        $('.mobileno-error').css('display','none');
        $('.email-error').css('display','none');
        $('.password-error').css('display','none');
        $('.repassword-error').css('display','none');
        $('.dob-error').css('display','none');
        $('.radio-error').css('display','none');
        $('.checkbox-erro').css('display','block');
  
        return false;
       }
       
  
     
       
  
  
  }
  