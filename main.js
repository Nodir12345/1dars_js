let sum  = 11000.34 ;
let money = prompt("pulingizni kiriting sumda");
let ism = prompt("ismingiz");
let joy = prompt("qayerga bormoqchisiz");
let dollar = ( money / sum );
console.log(`${ism} pulingiz  $${dollar} sum ekan`);
document.write( `${ism} pulingiz qariyb: $${Math.trunc(dollar)} dollar ekan\n` + `<br>` )
if(Math.trunc(dollar) >= 11000340) { 
  console.log( `${ism} oq yul tilaymiz ${joy} ga`);
  document.write(`${ism} oq yul tilaymiz ${joy} ga` + `<br>`);
  document.write(`Sizning xarajatlaringiz: <br>
   Borish-kelish samolyot bileti - $500 <br>
   Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250 <br>
   Muzey va ko’ngilochar joylar uchun - $120 <br>
   Yana bazi xarajatlar - $130`);
}
else{
   console.log(` ${ism}, ozgina sabr qilish kerak bo’lar ekan.`);
   document.write( `${ism}, ozgina sabr qilish kerak bo’lar ekan.`);
}