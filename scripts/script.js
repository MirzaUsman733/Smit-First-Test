const tostify = () => {
  Toastify({
    text: "Please Enter Date in the input",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}
const login = () => {
  let text = document.getElementById("txt").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
//   if(text.length > 3 && email === "admin@user.com" && password === "123456"){
//     // document.getElementById("show").innerHTML = text + "<br>" + email + "<br>" + password;
//     document.getElementById("center").style.display = "none"
//     document.getElementById("newPage").style.display = "block"
//     document.getElementById("name").innerHTML = text;
//   } else {
//     alert("error")
//     tostify();
//   }


if(text.length < 3){
  Toastify({
    text: "Please Enter correct Full Name",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
} else{
  if(email !== "admin@user.com"){
     Toastify({
    text: "Please Enter correct email",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  }else{
    if(password !== "123456"){
       Toastify({
    text: "Please Enter Correct Password",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
    }else{
      Toastify({
        text: "You successfully enter in the home page",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      document.getElementById("center").style.display = "none"
          document.getElementById("newPage").style.display = "block"
          document.getElementById("name").innerHTML = text;
          document.title = "Home Page"
    }
  }
}
}




//home page
document.getElementById("clear").onclick = () => {
  document.getElementById("input").value = ""
}

let cities = ["Faisalabad" ,"Lahore", "Karachi", "Islamabad", "Bhurewala", "Sheikhupura", "Kashmir"];

const add = () => {
  document.getElementById("result").innerHTML = "";
let value = document.getElementById("input").value;
   value = input.value;
  if (!value && value.length < 3) {
      Toastify({
        text: "Please enter a city in the Input Field with the full format.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
  } else {
  value = value.toLowerCase();
  let firstvalue = value.charAt(0).toUpperCase();
  let finalvalue = firstvalue + value.substr(1);
  for (let i = 0; i < cities.length; i++) {
      if (finalvalue == cities[i]) {
          return document.getElementById("result").innerHTML = '<span style="color:blue; font-weight : bold">' + '"' + finalvalue + '"' + '</span>' + ' is already in the list';
      }

  }
  
  Toastify({
    text: "You enter city successfully",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  cities.push(finalvalue);
  document.getElementById("result").innerHTML = '<span style="color:blue; font-weight : bold">' + '"' + finalvalue + '"' + '</span>' + ' has been added in the list';
}
}

const print = () => {

  let staa = document.getElementById("result").innerHTML = ""
  
  Toastify({
    text: "You Print all cities in the home page successfully",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
    cities.forEach((city,index)=>{
        document.getElementById("result").innerHTML += index+1 + " : " + city + "<br>"
    });

}