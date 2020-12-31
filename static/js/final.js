// var dict={"1":0,"2":0,"3":0, "4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};

// function getin(name) {

//     console.log(dict[name]);

//     if (dict[name]==0){
//         dict[name]+=1;
//         document.getElementById(name).style.position='absolute';
//     }
//     else if(dict[name]==1){
//         dict[name]-=1;
//         document.getElementById(name).style.position='relative';
//     }

//     // document.getElementById(name).style.position='absolute';

// }

// document.querySelectorAll('.buttons').forEach(button =>{
//     const checkbox=button.nextElementSibling;
//     button.addEventListener('click',()=>{
//         button.classList.toggle('buttons--active');
//         if(button.classList.contains('buttons--active')){
//             // accordContent.style.display='absolute';
//         } else{
//             // accordContent.style.display = 'relative';

//         }
//     });
// });

// var checkbox = document.querySelector("input[name=checkbox]");

// checkbox.addEventListener('change', function() {
//   if (this.checked) {
//     console.log("Checkbox is checked..");
//   } else {
//     console.log("Checkbox is not checked..");
//   }
// });
{/* <input type="checkbox" name="checkbox" /> */ }

// if($(button,'#reverse').length == 1) { // checks if the element is in the second column
//     $(button).clone().appendTo("#reverse");

// }

// if($(button,'#but_container1').length == 1) { // checks if the element is in the first column
//     clone = $(button).clone(true).appendTo("#but_container1");

// }


//-----------------------------------------------------------------------------------------------------------

var scanning = 0;


$(document).ready(

    function func() {

        window.scroll(0, 0);
        // var loadpage=document.getElementById("loadpage");
        // loadpage.style.display="none";

        var loadpage = document.getElementById("loadpage");
        document.getElementById("body2").style.display = "flex";

        // loadpage.style.position = "absolute";
        // $('html,body').scrollTop(0);
        setTimeout(() => {
            loadpage.style.top = `${-100}%`;

        }, 1500);



        // setTimeout(() => {


        // }, 10000);
        $(".alert").hide();


        if (window.innerWidth <= 890) { // If media query matches
            setTimeout(() => {
                document.getElementById("body2").style.display = "none";
                document.getElementById("upperteeth").style.top = `-${$(document.getElementById("1")).outerHeight() * 3}px`;
                document.getElementById("bottomteeth").style.bottom = `-${$(document.getElementById("1")).outerHeight() * 3}px`;
            }, 1000);

        }
        else {
            setTimeout(() => {
                document.getElementById("body2").style.display = "none";
                document.getElementById("upperteeth").style.top = `${-$(document.getElementById("1")).outerHeight()}px`;
                document.getElementById("bottomteeth").style.bottom = `${-$(document.getElementById("1")).outerHeight()}px`;
            }, 1000);
        }

        document.getElementById("body2").style.display = "none";




    })


function onload() {
    //     window.scroll(0,0);
    //     // var loadpage=document.getElementById("loadpage");
    //     // loadpage.style.display="none";

    //     var loadpage = document.getElementById("loadpage");
    //     document.getElementById("body2").style.display="none";

    //     // loadpage.style.position = "absolute";
    //     // $('html,body').scrollTop(0);
    //     setTimeout(() => {
    //         loadpage.style.top = `${-100}%`;

    //     }, 1500);



    //     // setTimeout(() => {


    //     // }, 10000);
    //     $(".alert"). hide();

}

// Dark Mode Checkbox
document.getElementById("darkmode").addEventListener('click', () => {
    document.body.classList.toggle('darkmodeon');
})


// Coding the hamburger icon
document.getElementById("hamburger").addEventListener('click', () => {
    document.getElementById("menu").classList.toggle("menucomeout");
    if (document.getElementById("menu").classList.contains("menucomeout")) {
        if (window.innerWidth <= 890) { // If media query matches
            document.getElementById("dragon").style.left = "11px";


        }
        else {
            document.getElementById("dragon").style.left = "15px";

        }
        document.getElementById("dragon").style.left = "15px";
        document.getElementById("dragon").style.opacity = "1";
        document.getElementById("dragon").style.zIndex = "101";
        document.getElementById("menu").style.left = "0px";
        document.getElementById("blurscreen").style.display = "flex";


    } else {
        document.getElementById("menu").style.left = `-${document.getElementById("menu").getBoundingClientRect().width}px`;
        document.getElementById("dragon").style.left = "-27px";
        document.getElementById("dragon").style.opacity = "0";
        document.getElementById("dragon").style.zIndex = "-1";
        document.getElementById("blurscreen").style.display = "none";


    }

})

document.getElementById("blurscreen").addEventListener("click", () => {
    if (document.getElementById("blurscreen").style.display == "flex") {
        document.getElementById("dragon").style.left = "-27px";
        document.getElementById("menu").style.left = `-${document.getElementById("menu").getBoundingClientRect().width}px`;
        document.getElementById("dragon").style.opacity = "0";
        document.getElementById("dragon").style.zIndex = "-1";
        document.getElementById("blurscreen").style.display = "none";
    }
})


// Coding the banner
document.getElementById("banner").addEventListener("mouseover", () => {
    document.getElementById("banner").innerHTML = "<h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>can't<br>wait</h6>"

})
document.getElementById("banner").addEventListener("mouseout", () => {
    document.getElementById("banner").innerHTML = "<h6>Abmition<br>can't<br>wait</h6>"

})


// Coding the start button:
var pressedstart = 0

document.getElementById("start").addEventListener('click', () => {
    pressedstart += 1;
    if (pressedstart == 1) {
        document.getElementById("body2").style.display = "flex";
        if (window.innerWidth <= 890) { // If media query matches
            document.getElementById("upperteeth").style.top = `-${($(document.getElementById("1")).outerHeight() * 3) + 60}px`
            document.getElementById("bottomteeth").style.bottom = `-${($(document.getElementById("1")).outerHeight() * 3) + 60}px`;
        }
        else {
            document.getElementById("upperteeth").style.top = `${-$(document.getElementById("1")).outerHeight()}px`;
            document.getElementById("bottomteeth").style.bottom = `${-$(document.getElementById("1")).outerHeight()}px`;
        }
        setTimeout(() => {
            window.scrollTo(0, document.getElementById("body2").getBoundingClientRect().top);

        }, 200);

    }
    else {
        window.scrollTo(0, document.getElementById("body2").getBoundingClientRect().top);
    }

})

// // Coding the ripple effect on buttons
// const ripple_buttons = document.querySelectorAll('button');
// ripple_buttons.forEach(abc => {
//     abc.addEventListener("click", (e) => {

//         let x = e.clientX - e.target.offsetLeft;
//         let y = e.clientY - e.target.offsetTop;

//         let ripples = document.createElement('span');
//         ripples.classList.add("rippleit");
//         ripples.style.left = `${x}px`;
//         ripples.style.top = `${y}px`;



//         setTimeout(() => {
//             ripples.remove();

//         }, 1000);


//     })

// })


// Initializing the scroll out function
window.addEventListener('scroll', function () {
    document.getElementById("rightsheety").style.right = `-${window.pageYOffset}px`;
    document.getElementById("darkme").style.top = `${-window.pageYOffset}px`;
})



var bigheight = document.getElementById("big_box").getBoundingClientRect().height;
var bigbox = document.getElementById("big_box");
var buttonheight = 0;
var width = 0;
var allbuttons = document.getElementsByClassName("subdiv");
var check = 0;
var list_of_buttons_in_box = [];
var list_of_flipped_cards = [];






