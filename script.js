window.addEventListener("scroll",function(){

var reveals=document.querySelectorAll(".reveal");

for(var i=0;i<reveals.length;i++){

var windowheight=window.innerHeight;
var revealtop=reveals[i].getBoundingClientRect().top;

if(revealtop<windowheight-150){
reveals[i].classList.add("active");
}

}

});

/* HERO SLIDER */

const heroImages = [
"hero.jpg",
"https://images.unsplash.com/photo-1699187838163-e40139827cdb?w=1920&q=80",
"https://images.unsplash.com/photo-1558691518-331f8672f840?w=1920&q=80",
"https://images.unsplash.com/photo-1599995903128-531fc7fb694b?w=1920&q=80"
];

let current = 0;

function showSlide(index){
document.querySelector(".hero").style.backgroundImage =
"url("+heroImages[index]+")";

let dots=document.querySelectorAll(".dot");
dots.forEach(d=>d.classList.remove("active"));
dots[index].classList.add("active");
}

function goToSlide(index){
current=index;
showSlide(current);
}

setInterval(()=>{
current=(current+1)%heroImages.length;
showSlide(current);
},3000);

showSlide(current);

/* SERVICES SLIDER */

const services = {

drain:[
"drain-excavation.png",
"draine1.jpg",
"draine2.jpg",
"draine3.jpg",
"draine4.jpg"
],

"drain-install":[
"drain-laying.png",
"drainl1.png",
"drainl2.jpg",
"drainl3.jpg",
"drainl4.jpg"
],

pqc:[
"concrete-paving.png",
"pqc1.jpg",
"pqc2.jpg",
"pqc3.jpg",
"pqc4.jpg"
],

wall:[
"retaining-wall.png",
"wall1.jpg",
"wall2.jpg",
"wall3.jpg",
"wall4.jpg"
],

safety:[
"site-safety.png",
"safety1.jpg",
"safety2.jpg",
"safety3.jpg",
"safety4.jpg"
]

};

Object.keys(services).forEach(key=>{

let index=0;

setInterval(()=>{

let img=document.querySelector("."+key);
img.src=services[key][index];

index=(index+1)%services[key].length;

},3000);

});