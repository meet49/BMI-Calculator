// let a=[1, 2, 2]
// let b =[3,6, 4, 5]

// function myFunction(a, b)
// {

//     let arr = [...a, ...b].sort();
//     let mergedArr = [...new Set(arr)]
//     console.log(mergedArr);

// }

// myFunction(a,b)



// function fun(a,b) {
// let arr = [...a].concat([...b])
// let merge = [...new Set(arr)]
// console.log(merge);
// }

// fun(new Set([1, 2, 3]), new Set([3, 4, 5]))




// function diffArray(arr1, arr2) {
//     let newArr = [];

//     arr1.sort();
//     arr2.sort();

//     for (let i = 0; i < arr1.length; i++) {

//         for (let j = 0; j < arr2.length; j++) {

//             if (arr1[i] === arr2[j]) {

//                 delete arr1[i];
//                 delete arr2[j];
//             }
//         }
//     }
//     newArr = arr1.concat(arr2)
//     newArr = (arr1.filter(Boolean)).concat(arr2.filter(Boolean));
//     console.log(newArr);
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// let firstName = document.getElementById("Fname");
// let lastName = document.getElementById("Lname");
// let mobileNumber = document.getElementById("Mnumber");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let confirmPassword = document.getElementById("conpassword");


// function verify(){

// }


// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const fullName = document.getElementById('fullName').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const formData = {
//         fullName: fullName,
//         email: email,
//         password: password
//     };

//     saveFormData(formData);
// });

// function saveFormData(formData) {
//     const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

//     storedFormData.push(formData);

//     localStorage.setItem('formData', JSON.stringify(storedFormData));
// }

let form = document.querySelector("form")


form.addEventListener('submit', function (e) {
    e.preventDefault()

    let weight = parseInt(document.querySelector("#weight").value)
    let height = parseInt(document.querySelector("#height").value)
    let result = document.querySelector(".results")
    let message = document.querySelector(".message")

    if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = "please enter a right weight"
        result.style.fontSize = "50px"
    }
    else if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = "please enter a right height"
        result.style.fontSize = "50px"

    }
    else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
        result.style.fontSize = "50px"
        result.style.marginTop = "50px"


        if (bmi < 18.6) {
             message.innerHTML = "Please gain your weight you are under weight"
            message.style.fontSize = "50px"
        }
        if (bmi > 24.9) {
             message.innerHTML = "Please loss your weight you are over weight"
             message.style.fontSize = "50px"
        
            }
        if (bmi > 18.6 && bmi < 24.9) {
            message.innerHTML = "Congratulations you are normal weight"
            message.style.fontSize = "50px"
        
        }
    }
})