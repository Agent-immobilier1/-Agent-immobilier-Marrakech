          var Aktuelles_Bild_Nr = 0;

            var wechselbild=Aktuelles_Bild_Nr;

          var Bilder_Anzahl = 7;

            var Anim_Zeitverzoegerung = 5000;

            var Wechselbild_id = 'Aktuelles_Bild';

            var main_container_p = 'Aktuelles_Bild_cnt';

            var Kleine_Bilder_id = 'Kleine_Bilder';

            var Bilder_Liste = new Array(7);
          var Bilder_Breite = new Array(7);
          var Bilder_Hoehe = new Array(7);

          //Bilder_Liste[0] = 'Info-Schild.jpg';

          Bilder_Liste[0] = '1.jpg';
          Bilder_Liste[1] = '2.jpg';
          Bilder_Liste[2] = '3.jpg';
          Bilder_Liste[3] = '4.jpg';
          Bilder_Liste[4] = '5.jpg';
          Bilder_Liste[5] = '6.jpg';
          Bilder_Liste[6] = '7.jpg';








function Bild_Vor()
{
   wechselbild=wechselbild+1;

  //alert(wechselbild+'       '+Bilder_Liste[wechselbild]);
 if( wechselbild >= Bilder_Anzahl){ wechselbild = 0; }

   document.getElementById(Wechselbild_id).src = Bilder_Liste[wechselbild];   
 
  var naechstes_b= wechselbild;

}

function Bild_Zurueck()
{
 wechselbild--;

   var letztesBild = Bilder_Anzahl - 1;

   if( wechselbild < 0){ wechselbild = letztesBild; }

   var naechstes_b= wechselbild;

document.getElementById(Wechselbild_id).src = Bilder_Liste[wechselbild];    //alert (Bilder_Liste[wechselbild]);
}


function chkFormular () {
  if (document.Formular.User.value == "") {
    alert("Bitte Ihren Namen eingeben!");
    document.Formular.User.focus();
    return false;
  }
  if (document.Formular.Mail.value == "") {
    alert("Bitte Ihre E-Mail-Adresse eingeben!");
    document.Formular.Mail.focus();
    return false;
  }
  if (document.Formular.Mail.value.indexOf("@") == -1) {
    alert("Keine E-Mail-Adresse!");
    document.Formular.Mail.focus();
    return false;
  }

}