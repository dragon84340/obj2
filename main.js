
    function randomMisollar(miQ) {
      const amallar = ["+", "-", "*", "/"]; 
      for (let i = 0; i < miQ; i++) {
        let son1 = Math.floor(Math.random() * 10) + 1;
        let son2 = Math.floor(Math.random() * 10) + 1;
        let amal = amallar[Math.floor(Math.random() * amallar.length)];
        let togriJavob;
        switch (amal) {
          case "+": togriJavob = son1 + son2; break;
          case "-": togriJavob = son1 - son2; break;
          case "*": togriJavob = son1 * son2; break;
          case "/":
            togriJavob = (son1 / son2).toFixed(2);
            break;
        }

        let foydaJavob = prompt(`Misol ${i+1}: ${son1} ${amal} ${son2} = ?`);
        foydaJavob = Number(foydaJavob);

        if (foydaJavob === togriJavob) {
          console.log(`Sizning javob to'g'ri - ${foydaJavob}`);
        } else {
          console.log(`Sizning javob notog'ri - ${foydaJavob}! To'g'ri javob - ${togriJavob}`);
        }
      }
    }

    let miqdor = prompt("Nechta misol ishlamoqchisiz?");
    if (miqdor && !isNaN(miqdor)) {
      randomMisollar(Number(miqdor));
    } else {
      console.log("Iltimos, to‘g‘ri son kiriting!");
    }
  
