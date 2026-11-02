/* LunaOnLens site scripts */
(function () {
  var D = 'https://cdn.jsdelivr.net/gh/Lunaonlens/site-assets@6e18b37/';

  // ---------- styles ----------
  var css =
    '@media(max-width:767px){html,body{overflow-x:hidden}.fb-block .animatable{opacity:1!important}' +
    '.lol-b,.cs,.of,.bl,.hw,.wt{text-align:center!important}}' +
    '.lol-c{position:relative}' +
    '#lol-hv+.fb-block__overlay{opacity:1!important;background:linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.2) 45%,rgba(0,0,0,.55))!important}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  // ---------- hero video ----------
  function mk() {
    if (document.getElementById('lol-hv')) return;
    var b = null;
    document.querySelectorAll('.block-container').forEach(function (c) {
      if (!b && /STOP SCROLLING/i.test(c.textContent) && c.querySelector('.fb-block__background-image')) b = c;
    });
    if (!b) return;
    var img = b.querySelector('.fb-block__background-image');
    var v = document.createElement('video');
    v.id = 'lol-hv';
    v.muted = true; v.defaultMuted = true; v.loop = true; v.autoplay = true; v.playsInline = true;
    v.setAttribute('playsinline', ''); v.setAttribute('muted', ''); v.preload = 'auto';
    v.setAttribute('aria-hidden', 'true');
    v.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;pointer-events:none;opacity:0;transition:opacity .8s';
    var m = window.matchMedia('(max-width:767px)');
    function src() {
      var u = D + (m.matches ? 'hero-v2-mobile.mp4' : 'hero-v2.mp4');
      if (v.getAttribute('data-s') !== u) {
        v.setAttribute('data-s', u); v.src = u;
        if (v.play) v.play().catch(function () {});
      }
    }
    src();
    if (m.addEventListener) m.addEventListener('change', src);
    v.addEventListener('playing', function () { v.style.opacity = 1; });
    img.insertAdjacentElement('afterend', v);
  }

  // ---------- min text size on phones ----------
  function fix() {
    if (innerWidth > 767) return;
    document.querySelectorAll('.fb-element-type-custom-code__content *').forEach(function (e) {
      if (e.children.length || !e.textContent.trim()) return;
      var s = parseFloat(getComputedStyle(e).fontSize);
      var n = e.textContent.trim().length;
      var t = n > 30 ? 15 : 13;
      if (s && s < t) e.style.setProperty('font-size', t + 'px', 'important');
    });
  }

  // ---------- tappable phone number ----------
  function tel() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var a = [];
    while (w.nextNode()) {
      if (/0405 939 676/.test(w.currentNode.nodeValue) && !w.currentNode.parentNode.closest('a')) a.push(w.currentNode);
    }
    a.forEach(function (n) {
      var s = document.createElement('span');
      s.innerHTML = n.nodeValue.replace('0405 939 676', '<a href="tel:+61405939676" style="color:inherit;text-decoration:none">0405 939 676</a>');
      n.parentNode.replaceChild(s, n);
    });
  }

  // ---------- link the four service cards ----------
  function lk() {
    var g = document.querySelector('.lol-g');
    if (!g || g.getAttribute('data-l')) return;
    var n = {};
    document.querySelectorAll('a[href]').forEach(function (a) {
      var h = a.getAttribute('href').replace(/\/$/, '').split('/').pop();
      if (/^(commercial|real-estate|google-listings)$/.test(h) && !n[h]) n[h] = a.getAttribute('href');
    });
    var m = ['commercial', 'commercial', 'real-estate', 'google-listings'];
    var c = g.querySelectorAll('.lol-c');
    if (!c.length) return;
    g.setAttribute('data-l', '1');
    c.forEach(function (e, i) {
      var h = n[m[i]];
      if (!h) return;
      var a = document.createElement('a');
      a.href = h;
      a.setAttribute('aria-label', (e.querySelector('.lol-t') || { textContent: 'View' }).textContent);
      a.style.cssText = 'position:absolute;top:0;left:0;right:0;bottom:0;z-index:5;display:block';
      e.appendChild(a);
    });
  }

  function go() { try { mk(); fix(); tel(); lk(); } catch (e) {} }
  if (document.readyState !== 'loading') go();
  document.addEventListener('DOMContentLoaded', go);
  window.addEventListener('load', go);
  window.addEventListener('resize', fix);
  [500, 1500, 3500].forEach(function (t) { setTimeout(go, t); });
})();