// Unchecking the checked boxes after checked boxes are 3-------------------------------------------------------------------------
function checking(checked = false) {
    document.querySelectorAll('.subdiv').forEach(buttons => {
        // console.log(buttons.getAttribute("name"));
        if (list_of_buttons_in_box.includes(buttons.getAttribute("name"))) {
            buttons.querySelector('input[type="checkbox"]').checked = true;

        }
        else {
            buttons.querySelector('input[type="checkbox"]').checked = checked;
        }
    })
}

position_list = [[document.getElementById("201").getBoundingClientRect().top, document.getElementById("201").getBoundingClientRect().left], [document.getElementById("202").getBoundingClientRect().top, document.getElementById("202").getBoundingClientRect().left], [document.getElementById("203").getBoundingClientRect().top, document.getElementById("203").getBoundingClientRect().left]];

// Putting into Box Code-------------------------------------------------------------
document.querySelectorAll('.subdiv').forEach(button => {
    // const checkbox=button.nextElementSibling;
    var checkbox = button.querySelector('input[type="checkbox"]');
    var data2 = button.getBoundingClientRect();
    var data = document.getElementById("mixbox").getBoundingClientRect();
    // console.log(checkbox);

    checkbox.addEventListener('change', () => {

        if (scanning != 1) {

            if (check >= 3 && !checkbox.checked) {
                var audio = new Audio('../static/img/pop.mp3');
                audio.play();

                list_of_buttons_in_box.splice(list_of_buttons_in_box.indexOf(button.getAttribute("name")), 1);
                // console.log("The list after popping: ", button.getAttribute("name"), ": ", list_of_buttons_in_box);

                // button.classList.remove('buttons--active');

                if (window.innerWidth <= 890) { // If media query matches
                    list_of_buttons_in_box.forEach(element => {

                        var element2 = $(`[name='${element}']`);
                        // console.log(element2)
                        var elements = document.getElementsByName(`${element}`);
                        var id = elements[0].getAttribute('id');

                        if (element2.offset().top > $(button).offset().top) {
                            var styles = element2.css('-webkit-transform');
                            var left = styles.split(",")[4];
                            var top = styles.split(",")[5];
                            var boxesinmixbox = document.getElementById("201");
                            // console.log(top);
                            // console.log(parseInt(top)+$(button).outerHeight()+10);
                            document.getElementById(id).style.transform = `translate3d(${parseInt(left)}px,${parseInt(top) + 30 - $(button).outerHeight() - (parseInt(getComputedStyle(boxesinmixbox).marginLeft) * 2)}px,0px)`;
                        }

                    });

                }
                else {
                    list_of_buttons_in_box.forEach(element => {

                        var element2 = $(`[name='${element}']`);
                        // console.log(element2)
                        var elements = document.getElementsByName(`${element}`);
                        var id = elements[0].getAttribute('id');

                        if (element2.offset().left > $(button).offset().left) {
                            var styles = element2.css('-webkit-transform');
                            var left = styles.split(",")[4];
                            var top = styles.split(",")[5];
                            var boxesinmixbox = document.getElementById("201");
                            // console.log(top);
                            // console.log(parseInt(top)+$(button).outerHeight()+10);
                            document.getElementById(id).style.transform = `translate3d(${parseInt(left) + 30 - $(button).outerWidth() - (parseInt(getComputedStyle(boxesinmixbox).marginLeft) * 2)}px,${parseInt(top)}px,0px)`;
                        }

                    });
                }






                VanillaTilt.init(button);

                $(button).css('transform', `translate3d(0px,0px,0px)`);

                // console.log(list_of_buttons_in_box);



                // window.scrollTo(0, button.top);

                // button.style.zIndex = "auto";
                // button.style.zIndex = "auto";


                // checkbox.classList.remove('hide');
                // button.style.transition = 'all 0.3s ease-in-out';
                // button.style.top = 'auto';
                // button.style.left = `auto`;
                // var box_data = mixingbox.getBoundingClientRect();

                // mixingbox.style.height = `${box_data.height - $(button).outerHeight() - 10}px`

                // mixingbox.style.top = `${-buttonheight + $(button).outerHeight()}px`;

                check -= 1;



                if (check == 0) {
                    document.getElementById("hinmixbox").innerText = "Pick Something!";
                    document.getElementById("hinmixbox").style.backgroundColor = "transparent";
                }

                if (check == 1) {
                    document.getElementById("hinmixbox").innerText = "Add One or Two More!!";
                    document.getElementById("hinmixbox").style.backgroundColor = "rgba(170, 6, 6, 0.801)";
                }
                else if (check == 2) {
                    document.getElementById("hinmixbox").innerText = "One More?!";
                    document.getElementById("hinmixbox").style.backgroundColor = "#b6d409";
                }
                else if (check == 3) {
                    document.getElementById("hinmixbox").innerText = "";
                    document.getElementById("hinmixbox").style.backgroundColor = "#1ce409";
                }


                // console.log(bigheight);           

                // console.log("Checkbox is not checked..");

            }


            else if (check >= 3) {
                checking();
                $(".alert-info").show();
                $(".alert-info").css('top', "3px");

                setTimeout(() => {
                    $(".alert-info").css('top', "-50px");
                }, 7000);
                setTimeout(() => {
                    $(".alert-info").hide();
                }, 8000);
            }


            else if (checkbox.checked && check < 3) {
                // let destroyBox = document.querySelector("#destroy-box");
                // VanillaTilt.init(destroyBox);
                button.vanillaTilt.destroy();

                document.getElementById('ins').style.opacity = "1";

                var audio = new Audio('../static/img/swish.mp3');
                audio.play();


                var box = document.getElementById("mixbox");

                box.style.display = "flex";
                // var list= document.getElementById("list");
                // list.appendChild(button);
                // checkbox.classList.toggle('hide');
                button.style.transition = 'all 0.3s ease-in-out';

                // box.style.top = `${-buttonheight}px`;

                // button.style.transform = `translate3d(${data.left - data2.left - ($(button).outerWidth() / 2) + 4}px,${data.y - data2.y + 5}px,0px)`;
                // buttonheight += ($(button).outerHeight() + 10);

                window.location.hash = `#boxheading`;
                setTimeout(() => {
                    var url = [location.protocol, '//', location.host, location.pathname].join('');
                    // maybe check if the browser supports history.pushState
                    history.pushState({}, '', url);

                }, 400);


                // box.style.height = `${buttonheight + 15}px`;

                button.style.transform = `translate3d(${position_list[check][1] - data2.left}px,${position_list[check][0] - data2.top}px,0px)`;



                list_of_buttons_in_box.push(button.getAttribute("name"));
                button.style.zIndex = "3";


                // if(check==0){
                //     console.log("I am in if and the value of check is",check);  
                //     box.style.width = `${data2.width + 22}px`;
                //     width=0;
                // }

                check += 1;

                if (check == 1) {
                    document.getElementById("hinmixbox").innerText = "Add One or Two More!!";
                    document.getElementById("hinmixbox").style.backgroundColor = "rgba(170, 6, 6, 0.801)";
                }
                else if (check == 2) {
                    document.getElementById("hinmixbox").innerText = "One More?!";
                    document.getElementById("hinmixbox").style.backgroundColor = "#b6d409";
                }
                else if (check == 3) {
                    document.getElementById("hinmixbox").innerText = "";
                    document.getElementById("hinmixbox").style.backgroundColor = "transparent";
                }
                // bigbox.style.height = `${bigheight}`;
                // console.log(bigheight);
                // console.log($(height).position().left);

                //   console.log("Checkbox is checked..");
            }




            else if (!checkbox.checked && check < 3) {
                if (check < 3 || list_of_buttons_in_box.includes(button.getAttribute("name"))) {

                    var audio = new Audio('../static/img/pop.mp3');
                    audio.play();

                    list_of_buttons_in_box.splice(list_of_buttons_in_box.indexOf(button.getAttribute("name")), 1);


                    if (window.innerWidth <= 890) { // If media query matches
                        list_of_buttons_in_box.forEach(element => {

                            var element2 = $(`[name='${element}']`);
                            // console.log(element2)
                            var elements = document.getElementsByName(`${element}`);
                            var id = elements[0].getAttribute('id');

                            if (element2.offset().top > $(button).offset().top) {
                                var styles = element2.css('-webkit-transform');
                                var left = styles.split(",")[4];
                                var top = styles.split(",")[5];
                                var boxesinmixbox = document.getElementById("201");
                                // console.log(top);
                                // console.log(parseInt(top)+$(button).outerHeight()+10);
                                document.getElementById(id).style.transform = `translate3d(${parseInt(left)}px,${parseInt(top) + 30 - $(button).outerHeight() - (parseInt(getComputedStyle(boxesinmixbox).marginLeft) * 2)}px,0px)`;
                            }

                        });

                    }
                    else {
                        list_of_buttons_in_box.forEach(element => {

                            var element2 = $(`[name='${element}']`);
                            // console.log(element2)
                            var elements = document.getElementsByName(`${element}`);
                            var id = elements[0].getAttribute('id');

                            if (element2.offset().left > $(button).offset().left) {
                                var styles = element2.css('-webkit-transform');
                                var left = styles.split(",")[4];
                                var top = styles.split(",")[5];
                                var boxesinmixbox = document.getElementById("201");
                                // console.log(top);
                                // console.log(parseInt(top)+$(button).outerHeight()+10);
                                document.getElementById(id).style.transform = `translate3d(${parseInt(left) + 30 - $(button).outerWidth() - (parseInt(getComputedStyle(boxesinmixbox).marginLeft) * 2)}px,${parseInt(top)}px,0px)`;
                            }

                        });
                    }

                    // list_of_buttons_in_box.forEach(element => {

                    //     var element2 = $(`[name='${element}']`);
                    //     // console.log(element2)
                    //     var elements = document.getElementsByName(`${element}`);
                    //     var id = elements[0].getAttribute('id');


                    //     if (element2.offset().left > $(button).offset().left) {
                    //         // console.log("The top of the element you selected: ", $(button).offset().top);
                    //         // console.log("The top of the element above it: ", element2.offset().top);
                    //         // console.log("Moving", id, 'at',element2.offset().top + $(button).outerHeight());
                    //         // console.log("Moving", id, 'at',document.getElementById(id).getBoundingClientRect().height);
                    //         // console.log("Moving", id, 'at',data.left - data2.left - ($(button).outerWidth() / 2) + 4);

                    //         // If element2.offset().left < $(button).offset().left------------

                    //         // var styles = element2.css('-webkit-transform');
                    //         // var left = styles.split(",")[4];
                    //         // var top = styles.split(",")[5];
                    //         // // console.log(top);
                    //         // // console.log(parseInt(top)+$(button).outerHeight()+10);
                    //         // document.getElementById(id).style.transform = `translate3d(${left}px,${parseInt(top)}px,0px)`;

                    //         //------------------------------
                    //         var styles = element2.css('-webkit-transform');
                    //         var left = styles.split(",")[4];
                    //         var top = styles.split(",")[5];
                    //         var boxesinmixbox = document.getElementById("201");
                    //         // console.log(top);
                    //         // console.log(parseInt(top)+$(button).outerHeight()+10);
                    //         document.getElementById(id).style.transform = `translate3d(${parseInt(left) + 30 - $(button).outerWidth() - (parseInt(getComputedStyle(boxesinmixbox).marginLeft) * 2)}px,${parseInt(top)}px,0px)`;
                    //     }

                    // });

                    VanillaTilt.init(button);

                    $(button).css('transform', `translate3d(0px,0px,0px)`);

                    // console.log(list_of_buttons_in_box);



                    // window.scrollTo(0, button.top);

                    // button.style.zIndex = "auto";
                    // button.style.zIndex = "auto";


                    // checkbox.classList.remove('hide');
                    // button.style.transition = 'all 0.3s ease-in-out';
                    // button.style.top = 'auto';
                    // button.style.left = `auto`;
                    // var box_data = mixingbox.getBoundingClientRect();

                    // mixingbox.style.height = `${box_data.height - $(button).outerHeight() - 10}px`

                    // mixingbox.style.top = `${-buttonheight + $(button).outerHeight()}px`;

                    check -= 1;



                    if (check == 0) {
                        document.getElementById('ins').style.opacity = "0";
                        document.getElementById("hinmixbox").innerText = "Pick Something!";
                        document.getElementById("hinmixbox").style.backgroundColor = "transparent";
                    }

                    if (check == 1) {
                        document.getElementById("hinmixbox").innerText = "Add One or Two More!!";
                        document.getElementById("hinmixbox").style.backgroundColor = "rgba(170, 6, 6, 0.801)";
                    }
                    else if (check == 2) {
                        document.getElementById("hinmixbox").innerText = "One More?!";
                        document.getElementById("hinmixbox").style.backgroundColor = "#b6d409";
                    }
                    else if (check == 3) {
                        document.getElementById("hinmixbox").innerText = "";
                        document.getElementById("hinmixbox").style.backgroundColor = "transparent";
                    }


                    // console.log(bigheight);           

                    // console.log("Checkbox is not checked..");

                }

            }
        }
        else {
            checking();
        }
    });
});


