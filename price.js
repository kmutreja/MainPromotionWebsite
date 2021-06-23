$(document).ready(function(){



    const priceData = 
        {
            "User limit(Per Project)":[5,"Unlimited","Unlimited","Unlimited",],
            "Storage":["Unlimited","Unlimited","Unlimited","Unlimited",],
            "Support":["24*7 Enterprise Support","24*7 Enterprise Support","24*7 Enterprise Support","24*7 Enterprise Support"],
            "Guaranteed SLA":["99.9%","99.9%","99.9%","99.9%"],
            "Agile Scrum Dashboard":[true,true,true,true],
            "Project Builder" :[true,true,true,true],
            "Resource Sheet":[true,true,true,true],
            "Jira Integeration" : [true,true,true,true],
            "Epic":[true,true,true,true],
            "User Story":[true,true,true,true],
            "Dependency Management":[true,true,true,true],
            "Bug Management":[true,true,true,true],
            "Task Management":[true,true,true,true],
            "Track Code Quality":[true,true,true,true],
            "Sprint Planning":[true,true,true,true],
            "Sprint Release Track":[true,true,true,true],
            "Automate Estimate and Actual Efforts":[true,true,true,true],
            "Email Notification and Remainder":[true,true,true,true],
            "Project Role":[true,true,true,true],
            "Sticky Notes":[true,true,true,true],
            "Team Dashboard":[true,true,true,true],
            "Create Hidden Task":[true,true,true,true],
            "Forecast Project Delivery Date":[false,true,true,true],
            "Project Charter":[false,true,true,true],
            "Monthly Salary Calculation":[false,true,true,true],
            "Risk Register":[false,true,true,true],
            "Create Task/Bug from Slack":[false,true,true,true],
            "Kanbard Board":[false,true,true,true],
            "Goal Management":[false,true,true,true],
            "Track Lesson Learned":[false,true,true,true],
            "Shared Team Calendar":[false,false,true,true],
            "Members TimeSheet":[false,false,true,true],
            "Track Hidden Tasks Status and Time":[false,false,true,true],
            "Resource Calculation":[false,false,true,true],
            "Remote Team Monitoring":[false,false,true,true],
            "Document Repositoring":[false,false,false,true],
            "Leave Management":[false,false,false,true],
            "Get list of members Leaves in Sprint Planning":[false,false,false,true],
            "Get list of holidays in Sprint Planning":[false,false,false,true],
            "Get list of lesson learned in Sprint Planning":[false,false,false,true],
            "Silo Management":[false,false,false,true],
            "Artificial Intelligence":[false,false,false,false],
        }

    function priceDataAdd(){
        var value = ''
        Object.entries(priceData).forEach(entry =>{
            const [key, val] = entry;
            value = value + `<div class=" flex w100 flex-start font-small font-weight-normal price-feature-head pfr" ">
                            <div class=" price-feature-col pflbdr bold-font">${key}</div>
                            <div class=" price-feature-col pflbdr pb1" style="color: ${val[0] ===true?"#008000": val[0] ===false ?"black":""}; ">${val[0] === true || val[0] === false ? val[0] === true ? "&#x2714;":"&ndash;":val[0]}</div>
                            <div class="price-feature-col pflbdr pb2" style="color: ${val[1] ===true?"#008000": val[1] ===false ?"black":""};">${val[1] === true || val[1] === false ? val[1] === true ? "&#x2714;":"&mdash;":val[1]}</div>
                            <div class="price-feature-col pflbdr pb3" style="color: ${val[2] ===true?"#008000": val[2] ===false ?"black":""};">${val[2] === true || val[2] === false ? val[2] === true ? "&#x2714;":"&mdash;":val[2]}</div>
                            <div class="price-feature-col pflbdr pb4" style="color: ${val[3] ===true?"#008000": val[3] ===false ?"black":""};">${val[3] === true || val[3] === false ? val[3] === true ? "&#x2714;":"&mdash;":val[3]}</div>
                    </div>

            `
        })

        return value;
    }

    $(".price-features-container").append(`
       ${priceDataAdd()}
    `)

    

// const priceConversion = async(data) => {
//     const url = 'http://www.geoplugin.net/json.gp?'
//     const response = await fetch(url)
//     const resJSON = await response.json()
//     const val = resJSON['geoplugin_currencySymbol'] + Math.round(data * resJSON['geoplugin_currencyConverter'])
//     return val
  
//   }
  
  // const calculatePrice = async() => {
  //   return {
  //     basic: {
  //       monthly: await priceConversion(0),
  //       annual: await priceConversion(0)
  //     },
  //     standard: {
  //       monthly: await priceConversion(9),
  //       annual: await priceConversion(4.5),
  //     },
  //     premium: {
  //       monthly: await priceConversion(17),
  //       annual: await priceConversion(7)
  //     }
  //   }
  
  // }
// const conversionMain = async() =>{
//     const price = await calculatePrice()
//     let monthly = true
//     if (monthly === true){
//         $("#freeMonthly").empty().text(`${price.basic.monthly}`)
//         $("#standardMonthly").empty().text(`${price.standard.monthly}`)
//         $("#premiumMonthly").empty().text(`${price.premium.monthly}`)
//     }
//     $("#togglePrice").click(
//         function(){
//             monthly = !monthly
//             if (monthly === true){
//                 $("#freeMonthly").empty().text(`${price.basic.monthly}`)
//                 $("#standardMonthly").empty().text(`${price.standard.monthly}`)
//                 $("#premiumMonthly").empty().text(`${price.premium.monthly}`)
//             }
//             else{
//                 $("#freeAnnual").empty().text(`${price.basic.annual}`)
//                 $("#standardAnnual").empty().text(`${price.standard.annual}`)
//                 $("#premiumAnnual").empty().text(`${price.premium.annual}`)
//             }  
            
//         }
        
//         )
//     }
//     conversionMain()

})

