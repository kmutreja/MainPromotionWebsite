$(document).ready(function(){
    const gif01 = $('#gif-01');
    const gif02 = $('#gif-02');
    const gif03 = $('#gif-03');
    const gif04 = $('#gif-04');
    const gif05 = $('#gif-05');
    const gif06 = $('#gif-06');
    const gif07 = $('#gif-07');
    const gif08 = $('#gif-08');
    const gif09 = $('#gif-09');
    const gif10 = $('#gif-10');
    const gif11 = $('#gif-11');
    const gif12 = $('#gif-12');
    const gif13 = $('#gif-13');
    
    /* Start - Exclusive Features - Big Images on Click*/
    
    gif01.click(function(){gif(gif01,heading='Agile-Scrum Dashboard',
            content='Agile Scrum Dashboardwill allow you to manage projects and view complete sprint within a single page and simple interface.',
            imgClass="excl-img-1")})
    gif02.click(function(){gif(gif02,heading='Project Builder',
            content='Create project with complete Package of your every new project',
            imgClass="excl-img-2")})
    gif03.click(function(){gif(gif03,heading='Methodology Based Risk Register',
            content='Risk is often assumed to be negative but it is important to note that project risk can also be occasionally be positive. NioM will tell you risks associated based on your decision.',
            imgClass="excl-img-3")})
    gif04.click(function(){gif(gif04,heading='Automate Sprint Planning',
        content='Let NioM to forecast the user stories, tasks and bugs in your next sprint based onyour previous learnings and velocity of team. Its time to decrease the failure rateof sprints and win the confidence of your customer.',
        imgClass="excl-img-4")})
    gif05.click(function(){gif(gif05,heading='Remote Team Monitoring',
        content='As the COVID-19 pandemic has progressed, many companies have shifted to remote work. How you will know, whether your team is working is on your projector doing some other activities. NioM will spy on your team activities now and will show you in your dashboard.',
        imgClass="excl-img-5")})
    gif06.click(function(){gif(gif06,heading='Keep Team Focused and Productive',
        content='Employees who are concerned about their future are likely to be distracted and unproductive. Keep your team focused with their day goals and tasks.',
        imgClass="excl-img-6")})
    gif07.click(function(){gif(gif07,heading='Track Team Daily Assigned Tasks',
        content='Don’t chase team to fill the daily timesheet, let them focus on project goals. NioM is here for to fill it automatically for your team, whatever task they perform.',
        imgClass="excl-img-7")})
    gif08.click(function(){gif(gif08,heading='Track Code Quality',
        content='Track you code written by your developers and ask them about the code quality. As, we will tell help you to estimate the no. of bugs can occurred in your project.',
        imgClass="excl-img-8")})
    gif09.click(function(){gif(gif09,heading='Slash Commands with Slack',
        content='Invoke NioM app in Slack and create task directly in your project to assign to your team.',
        imgClass="excl-img-9")})
    gif10.click(function(){gif(gif10,heading='Note Down in Sticky Notes',
        content='Glue the sticky notes in NioM under your project.',
        imgClass="excl-img-10")})
    gif11.click(function(){gif(gif11,heading='Track, How Many Priority Changed',
        content='Frequent changes in priority usually result from a project scope change, which directly impacts on both cost and schedule. NioM will track this',
        imgClass="excl-img-11")})
    gif12.click(function(){gif(gif12,heading='Let Niohm forecast Project Delivery Date',
        content='Add list of features, NioM will tell you delivery date of project',
        imgClass="excl-img-12")})
    gif13.click(function(){gif(gif13,heading='Track hidden Task',
        content='Epics get completed and managers do not come to know, what all tasks developer have done to complete. Now, NioM will track those tasks and time spent on that.',
        imgClass="excl-img-13")})
    
    /* Start - Exclusive Features - Big Images on Click */
    
    function gif(id,heading="",content="",imgClass) {
        $('.gif-change').removeClass('exclusive-feat-active')
        id.addClass('exclusive-feat-active')
        $('.img-heading .exclusive-content').empty();
        $('.img-heading').html(heading)
        $('.exclusive-content').html(content);
        $("#exclusive-img").removeClass()
        $("#exclusive-img").addClass(imgClass);
        $("#exclusive-img").addClass( "main-img-container-ani1" ).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
            $("#exclusive-img").removeClass( "main-img-container-ani1" );
        });
    }

/*Start - Solved by NioM - Icons */
    const ugif01 = $('#u-gif-01');
    const ugif02 = $('#u-gif-02');
    const ugif03 = $('#u-gif-03');
    const ugif04 = $('#u-gif-04');
    const ugif05 = $('#u-gif-05');
    const ugif06 = $('#u-gif-06');
    const ugif07 = $('#u-gif-07');
    const ugif08 = $('#u-gif-08');
    const ugif09 = $('#u-gif-09');
    const ugif10 = $('#u-gif-10');
    const ugif11 = $('#u-gif-11');
    const ugif12 = $('#u-gif-12');
    const ugif13 = $('#u-gif-13');
    const ugif14 = $('#u-gif-14');
    const ugif15 = $('#u-gif-15');
    const ugif16 = $('#u-gif-16');
    const ugif17 = $('#u-gif-17');
    
