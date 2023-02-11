function displayDetails(object, type) {
    var stat = false;
    var curr = type;

    stat != stat;
    var stat = document.getElementById(curr).checked;
    stat != stat;
    console.log(stat);
    const formsub = document.getElementById("myform")
    if (stat) {
        document.getElementById("comments1").style.display = "block";
        document.getElementById("comments11").style.display = "block";
        document.getElementById("comments11").attributes["required"] = true;

    } else {
        document.getElementById("comments1").style.display = "none";
        document.getElementById("comments11").style.display = "none";
        document.getElementById("comments11").attributes["required"] = false;

    }




}
function resetfunc(){
    document.getElementById("selectionbody").style.visibility = "hidden";
}
function showText() {
    document.getElementById("selectionbody").style.visibility = "visible";
    var eleout = document.getElementById("drinks").value;
    if (eleout == "Hot Tea") {

        document.getElementById("source2").style.display = "none";
        document.getElementById("source22").style.display = "none";
        document.getElementById("source3").style.display = "none";
        document.getElementById("source33").style.display = "none";
        document.getElementById("source4").style.display = "none";
        document.getElementById("source44").style.display = "none";


        document.getElementById("source1").style.display = "block";
        document.getElementById("source11").style.display = "block";
        document.getElementById("comments11").style.display = "none";
        document.getElementById("comments1").style.display = "none";


    }
    else if (eleout == "Coffee Latte") {

        document.getElementById("source2").style.display = "block";
        document.getElementById("source22").style.display = "block";


        document.getElementById("source1").style.display = "none";
        document.getElementById("source11").style.display = "none";
        document.getElementById("source3").style.display = "none";
        document.getElementById("source33").style.display = "none";
        document.getElementById("source4").style.display = "none";
        document.getElementById("source44").style.display = "none";
        document.getElementById("comments11").style.display = "none";
        document.getElementById("comments1").style.display = "none";


    }
    else if (eleout == "Hot Chocolate") {

        document.getElementById("source3").style.display = "block";
        document.getElementById("source33").style.display = "block";

        document.getElementById("source2").style.display = "none";
        document.getElementById("source22").style.display = "none";
        document.getElementById("source1").style.display = "none";
        document.getElementById("source11").style.display = "none";
        document.getElementById("source4").style.display = "none";
        document.getElementById("source44").style.display = "none";
        document.getElementById("comments11").style.display = "none";
       document.getElementById("comments1").style.display = "none";


    }
    else if (eleout == "Mint Tea") {

        document.getElementById("source4").style.display = "block";
        document.getElementById("source44").style.display = "block";

        document.getElementById("source2").style.display = "none";
        document.getElementById("source22").style.display = "none";
        document.getElementById("source3").style.display = "none";
        document.getElementById("source33").style.display = "none";
        document.getElementById("source1").style.display = "none";
        document.getElementById("source11").style.display = "none";
        document.getElementById("comments11").style.display = "none";
        document.getElementById("comments1").style.display = "none";


    }
    else {

        document.getElementById("source4").style.display = "none";
        document.getElementById("source44").style.display = "none";

        document.getElementById("source2").style.display = "none";
        document.getElementById("source22").style.display = "none";
        document.getElementById("source3").style.display = "none";
        document.getElementById("source33").style.display = "none";
        document.getElementById("source1").style.display = "none";
        document.getElementById("source11").style.display = "none";

        document.getElementById("comments11").style.display = "none";
        document.getElementById("comments1").style.display = "none";




    }



}