function toggleBtn(divid)
  {
 
    varOn = divid + 'On';
    varOff = divid + 'Off';
    if(document.getElementById(varOn).style.visibility == 'visible')
    {
    document.getElementById(varOn).style.visibility = 'hidden';
    document.getElementById(varOff).style.visibility = 'visible';
    }
   
    else
    {  
    document.getElementById(varOff).style.visibility = 'hidden';
    document.getElementById(varOn).style.visibility = 'visible';
    }
} 

$("#togglePrice").click()




$("#freeMonthBtn").click(
  function(){
  const text =  $("#freeMonthPlan").text()
  var newurl = window.location.protocol + "//" + window.location.host + '/signup.html' + `?subscriber_plan=${text}`;
  $("#freeMonthBtn a").attr("href", `${newurl}` )

  }
)

$("#freeAnnualBtn").click(
  function(){
  const text =  $("#freeAnnualPlan").text()
  var newurl = window.location.protocol + "//" + window.location.host + '/signup.html' + `?subscriber_plan=${text}`;
  $("#freeAnnualBtn a").attr("href", `${newurl}` )

  }
)

$("#standardMonthlyBtn").click(
  function(){
  const text =  $("#standardMonthlyPlan").text()
  var newurl = window.location.protocol + "//" + window.location.host + '/signup.html' + `?subscriber_plan=${text}`;
  $("#standardMonthlyBtn a").attr("href", `${newurl}` )

  }
)

$("#standardAnnualBtn").click(
  function(){
  const text =  $("#standardAnnualPlan").text()
  var newurl = window.location.protocol + "//" + window.location.host + '/signup.html' + `?subscriber_plan=${text}`;
  $("#standardAnnualBtn a").attr("href", `${newurl}` )

  }
)

$("#premiumAnnualBtn").click(
  function(){
  const text =  $("#premiumAnnualPlan").text()
  var newurl = window.location.protocol + "//" + window.location.host + '/signup.html' + `?subscriber_plan=${text}`;
  $("#premiumAnnualBtn a").attr("href", `${newurl}` )

  }
)

$("#premiumMonthlyBtn").click(
  function(){
  const text =  $("#premiumMonthlyPlan").text()
  var newurl = window.location.protocol + "//" + window.location.host + '/signup.html' + `?subscriber_plan=${text}`;
  $("#premiumMonthlyBtn a").attr("href", `${newurl}` )

  }
)




// if ($("#premiumMonthlyBtn").click(clicked) || $("#premiumAnnualBtn").click(clicked)){
//   function clicked(){
//     console.log("worked")
//   }
// }































