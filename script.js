var itemImages = [
  {
    src: 'images/img12.jpg',
    pname: 'Single Layer Keikogi',
    off: 'no',
    newprice: ' CA$104.99',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img10.jpg',
    pname: 'Kodokan Gold Medal',
    off: 'no',
    newprice: 'CA$14.50',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img2.jpg',
    pname: 'Body Opponent Bag',
    off: 'yes',
    oldprice: 'CA$329.99',
    newprice: ' CA$229.89',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img15.png',
    pname: 'Tatami Mats',
    off: 'no',
    newprice: 'CA$50.00',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img4.jpg',
    pname: 'Double Wrap Solid Belt',
    off: 'no',
    newprice: 'CA$13.50',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img5.jpg',
    pname: 'Heavy Bag Stand',
    off: 'yes',
    oldprice: 'CA$169.99',
    newprice: ' CA$119.99',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img6.jpg',
    pname: 'Judo Gi',
    off: 'yes',
    oldprice: 'CA$201.99',
    newprice: ' CA$159.99',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img7.jpg',
    pname: 'Katana Samurai Sword',
    off: 'yes',
    oldprice: 'CA$750.99',
    newprice: ' CA$499.99',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img8.jpg',
    pname: 'Martial Arts Sneakers',
    off: 'yes',
    oldprice: 'CA$89.99',
    newprice: ' CA$49.89',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img9.jpg',
    pname: 'High Quality Mooto Belt',
    off: 'no',
    newprice: 'CA$20.99',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img11.jpg',
    pname: 'Razor Chain Whip',
    off: 'yes',
    oldprice: 'CA$89.99',
    newprice: ' CA$67.99',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img1.jpg',
    pname: 'Aluminum Dragon Fan',
    off: 'no',
    newprice: ' CA$27.89',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img13.jpg',
    pname: 'Standard Puzzle Mat',
    off: 'yes',
    oldprice: 'CA$39.99',
    newprice: ' CA$29.99',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img14.jpg',
    pname: 'Sparring Headgear',
    off: 'yes',
    oldprice: 'CA$65.00',
    newprice: ' CA$15.00',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img3.jpg',
    pname: 'Bo Staff',
    off: 'no',
    newprice: ' CA$39.89',
    alt: 'Item Image Not Available'
  },
  {
    src: 'images/img16.jpg',
    pname: 'Tang Soo Do Uniform',
    off: 'no',
    newprice: 'CA$10.89',
    alt: 'Item Image Not Available'
  }
];

var partners = [
  { src: 'images/partner1.jpg', alt: 'img1' },
  { src: 'images/partner2.jpg', alt: 'img1' }
];

function func1() {
  var imageContainer = document.querySelector('.product-item');

  var str = '<div class="item">' + '<div class="item-image">' + '<div class="img-hover-zoom">';

  var myImageStr = '\0';
  var a = '\0';
  var b = '\0';
  for (var i = 0; i < 8; i++) {
    a =
      '<img src="' +
      itemImages[i].src +
      '" alt="' +
      itemImages[i].alt +
      '"></div>' +
      '<div class="item-button"><a href="#">Add to Cart</a>' +
      '<a href="#">Details</a></div></div><div class="item-title">' +
      '<h5>' +
      itemImages[i].pname +
      '</h5>';

    if (itemImages[i].off === 'yes') {
      b =
        '<p><del>' +
        itemImages[i].oldprice +
        '</del>' +
        itemImages[i].newprice +
        '</p></div></div></div>';
    } else {
      b = '<p>' + itemImages[i].newprice + '</p></div></div></div>';
    }

    myImageStr += str + a + b;
  }

  imageContainer.innerHTML = myImageStr;
}

function func2() {
  var imageContainer = document.querySelector('.secondPlace');

  var str = '<div class="item">' + '<div class="item-image">' + '<div class="img-hover-zoom">';

  var myImageStr = '\0';
  var a = '\0';
  var b = '\0';
  for (var i = 8; i < 12; i++) {
    a =
      '<img src="' +
      itemImages[i].src +
      '" alt="' +
      itemImages[i].alt +
      '"></div>' +
      '<div class="item-button"><a href="#">Add to Cart</a>' +
      '<a href="#">Details</a></div></div><div class="item-title">' +
      '<h5>' +
      itemImages[i].pname +
      '</h5>';

    if (itemImages[i].off === 'yes') {
      b =
        '<p><del>' +
        itemImages[i].oldprice +
        '</del>' +
        itemImages[i].newprice +
        '</p></div></div></div>';
    } else {
      b = '<p>' + itemImages[i].newprice + '</p></div></div></div>';
    }

    myImageStr += str + a + b;
  }

  imageContainer.innerHTML = myImageStr;
}

function func3() {
  var imageContainer = document.querySelector('.thirdPlace');

  var str = '<div class="item">' + '<div class="item-image">' + '<div class="img-hover-zoom">';

  var myImageStr = '\0';
  var a = '\0';
  var b = '\0';
  for (var i = 12; i < 16; i++) {
    a =
      '<img src="' +
      itemImages[i].src +
      '" alt="' +
      itemImages[i].alt +
      '"></div>' +
      '<div class="item-button"><a href="#">Add to Cart</a>' +
      '<a href="#">Details</a></div></div><div class="item-title">' +
      '<h5>' +
      itemImages[i].pname +
      '</h5>';

    if (itemImages[i].off === 'yes') {
      b =
        '<p><del>' +
        itemImages[i].oldprice +
        '</del>' +
        itemImages[i].newprice +
        '</p></div></div></div>';
    } else {
      b = '<p>' + itemImages[i].newprice + '</p></div></div></div>';
    }

    myImageStr += str + a + b;
  }

  imageContainer.innerHTML = myImageStr;
}

function func4() {
  var imageContainer = document.querySelector('.banner-2');

  var str = '<div class="container">';

  var myImageStr = '\0';

  for (var i = 0; i < partners.length; i++) {
    myImageStr +=
      '<div class="partners"><img src="' +
      partners[i].src +
      '" alt="' +
      partners[i].alt +
      '"></div>';
  }

  imageContainer.innerHTML = str + myImageStr + '</div>';
}

function start() {
  func1();
  func2();
  func3();
  func4();
}
window.onload = start;