/*End - Solved by NioM - Icons */
    
     /*Start - Solved by NioM - Big Images with Content */
    
    ugif01.click(function(){
        ugif(ugif01,
            heading="Project Charter",
            content="Outline the project – include status, schedule, cost, risks and share th eproject goals with your team",
            "img-class-1")})
    ugif02.click(function(){
        ugif(ugif02,
            heading="Resource Calculation",
            content="Wondering how to calculate number of resources for your new project, try NioM PMO",
            "img-class-2")})
    ugif03.click(function(){
        ugif(ugif03,
            heading="Resource Sheet",
            content="Resource Sheet is a view within NioM that allows the just project manager to view, create, and edit resources and resource information till hourly rate calculation",
            "img-class-3")})
    ugif04.click(function(){
        ugif(ugif04,
            heading="Risk Register",
            content="Don’t worry, NioM will tell the risks associated with your selected methodologies.",
            "img-class-4")})
    
    ugif05.click(function(){
        ugif(ugif05,
            heading="Document Epics/Feature with Agile",
            content="Create Large stories in minimal time with NioM",
            "img-class-5")})
    
    ugif06.click(function(){
        ugif(ugif06,
            heading="Document User Story under Epics",
            content="Don’t worry, if you don’ know to create perfect User Stories. NioM has solved your problem",
            "img-class-6")})
    ugif07.click(function(){
        ugif(ugif07,
            heading="Task Management",
            content="From simple to complex, you can create task and associate with user stories and assign to team",
            "img-class-7")})
    ugif08.click(function(){
        ugif(ugif08,
            heading="Bug Management",
            content="Allow your team to work on active sprint issues, orphan issues and track them",
            "img-class-8")})
    ugif09.click(function(){
        ugif(ugif09,
            heading="Track Retrospective Meetings",
            content="Centralized all your leanings at one place, share them with your team and consider in sprint planning",
            "img-class-9")})
    ugif10.click(function(){
        ugif(ugif10,
            heading="Use Calendar to assign Ad-hoc task to team ",
            content="Select date, your team member and task description and assign task to them, even that is not related to project",
            "img-class-10")})
    ugif11.click(function(){
        ugif(ugif11,
            heading="Track your team Leaves",
            content="Receive and manage employees leave request in fair, accurate and efficient manner from direct silo manager to project manager",             
            "img-class-11")})
    
    ugif12.click(function(){
        ugif(ugif12,
            heading="Share Project Goals with Team",
            content="Effective teamwork won’t happen without a common goal. Share Project Goals with NioM",              
            "img-class-12")})
    
    ugif13.click(function(){
        ugif(ugif13,
            heading="Calculate hourly rate of resource with Currency",
            content="What is average hourly rate of your developer? NioM will tell you",            
            "img-class-13")})
    
    ugif14.click(function(){
        ugif(ugif14,
            heading="Automate Actual Efforts",
            content="Remove the gap between the estimated efforts and actual efforts with the world class feature in NioM",           
            "img-class-14")})

    ugif15.click(function(){
        ugif(ugif16,
            heading="Email & Notification",
            content="Notify every team member with email and notification", 
            "img-class-15")})

    ugif16.click(function(){
        ugif(ugif16,
            heading="Reminders",
            content="Reminders are simple to remind your team with missed part",     
            "img-class-16")})

    ugif17.click(function(){
        ugif(ugif17,
            heading="Analytics",
            content="Reminders are simple to remind your team with missed part",                 
            "img-class-17")})
    
     /*End - Solved by NioM - Big Images */
    
    function ugif(id,heading="",content="",imgClass) {
        $('.ugif-change').removeClass('solved-feat-active')
        id.addClass('solved-feat-active')
        $('.img-heading2 .solved-content').empty();
        $('.img-heading2').html(heading)
        $('.solved-content').html(content);
        $("#solved-img").removeClass()
        $('#solved-img').addClass(imgClass)
        $("#solved-img").addClass( "main-img-container-ani1" ).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
            $("#solved-img").removeClass( "main-img-container-ani1" );
        });
    }


    var scroll_w = $('#ls-scroll').width();


    document.getElementById('btn-right').onclick = function () {
        document.getElementById('ls-scroll').scrollLeft += scroll_w;
      }
      document.getElementById('btn-left').onclick = function () {
        document.getElementById('ls-scroll').scrollLeft -= scroll_w;
      }

    var sw = $('#s-scroll').width();
    console.log(sw)
    document.getElementById('s-left').onclick = function () {
        document.getElementById('s-scroll').scrollLeft -= sw;
      }
      document.getElementById('s-right').onclick = function () {
        document.getElementById('s-scroll').scrollLeft += sw;
      }

      var ew = $('#e-scroll').width();
      console.log(sw)
      document.getElementById('e-left').onclick = function () {
          document.getElementById('e-scroll').scrollLeft -= ew;
        }
        document.getElementById('e-right').onclick = function () {
          document.getElementById('e-scroll').scrollLeft += ew;
        }

    const  nav_scroll = $('#nav-scroll');
    const nav_fst = $('#nav-fst');


        $(window).scroll(function(){
            var s_top = $(this).scrollTop();
            if (s_top >= 10) {
                nav_scroll.addClass('bg-white')
                $('.lk').removeClass('nav-color-link').addClass('nav-color-link2')
                $('.bt1').removeClass('color-navbtn2').addClass('nbtn-s2')
                $('.bt2').removeClass('color-navbtn').addClass('nbtn-s')
            }
            else {
                nav_scroll.removeClass('bg-white')
                $('.lk').removeClass('nav-color-link2').addClass('nav-color-link')
                $('.bt1').removeClass('nbtn-s2')
                $('.bt2').removeClass('nbtn-s')
            }
        })



    function loadpage() {
        var w_top = $(window).scrollTop();
        if (w_top > 0) {
            $('#nav-scroll').addClass('bg-white')
            $('.lk').removeClass('nav-color-link').addClass('nav-color-link2')
            $('.bt1').removeClass('color-navbtn2').addClass('nbtn-s2')
            $('.bt2').removeClass('color-navbtn').addClass('nbtn-s')
        }
    }

    loadpage()


    $('.nav-link').on('click',function() {
        $('.navbar-collapse').collapse('hide');
      });
      var name = $('#name');
      var lname = $('#lname');
      var mno = $('#mno');
      var eml = $('#email');
      var comp = $('#comp');
      var job = $('#jtitle');
      var city = $('#city');
      var country = $('#country');
      var nlic= $('#nlic');
      var tc = $('#tc');

      function sendEmail(name,lname,mno,eml,comp,job,city,country,nlic) { 
        Email.send({ 
          SecureToken:'ab1a4f0f-e473-4a21-8ae7-a45f51d5b813',
          Host: "smtpout.secureserver.net", 
          Username: "no-reply@niompmo.com", 
          Password: "niompmo@12345", 
          To: 'projects@nanotech-softapp.com', 
          From: "no-reply@niompmo.com", 
          Subject: "Enquiry for NioMPMO", 
          Body: `
               <body>
               <h3>Dear, Komal Mutreja</h3>
               <br>
               <p style="font-size:14px">
               My name is ${name.val()} ${lname.val()}.I am from <b>${city.val()}(${country.val()})</b> and working at <b>${comp.val()}</b> as <b>${job.val()}</b>
               I have visited <b>NioMPMO</b> website and I am impressed with your product's features and flexible plans.So I want to buy <b>${nlic.val()}</b> licenses. My contact details are given below.
               </p>
               <p style="font-size:14px">Please contact me as soon as possible.</p>
               <br>
              <h3> Contact Details</h3>
              <h3>Email : ${eml.val()}</h3>
              <h3>Contact No. : ${mno.val()}</h3>
              <br>
               <p style="font-size:14px">Thanks</P> 
               <h3>${name.val()}</h3>
           `, 
        })
          .then(function (message) { 
            $('#msg-success1').css({'display':"none"})
           $('#msg-success').css({'display':"block"})
          }); 

          console.log(true)
      } 

      function sendEmail2(emlN) { 
        Email.send({ 
          SecureToken:'ab1a4f0f-e473-4a21-8ae7-a45f51d5b813',
          Host: "smtpout.secureserver.net", 
          Username: "no-reply@niompmo.com", 
          Password: "niompmo@12345", 
          To: 'projects@nanotech-softapp.com', 
          From: "no-reply@niompmo.com", 
          Subject: "Subscription for News Update", 
          Body: `
               <body>
               <h3>Dear, Komal Mutreja</h3>
               <br>
               <p style="font-size:14px">
               ${emlN.val()} email wants to subscribe  our news updates.
               </p>
               <p style="font-size:14px">Please add it as soon as possible</p>
               <br>
              <h3>Email : ${emlN.val()}</h3>
              <br>
               <p style="font-size:14px">Thanks</P> 
           `, 
        })
          .then(function (message) { 
            $('#msg-success-nl').css({'display':"none"})
           $('#msg-success-nl-2').css({'display':"block"})
          }); 

      } 

      
      $('#nl').submit(function(){
        $('#msg-success-nl').css({'display':'block'})
        sendEmail2($('#emlNl'));
        return false;
      })

     $('#formValid').submit(function(e) {
         c=0
         if (name.val() == '' || lname.val() == '' || mno.val() == '' || eml.val() == '' || comp.val() == '' || job.val() == '' || city.val() == ''  || country.val() == '' || nlic.val() == '' || tc.is(':checked')==false) {
            e.preventDefault();
            name.css({'border':'1.5px solid red'})
            lname.css({'border':'1.5px solid red'})
            mno.css({'border':'1.5px solid red'})
            eml.css({'border':'1.5px solid red'})
            comp.css({'border':'1.5px solid red'})
            job.css({'border':'1.5px solid red'})
            city.css({'border':'1.5px solid red'})
            country.css({'border':'1.5px solid red'})
            nlic.css({'border':'1.5px solid red'})
            tc.css({'border':'1.5px solid red !important'})
            c=c+1
         }

         if(name.val() != ''){
            name.css({'border':'1.5px solid #5d678b'})
         }

         if(lname.val() != ''){
            lname.css({'border':'1.5px solid #5d678b'})
         }

         if(mno.val() != ''){
            mno.css({'border':'1.5px solid #5d678b'})
         }

         if(eml.val() != ''){
            eml.css({'border':'1.5px solid #5d678b'})
         }

         if(comp.val() != ''){
            comp.css({'border':'1.5px solid #5d678b'})
         }

         if(job.val() != ''){
            job.css({'border':'1.5px solid #5d678b'})
         }

         if(city.val() != ''){
            city.css({'border':'1.5px solid #5d678b'})
         }

         if(country.val() != ''){
            country.css({'border':'1.5px solid #5d678b'})
         }

         if(nlic.val() != ''){
            nlic.css({'border':'1.5px solid #5d678b'})
         }

         if (mno.val().match(/[^0-9]/)  && !eml.val().match(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
            e.preventDefault();
            mno.css({'border':'1.5px solid red'})
            eml.css({'border':'1.5px solid red'})
            $("#phone-error").css({'display':'block'})
            $("#email-error").css({'display':'block'})
            c=c+1
         }

         if (mno.val().match(/[^0-9]/)){
            e.preventDefault();
            mno.css({'border':'1.5px solid red'})
            $("#phone-error").css({'display':'block'})
            c=c+1
         }

         if(!eml.val().match(/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g) && eml.val() != '') {
            e.preventDefault();
            eml.css({'border':'1.5px solid red'})
            $(".contact-row3").css({'display':'flex'})
            $("#email-error").css({'display':'block'})
            c=c+1
         }
        console.log(c)
         if(c==0){
            $('#msg-success1').css({'display':'block'})
            sendEmail(name, lname, mno, eml, comp,job, city,country,nlic);
         }
         return false;
         
     })

     name.keyup(function() {
         name.css({"border":'1.5px solid #5d678b'})
     })
     lname.keyup(function() {
        lname.css({"border":'1.5px solid #5d678b'})
    })
    mno.keyup(function() {
       mno.css({"border":'1.5px solid #5d678b'})
       $("#phone-error").css({'display':'none'})
    })
    eml.keyup(function() {
        eml.css({"border":'1.5px solid #5d678b'})
        $("#email-error").css({'display':'none'})
    })
    city.keyup(function() {
        city.css({"border":'1.5px solid #5d678b'})
    })
    country.change(function() {
        if (country.val() != '')
                country.css({"border":'1.5px solid #5d678b'})
    })
    comp.keyup(function() {
        comp.css({"border":'1.5px solid #5d678b'})
    })
    job.keyup(function() {
        job.css({"border":'1.5px solid #5d678b'})
    })
    nlic.keyup(function() {
        nlic.css({"border":'1.5px solid #5d678b'})
    })

function dots(arr) {
    console.log(arr.length)
    for (var i=0;i<=arr.length;i++){
        console.log(i)
        if(arr[i]==".dot-container"){
            for (let j = 0; j <= 40; j++){
                $(arr[i]).append($('<span class="dot"></span>'));
                console.log(true)
            }
        } 
        
        if(arr[i]==".dot-container2"){
            for (let j = 0; j <= 40; j++){
                $(arr[i]).append($('<span class="dot1"></span>'));
                console.log(true)
            }
        }
        
        if(arr[i]==".dot-container3"){
            for (let j = 0; j <= 40; j++){
                $(arr[i]).append($('<span class="dot2"></span>'));
                console.log(true)
            }
        }
        
        if(arr[i]==".dot-container4") {
            for (let j = 0; j <= 40; j++){
                $(arr[i]).append($('<span class="dot3"></span>'));
                console.log(true)
            }
        }
        
    }
}

dots([".dot-container",".dot-container2",".dot-container3",".dot-container4"])
});


