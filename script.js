// ===== Saturno by 4Space — selettore colore + link acquisto =====
// Ogni swatch ha un attributo data-link con il Payment Link Stripe
// dedicato a quel colore. Sostituisci i valori placeholder con i tuoi
// link reali (vedi GUIDA_PUBBLICAZIONE.md).

document.addEventListener('DOMContentLoaded', function () {
  var swatches = document.querySelectorAll('.swatch');
  var buyBtn = document.getElementById('buyBtn');
  var colorNameEl = document.getElementById('selectedColorName');
  var ringOuter = document.querySelector('#shopRing .ring-outer');
  var ringMid = document.querySelector('#shopRing .ring-mid');
  var ringDot = document.querySelector('#shopRing .ring-dot');

  swatches.forEach(function (sw) {
    sw.addEventListener('click', function () {
      swatches.forEach(function (s) { s.classList.remove('active'); });
      sw.classList.add('active');

      var name = sw.getAttribute('data-name');
      var link = sw.getAttribute('data-link');
      var hex = sw.getAttribute('data-hex');

      if (colorNameEl) colorNameEl.textContent = name;
      if (buyBtn && link) buyBtn.setAttribute('href', link);
      if (hex) {
        if (ringOuter) ringOuter.setAttribute('stroke', hex);
        if (ringMid) ringMid.setAttribute('stroke', hex);
        if (ringDot) ringDot.setAttribute('fill', hex);
      }
    });
  });
});