function uncheckingallboxesandreturningthemtoplace() {
    document.querySelectorAll(".subdiv").forEach(boxe => {
        // console.log(buttons.getAttribute("name"));
        boxe.querySelector('input[type="checkbox"]').checked = false;
        VanillaTilt.init(boxe);
        $(boxe).css('transform', `translate3d(0px,0px,0px)`);

    })
}


// For the combination buttons
function combine(item1, item2, item3) {
    if (!scanning) {
        uncheckingallboxesandreturningthemtoplace();
        list_of_buttons_in_box = [];
        if (typeof item3 == 'undefined') {

            list_of_buttons_in_box.push(item1);
            // console.log("Pushing", item2);
            list_of_buttons_in_box.push(item2);
            checking();
            // console.log(list_of_buttons_in_box);



            setTimeout(() => {

                $(`div[name="${item1}"]`).css('transform', `translate3d(${document.getElementById("201").getBoundingClientRect().left - document.querySelector(`div[name="${item1}"]`).getBoundingClientRect().left}px,${document.getElementById("201").getBoundingClientRect().top - document.querySelector(`div[name="${item1}"]`).getBoundingClientRect().top}px,0px)`);

                $(`div[name="${item2}"]`).css('transform', `translate3d(${document.getElementById("202").getBoundingClientRect().left - document.querySelector(`div[name="${item2}"]`).getBoundingClientRect().left}px,${document.getElementById("202").getBoundingClientRect().top - document.querySelector(`div[name="${item2}"]`).getBoundingClientRect().top}px,0px)`);

                $(`div[name="${item1}"]`).css('z-index', "3");

                $(`div[name="${item2}"]`).css('z-index', "3");

            }, 310);
            document.querySelector(`div[name="${item1}"]`).vanillaTilt.destroy();

            document.querySelector(`div[name="${item2}"]`).vanillaTilt.destroy();
            window.location.hash = `#boxheading`;
            setTimeout(() => {
                var url = [location.protocol, '//', location.host, location.pathname].join('');
                // maybe check if the browser supports history.pushState
                history.pushState({}, '', url);

            }, 400);



            check = 2;
            document.getElementById("hinmixbox").innerText = "One More?!";
            document.getElementById("hinmixbox").style.backgroundColor = "#b6d409";
        }
        else if (typeof item3 != 'undefined') {

            list_of_buttons_in_box.push(item1);
            list_of_buttons_in_box.push(item2);
            list_of_buttons_in_box.push(item3);
            checking();
            // console.log(list_of_buttons_in_box);



            setTimeout(() => {

                $(`div[name="${item1}"]`).css('transform', `translate3d(${document.getElementById("201").getBoundingClientRect().left - document.querySelector(`div[name="${item1}"]`).getBoundingClientRect().left}px,${document.getElementById("201").getBoundingClientRect().top - document.querySelector(`div[name="${item1}"]`).getBoundingClientRect().top}px,0px)`);

                $(`div[name="${item2}"]`).css('transform', `translate3d(${document.getElementById("202").getBoundingClientRect().left - document.querySelector(`div[name="${item2}"]`).getBoundingClientRect().left}px,${document.getElementById("202").getBoundingClientRect().top - document.querySelector(`div[name="${item2}"]`).getBoundingClientRect().top}px,0px)`);

                $(`div[name="${item3}"]`).css('transform', `translate3d(${document.getElementById("203").getBoundingClientRect().left - document.querySelector(`div[name="${item3}"]`).getBoundingClientRect().left}px,${document.getElementById("203").getBoundingClientRect().top - document.querySelector(`div[name="${item3}"]`).getBoundingClientRect().top}px,0px)`);

                $(`div[name="${item1}"]`).css('z-index', "3");

                $(`div[name="${item2}"]`).css('z-index', "3");

                $(`div[name="${item3}"]`).css('z-index', "3");

            }, 310);

            document.querySelector(`div[name="${item1}"]`).vanillaTilt.destroy();
            document.querySelector(`div[name="${item2}"]`).vanillaTilt.destroy();
            document.querySelector(`div[name="${item3}"]`).vanillaTilt.destroy();

            window.location.hash = `#boxheading`;
            setTimeout(() => {
                var url = [location.protocol, '//', location.host, location.pathname].join('');
                // maybe check if the browser supports history.pushState
                history.pushState({}, '', url);

            }, 400);

            check = 3;

            document.getElementById("hinmixbox").innerText = "";
            document.getElementById("hinmixbox").style.backgroundColor = "transparent";


        }
        else {


        }

    }


}

