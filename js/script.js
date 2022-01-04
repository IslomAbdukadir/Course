// $(".teach").hide();  
// $(".teach1").show();  


// $(".first").click(function () { 
//     $(".num").removeClass("active");  
//     $(".first").addClass("active");  
//     $(".teach").hide();  
//     $(".teach1").show();  
// });
// $(".second").click(function () { 
//     $(".num").removeClass("active");  
//     $(".second").addClass("active");  
//     $(".teach").hide();  
//     $(".teach2").show();  

// });
// $(".third").click(function () { 
//     $(".num").removeClass("active");  
//     $(".third").addClass("active");  
//     $(".teach").hide();  
//     $(".teach3").show();  
// });
// $(".fourth").click(function () { 
//     $(".num").removeClass("active");  
//     $(".fourth").addClass("active");  
//     $(".teach").hide();  
//     $(".teach4").show();  
// });
// $(".fifth").click(function () { 
//     $(".num").removeClass("active");  
//     $(".fifth").addClass("active"); 
//     $(".teach").hide();  
//     $(".teach5").show();  
// });

let link = document.querySelectorAll(".lesson__link");
let title = document.querySelector(".lesson__title");

link.forEach(link => {
    if (link.innerHTML == title.innerHTML) {
        $(link).removeClass("active");
        $(link).addClass("active");
    }
});