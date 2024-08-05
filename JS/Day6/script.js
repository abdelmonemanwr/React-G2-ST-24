var tbody = document.getElementById("tbody");

function getAllUsers()
{
    var xhr = new XMLHttpRequest();
    // var btn;
    // btn.onclick = function(){ }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            // console.log(xhr.response);
            var response = xhr.response;
            var users = JSON.parse(response);
            console.log(users);

            for(var idx = 0; idx<users.length; idx++)
            {
                var id = document.createElement("td");
                var name = document.createElement("td");
                var email = document.createElement("td");
                var phone = document.createElement("td");

                id.innerHTML = users[idx].id;
                name.innerHTML = users[idx].name;
                email.innerHTML = users[idx].email;
                phone.innerHTML = users[idx].phone;
                
                //console.log(id, name, email, phone);
                
                var row = document.createElement("tr");
                row.append(id, name, email, phone);

                console.log(row);

                tbody.append(row);
            }

            // var id = document.createElement("td");
            // id.innerHTML = users[idx].id;
            // var name = document.createElement("td");
            // name.innerHTML = users[idx].name;
            // var email = document.createElement("td");
            // email.innerHTML = users[idx].email;
            // var phone = document.createElement("td");
            // phone.innerHTML = users[idx].phone;
            
            // //console.log(id, name, email, phone);

            // var row = document.createElement("tr");
            // row.append(id, name, email, phone);
            // console.log(row);

            // tbody.append(row);
            
        }
    }

    // xhr.open("verb", "api_link");
    xhr.open("Get", "https://jsonplaceholder.typicode.com/users");
    xhr.send("");
}