// Code for the description
document.querySelectorAll(".firstsection").forEach(desc => {
    desc.addEventListener("click", () => {
        // console.log("Clicked");
        // $(desc).closest('div.description').css('transform', 'perspective(1000px) rotateY(360deg)');
        $($($($(desc).parent()).parent()).children("label")).children(".buttons").css('transform', 'perspective(2000px) rotateY(180deg)');
        $($($($(desc).parent()).parent()).children("label")).css('z-index', '0');
        $($($(desc).parent()).parent()).children(".description").css('transform', 'translate3d(0px, 0px, 4px) perspective(2000px) rotateY(360deg)');
        $($($($(desc).parent()).parent()).children(".description")).children(".cross").css('transform', 'translate3d(0px, 0px, 5px)');
        $($($(desc).parent()).parent()).children(".button_info").css('display', 'none');
        // console.log("Pushed",$($(desc).parent()).parent().attr('name'));
        list_of_flipped_cards.push($($(desc).parent()).parent().attr('name'));


        // .style.transform=`perspective(${500}px) rotateY(${360}deg)`
    })
})


// Code for closing the description
document.querySelectorAll(".cross").forEach(cross => {
    cross.addEventListener("click", () => {
        // console.log("Clicked");
        $($($($(cross).parent()).parent()).children("label")).children(".buttons").css('transform', 'perspective(2000px) rotateY(0deg)');
        $($($(cross).parent()).parent()).children("label").css('z-index', 'auto');
        $($($(cross).parent()).parent()).children(".description").css('transform', 'translate3d(0px, 0px, -4px) perspective(2000px) rotateY(180deg)');
        $($($($(cross).parent()).parent()).children(".description")).children(".cross").css('transform', 'translate3d(0px, 0px, 0px)');
        $($($(cross).parent()).parent()).children(".button_info").css('display', 'flex');

        list_of_flipped_cards.splice(list_of_flipped_cards.indexOf($($(cross).parent()).parent().attr("name")), 1);


    })

})

// function for turning the flipped cards upside down
function flipbacktonormal() {

    list_of_flipped_cards.forEach(button => {
        $($(`[name='${button}']`).children("label")).children(".buttons").css('transform', 'perspective(2000px) rotateY(0deg)');
        $(`[name='${button}']`).children(".description").css('transform', 'translate3d(0px, 0px, -4px) perspective(2000px) rotateY(180deg)');
        $($(`[name='${button}']`).children(".description")).children(".cross").css('transform', 'translate3d(0px, 0px, 0px)');
        $(`[name='${button}']`).children(".button_info").css('display', 'flex');

    })


}


// Code for tilt.js
VanillaTilt.init(document.querySelectorAll(".subdiv"), {
    max: 25,
    speed: 400,
});

function box_change() {
    var box = document.getElementById("mixbox");
    box.style.border = "7px dashed #329d52";
}

function box_change2() {
    var box = document.getElementById("mixbox");
    box.style.border = "7px dashed #efefef";
}




// To enable popovers
$(function () {
    $("[data-toggle='popover']").popover();
})


// To dismiss popovers
$('.popover-dismiss').popover({
    trigger: 'focus'
})


/* Making the Degree List */
document.querySelectorAll(".deg_but").forEach(degreebutton => {
    degreebutton.addEventListener('click', () => {
        degreebutton.classList.toggle('acc--active');
        if (degreebutton.classList.contains("acc--active")) {
            $(degreebutton).css('background-color', '#efefef');
            $(degreebutton).css('color', '#00183f');
            $($($(degreebutton).parent()).children(".acc_container")).css('height', 'fit-content');
            $($($(degreebutton).parent()).children(".acc_container")).css('border', '1px solid #02203c');
        }
        else {
            $(degreebutton).css('background-color', '#00183f');
            $(degreebutton).css('color', '#efefef');
            $($($(degreebutton).parent()).children(".acc_container")).css('height', '0px');
            $($($(degreebutton).parent()).children(".acc_container")).css('border', '1px solid transparent');

        }
    })
})


/* Coding the Open all and collapse all buttons */
document.getElementById('openall').addEventListener('click', () => {
    document.querySelectorAll(".deg_but").forEach(degreebutton => {
        $(degreebutton).css('background-color', '#efefef');
        $(degreebutton).css('color', '#00183f');
        degreebutton.classList.add("acc--active");
        $($($(degreebutton).parent()).children(".acc_container")).css('height', 'fit-content');
        $($($(degreebutton).parent()).children(".acc_container")).css('border', '1px solid #02203c');

    })
})

document.getElementById('collapseall').addEventListener('click', () => {
    document.querySelectorAll(".deg_but").forEach(degreebutton => {
        $(degreebutton).css('background-color', '#00183f');
        $(degreebutton).css('color', '#efefef');
        degreebutton.classList.remove("acc--active");
        $($($(degreebutton).parent()).children(".acc_container")).css('height', '0px');
        $($($(degreebutton).parent()).children(".acc_container")).css('border', '1px solid transparent');

    })
})



var path_taken = "";

