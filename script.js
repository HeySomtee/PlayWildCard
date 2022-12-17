const av_image = document.getElementById('char-img')
;
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const value = document.getElementsByClassName('dot')
const value1 = document.getElementsByClassName('dot1')
const value2 = document.getElementsByClassName('dot2')
const displayName = document.getElementById("name");
const skinBox = document.getElementById("skinbox")
const specie = document.getElementById("specie");
const male_box = document.getElementById("male");
const female_box = document.getElementById("female");

function val(params) {
    // value[0].style.background = "green";
    var div = value;
  for(var i = 0; i < div.length-1; i++) {
  div[i].style.backgroundColor = "green";
  }

  var div = value1;
    for(var i = 0; i < div.length-3; i++) {
    div[i].style.backgroundColor = "green";
    }

    var div = value2;
    for(var i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = "green";
    }



}


function val1(params) {
    var div = value;
    for(var i = 0; i < div.length-4; i++) {
    div[i].style.backgroundColor = "green";
    }
  
    var div = value1;
      for(var i = 0; i < div.length-1; i++) {
      div[i].style.backgroundColor = "green";
      }
  
      var div = value2;
      for(var i = 0; i < div.length-2; i++) {
      div[i].style.backgroundColor = "green";
      }
}
// val1()

// function val2(params) {
//     var div = value2;
//     for(var i = 0; i < div.length; i++) {
//     div[i].style.backgroundColor = "green";
//     }
// }
// val2()

// div2.addEventListener("click", func2);
function func(e) {
    document.getElementById('div').style.background = "rgb(32, 245, 32)";
    document.getElementById('div1').style.background = "";
    document.getElementById('div2').style.background = "";
    document.getElementById('div3').style.background = "";
    document.getElementById('div4').style.background = "";
    document.getElementById('tit').style.display = "none";
    
    //change the avatar src content
    av_image.src = "./character1.png"
    av_image.style.animationName = "key";
    setTimeout(() => {
        frame.style.overflow = "visible";
    }, 2100);

    val();
    displayName.innerHTML = "BOLGAR";
    skinBox.style.backgroundColor = "#eab676";
    skinBox.className = "";
    specie.innerHTML = "Human"

    male_box.style.backgroundColor = "green"
    female_box.style.backgroundColor = ""

}

function func2(e) {
    document.getElementById('div').style.background = "";
    document.getElementById('div1').style.background = "rgb(32, 245, 32)";
    document.getElementById('div2').style.background = "";
    document.getElementById('div3').style.background = "";
    document.getElementById('div4').style.background = "";
    document.getElementById('tit').style.display = "none";

   
    //change the avatar src content
    av_image.src = "./char-two.png"
    av_image.style.animationName = "key";
    setTimeout(() => {
        frame.style.overflow = "visible";
    }, 2300);

    val1();
    displayName.innerHTML = "ALOE";
    skinBox.className = "skinbox2"
    // skinBox.style.backgroundColor = "#e28743";
    specie.innerHTML = "Deer";

    male_box.style.backgroundColor = "#0000"
    female_box.style.backgroundColor = "green"

}

function func3(params) {
    document.getElementById('div').style.background = "";
    document.getElementById('div1').style.background = "";
    document.getElementById('div2').style.background = "rgb(32, 245, 32)";
    document.getElementById('div3').style.background = "";
    document.getElementById('div4').style.background = "";
    document.getElementById('tit').style.display = "none";


    av_image.src = "./char3.png"
    av_image.style.animationName = "key";
    setTimeout(() => {
        frame.style.overflow = "visible";
    }, 2300);
    displayName.innerHTML = "LOCKE";
    skinBox.className = "skinbox3"
    // skinBox.style.backgroundColor = "gold";
    specie.innerHTML = "Cyborg"

    male_box.style.backgroundColor = "green"
    female_box.style.backgroundColor = ""


}

function func4(params) {
    document.getElementById('div').style.background = "";
    document.getElementById('div1').style.background = "";
    document.getElementById('div2').style.background = "";
    document.getElementById('div3').style.background = "rgb(32, 245, 32)";
    document.getElementById('div4').style.background = "";
    document.getElementById('tit').style.display = "none";


    av_image.src = "./char6.png"
    av_image.style.animationName = "key";
    setTimeout(() => {
        frame.style.overflow = "visible";
    }, 2300);
    displayName.innerHTML = "SEMBLER";
    skinBox.className = "skinbox3"
    specie.innerHTML = "Robot"

    male_box.style.backgroundColor = "green"
    female_box.style.backgroundColor = ""

}

function func5(params) {
    document.getElementById('div').style.background = "";
    document.getElementById('div1').style.background = "";
    document.getElementById('div2').style.background = "";
    document.getElementById('div3').style.background = "";
    document.getElementById('div4').style.background = "rgb(32, 245, 32)";
    document.getElementById('tit').style.display = "none";


    av_image.src = "./char5.png"
    av_image.style.animationName = "key";
    setTimeout(() => {
        frame.style.overflow = "visible";
    }, 2300);
    displayName.innerHTML = "SPORD";
    specie.innerHTML = "Mushroom";
    skinBox.className = "skinbox4";

    male_box.style.backgroundColor = "green"
    female_box.style.backgroundColor = ""
}













// document.getElementById('middle-child3').style.animationName = "blink";
// document.getElementById('middle-child4').style.animationName = "blink";
// document.getElementById('middle-child5').style.animationName = "blink";