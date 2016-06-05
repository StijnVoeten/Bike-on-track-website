            var images = [
              "afbeeldingen/productenlijst/wiel1.png",
              "afbeeldingen/productenlijst/wiel2.png",
              "afbeeldingen/productenlijst/wiel3.png",
              "afbeeldingen/productenlijst/pedaal1.png",
              "afbeeldingen/productenlijst/pedaal2.png",
              "afbeeldingen/productenlijst/pedaal3.png",
              "afbeeldingen/productenlijst/zadel1.png",
              "afbeeldingen/productenlijst/zadel2.png",
              "afbeeldingen/productenlijst/zadel3.png",
              "afbeeldingen/productenlijst/fietspomp.png",
              "afbeeldingen/productenlijst/fietsrek.png",
              "afbeeldingen/productenlijst/fietsmand.png",
              "afbeeldingen/productenlijst/fietslicht.png",
              "afbeeldingen/productenlijst/ketting.png",
              "afbeeldingen/productenlijst/fietsbel.png",
              "afbeeldingen/productenlijst/remblok.png",

            ];

            var img = document.getElementById("slider-img");
            img.setAttribute("src", images[0])

            var total = images.length;
            var imagecounter = 0;

            function slider () {
              if (imagecounter <= total) {
                imagecounter++;
              }

              if (imagecounter == total) {
                imagecounter = 0;
              }

            document.getElementById("slider-img");
            img.setAttribute("src", images[imagecounter]);
            }

            setInterval(slider, 1000);