function submitting() {
    // var border=document.getElementById("mixbox");
    // border.style.borderTop="black";
    document.getElementById("submit").classList.toggle('submit--active');

    flipbacktonormal();

    if (check < 2) {
        document.getElementById("hinmixbox").style.backgroundColor = "rgba(170, 6, 6, 0.801)";
        $(".alert-danger").show();
        $(".alert-danger").css('top', "3px");

        setTimeout(() => {
            $(".alert-danger").css('top', "-50px");
        }, 6000);
        setTimeout(() => {
            $(".alert-danger").hide();
        }, 7000);

    }

    else {

        document.getElementById("submit").innerHTML = `Generating Degree...`;
        document.getElementById("submit").disabled = true;
        scanning = 1;
        document.getElementById("mixbox").style.zIndex = "3";
        document.getElementById("hinmixbox").style.zIndex = "0";
        var upper = document.getElementById("upperteeth");
        var bottom = document.getElementById("bottomteeth");

        // Scanning Animation
        upper.style.top = `${-$(document.getElementById("10")).outerHeight() / 2 + 10}px`;
        bottom.style.bottom = `${-$(document.getElementById("10")).outerHeight() / 2 + 10}px`;

        setTimeout(() => {
            document.getElementById("scanner").style.left = `${$(document.getElementById("mixbox")).outerWidth()}px`;
        }, 400)
        setTimeout(() => {
            document.getElementById("scanner").style.left = `-${10}px`;
        }, 1800)

        setTimeout(() => {
            document.getElementById("submit").innerHTML = `Generate Degree`;
            if (window.innerWidth <= 890) { // If media query matches
                document.getElementById("upperteeth").style.top = `-${($(document.getElementById("1")).outerHeight() * 3) + 60}px`
                document.getElementById("bottomteeth").style.bottom = `-${($(document.getElementById("1")).outerHeight() * 3) + 60}px`;
            }
            else {
                document.getElementById("upperteeth").style.top = `${-$(document.getElementById("1")).outerHeight()}px`;
                document.getElementById("bottomteeth").style.bottom = `${-$(document.getElementById("1")).outerHeight()}px`;
            }

            document.getElementById("mixbox").style.zIndex = "0";
            scanning = 0;
            document.getElementById("submit").disabled = false;
        }, 3900);

        var list_of_certificates_requiring_CS_foundations = ['Cybersecurity', 'Artificial Intelligence/Machine Learning', 'Advanced Computer Science', 'Software Architecture'];

        var common_certificate = [];


        list_of_certificates_requiring_CS_foundations.forEach(element => {
            if (list_of_buttons_in_box.includes(element)) {
                common_certificate.push(element);
            }
        })

        if (!list_of_buttons_in_box.includes('Computer Science Foundations') && common_certificate.length != 0) {


            if (common_certificate.length == 1) {
                document.getElementById("c1heading").innerHTML = `Do you have the Technical background for ${common_certificate[0]}?`;

            } else if (common_certificate.length == 2) {
                document.getElementById("c1heading").innerHTML = `Do you have the Technical background for ${common_certificate[0]} and ${common_certificate[1]}?`;


            }
            else if (common_certificate.length == 3) {
                document.getElementById("c1heading").innerHTML = `Do you have the Technical background for ${common_certificate[0]}, ${common_certificate[1]} and ${common_certificate[2]}?`;

            }


            setTimeout(() => {
                document.getElementById("constraint1").style.top = `50%`;

                document.getElementById("constraint1").style.left = "0%";

                document.getElementById("constraint1").style.height = `0.1vh`;
            }, 3300);
            setTimeout(() => {
                document.getElementById("constraint1").style.height = `100vh`;
                document.getElementById("constraint1").style.top = `0%`;


            }, 3600);

            path_taken = "Constraint1";

        }

        else {

            mastersdegreemaker();

            setTimeout(() => {
                document.getElementById("degree").style.display = "flex";
                document.getElementById("degree").style.top = "50%";
                document.getElementById("degree").style.left = "-100%";
                document.getElementById("degree").style.height = `0.1vh`;
            }, 3200);

            setTimeout(() => {

                document.getElementById("degree").style.top = `50%`;

                document.getElementById("degree").style.left = "0%";

                document.getElementById("degree").style.height = `0.1vh`;
            }, 3300);
            setTimeout(() => {
                document.getElementById("degree").style.height = `100vh`;
                document.getElementById("degree").style.top = `0%`;


            }, 3600);

            path_taken = "";

        }



    }

}



/* --------------------------------------------- Constraint 1 -------------------------------------------- */



// Code for Constraint1 Back button:
document.getElementById("c1back").addEventListener("click", () => {

    if (window.innerWidth <= 890) { // If media query matches
        document.getElementById("upperteeth").style.top = `-${($(document.getElementById("1")).outerHeight() * 3) + 60}px`
        document.getElementById("bottomteeth").style.bottom = `-${($(document.getElementById("1")).outerHeight() * 3) + 60}px`;
    }
    else {
        document.getElementById("upperteeth").style.top = `${-$(document.getElementById("1")).outerHeight()}px`;
        document.getElementById("bottomteeth").style.bottom = `${-$(document.getElementById("1")).outerHeight()}px`;
    }

    document.getElementById("mixbox").style.zIndex = "0";

    // document.getElementById("constraint1").style.left="0%";

    // document.getElementById("constraint1").style.height=`0.1vh`;
    document.getElementById("degree").style.display = "none";

    document.getElementById("constraint1").style.top = `0%`;
    document.getElementById("constraint1").style.height = `0vh`;
    document.getElementById("constraint1").style.left = "-100%";
    document.getElementById("submit").classList.remove('submit--active');
    document.getElementById("submit").innerHTML = `Generate Degree`;


    scanning = 0;

})

// Coding the NO Button on Constraint 1:
document.getElementById("c1no").addEventListener("click", () => {

    document.getElementById("constraint1").style.top = `50%`;

    document.getElementById("constraint1").style.left = "0%";

    document.getElementById("constraint1").style.height = `0.1vh`;


    document.getElementById("cno1inner").style.left = `0%`;
    document.getElementById("cno1inner").style.top = `50%`;
    document.getElementById("cno1inner").style.height = `0.1vh`;



    document.getElementById("constraintno1").style.top = `0vh`;

    document.getElementById("constraintno1").style.left = "0%";
    document.getElementById("constraintno1").style.height = `100vh`;



    setTimeout(() => {
        document.getElementById("constraint1").style.left = "-100%";
        document.getElementById("cno1inner").style.top = `0%`;

        document.getElementById("cno1inner").style.height = `100vh`;


    }, 300);


})

// Coding the YES Button on Constraint 1:
document.getElementById("c1yes").addEventListener('click', () => {
    path_taken = "Constraint1";


    document.getElementById("degree").style.display = "flex";

    setTimeout(() => {
        document.getElementById("degree").style.left = "0%";
        document.getElementById("degree").style.top = "0%";

    }, 330);
    mastersdegreemaker();
    document.getElementById("constraint1").style.top = `0%`;
    document.getElementById("constraint1").style.height = `0vh`;
    document.getElementById("constraint1").style.left = "-100%";
    scanning = 0;


})




