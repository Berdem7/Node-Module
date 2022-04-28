/* Synchronous function нь үйлдлүүдээ дэс дарааллын дагуу ажиллуулдаг бөгөөд, 
эхний үйлдэл хийгдэж дууссан тохиолдолд дараагийн үйлдэл рүү шилждэг. 
Энэ вебсайтад нэг том зургаас шалтгаалан дараагийн хэсгүүд уншихгүй үлдэх гэх мэт асуудал гарах эрсдэлтэй.
Asynchronous function ямар нэгэн дэс дараалалгүйгээр, боломжит үйлдлээс эхлэх гүйцэтгэдэг. 
Ингэснээр дээр дурдсан асуудлыг нэг том зургийг уншиж дуусахыг хүлээлгүй бусад хэсгүүд ажиллах тул user experience талдаа илүү давуу талтай.
Зэрэг ажиллуулсан тохиолдолд Async function Sync function-ы үйлдэл дундуур орно.
 */

// Async function
const request = require("request");
function printingFunc(a) {
  request("https://www.google.com", () => {
    console.log(a);
  });
}

function printer(a, b, c, d) {
  printingFunc(a);
  printingFunc(b);
  printingFunc(c);
  printingFunc(d);
}

printer(1, 2, 3, 4);

// Sync function

function printingFuncSync(a, callback) {
  request("https://www.google.com", () => {
    callback(console.log(a));
  });
}

function printerSync(a, b, c, d) {
  printingFuncSync(a, () => {
    printingFuncSync(b, () => {
      printingFuncSync(c, () => {
        printingFuncSync(d, () => {});
      });
    });
  });
}

printerSync(1, 2, 3, 4);
