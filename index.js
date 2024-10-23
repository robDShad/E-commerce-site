const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem')

document.querySelectorAll(".color").forEach((col, colIndex) => {
        
    col.addEventListener("click", function chooseColor(e) {
        document.querySelectorAll(".color").forEach(x => x.style.transform = "scale(1)")
        e.target.style.transform = "scale(1.2)"
        document.querySelector(".productImg").src = productsDetails[0].image[colIndex]
    })
})
document.querySelectorAll(".size").forEach((x) => {
        
    x.addEventListener("click", (e) => {
        document.querySelectorAll(".size").forEach((t) => {t.style.background = "white";
        t.style.color = "black";})
        e.target.style.background = "black";
        e.target.style.color = "white";
    })
})
menuItems.forEach((item, index) => item.addEventListener("click", (t) => {
    document.querySelectorAll(".size").forEach((t) => {t.style.background = "white";
        t.style.color = "black";})
        document.querySelectorAll(".size")[0].style.background = "black";
        document.querySelectorAll(".size")[0].style.color = "white";
    wrapper.style.transform = `translateX(${-100 * (index)}vw)`;
    menuItems.forEach(x => x.style.transform = "scale(1)")
    t.target.style.transform = "scale(1.2)"
    document.querySelector(".productImg").src = productsDetails[index].image[0];
    document.querySelector(".productTitle").innerHTML = productsDetails[index].name;
    document.querySelector(".productPrice").innerHTML = productsDetails[index].price;
    document.querySelector(".productDesc").innerHTML = productsDetails[index].description;
    for (let i = 0; i < 2; i++) {
        document.querySelectorAll(".color")[i].style.background = productsDetails[index].colors[i];
    }
    document.querySelectorAll(".color").forEach((col, colIndex) => {
        document.querySelectorAll(".color").forEach((x) => {
            x.style.transform = "scale(1)";
            x.style.color = "white";
        })
        document.querySelectorAll(".color")[0].style.transform = "scale(1.2)"
        col.addEventListener("click",function pickColor(e) {
            e.target.style.transform = "scale(1.2)"
            document.querySelector(".productImg").src = productsDetails[index].image[colIndex];
            
        })
    })
    document.querySelectorAll(".size").forEach((x) => {
        
        x.addEventListener("click", (e) => {
            document.querySelectorAll(".size").forEach((t) => {t.style.background = "white";
            t.style.color = "black";})
            e.target.style.background = "black";
            e.target.style.color = "white";
        })
    })

}))