// Code to Select CS Foundations Certificate from the board:
function CSSelected() {

    if (window.innerWidth <= 890) { // If media query matches
        document.getElementById("upperteeth").style.top = `-${($(document.getElementById("1")).outerHeight() * 3) + 60}px`
        document.getElementById("bottomteeth").style.bottom = `-${($(document.getElementById("1")).outerHeight() * 3) + 60}px`;
    }
    else {
        document.getElementById("upperteeth").style.top = `${-$(document.getElementById("1")).outerHeight()}px`;
        document.getElementById("bottomteeth").style.bottom = `${-$(document.getElementById("1")).outerHeight()}px`;
    }

    document.getElementById("mixbox").style.zIndex = "0";

    document.getElementById("constraint1").style.top = `0%`;
    document.getElementById("constraint1").style.height = `0vh`;
    document.getElementById("constraint1").style.left = "-100%";
    document.getElementById("constraintno1").style.top = `0%`;
    document.getElementById("constraintno1").style.height = `0vh`;
    document.getElementById("constraintno1").style.left = "-100%";
    document.getElementById("submit").classList.remove('submit--active');
    document.getElementById("submit").innerHTML = `Generate Degree`;
    scanning = 0;

    if (check == 3) {
        checking();

        var originalText = document.getElementById("alert-info").innerHTML;

        document.getElementById("alert-info").innerHTML = "<strong>Only 3!</strong> &nbsp; You will have to remove a certificate :(";

        $(".alert-info").show();
        $(".alert-info").css('top', "3px");

        setTimeout(() => {
            $(".alert-info").css('top', "-50px");
        }, 7000);
        setTimeout(() => {
            $(".alert-info").hide();
            document.getElementById("alert-info").innerHTML = originalText;
            // console.log(originalText);

        }, 8000);

    }

    else {
        list_of_buttons_in_box.push('Computer Science Foundations');
        checking();

        setTimeout(() => {
            $("div[name='Computer Science Foundations']").css('transform', `translate3d(${document.getElementById("203").getBoundingClientRect().left - document.querySelector(`div[name="Computer Science Foundations"]`).getBoundingClientRect().left}px,${document.getElementById("203").getBoundingClientRect().top - document.querySelector(`div[name="Computer Science Foundations"]`).getBoundingClientRect().top}px,0px)`);

            $("div[name='Computer Science Foundations']").css('z-index', '3');

            check = 3;


            document.getElementById("hinmixbox").innerText = "";
            document.getElementById("hinmixbox").style.backgroundColor = "transparent";

        }, 310);
        document.querySelector(`div[name='Computer Science Foundations']`).vanillaTilt.destroy();

        submitting();

        path_taken = "ConstraintNO1";
        // console.log(path_taken);

    }

}



// Coding the Constraint 1 No back button
document.getElementById("cno1back").addEventListener("click", () => {

    path_taken = "Constraint1";

    document.getElementById("constraintno1").style.top = `0%`;

    document.getElementById("constraintno1").style.left = "0%";

    document.getElementById("c1inner").style.left = `0%`;


    document.getElementById("constraint1").style.top = `0%`;

    document.getElementById("constraint1").style.left = "0%";
    document.getElementById("constraint1").style.height = `100vh`;



    setTimeout(() => {
        document.getElementById("constraintno1").style.left = "-100%";
        document.getElementById("c1inner").style.height = `100vh`;

    }, 300);

})


// Coding the Back Button on Masters Degree Page
document.getElementById('degreeback').addEventListener('click', () => {

    if (path_taken == "Constraint1") {


        document.getElementById("constraint1").style.height = `100vh`;
        document.getElementById("constraint1").style.top = `0%`;
        document.getElementById("constraint1").style.left = `0%`;



        setTimeout(() => {
            document.getElementById("degree").style.top = "0%";
            document.getElementById("degree").style.left = "-100%";


        }, 300);




    }

    else if (path_taken == "ConstraintNO1") {
        document.getElementById("degree").style.top = "0%";
        document.getElementById("degree").style.left = "-100%";

        document.getElementById("constraintno1").style.height = `100vh`;
        document.getElementById("constraintno1").style.top = `0%`;
        document.getElementById("constraintno1").style.left = `0%`;

    }

    else {
        document.getElementById("degree").style.top = "0%";
        document.getElementById("degree").style.left = "-100%";

        window.location.hash = `#boxheading`;
        setTimeout(() => {
            var url = [location.protocol, '//', location.host, location.pathname].join('');
            // maybe check if the browser supports history.pushState
            history.pushState({}, '', url);

        }, 400);

    }
})



