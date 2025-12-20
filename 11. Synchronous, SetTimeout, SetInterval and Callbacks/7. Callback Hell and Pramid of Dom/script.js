const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// setTimeout(() => {
//   heading1.textContent = "one";
//   heading1.style.color = "red";

//   setTimeout(() => {
//     heading2.textContent = "Two";
//     heading2.style.color = "green";

//     setTimeout(() => {
//       heading3.textContent = "Three";
//       heading3.style.color = "yellow";

//       setTimeout(() => {
//         heading4.textContent = "Four";
//         heading4.style.color = "blue";

//         setTimeout(() => {
//           heading5.textContent = "Five";
//           heading5.style.color = "pink";

//           setTimeout(() => {
//             heading6.textContent = "Six";
//             heading6.style.color = "purple";

//             setTimeout(() => {
//               heading7.textContent = "Seven";
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);

function changeText(element, text, color, time, onSuccess, onFailure) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccess) {
        onSuccess();
      }
    } else {
      onFailure();
    }
  }, time);
}

//////////////// Paramid Of Dom ////////////////
changeText(heading1, "One", "red", 1000, () => {
  changeText(heading2, "Two", "pink", 1000, () => {
    changeText(heading3, "Three", "yellow", 1000, () => {
      changeText(heading4, "Four", "green", 1000, () => {
        changeText(heading5, "Five", "brown", 1000, () => {
          changeText(heading6, "Six", "gray", 1000, () => {
            changeText(heading7, "Seven", "blue", 1000, () => {
              changeText(heading8, "Eight", "purple", 1000, () => {
                changeText(heading9, "Nine", "cyan", 1000, () => {
                  changeText(heading10, "Ten", "red", 1000, () => {

                  }, () => {console.log("Heading 10 Does Not Exist")})
                }, () => {console.log("Heading 9 Does Not Exist")})
              }, () => {console.log("Heading 8 Does Not Exist")})
            }, () => {console.log("Heading 7 Does Not Exist")})
          }, () => {console.log("Heading 6 Does Not Exist")})
        }, () => {console.log("Heading 5 Does Not Exist")})
      }, () => {console.log("Heading 4 Does Not Exist")})
    }, () => {console.log("Heading 3 Does Not Exist")})
  }, () => {console.log("Heading 2 Does Not Exist")})
}, () => {console.log("Heading 1 Does Not Exist")})