const productsDetails = [
    {   
        name: "AIR FORCE",
        price: "$119",
        image: ["images/air.png", "images/air2.png"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum provident illum exercitationem in facere veritatis earum id atque voluptates, quaerat laborum quo sed. Excepturi, deserunt. Consectetur vero nisi corrupti eius?",
        size : ["42", "43", "44"],
        colors: ["black", "darkblue"]
    },
    { 
        name: "JORDAN",
        price: "$140",
        image: ["images/jordan.png", "images/jordan2.png"],
        description: "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        size : ["40", "42", "44"],
        colors: ["lightgrey", "green"]
    },
    { 
        name: "BLAZER",
        price: "$98",
        image: ["images/blazer.png", "images/blazer2.png"],
        description: "Egestas vestibulum purus convallis convallis purus integer suscipit nec. Volutpat ridiculus aptent sem turpis massa sed ullamcorper cursus rhoncus. Congue vitae scelerisque eget venenatis posuere dapibus rutrum. Pharetra amet fermentum cras habitasse risus. Orci ipsum euismod laoreet finibus rhoncus ipsum.",
        size : ["38", "39", "40"],
        colors: ["white", "green"]
    },
    { 
        name: "CRATER",
        price: "$110",
        image: ["images/crater.png", "images/crater2.png"],
        description: "Et phasellus ad semper facilisi nostra felis ut. Donec natoque pretium ligula taciti; nisl conubia condimentum urna. Dignissim dis nec sociosqu suscipit natoque class eros lacinia. Cursus donec risus sapien viverra nec blandit penatibus finibus. Sem ultrices luctus lacus lobortis laoreet feugiat. Arcu magna tincidunt elit habitasse purus tempus aenean suscipit. Massa finibus vehicula sagittis diam habitasse fermentum euismod. Eu nostra scelerisque hac quisque mattis ultrices.",
        size : ["40", "41", "42"],
        colors: ["black", "white" ]
    },
    { 
        name: "HIPPIE",
        price: "$80",
        image: ["images/hippie.png", "images/hippie2.png"],
        description: "Congue mattis fermentum ornare donec, tortor nunc class sodales ornare. Aenean suscipit rhoncus habitant natoque quam feugiat vulputate turpis tincidunt. Sem vitae amet egestas litora ultricies vitae vehicula luctus dui. Feugiat at libero orci mauris vulputate dui rutrum sem nunc. Penatibus placerat iaculis montes nisi nisl consequat scelerisque. Blandit arcu habitasse egestas a sapien. Rhoncus ultricies scelerisque eleifend litora semper eget nibh nisi natoque.",
        size : ["38", "41", "43"],
        colors: ["lightgrey", "grey"]
    }
]






document.querySelector(".productButton").addEventListener('click', () => {
    document.querySelector(".popUp").style.display = "block";
    document.querySelectorAll("input").forEach(x => x.value = "")
    document.querySelector('.total').innerHTML = document.querySelector(".productPrice").innerHTML;
    let size;
    let color;
    color = Array.from(document.querySelectorAll(".color")).filter(x => x.style.transform == "scale(1.2)")[0].style.background
    console.log(color)
    size = Array.from(document.querySelectorAll(".size")).filter(x => x.style.background == "black")[0].innerHTML
    console.log(Array.from(document.querySelectorAll(".size")).filter(x => x.style.background == "black")[0])

    document.querySelector('.finalItem').innerHTML = ` ${color.toUpperCase()} ${document.querySelector(".productTitle").innerHTML}, SIZE ${size}`
    

})

const cardNumber = document.querySelector('.cardNumber')
const cardMonth = document.querySelector('.month')
const cardYear = document.querySelector('.year')
const cardCVV = document.querySelector('.cvv')


document.querySelector('.close').addEventListener("click", () => {
    document.querySelector(".popUp").style.display = "none";
    })

    function finishOrder() {
        const regexCardNumber = /^\d{16}$/;
        const regexYear = /20(2[5-9]|3[0-9])/;
        document.querySelectorAll('.cardVal').forEach(x => x.dataset.correct = true)
        if (!regexCardNumber.test(cardNumber.value)) {
            cardNumber.style.color = "red"; 
            
            setTimeout(() => {
                cardNumber.style.color = "black";
            }, 1500);
        } else {
            cardNumber.classList.add('valid');
        }
        if (!regexYear.test(cardYear.value)) {
            cardYear.style.color = "red"; 
            
            setTimeout(() => {
                cardYear.style.color = "black";
            }, 1500);
        } else {
            cardYear.classList.add('valid');
        }
        if (0 >= cardMonth.value || cardMonth.value > 12)  {
            cardMonth.style.color = "red"; 
            
            setTimeout(() => {
                cardMonth.style.color = "black";
            }, 1500);
        } else {
            cardMonth.classList.add('valid');
        }
        if (99 >= cardCVV.value || cardCVV.value > 999)  {
            cardCVV.style.color = "red"; 
            
            setTimeout(() => {
                cardCVV.style.color = "black";
            }, 1500);
        } else {
            cardCVV.classList.add('valid');
        }

        if (document.querySelectorAll('.valid').length == 4) {
            document.querySelector(".popUp").style.display = "none";
            document.querySelector(".popUpRating").style.display = "block";
            const stars = Array.from(document.querySelector(".rating").children);
     
     function rate(e) { 
            for (let i = 0; i < stars.indexOf(e.target) + 1; i++) {
                stars[i].style.color = "rgb(201, 175, 60)"
            }
            stars.forEach(x => x.removeEventListener("click", rate))
            document.querySelector('.ratingTitle').innerHTML = 'Thank you!'
            document.querySelectorAll('.text').forEach((element) => {
                element.style.display = "none"
            })
            const buttonBack = document.createElement('button');
            buttonBack.classList.add('back');
            buttonBack.innerHTML = "Back to shopping!";
            buttonBack.style.marginTop = "40px"
            buttonBack.style.marginBottom = "0px"
            document.querySelector(".rating").insertAdjacentElement('beforeend', buttonBack)
            buttonBack.addEventListener("click", () => {
                document.querySelector(".popUpRating").style.display = "none"; setTimeout(() => {
                window.location.reload();
            }, 500)
            })
            

     }
        
        stars.forEach((x) => {
        x.addEventListener("click", rate)
     })
        }
        
    }

