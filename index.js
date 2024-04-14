// let imgArr=[
//     "https://www.malemodelscene.net/wp-content/uploads/2011/03/Rafael-Lazzini-for-Bluefly-MaleModelSceneNet-01.jpg",
//     "https://media.fashionnetwork.com/m/0b9b/1574/cc1e/a880/210e/6e48/6249/ab3b/fd96/183e/183e.jpg",
//     "https://hips.hearstapps.com/hmg-prod/images/fashion-quotes-1579016590.png",
//     "https://images.milled.com/2020-09-13/vYXoGZ2QXQG0EhP6/Bw-R9aH2gdSt.jpeg",
//     "https://budget-fashionista.b-cdn.net/wp-content/uploads/2009/01/bluefly-1.jpg.webp",
// ]
// currentImg=0;
// let image = document.getElementById('slide-img');
//     image.setAttribute("src", imgArr[currentImg])
// const autoSlideImg=() => {
//     id = setInterval(() => {
//             currentImg++;
//         if(currentImg >= imgArr.length){
//             currentImg=0;
//         };
//         image.setAttribute("src", imgArr[currentImg])
//     }, 5000);
// }
// autoSlideImg();
// let next = document.querySelector(".button-right");
// next.addEventListener("click", function(){
//     currentImg++;
//     if(currentImg >= imgArr.length){
//         currentImg=0;
//     }
//     image.setAttribute("src", imgArr[currentImg])
//     clearInterval(id);
// })
// let previous=document.querySelector(".button-left");
// previous.addEventListener("click",function(){
//     currentImg--;
//     if(currentImg<0){
//         currentImg=imgArr.length-1;
//     }
//     image.setAttribute("src",imgArr[currentImg]);
//     clearInterval(id);
// });








// ---------------------------------------------------------------------------------------






document.addEventListener('DOMContentLoaded', function() {
    var slides1 = document.querySelectorAll('#slider .slider-image');
    var slides2 = document.querySelectorAll('#slider-2 .image');
    var currentSlide1 = 0;
    var currentSlide2 = 0;

    function showSlide1(n) {
        slides1[currentSlide1].classList.remove('active');
        currentSlide1 = (n + slides1.length) % slides1.length;
        slides1[currentSlide1].classList.add('active');
    }

    function showSlide2(n) {
        slides2[currentSlide2].classList.remove('active');
        currentSlide2 = (n + slides2.length) % slides2.length;
        slides2[currentSlide2].classList.add('active');
    }

    setInterval(function() {
        showSlide1(currentSlide1 + 1);
        showSlide2(currentSlide2 + 1);
    }, 5000);
});