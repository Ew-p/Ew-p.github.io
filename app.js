(() => {
  const P = window.PORTFOLIO, st = document.querySelector('#stage'), $ = s => document.querySelector(s);
  const SECTIONS = ['profile', 'projects', 'skills', 'education', 'contact'];
  let lang = 'es', snd = false, screen = 'intro', sel = -1, ac;
  try { lang = localStorage.getItem('lang') || (navigator.language.startsWith('en') ? 'en' : 'es'); } catch (e) {}
  const T = () => P[lang];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const btn = (txt, fn, cls) => { const b = el('button', cls, txt); b.type = 'button'; b.onclick = () => { beep(); fn(); }; return b; };

  function beep(f = 520) {
    if (!snd) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = 'square'; o.frequency.value = f; g.gain.value = .04;
      g.gain.exponentialRampToValueAtTime(.001, ac.currentTime + .12);
      o.connect(g).connect(ac.destination); o.start(); o.stop(ac.currentTime + .12);
    } catch (e) {}
  }
  const still0 = matchMedia('(prefers-reduced-motion:reduce)').matches, wipe = $('#wipe');
  const go = name => {
    const h = () => { location.hash = name === 'intro' ? '' : name; };
    if (still0 || !wipe) return h();
    if (wipe.className === 'in') return;
    wipe.className = 'in'; beep(300);
    setTimeout(() => { h(); wipe.className = 'out'; setTimeout(() => { wipe.className = ''; }, 500); }, 330);
  };

  const screenWrap = (key, content) => {
    const w = el('section', 'screen'); w.dataset.w = T().sections[key];
    const back = btn(T().ui.back, () => go('menu'), 'back'); back.dataset.focus = '';
    w.append(back, el('h2', '', esc(T().sections[key])), content);
    return w;
  };
  const chips = arr => el('div', 'chips', arr.map(x => `<span>${esc(x)}</span>`).join(''));

  const views = {
    intro() {
      const w = el('section', 'intro');
      const h = el('h1', '', P.name.split(' ').map((c, i) => `<span style="animation-delay:${i * 120}ms">${esc(c)}</span>`).join(' '));
      h.setAttribute('aria-label', P.name);
      const row = el('div', 'row');
      const s = btn(T().ui.start, () => go('menu')); s.dataset.focus = '';
      row.append(s, btn(T().ui.skip, () => go('menu')));
      h.classList.add('glitch'); h.dataset.t = P.name;
      const tk = el('div', 'ticker', `<span>${(esc(T().tagline) + ' ✦ ').repeat(8)}</span>`); tk.setAttribute('aria-hidden', 'true');
      w.append(h, el('p', 'lead', esc(T().tagline)), row, tk);
      return w;
    },
    menu() {
      const w = el('section'), ul = el('ul', 'menu'); ul.setAttribute('role', 'list');
      w.append(el('h2', '', esc(T().ui.menu)));
      SECTIONS.forEach((k, i) => {
        const li = el('li'), b = btn(`<b>0${i + 1}</b>${esc(T().sections[k])}`, () => go(k));
        if (!i) b.dataset.focus = ''; b.dataset.k = k;
        li.append(b); ul.append(li);
      });
      const gh = el('div', 'ghost'); gh.setAttribute('aria-hidden', 'true');
      const pv = e => { const b = e.target.closest('button'); if (b && b.dataset.k) { document.body.dataset.screen = b.dataset.k; gh.textContent = T().sections[b.dataset.k]; } };
      ul.addEventListener('mouseover', pv); ul.addEventListener('focusin', pv);
      w.append(ul, el('p', 'lead', esc(T().tagline)), gh);
      return w;
    },
    profile() {
      const c = el('div', '', `<p class="lead">${esc(T().profile)}</p><p class="tag">${esc(T().location)}</p>`);
      const a = el('a', 'btn', esc(T().ui.cv)); a.href = P.cv; a.download = '';
      c.append(a); return screenWrap('profile', c);
    },
    projects() {
      const c = el('div'), grid = el('div', 'grid'), det = el('div', 'detail'); det.setAttribute('aria-live', 'polite');
      const draw = () => {
        const p = T().projects[sel];
        det.innerHTML = p ? `<h3>${esc(p.name)}</h3><p class="tag">${esc(p.status)}</p><ul class="l">${p.desc.map(d => `<li>${esc(d)}</li>`).join('')}</ul><strong>${esc(T().ui.tech)}</strong>${chips(p.tech).outerHTML}<strong>${esc(T().ui.links)}</strong><p>${p.links.length ? p.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join(' · ') : esc(T().ui.noLinks)}</p>` : `<p>${esc(T().ui.pick)}</p>`;
        [...grid.children].forEach((b, i) => b.setAttribute('aria-pressed', i === sel));
      };
      T().projects.forEach((p, i) => {
        const b = btn(`<strong>${esc(p.name)}</strong><br><small>${esc(p.status)}</small>`, () => { sel = i; draw(); }, 'card');
        b.setAttribute('aria-pressed', 'false'); grid.append(b);
      });
      c.append(grid, det); draw();
      return screenWrap('projects', c);
    },
    skills() {
      const c = el('div', 'grid');
      T().skills.forEach(s => { const d = el('div', 'card', `<h3>${esc(s.g)}</h3>`); d.append(chips(s.i)); c.append(d); });
      return screenWrap('skills', c);
    },
    education() {
      const c = el('div');
      T().education.forEach(e => c.append(el('div', 'item', `<h3>${esc(e.h)}</h3><p class="tag">${esc(e.s)}</p><ul class="l">${e.p.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`)));
      return screenWrap('education', c);
    },
    contact() {
      const c = el('div', 'grid');
      P.links.forEach(l => { const a = el('a', 'btn card', `${esc(l.label)} ↗`); a.href = l.url; if (l.url.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; a.title = T().ui.external; } c.append(a); });
      return screenWrap('contact', c);
    }
  };

  function render() {
    const t = T(); document.documentElement.lang = lang; document.body.dataset.screen = screen;
    $('#lang').textContent = lang === 'es' ? 'EN' : 'ES'; $('#lang').setAttribute('aria-label', t.ui.switchLang);
    $('#snd').textContent = (snd ? '♪ ' : '✕ ') + t.ui.sound; $('#snd').setAttribute('aria-pressed', snd);
    st.replaceChildren(views[screen]());
    const f = st.querySelector('[data-focus]'); if (f) f.focus({ preventScroll: true });
    // reinicia la animación de entrada
    st.style.animation = 'none'; void st.offsetWidth; st.style.animation = '';
  }
  function route() {
    const h = location.hash.slice(1);
    screen = (h === 'menu' || SECTIONS.includes(h)) ? h : 'intro';
    if (screen !== 'projects') sel = -1;
    render();
  }

  $('#lang').onclick = () => { lang = lang === 'es' ? 'en' : 'es'; try { localStorage.setItem('lang', lang); } catch (e) {} beep(660); render(); };
  $('#snd').onclick = () => { snd = !snd; render(); beep(780); };
  window.addEventListener('hashchange', route);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && screen !== 'menu' && screen !== 'intro') return go('menu');
    if (screen === 'menu' && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      const b = [...st.querySelectorAll('.menu button')], i = b.indexOf(document.activeElement);
      b[(i + (e.key === 'ArrowDown' ? 1 : -1) + b.length) % b.length].focus(); beep(440); e.preventDefault();
    }
  });
  const cur = $('#cur'), still = matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (matchMedia('(pointer:fine)').matches && !still) {
    document.addEventListener('mousemove', e => {
      cur.style.transform = `translate(${e.clientX - 11}px,${e.clientY - 11}px) rotate(45deg)`;
      document.querySelectorAll('.bg i').forEach((n, i) => n.style.translate = `${(e.clientX / innerWidth - .5) * (i + 1) * -14}px ${(e.clientY / innerHeight - .5) * (i + 1) * -14}px`);
    });
  }
  document.addEventListener('pointermove', e => {
    const c = e.target.closest && e.target.closest('.card'); if (!c || still) return;
    const q = c.getBoundingClientRect();
    c.style.transform = `perspective(700px) rotateY(${((e.clientX - q.left) / q.width - .5) * 14}deg) rotateX(${(.5 - (e.clientY - q.top) / q.height) * 14}deg)`;
  });
  document.addEventListener('pointerout', e => { const c = e.target.closest && e.target.closest('.card'); if (c) c.style.transform = ''; });
  route();
})();
