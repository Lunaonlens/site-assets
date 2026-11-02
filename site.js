/* LunaOnLens site scripts */
(function () {
  var D = 'https://cdn.jsdelivr.net/gh/Lunaonlens/site-assets@6e18b37/';

  // ---------- styles ----------
  var css =
    '@media(max-width:767px){.fb-block .animatable{opacity:1!important}' +
    '.lol-b,.cs,.of,.bl,.hw,.wt{text-align:center!important}' +
    '.fb-element-type-custom-code__content p,.k2-p,.p,.k2-d,.k2-c details div{max-width:none!important}' +
    '.r{grid-template-columns:1fr!important;gap:14px!important;margin-top:30px!important}' +
    '.r img{height:auto!important;aspect-ratio:4/3!important}' +
    '.m img{height:auto!important;aspect-ratio:3/4!important;object-fit:cover!important;width:100%!important}' +
    '.k2-cd{grid-template-columns:1fr!important;padding:26px 20px!important;gap:22px!important;border-radius:18px!important}' +
    '.gl{padding:16px 18px!important;border-radius:12px!important;margin-top:24px!important}' +
    '.k2-c summary{font-size:16px!important}' +
    '.gl-hero{grid-template-columns:1fr!important;gap:28px!important}.gl-hero .gl-h{font-size:46px!important}.gl-p,.gl-aud p,.gl-hd p,.gl-q{max-width:none!important}.gl-p{font-size:16px!important}.gl-lb{font-size:12px!important}.gl-vis{padding-bottom:64px!important}.gl-card{width:58%!important}.gl-card div{padding:10px 12px!important}.gl-card b{font-size:14px!important}.gl-card span{font-size:12px!important}.gl-get{padding:26px 18px!important;border-radius:18px!important;margin-top:40px!important}.gl-hd{flex-direction:column!important;align-items:flex-start!important;gap:12px!important;margin-bottom:20px!important}.gl-hd .gl-h{font-size:40px!important}.gl-hd p{font-size:15px!important}.gl-shots{grid-template-columns:1fr 1fr!important;gap:16px 12px!important}.gl-shots strong{font-size:15px!important;margin-top:8px!important}.gl-shots span{font-size:13px!important}.gl-why{grid-template-columns:1fr!important;gap:24px!important;margin-top:40px!important}.gl-why .n{font-size:44px!important}.gl-why h3{font-size:30px!important}.gl-why p{font-size:15px!important}.gl-q{margin-top:40px!important}.gl-q p{font-size:30px!important}.gl-q cite,.gl-rg cite{font-size:12px!important}.gl-aud{padding:26px 20px!important;border-radius:18px!important;margin-top:40px!important}.gl-aud .gl-h{font-size:40px!important}.gl-aud p{font-size:15px!important}.gl-rv{margin-top:40px!important}.gl-rg{grid-template-columns:1fr!important;gap:22px!important}.gl-rg p{font-size:22px!important}.gl-rg .st{font-size:16px!important}.gl-b{padding:12px 20px!important;font-size:15px!important}.wd-hero{grid-template-columns:1fr!important;gap:28px!important}.wd-hero .wd-h{font-size:56px!important}.wd-p{font-size:16px!important}.wd-lb{font-size:12px!important}.wd-vis{padding-bottom:36px!important}.wd-b{padding:12px 20px!important;font-size:15px!important}.wd-gr{gap:10px!important}.wd-pk{padding:26px 18px!important;border-radius:18px!important;margin-top:36px!important}.wd-pk .wd-h{font-size:42px!important;margin-bottom:20px!important}.wd-grid{grid-template-columns:1fr!important;gap:14px!important}.wd-c{padding:22px 20px!important;border-radius:14px!important}.wd-c .t{font-size:12px!important}.wd-c h3{font-size:34px!important}.wd-c .pr{font-size:24px!important}.wd-c p{font-size:15px!important;margin:12px 0 18px!important}.wd-c a{padding:11px 20px!important;font-size:15px!important}.wd-faq{grid-template-columns:1fr!important;gap:18px!important;margin-top:44px!important}.wd-faq .wd-h{font-size:42px!important}.wd-faq summary{font-size:22px!important}.wd-faq details{padding:16px 0!important}.wd-faq details p{font-size:15px!important;margin-top:10px!important}.wd-cta{padding:26px 20px!important;border-radius:18px!important;margin-top:44px!important}.wd-cta .wd-h{font-size:42px!important}.wd-cta p{font-size:15px!important;max-width:none!important;margin-bottom:18px!important}}' +
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

  // ---------- remove desktop-only max-widths on phones ----------
  function mw() {
    if (innerWidth > 767) return;
    document.querySelectorAll('.fb-element-type-custom-code__content *').forEach(function (e) {
      if (/^(IMG|VIDEO|IFRAME|SVG|PATH|INPUT|SELECT|TEXTAREA|BUTTON)$/i.test(e.tagName)) return;
      var m = getComputedStyle(e).maxWidth;
      if (m === 'none' || m.indexOf('px') < 0) return;
      var p = e.parentElement ? e.parentElement.getBoundingClientRect().width : 0;
      if (parseFloat(m) < p - 20 && e.textContent.trim().length > 0) e.style.setProperty('max-width', 'none', 'important');
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

  function go() { try { mk(); mw(); fix(); tel(); lk(); } catch (e) {} }
  if (document.readyState !== 'loading') go();
  document.addEventListener('DOMContentLoaded', go);
  window.addEventListener('load', go);
  window.addEventListener('resize', function () { fix(); mw(); });
  [500, 1500, 3500].forEach(function (t) { setTimeout(go, t); });
})();