function validinput(object, type, nameType) {
    var regExName = /^[a-zA-Z]+$/;
    var regExEmail = /(?:name)?@northeastern\.edu/;
    var regExPhone = /\d{3}-\d{3}-\d{4}$/;
    var regExZip = /^\d{5}$/;
    var regExState = /^[a-zA-Z]+$/;
    var regExCity = /^[a-zA-Z]+$/;
    var name = 'errorMsg' + nameType;
    switch (type) {
        case 1: if (!object.value.trim().match(regExName)) {
            object.style.border = "2px solid red";
            document.getElementById(name).style.display = "block";
            object.value = "";
        } else {
            object.style.border = "";
            document.getElementById(name).style.display = "none";
        }

            break;
        case 3: if (!object.value.trim().match(regExEmail)) {
            object.style.border = "2px solid red";
            document.getElementById("errorMsgEmail").style.display = "block";
            object.value = "";
        } else {
            object.style.border = "";
            document.getElementById("errorMsgEmail").style.display = "none";
        }
            break;
        case 4: if (!object.value.trim().match(regExPhone)) {
            object.style.border = "2px solid red";
            document.getElementById("errorMsgPhone").style.display = "block";
            object.value = "";
        } else {
            object.style.border = "";
            document.getElementById("errorMsgPhone").style.display = "none";
        }
            break;
        case 5: if (!object.value.trim().match(regExZip)) {
               object.style.border = "2px solid red";
              document.getElementById("errorMsgZip").style.display = "block";
               object.value = "";
            } else {
                object.style.border = "";
               document.getElementById("errorMsgZip").style.display = "none";
    
            }
            break;
            case 6: if (!object.value.trim().match(regExState)) {
                object.style.border = "2px solid red";
               document.getElementById("errorMsgState").style.display = "block";
                object.value = "";
             } else {
                 object.style.border = "";
                document.getElementById("errorMsgState").style.display = "none";
     
             }
             break;
             case 7: if (!object.value.trim().match(regExCity)) {
                object.style.border = "2px solid red";
               document.getElementById("errorMsgCity").style.display = "block";
                object.value = "";
             } else {
                 object.style.border = "";
                document.getElementById("errorMsgCity").style.display = "none";
     
             }
             break;
            
        
    }
}




var j = 1;
function getTableContents() {
   
    var title = document.getElementsByName("title").value;
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var name = fname + " " + lname;
    var email = document.getElementById("emailId").value;
    var phone = document.getElementById("phoneNumber").value;
    var addressline1 = document.getElementById("streetAddress1").value;
    var addressline2 = document.getElementById("streetAddress2").value;
    var cityname = document.getElementById("city").value;
    var statename = document.getElementById("state").value;
    var zip = document.getElementById("zipcode").value;
    var comment = document.getElementById("comments").value;
    var drink = document.getElementById("drinks").value;
    var comment1 = document.getElementById('comments1').value;
    


    var radios = document.querySelectorAll('input[name="title"]:checked');
    var title1 = radios.length > 0 ? radios[0].value : '';

    var checkbox = document.querySelectorAll('input[name="source"]:checked');
    var checkCount = checkbox.length > 0 ? checkbox[0].value : "";
    var checkboxVals = document.getElementsByName('source');
    var sources = '';
    for (var cc = 0; cc < checkboxVals.length; cc++) {
        console.log(checkboxVals[cc].checked);
        if (cc != (checkboxVals.length - 1) && checkboxVals[cc].checked)
            sources += checkboxVals[cc].value + ', ';
        else if (checkboxVals[cc].checked) {
            sources += checkboxVals[cc].value;
        }
    }



    var sel1 = checkbox.length > 0 ? checkbox[0].value : '';


    var checkbox1 = document.querySelectorAll('input[name="source100"]:checked');
    var sel11 = checkbox1.length > 0 ? checkbox1[0].value : '';




    var checkboxVals1 = document.getElementsByName('source100');
    var choice = '';
    for (var cc = 0; cc < checkboxVals1.length; cc++) {
        if (checkboxVals1[cc].checked) {
            choice += checkboxVals1[cc].value;
            break;
        }
    }


    if (fname == "" || lname == "" || phone == "" || email == "" || zip == "" || cityname == "" || comment == "" ||statename == "" ||addressline1 == "" ||title1 == "" ||sel1 == "" ||  drink == "default") {
        alert("Please fill the required fields");
    }
    else if (sel11 != '' && comment1 == "") {
        alert("Please fill the required fields");
    }
    else {



        var content = "";

        content += "<tr><td>" + fname + "</td><td>" + lname + "</td></tr>";



        var userTable = document.getElementById("userTable");

        

        for (var i = j; i <= j; i++) {
            var row = userTable.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            var cell9 = row.insertCell(8);
            var cell10 = row.insertCell(9);
            var cell11 = row.insertCell(10);
            var cell12 = row.insertCell(11);
            var cell13 = row.insertCell(12);
            var cell14 = row.insertCell(13);
            cell1.innerHTML = title1;
            cell2.innerHTML = name;
            cell3.innerHTML = email;
            cell4.innerHTML = phone;
            cell5.innerHTML = addressline1;
            cell6.innerHTML = addressline2;
            cell7.innerHTML = cityname;
            cell8.innerHTML = statename;
            cell9.innerHTML = zip;
            cell10.innerHTML = sources;
            cell11.innerHTML = comment;
            cell12.innerHTML = drink;
            cell13.innerHTML = choice;
            cell14.innerHTML = comment1;
        }
        j = j + 1;

        
        document.getElementById('drinks').value = '';
        document.getElementById('myform').reset();
        document.getElementById("selectionbody").style.visibility = "hidden";
        

        

        


    }


}
