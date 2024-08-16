let getElementsByTagName=  document.getElementsByTagName("p");
// console.log("getElementsByTagName", getElementsByTagName);
let getElementById = document.getElementById("code");
// console.log("getElementById", getElementById);

let getElementBySelector = document.querySelector("#heading");
console.log("getElementBySelector", getElementBySelector);


function test(params) {
    let h2= document.getElementsByClassName("title");//[]
    h2[0].style.color="violet";
    let h3=  document.getElementsByTagName("h3");
    let nhat= "active";
    h3[0].setAttribute("class",nhat);
    let h4= document.getElementsByClassName("class1");
    // h4[0].classList.add("class3");
    // h4[0].classList.remove("class1");
    h4[0].classList.toggle("active");
    document.getElementsByClassName("container")[0].innerHTML =` <script>
        alert("xin chào!")
    </script>`;
    // console.log(11111111, h4[0].classList);
}
let obj={
    age:20
}
obj.name="minh thu"