var picture = document.getElementById('img');

var picArray = ['Pic_1.jpg', 'Pic_2.png', 'Pic_3.jpg', 'Pic_4.jpg', 'Pic_5.jpg', 'Pic_6.jpg'];

var num = Math.floor(Math.random() * picArray.length);

picture.src ="Pictures/" + picArray[num];