/* ---------------  Masters Degree Maker and Assembly Function---------------------------------- */
function mastersdegreemaker() {

    var list_of_degrees = [{ degree: `Master of Science in Information - HCI/UX`, score: 0, preffered_certificate: `This Degree prefers certificates related to front end development like the Front-end Development certificate, HCI/UX certificate and Computer Science Foundations certificate`, description: `Human-Computer Interaction and User Experience (HCI/UX) is a graduate major that explores creative ideas, theories, and technologies to advance students’ understanding of the complex and tightly coupled relationships between people and computing systems. The program prepares students to create and evaluate technologies that support and complement human needs and abilities in a broad range of contexts such as work, wellness, home, entertainment, and artistic expression. The HCI/UX major is part of the Master of Science in Information (MSI), which prepares students for a range of careers related to user experience research, interface design, and software development. For more information go to`, site: "http://catalog.drexel.edu/graduate/collegeofcomputingandinformatics/humancomputerinteractionanduserexperience/index.html" },

    { degree: `Master of Science in Data Science`, score: 0, preffered_certificate: `This Degree prefers certificates related to Data Science like the Foundations of Data Science certificate, Applied Data Science certificate and Computer Science Foundations certificate`, description: `The Master of Science in Data Science program provides a strong foundation in the emerging area of data science with foci on data management and accountability, visualization and communication, and computational, algorithmic, and applied processing techniques. Students gain competency in fundamental methods and techniques for data collection, management, analysis, and result interpretation. Their fundamental understanding and skills will be applied to real-world data analysis tasks through state-of-the-art technologies, tools, and platforms. For more information go to`, site: "http://catalog.drexel.edu/graduate/collegeofcomputingandinformatics/datascience/index.html" },

    { degree: `Master of Science in Computer Science`, score: 0, preffered_certificate: `This Degree prefers certificates related to Computer Science like the Technical Certificate, CS Certificate, Advanced Computer Science`, description: `The Department of Computer Science in the College of Computing & Informatics houses research groups actively conducting research on a wide range of topics in Computer Science including artificial intelligence, algorithms, computer vision and graphics, programming languages, networks, privacy and security, high-performance computing, software engineering, computer algebra, and algorithms. The department emphasizes both interdisciplinary and applied research and is supported by major federal research grants from the National Science Foundation, Department of Defense, Department of Energy, and the National Institute of Standards and Technology, as well as by private sources. For more information go to`, site: "http://catalog.drexel.edu/graduate/collegeofcomputingandinformatics/computerscience/" },

    { degree: `Master of Science in Information Systems`, score: 0, preffered_certificate: `This Degree prefers certificates related to Information Systems like the Information System Certificate, Technical Certificate, and the Foundations of Data Science Certificate.`, description: `The College of Computing & Informatics' Master of Science in Information Systems (MSIS) prepares students for both the technical and real-world aspects of creating and managing information systems. The program is offered both online and on campus, part-time and full-time. For more information go to`, site: "http://catalog.drexel.edu/graduate/collegeofcomputingandinformatics/informationsystems/" },

    { degree: `Master of Science in Health Informatics`, score: 0, preffered_certificate: `This Degree prefers certificates related to Bio-data Certificates like the Health Informatics Certificate, the Foundations of Data Science Certificate and the Community-based Librarianship Certificate`, description: `The Master of Science in Health Informatics (MSHI) at the College of Computing & Informatics prepares graduates to use data, information and knowledge for scientific inquiry and problem solving to improve health outcomes. The program addresses the challenges and opportunities encountered as healthcare transforms itself into a digital, patient-centered system. The inter-disciplinary nature of the MSHI program brings clinicians and IT professionals together to analyze problems and develop solutions through the application of advanced information technology. For more information go to`, site: "http://catalog.drexel.edu/graduate/collegeofcomputingandinformatics/healthinformatics/" },

    { degree: `Master of Science in Artificial Intelligence and Machine Learning`, score: 0, preffered_certificate: `This Degree prefers certificates related to Data Science and AI like the AI/ML Certificate, Foundations of Data Science Certificate, Advanced Computer Science Certificate`, description: `The Master of Science in Artificial Intelligence and Machine Learning provides a strong foundation in the artificial intelligence and machine learning fields with foci on mathematical foundations, algorithms, tools, and applications as they pertain to artificial intelligence and machine learning. Students will gain competency in fundamental methods and techniques in artificial intelligence and machine learning. Their fundamental understanding will be applied to real data sets and data analysis tasks with the help of state-of-the-art technologies, tools, and platforms. The Master of Science in Artificial Intelligence and Machine Learning program culminates with a two-term capstone experience where students work on a real world or research problem using the knowledge they have gained throughout the program. For more information go to`, site: "http://catalog.drexel.edu/graduate/collegeofcomputingandinformatics/artificialintelligenceandmachinelearning/index.html" },

    { degree: `Master of Science in Digital Content Management`, score: 0, preffered_certificate: `This Degree prefers certificates related to front end development like the Front-end Development certificate, HCI/UX certificate and Computer Science Foundations certificate`, description: `The Digital Content Management (DCM) major prepares students with the skills and knowledge to effectively create, manage, and leverage digital content. Students gain first-hand experience working with a variety of enterprise content management systems, and addressing real-world digital content management challenges through a capstone experience. The DCM major is part of the Master of Science in Information (MSI) that prepares students for a range of information and data-oriented professional careers with critical content management skills. For more information go to`, site: "http://catalog.drexel.edu/graduate/collegeofcomputingandinformatics/digitalcontentmanagement/index.html" },

    { degree: `Master of Science in Information Science`, score: 0, preffered_certificate: `This Degree prefers certificates related to Information Systems like the Information System Certificate, Technical Certificate, and the Foundations of Data Science Certificate.`, description: `The College of Computing & Informatics' on-campus PhD in Information Science program prepares students to become creative, interdisciplinary researchers with foundations in information science, data science, and human-centered computing. For more information go to`, site: "http://catalog.drexel.edu/graduate/collegeofcomputingandinformatics/informationsciencephd" },

    { degree: `Master of Science in Library and Information Science`, score: 0, preffered_certificate: `This Degree prefers certificates related to Information Systems like the Information System Certificate, Technical Certificate, and the Community-based Librarianship Certificate`, description: `The Library and Information Science (LIS) graduate major integrates information technology, professional knowledge, and interdisciplinary, experiential learning to prepare our graduates to lead and innovate in libraries, archives, museums, and information organizations. The LIS graduate major in the MSI program is accredited by the American Library Association (ALA) since 1924, and is one of the one of the oldest continuously operating LIS graduate programs in North America. For more information go to`, site: "http://catalog.drexel.edu/graduate/collegeofcomputingandinformatics/libraryandinformationscience/" },

    { degree: `Master of Science in Software Engineering`, score: 0, preffered_certificate: `This Degree prefers certificates related to Computer Software like the Software Engineering Certificate, the Advanced CS Certificate, and the Information Systems Certificate`, description: `The College of Computing & Informatics' Master of Science in Software Engineering (MSSE) program was created in response to the growing importance of software in modern society and the rapid rise in demand for professional software engineers. For more information go to`, site: "http://catalog.drexel.edu/graduate/collegeofcomputingandinformatics/softwareengineering/" }];


    // To make sure that the scores are 0
    list_of_degrees[0]['score'] = 0;
    list_of_degrees[1]['score'] = 0;
    list_of_degrees[2]['score'] = 0;
    list_of_degrees[3]['score'] = 0;
    list_of_degrees[4]['score'] = 0;
    list_of_degrees[5]['score'] = 0;
    list_of_degrees[6]['score'] = 0;
    list_of_degrees[7]['score'] = 0;
    list_of_degrees[8]['score'] = 0;
    list_of_degrees[9]['score'] = 0;

    list_of_buttons_in_box.forEach(certificate => {

        // I am ranking the certificate with respect to the degree on a scale of 10

        if (certificate == "HCI/UX") {
            list_of_degrees[0]['score'] += 10;
            list_of_degrees[1]['score'] += 1;
            list_of_degrees[2]['score'] += 5;
            list_of_degrees[3]['score'] += 1;
            list_of_degrees[4]['score'] += 1;
            list_of_degrees[5]['score'] += 0;
            list_of_degrees[6]['score'] += 8;
            list_of_degrees[7]['score'] += 1;
            list_of_degrees[8]['score'] += 1;
            list_of_degrees[9]['score'] += 2;

        }

        // var list_of_degrees = [{degree:`Master of Science in Information - HCI/UX`,score:0}, {degree:`Master of Science in Data Science`,score:0},{degree:`Master of Science in Computer Science`,score:0}, {degree:`Master of Science in Information Systems`,score:0}, {degree:`Master of Science in Health Informatics`,score:0}, {degree:`Master of Science in Artificial Intelligence and Machine Learning`,score:0}, {degree:`Master of Science in Digital Content Management`,score:0}, {degree:`Master of Science in Information Science`,score:0}, {degree:`Master of Science in Library and Information Science`,score:0}, {degree:`Master of Science in Software Engineering`,score:0}];

        else if (certificate == "Information Systems") {

            list_of_degrees[0]['score'] += 4;
            list_of_degrees[1]['score'] += 3;
            list_of_degrees[2]['score'] += 5;
            list_of_degrees[3]['score'] += 10;
            list_of_degrees[4]['score'] += 3;
            list_of_degrees[5]['score'] += 3;
            list_of_degrees[6]['score'] += 3;
            list_of_degrees[7]['score'] += 8;
            list_of_degrees[8]['score'] += 7;
            list_of_degrees[9]['score'] += 8;

        }

        else if (certificate == "Foundations of Data Science") {

            list_of_degrees[0]['score'] += 0;
            list_of_degrees[1]['score'] += 10;
            list_of_degrees[2]['score'] += 5;
            list_of_degrees[3]['score'] += 3;
            list_of_degrees[4]['score'] += 3;
            list_of_degrees[5]['score'] += 6;
            list_of_degrees[6]['score'] += 3;
            list_of_degrees[7]['score'] += 5;
            list_of_degrees[8]['score'] += 4;
            list_of_degrees[9]['score'] += 2;

        }

        else if (certificate == "Artificial Intelligence/Machine Learning") {

            list_of_degrees[0]['score'] += 0;
            list_of_degrees[1]['score'] += 7;
            list_of_degrees[2]['score'] += 5;
            list_of_degrees[3]['score'] += 4;
            list_of_degrees[4]['score'] += 1;
            list_of_degrees[5]['score'] += 10;
            list_of_degrees[6]['score'] += 0;
            list_of_degrees[7]['score'] += 4;
            list_of_degrees[8]['score'] += 4;
            list_of_degrees[9]['score'] += 2;

        }

        else if (certificate == "Technology Leadership") {

            list_of_degrees[0]['score'] += 3;
            list_of_degrees[1]['score'] += 3;
            list_of_degrees[2]['score'] += 7;
            list_of_degrees[3]['score'] += 3;
            list_of_degrees[4]['score'] += 7;
            list_of_degrees[5]['score'] += 2;
            list_of_degrees[6]['score'] += 7;
            list_of_degrees[7]['score'] += 4;
            list_of_degrees[8]['score'] += 4;
            list_of_degrees[9]['score'] += 2;

        }

        else if (certificate == "Cybersecurity") {

            list_of_degrees[0]['score'] += 1;
            list_of_degrees[1]['score'] += 4;
            list_of_degrees[2]['score'] += 6;
            list_of_degrees[3]['score'] += 4;
            list_of_degrees[4]['score'] += 0;
            list_of_degrees[5]['score'] += 1;
            list_of_degrees[6]['score'] += 6;
            list_of_degrees[7]['score'] += 4;
            list_of_degrees[8]['score'] += 2;
            list_of_degrees[9]['score'] += 5;

        }

        else if (certificate == "Computer Science Foundations") {

            list_of_degrees[0]['score'] += 5;
            list_of_degrees[1]['score'] += 3;
            list_of_degrees[2]['score'] += 10;
            list_of_degrees[3]['score'] += 4;
            list_of_degrees[4]['score'] += 5;
            list_of_degrees[5]['score'] += 5;
            list_of_degrees[6]['score'] += 4;
            list_of_degrees[7]['score'] += 4;
            list_of_degrees[8]['score'] += 4;
            list_of_degrees[9]['score'] += 6;

        }

        else if (certificate == "Advanced Computer Science") {

            list_of_degrees[0]['score'] += 1;
            list_of_degrees[1]['score'] += 5;
            list_of_degrees[2]['score'] += 9;
            list_of_degrees[3]['score'] += 6;
            list_of_degrees[4]['score'] += 2;
            list_of_degrees[5]['score'] += 8;
            list_of_degrees[6]['score'] += 2;
            list_of_degrees[7]['score'] += 5;
            list_of_degrees[8]['score'] += 6;
            list_of_degrees[9]['score'] += 9;

        }

        else if (certificate == "Software Architecture") {

            list_of_degrees[0]['score'] += 1;
            list_of_degrees[1]['score'] += 5;
            list_of_degrees[2]['score'] += 6;
            list_of_degrees[3]['score'] += 5;
            list_of_degrees[4]['score'] += 1;
            list_of_degrees[5]['score'] += 1;
            list_of_degrees[6]['score'] += 0;
            list_of_degrees[7]['score'] += 4;
            list_of_degrees[8]['score'] += 4;
            list_of_degrees[9]['score'] += 10;

        }

        else if (certificate == "Front-End Development") {

            list_of_degrees[0]['score'] += 9;
            list_of_degrees[1]['score'] += 1;
            list_of_degrees[2]['score'] += 5;
            list_of_degrees[3]['score'] += 2;
            list_of_degrees[4]['score'] += 1;
            list_of_degrees[5]['score'] += 0;
            list_of_degrees[6]['score'] += 8;
            list_of_degrees[7]['score'] += 1;
            list_of_degrees[8]['score'] += 1;
            list_of_degrees[9]['score'] += 2;

        }

        else if (certificate == "Health Informatics") {

            list_of_degrees[0]['score'] += 0;
            list_of_degrees[1]['score'] += 3;
            list_of_degrees[2]['score'] += 5;
            list_of_degrees[3]['score'] += 3;
            list_of_degrees[4]['score'] += 10;
            list_of_degrees[5]['score'] += 2;
            list_of_degrees[6]['score'] += 0;
            list_of_degrees[7]['score'] += 4;
            list_of_degrees[8]['score'] += 4;
            list_of_degrees[9]['score'] += 2;

        }

        else if (certificate == "App Development") {
            list_of_degrees[0]['score'] += 7;
            list_of_degrees[1]['score'] += 2;
            list_of_degrees[2]['score'] += 5;
            list_of_degrees[3]['score'] += 2;
            list_of_degrees[4]['score'] += 0;
            list_of_degrees[5]['score'] += 0;
            list_of_degrees[6]['score'] += 8;
            list_of_degrees[7]['score'] += 2;
            list_of_degrees[8]['score'] += 2;
            list_of_degrees[9]['score'] += 5;

        }

        else if (certificate == "Community-based Librarianship") {

            list_of_degrees[0]['score'] += 4;
            list_of_degrees[1]['score'] += 5;
            list_of_degrees[2]['score'] += 6;
            list_of_degrees[3]['score'] += 5;
            list_of_degrees[4]['score'] += 3;
            list_of_degrees[5]['score'] += 0;
            list_of_degrees[6]['score'] += 0;
            list_of_degrees[7]['score'] += 6;
            list_of_degrees[8]['score'] += 10;
            list_of_degrees[9]['score'] += 2;

        }

        else if (certificate == "Applied Data Science") {
            console.log("APPDS");

            list_of_degrees[0]['score'] += 0;
            list_of_degrees[1]['score'] += 10;
            list_of_degrees[2]['score'] += 5;
            list_of_degrees[3]['score'] += 4;
            list_of_degrees[4]['score'] += 6;
            list_of_degrees[5]['score'] += 6;
            list_of_degrees[6]['score'] += 0;
            list_of_degrees[7]['score'] += 5;
            list_of_degrees[8]['score'] += 6;
            list_of_degrees[9]['score'] += 7;

        }

        else {
            list_of_degrees[0]['score'] += 5;
            list_of_degrees[1]['score'] += 5;
            list_of_degrees[2]['score'] += 5;
            list_of_degrees[3]['score'] += 5;
            list_of_degrees[4]['score'] += 5;
            list_of_degrees[5]['score'] += 5;
            list_of_degrees[6]['score'] += 5;
            list_of_degrees[7]['score'] += 5;
            list_of_degrees[8]['score'] += 5;
            list_of_degrees[9]['score'] += 5;

        }

    });

    if (list_of_buttons_in_box.length == 2) {
        document.getElementById("degreeheading").innerHTML = `Ranking Master's Degrees Based on your Certificates - ${list_of_buttons_in_box[0]} and ${list_of_buttons_in_box[1]}`;

    }
    else if (list_of_buttons_in_box.length == 3) {
        document.getElementById("degreeheading").innerHTML = `Ranking Master's Degrees Based on your Certificates - ${list_of_buttons_in_box[0]}, ${list_of_buttons_in_box[1]} and ${list_of_buttons_in_box[2]}`;

    }


    // var totalsum = 0;

    // list_of_degrees.forEach(score => {
    //     totalsum += score.score;
    // })

    console.log(list_of_degrees);

    list_of_degrees.sort(function (a, b) {
        return a.score - b.score;
    });

    list_of_degrees.reverse();

    var i = 0;

    list_of_degrees.forEach(deg => {

        i += 1;

        document.getElementById(`degree${i}`).innerHTML = `${deg.degree}`;

        $($($($(document.getElementById(`degree${i}`)).parent()).parent()).children(".degreecontent")).text(`${deg.preffered_certificate}`);

        $($($($(document.getElementById(`degree${i}`)).parent()).parent()).children(".degreecontent")).append(`<br><br>${deg.description}`);

        $($($($(document.getElementById(`degree${i}`)).parent()).parent()).children(".degreecontent")).append("&nbsp;");

        $($($($(document.getElementById(`degree${i}`)).parent()).parent()).children(".degreecontent")).append(
            $(document.createElement('a')).prop({
                target: '_blank',
                href: `${deg.site}`,
                innerText: 'site'
            })
        )


        if (list_of_buttons_in_box.length == 2) {
            if (`${Math.floor((deg.score * 100) / 20)}`.length == 1) {
                document.getElementById(`percentage${i}`).innerHTML = `0‎‎${Math.floor((deg.score * 100) / 20)}%`;

            }
            else {
                document.getElementById(`percentage${i}`).innerHTML = `${Math.floor((deg.score * 100) / 20)}%`;
            }

        }
        else {
            if (`${Math.floor((deg.score * 100) / 30)}`.length == 1) {
                document.getElementById(`percentage${i}`).innerHTML = `0‎‎${Math.floor((deg.score * 100) / 30)}%`

            }
            else {
                document.getElementById(`percentage${i}`).innerHTML = `${Math.floor((deg.score * 100) / 30)}%`;
            }
        }

    });
}


// Coding the Degree Button to give the reason and the extra Degree infromation: 

document.querySelectorAll(".degreebutton").forEach(accordion_button => {
    accordion_button.addEventListener('click', () => {

        accordion_button.classList.toggle("degree--active");
        if (accordion_button.classList.contains("degree--active")) {
            $(accordion_button).parent("li").css("height", "fit-content");

        }
        else {
            $(accordion_button).parent("li").css("height", `${$(accordion_button).outerHeight()}px`);


        }
    })
})
