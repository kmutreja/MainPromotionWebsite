$(document).ready(function(){

        //Modal Box
        $('a[href="#sign-up"]').click(function(e){
                e.preventDefault()
                $('#modal-box').css({'display':'block'});
        });


        $('.skipBtn').click(function(){
                $('#loading').css({'display':'flex'})
                $('#inviteForm').css({'display':'none'}); 
                $('.modal-sub-heading').empty();
                setTimeout(function(){
                        $("#loading").css({'display':'none'});
                        $('#success-msg').css({'display':'flex'});
                }, 2000); 
                lastForm = true;
                return false;
        })

        var lastForm = false;
        $('#cross-times').click(function(){
                if(lastForm == true){
                        $('#modal-box').css({'display':'none'});
                        pageRedirect('https://niohmdemo.niohm-pmo.online/index.html', 0);
                        lastForm = false;
                }else {
                        $('#modal-box').css({'display':'none'});
                }
        });
        //Modal Box


        //Team Mate Registration
        if(`${$(location).attr('href')}`.includes("?")){
                $('#modal-box').css({'display':'block'});
                $('#orgForm').css({'display':'none'});
                $('modal-sub-heading').empty().text('Please provide some basic details to register you account.');
                $('#registerForm').css({"display":'flex'});
                var elpara = new URLSearchParams(location.search);
                var decrypt = decryptData (decodeURIComponent(elpara.get('d')));
                $('#registerForm').find('input[name="email"]').val(getData(decrypt).email);
                localStorage.setItem('oid',getData(decrypt).id);
        }
        //Team Mate Registration

        //Page Redirection
        function pageRedirect(url,t){
                setTimeout(function(){ window.location = url; }, t);
        }
        //Page Redirection

        //URL Encryption/Decryption
        function dataEncrypt(data){
                var secret = "NioM123";
                var encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secret);
                return encodeURIComponent(encrypted);
        }

        function decryptData (data){
                var secret = "NioM123";
                var d = CryptoJS.AES.decrypt(data.toString(), secret).toString(CryptoJS.enc.Utf8);
                return d;
        }

        function getData(data){
                var oid = "" 
                var e = ""
                var ai = data.indexOf("a");
                var di = data.indexOf("d");
                for(let j = 1; j < data.length-1; j++){
                        if(j < ai){
                                oid = oid+data[j]
                        }else if(j > di){
                                e = e + data[j]
                        }
                }
                return {id:oid,email:e}
        }       
        //URL Encryption/Decryption

        //Form Creation
        createDropDown('rf rf6','#regFf')

        var licIp = 0
        function createForm(d) {
                licIp = d
                if(d <= 5 ){
                        for(let i = 1; i < d ; i++){
                                $(
                                `
                                <div class="flex-column all-form-input"style="align-items: flex-start; justify-content: flex-start; width: 80%;">
                                        <label for="email${i}">Team Mate ${i}</label>
                                        <input type="text" name='email${i}' id="email${i}" placeholder='Enter Email of Team Mate ${i}' class='invite'>
                                </div>
                                `
                                ).insertBefore('#inlst');
                        }
                } else {
                        $('.modal-content-box').css({'width':'50%'})
                        $('#frmLarge').css({'display':'flex'})
                        for(let i = 1; i < d ; i++){

                                $(
                                `
                                <div class="flex-column all-form-input"style="align-items: flex-start; justify-content: flex-start; width: 47%;">
                                        <label for="email${i}">Team Mate ${i}</label>
                                        <input type="email" name='email${i}' id="email${i}" placeholder='Enter Email of Team Mate ${i}' class='invite'>
                                </div>
                                `
                                ).appendTo('#frmLarge');
                        }
                }
        }

        //Form Creation

        //FormChangesByNextPrevious
        /*
        oF = {
                id : "#orgForm",
                active : true,   
                visible : true,    
        }
        lF = {
                id : "#licenseForm",
                active : false,
                visible : false,    
        }
        rF ={
                id : "#registerForm",
                active : false,
                visible : false,    
        }
        iF = {
                id : "#inviteForm",
                active : false,
                visible : false,    
        }

        var idArr =[oF, lF, rF, iF]
        var formIdP = null;
        var formIdN = null;

        function workingOfNP(){
                for(let i = 0; i < idArr.length;i++){
                        if(idArr[i].active == true && idArr[i].visible == true){
                                $('#Nxt').removeClass().addClass("np-row-btn-dis")
                                $('#Nxt').attr("disabled","disabled");
                        }
                }
        }

        $('#Pr').click(function(){
                $('#Nxt').removeClass().addClass("np-row-btn")
                $('#Nxt').removeAttr("disabled");
                formIdN = idArr[idArr.indexOf(formIdP)+1]
                $(formIdN.id).css({'display':'none'});
                formIdN.visible = false;
                $(formIdP.id).css({'display':'flex'});
                formIdP.visible = true;
                if(idArr.indexOf(formIdP) == 0){
                        $('#Pr').removeClass().addClass("np-row-btn-dis")
                        $('#Pr').attr("disabled","disabled");
                }else {
                        formIdP = idArr[idArr.indexOf(formIdP)-1]
                }
        });

        $('#Nxt').click(function(){

                $('#Pr').removeClass().addClass("np-row-btn")
                $('#Pr').removeAttr("disabled");
                formIdP = idArr[idArr.indexOf(formIdN)-1]
                $(formIdP.id).css({'display':'none'});
                formIdP.visible = false;
                $(formIdN.id).css({'display':'flex'});
                formIdN.visible=true;
                if(formIdN.active != true){
                        formIdN = idArr[idArr.indexOf(formIdN)+1]
                }
                workingOfNP();
        });*/
        //FormChangesByNextPrevious

        //OnCloseFormOpen
        //OnCloseFormOpen

        //Form Submission
        $('#orgForm').submit(function(e){

                var licArr = [];
                var org_name = $('#orgForm').find('input[name ="org_name"]').val();
                var businessdiv = $('#orgForm').find('input[name ="business_div"]').val();
                var name = $('#orgForm').find('input[name="name"]').val();
                var eml = $('#orgForm').find('input[name="email"]').val();
                var address = $('#orgForm').find('input[name ="location"]').val();
                var nolic = $('#orgForm').find('input[name="nolic"]').val();

                var errorCount = 0
                $('.of').each(function(index){
                        if($(`.of${index+1}`).val() == ''){
                                e.preventDefault();
                                $(`.of${index+1}`).css({'border':'2px solid red'})
                                errorCount = errorCount + 1
                                return false
                        }
                });

                if(eml != '' && !eml.match(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
                        e.preventDefault();
                        $('#orgForm').find('input[name="emailL"]').css({'border':'2px solid red'});
                        $('.form-error-msg').empty();
                        $('.form-error-msg').text('Email is incorrect ! ');
                        return false;
                }

                if (errorCount == 0){

                        for(let i = 0; i <  nolic; i++){
                                if(i==0){
                                        licArr.push({'email':`${eml}`,'admin_name':`${name}`});
                                }else {
                                        licArr.push({'admin_name':`${name}`});
                                }
                        }
                        localStorage.setItem('comp-name',businessdiv);

                        $('#orgForm').css({'display':'none'});
                        $('#loading').css({'display':'flex'});  

                        axios({
                                method:'post',
                                url:'https://production.backend.niompmo.com/account/api/license/',
                                data:  {
                                        org_data :{
                                                parent_name :`${org_name}`,
                                                name : `${businessdiv}`,
                                                location : `${address}`,
                                        },
                                        lic_data : licArr
                                }
                        }).then((res) => {
                                if(res.data.status == true){
                                        $('#loading').css({'display':'none'});
                                        $('#registerForm').css({'display':'flex'})
                                        $('modal-sub-heading').empty().text('Please provide some basic details to register you account.');
                                        $('#registerForm').find('input[name="email"]').val(licArr[0].email);
                                        localStorage.setItem('oid',res.data.data.organization_id);
                                        createForm(nolic);
                                }else{
                                        $('#loading').css({'display':'none'});
                                        $("#orgForm").css({'display':'flex'});
                                        $('#orgForm').find('input[name="email"]').css({'border':'2px solid red'});
                                        $('.form-error-msg').empty();
                                        $('.form-error-msg').text('Email already exists ! ');
                                }
                        });
                }
                return false;
        });

        $('#orgForm').find('input[name ="org_name"]').keyup(function(){
                $('#orgForm').find('input[name ="org_name"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
        });

        $('#orgForm').find('input[name ="business_div"]').keyup(function(){
                $('#orgForm').find('input[name ="business_div"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
        });

        $('#orgForm').find('input[name ="name"]').keyup(function(){
                $('#orgForm').find('input[name ="name"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
        });

        $('#orgForm').find('input[name ="email"]').keyup(function(){
                $('#orgForm').find('input[name ="email"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
                $('.form-error-msg').empty();
        });

        $('#orgForm').find('input[name ="location"]').keyup(function(){
                $('#orgForm').find('input[name ="location"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
        });

        $('#orgForm').find('input[name ="nolic"]').keyup(function(){
                $('#orgForm').find('input[name ="nolic"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
        });

        $('#registerForm').submit(function(e){

                var fname = $('#registerForm').find('input[name="fname"]').val();
                var lname = $('#registerForm').find('input[name="lname"]').val();
                var eml = $('#registerForm').find('input[name="email"]').val();
                var uname = $('#registerForm').find('input[name="username"]').val();
                var role = $('#registerForm').find('select[name="role"]').val();
                var country = $('#registerForm').find('select[name="country"]').val();
                var pass1 = $('#registerForm').find('input[name="pass1"]').val();
                var pass2 = $('#registerForm').find('input[name="pass2"]').val();

                var errorCount = 0;
                        
                $('.rf').each(function(index){
                        if($(`.rf${index+1}`).val() == ''){
                                e.preventDefault();
                                $(`.rf${index+1}`).css({'border':'2px solid red'});
                                errorCount = errorCount + 1;
                                return false;
                        }else {
                                $(`.rf${index+1}`).css({'border':'2px solid rgb(0,0,0,0.3)'});
                        }
                });

                if( pass1!= '' && (pass1.length < 8 || pass1.length > 15)){
                        e.preventDefault();
                        errorCount = errorCount + 1;
                        $('#registerForm').find('input[name="pass1"]').css({'border':'2px solid red'})
                        $(".form-error-msg").empty().text("Password length should be minimum 8  and maximum 15 characters");
                        return false;
                }else if( pass1!= '' && !pass1.match(/[a-z]+/g)){
                        e.preventDefault()
                        errorCount = errorCount + 1;
                        $('#registerForm').find('input[name="pass1"]').css({'border':'2px solid red'})
                        $(".form-error-msg").empty().text("Password should contain letters");
                        return false;
                }else {
                        $(".form-error-msg").empty();
                }

                
                if( pass2 != '' && pass1 != pass2){
                        e.preventDefault()
                        $('#registerForm').find("input[name='pass2']").css({'border':'2px solid red'})
                        $('#registerForm').find("input[name='pass1']").css({'border':'2px solid red'})
                        $(".form-error-msg").text("Password dosen't match !");
                        return false;
                }
                
                
                if(errorCount == 0){
                        localStorage.setItem('inviter-name',`${fname} ${lname}`);
                        localStorage.setItem('role',role);
                        $('.np-row').css({'display':'none'})
                        $('#registerForm').css({'display':'none'});
                        $('#loading').css({'display':'flex'});

                        axios({
                                method:'post',
                                url:'https://production.backend.niompmo.com/account/api/register/',
                                data: {
                                        first_name : `${fname}`,
                                        last_name : `${lname}`,
                                        email : `${eml}`,
                                        country : `${country}`,
                                        role : `${role}`,
                                        organization_id : localStorage.getItem('oid'),
                                        password : `${pass1}`,
                                        username : `${uname}`
                                },
                        }).then((res) => {
                                console.log(res)
                                if(res.data.status == true){
                                        if( !`${$(location).attr('href')}`.includes("?")){
                                                $('#loading').css({'display':'none'});
                                                $('.modal-sub-heading').empty().text("Please provide your team members email id to inivite them.")
                                                $('#registerForm').css({'display':'none'});
                                                $('#inviteForm').css({'display':'flex'});
                                                $(".form-error-msg").empty();
                                        }else{
                                                $('#loading').css({'display':'none'});
                                                $('.modal-sub-heading').empty();
                                                $('#registerForm').css({'display':'none'});
                                                $('#success-msg').css({'display':'flex'});
                                                lastForm =true;
                                                localStorage.removeItem('oid');
                                        }
                                }else{
                                        if(res.data.message.includes("User Name")){
                                                $('#loading').css({'display':'none'});
                                                $('#registerForm').css({'display':'flex'});
                                                $(".form-error-msg").text("Username already taken !");
                                                $('#registerForm').find('input[name="username"]').css({'border':'2px solid red'});
                                        }else{
                                                $('#loading').css({'display':'none'});
                                                $('#registerForm').css({'display':'flex'});
                                                $(".form-error-msg").text("You are already registered !");
                                                $('#registerForm').find('input[name="email"]').css({'border':'2px solid red'});
                                                lastForm = true;
                                        }
                                }
                        })

                }
                return false;
        });

        $('#registerForm').find('select[name="country"]').keyup(function(){
                $('#registerForm').find('select[name="country"]').css({'border':'2px solid rgb(0,0,0,0.3) !important'})
        });

        $('#registerForm').find('input[name="fname"]').keyup(function(){
                $('#registerForm').find('input[name="fname"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
        });

        $('#registerForm').find('input[name="lname"]').keyup(function(){
                $('#registerForm').find('input[name="lname"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
        });

        $('#registerForm').find('input[name="email"]').keyup(function(){
                $('#registerForm').find('input[name="email"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
        });

        $('#registerForm').find('input[name="username"]').keyup(function(){
                $('#registerForm').find('input[name="username"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
                $(".form-error-msg").empty();
        });

        $('#registerForm').find('select[name="role"]').keyup(function(){
                $('#registerForm').find('select[name="role"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
        });

        $('#registerForm').find('input[name="pass1"]').keyup(function(){
                $('#registerForm').find('input[name="pass1"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
                $(".form-error-msg").empty();
        });

        $('#registerForm').find('input[name="pass2"]').keyup(function(){
                $('#registerForm').find('input[name="pass2"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
                $('#registerForm').find('input[name="pass1"]').css({'border':'2px solid rgb(0,0,0,0.3)'})
                $(".form-error-msg").empty();
        });

        $('#inviteForm').submit(function(e){

                var errorCount =0
                $('.invite').each(function(index){
                        if($(`#email${index+1}`).val() == ''){
                                e.preventDefault();
                                $('#loading').css({'display':'none'});
                                $('#inviteForm').css({'display':'flex'});
                                $(`#email${index+1}`).css({'border':'2px solid red'})
                                errorCount = errorCount + 1
                                return false;
                        }else{
                                $(`#email${index+1}`).css({'border':'2px solid rgb(0,0,0,0.3)'})
                        }

                        if(!$(`#email${index+1}`).val().match(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
                                e.preventDefault();
                                $('#loading').css({'display':'none'});
                                $('#inviteForm').css({'display':'flex'});
                                $(`#email${index+1}`).css({'border':'2px solid red'})
                                $('.form-error-msg').text('Incorrect Email !')
                                errorCount = errorCount + 1
                                return false;
                        }else {
                                $('.form-error-msg').empty();
                                $(`#email${index+1}`).css({'border':'2px solid rgb(0,0,0,0.3)'})
                        }
                });


                if(errorCount == 0){
                        $('#inviteForm').css({'display':'none'});
                        $('#loading').css({'display':'flex'});
                        var  org_id = localStorage.getItem('oid');
                        var iname = localStorage.getItem('inviter-name');
                        var irole = localStorage.getItem('role');
                        var icomp = localStorage.getItem('comp-name');
                        $('.invite').each(function(index){
                                var getEml = $(`#email${index+1}`).val();
                                var d = `${org_id}and${getEml}`
                                data = dataEncrypt(`${d}`);
                                var lnk = `https://niohmdemo.niohm-pmo.online/index.html?d=${data}`
                                Email.send({ 
                                        SecureToken:'ab1a4f0f-e473-4a21-8ae7-a45f51d5b813',
                                        Host: "smtpout.secureserver.net", 
                                        Username: "no-reply@niompmo.com", 
                                        Password: "niompmo@12345", 
                                        To: `${getEml}`, 
                                        From: "no-reply@niompmo.com", 
                                        Subject: `${iname.toLocaleUpperCase()} invited you to NioM PMO`, 
                                        Body: `
                                        <body>
                                                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 5%;">
                                                        <div style="display: inline-block; border: 1px solid yellowgreen; padding: 1%; width: 60%;">
                                                                <img src="https://production.backend.niompmo.com/media/profile_pics/test_File_brand-logo.png" alt="" width="auto" height="70px">
                                                                <h3 style="background: #5161AC; color: #fff; text-align: center;  font-size: 24px; line-height: 40px;">Join ${iname.toLocaleUpperCase()} NioM PMO team</h3>
                                                                <br><br>
                                                                <p style="text-align: center; text-align-last: center;"><b>${iname.toLocaleUpperCase()}</b> has invited you to use the tool <b>NioM PMO</b> to track all your assigned projects activities.Use the button below to setup your account and gets started.</p>
                                                                <br>
                                                                <h3 style="text-align: center;"> <a href="${lnk}" style="padding: 2% 3%; text-decoration:none; background:#485ED6; color: #fff!important; border-radius: 6px;">Click here</a></h3>
                                                                <br>
                                                                <p>Welcome on board,
                                                                        <br>
                                                                        <span>The <b>${icomp.toLocaleUpperCase()}</b> Team.</span>
                                                                </p>
                                                                <br>
                                                        </div>
                                                </div>
                                        </body>
                                                `, 
                                }).then((res)=>{
                                        $('#loading').css({'display':'none'});
                                        $('.modal-sub-heading').empty();
                                        $('#success-msg').css({'display':'flex'});
                                        lastForm = true;
                                        localStorage.removeItem('oid');
                                        localStorage.removeItem('comp-name');
                                        localStorage.removeItem('inviter-name');
                                        localStorage.removeItem('role');
                                });
                        });
                }
                        
                return  false;
        });        

        $('.invite').keyup(function(){
                $('.form-error-msg').empty();
                $('.invite').css({'border':'2px solid rgb(0,0,0,0.3)'})
        });
        //Form Submission

        //Country Drop Down
        function createDropDown(classNames,ele){
                const selectCountry = `
                        <select name="country" id="country" class='${classNames}' >
                                <option value="">Select Country</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Åland Islands">Åland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-bissau">Guinea-bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                <option value="Korea, Republic of">Korea, Republic of</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao">Macao</option>
                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">Russian Federation</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-leste">Timor-leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                `
                $(
                        `
                        <div class="flex-column all-form-input" style="align-items: flex-start; justify-content: flex-start; width: 47%;">
                                <label for="countryNew">Country</label>
                                ${selectCountry}
                        </div>
                        `
                ).insertAfter(`${ele}`);
        }
        //Country Drop Down

});
