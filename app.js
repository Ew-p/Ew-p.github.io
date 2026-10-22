(() => {
  const P = window.PORTFOLIO, st = document.querySelector('#stage'), $ = s => document.querySelector(s);
  const SECTIONS = ['profile', 'projects', 'skills', 'education', 'contact'];
  const still = matchMedia('(prefers-reduced-motion:reduce)').matches, wipe = $('#wipe');
  let lang = 'es', snd = false, screen = 'intro', sel = 0, tm, ac, seen = false;
  try { lang = localStorage.getItem('lang') || 'es'; } catch (e) {}
  const T = () => P[lang];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ph = s => String(s).startsWith('[[') ? `<span class="ph">${esc(String(s).slice(2, -2))}</span>` : esc(s);
  const chips = a => `<div class="chips">${a.map(x => `<span>${esc(x)}</span>`).join('')}</div>`;
  const list = a => `<ul class="l">${a.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const h2 = txt => { const h = el('h2', '', esc(txt)); h.dataset.t = txt; return h; };
  const btn = (html, fn, cls) => { const b = el('button', cls, html); b.type = 'button'; b.onclick = () => { beep(); fn(); }; return b; };

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
  const go = name => {
    const h = () => { location.hash = name === 'intro' ? '' : name; };
    if (still || !wipe) return h();
    if (wipe.className === 'in') return;
    wipe.className = 'in'; beep(300);
    setTimeout(() => { h(); wipe.className = 'out'; setTimeout(() => { wipe.className = ''; }, 500); }, 330);
  };
  const wrap = (key, content, cls = '') => {
    const w = el('section', 'screen ' + cls); w.dataset.w = T().sections[key];
    const back = btn(T().ui.back, () => go('menu'), 'back'); back.dataset.focus = '';
    w.append(back, h2(T().sections[key]), content);
    return w;
  };
  const cvBox = () => {
    const t = T(), d = el('div', 'cvbox'), a = el('a', 'btn', esc(t.ui.cv)), n = el('p');
    a.href = P.cv; a.download = ''; d.append(a, n);
    fetch(P.cv, { method: 'HEAD' }).then(r => { if (!r.ok) n.textContent = t.ui.cvMissing; }).catch(() => {});
    return d;
  };

  const views = {
    intro() {
      const w = el('section', 'intro');
      w.innerHTML = `<div class="mono" aria-hidden="true">${[...P.monogram].map((c, i) => `<span style="--i:${i}">${esc(c)}</span>`).join('')}</div><svg class="ring" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46"/></svg><h1 class="glitch" data-t="${esc(P.name)}">${esc(P.name)}</h1><p class="lead">${esc(T().tagline)}</p>`;
      const row = el('div', 'row'), s = btn(T().ui.start, () => go('menu')); s.dataset.focus = '';
      row.append(s, btn(T().ui.skip, () => go('menu')));
      const tk = el('div', 'ticker', `<span>${(esc(T().tagline) + ' ✦ ').repeat(8)}</span>`); tk.setAttribute('aria-hidden', 'true');
      w.append(row, tk);
      if (!seen) tm = setTimeout(() => go('menu'), 4500); seen = true;
      return w;
    },
    menu() {
      const w = el('section', 'menuscr'), ul = el('ul', 'menu'), side = el('div', 'side');
      ul.setAttribute('role', 'list');
      SECTIONS.forEach((k, i) => {
        const li = el('li'), b = btn(`<b>0${i + 1}</b><span class="lb">${esc(T().sections[k])}</span>`, () => go(k));
        if (!i) b.dataset.focus = ''; b.dataset.k = k; li.style.setProperty('--n', i); li.append(b); ul.append(li);
      });
      const gh = el('div', 'ghost'); gh.setAttribute('aria-hidden', 'true');
      const pv = e => { const b = e.target.closest('button'); if (b && b.dataset.k) { document.body.dataset.screen = b.dataset.k; gh.textContent = T().sections[b.dataset.k]; beep(440); } };
      ul.addEventListener('mouseover', pv); ul.addEventListener('focusin', pv);
      side.append(h2(T().ui.menu), ul, el('p', 'hint', esc(T().ui.hint)));
      w.append(el('div', 'id', `<div class="mono big" aria-hidden="true">${esc(P.monogram)}</div><h1>${esc(P.name)}</h1><p class="lead">${esc(T().tagline)}</p>`), side, gh);
      return w;
    },
    profile() {
      const t = T(), c = el('div', 'prof'), e0 = t.education[0];
      c.innerHTML = `<div class="avatar" aria-hidden="true"><svg viewBox="0 0 200 260"><circle cx="100" cy="90" r="52"/><path d="M20 260c0-70 35-105 80-105s80 35 80 105z"/></svg><b>${esc(P.monogram)}</b></div><div class="txt"><h3>${esc(P.name)}</h3><p class="tag">${esc(e0.h)} · ${esc(e0.s)}</p><p class="big">${esc(t.profile)}</p><p class="tag">${esc(t.location)}</p><h4>${esc(t.ui.interests)}</h4>${chips(t.interests)}<h4>${esc(t.ui.solving)}</h4><p>${ph(t.solving)}</p></div>`;
      c.querySelector('.txt').append(cvBox());
      return wrap('profile', c);
    },
    projects() {
      const t = T(), c = el('div', 'roster'), pl = el('div', 'plist'), stg = el('div', 'pstage');
      stg.setAttribute('aria-live', 'polite');
      const draw = () => {
        const p = t.projects[sel];
        stg.innerHTML = `<div class="glyph" aria-hidden="true">${String(sel + 1).padStart(2, '0')}</div>${p.img ? `<img class="shot" src="${esc(p.img)}" alt="${esc(p.name)}">` : ''}<h3>${esc(p.name)}</h3><p class="tag">${esc(t.ui.status)}: ${esc(p.status)}</p><h4>${esc(t.ui.problem)}</h4><p>${esc(p.problem)}</p><h4>${esc(t.ui.approach)}</h4>${list(p.desc)}${chips(p.tech)}<h4>${esc(t.ui.links)}</h4><p>${p.links.length ? p.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join(' · ') : ph('[[' + t.ui.noLinks + ']]')}</p>`;
        [...pl.children].forEach((b, i) => b.setAttribute('aria-pressed', i === sel));
      };
      t.projects.forEach((p, i) => pl.append(btn(`<b>${String(i + 1).padStart(2, '0')}</b>${esc(p.name)}`, () => { sel = i; draw(); }, 'pitem')));
      c.append(pl, stg); draw();
      return wrap('projects', c);
    },
    skills() {
      const t = T(), POS = [[0, 4], [36, 0], [72, 10], [6, 50], [54, 54]], c = el('div', 'const'), out = el('p', 'sk'), d = el('div');
      out.setAttribute('aria-live', 'polite');
      c.innerHTML = '<svg class="lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points="13,16 49,12 85,22 67,66 19,62 13,16"/></svg>';
      t.skills.forEach((s, i) => {
        const cl = el('div', 'cl', `<h3>${esc(s.g)}</h3>`), box = el('div'), p = POS[i] || [(i * 17) % 70, 90];
        cl.style.left = p[0] + '%'; cl.style.top = p[1] + '%';
        s.i.forEach(n => {
          const b = btn(esc(n), () => { const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on); out.textContent = on ? `${t.ui.equip}: ${n} · ${s.g}` : ''; }, 'node');
          b.setAttribute('aria-pressed', 'false'); box.append(b);
        });
        cl.append(box); c.append(cl);
      });
      d.append(c, out); return wrap('skills', d);
    },
    education() {
      const t = T(), c = el('ol', 'tl');
      t.education.forEach((e, i) => c.append(el('li', i % 2 ? 'r' : '', `<span class="dot"></span><h3>${esc(e.h)}</h3><p class="tag">${esc(e.s)}</p>${list(e.p)}`)));
      c.append(el('li', 'r', `<span class="dot"></span><p>${ph(t.certs)}</p>`));
      return wrap('education', c);
    },
    contact() {
      const t = T(), c = el('div', 'big-links');
      P.links.forEach((l, i) => {
        const a = el('a', 'biglink', `<b>0${i + 1}</b>${esc(l.label)}<small>${esc(l.url.replace('mailto:', ''))}</small><i aria-hidden="true">↗</i>`);
        a.href = l.url; if (l.url.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; a.title = t.ui.external; }
        c.append(a);
      });
      c.append(el('p', 'tag', ph(t.moreContact)), cvBox());
      return wrap('contact', c);
    }
  };

  function render() {
    clearTimeout(tm);
    const t = T(); document.documentElement.lang = lang; document.body.dataset.screen = screen;
    $('#lang').textContent = lang === 'es' ? 'EN' : 'ES'; $('#lang').setAttribute('aria-label', t.ui.switchLang);
    $('#snd').textContent = (snd ? '♪ ' : '✕ ') + t.ui.sound; $('#snd').setAttribute('aria-pressed', snd);
    const hm = $('#home'); hm.hidden = screen === 'intro'; hm.textContent = screen === 'menu' ? '⌂ ' + t.ui.home : t.ui.back; hm.setAttribute('aria-label', screen === 'menu' ? t.ui.home : t.ui.back);
    st.replaceChildren(views[screen]());
    const f = st.querySelector('[data-focus]'); if (f) f.focus({ preventScroll: true });
    st.style.animation = 'none'; void st.offsetWidth; st.style.animation = '';
  }
  function route() {
    const h = location.hash.slice(1);
    screen = (h === 'menu' || SECTIONS.includes(h)) ? h : (still ? 'menu' : 'intro');
    if (screen !== 'projects') sel = 0;
    render();
  }

  $('#home').onclick = () => { beep(); go(screen === 'menu' ? 'intro' : 'menu'); };
  $('#lang').onclick = () => { lang = lang === 'es' ? 'en' : 'es'; try { localStorage.setItem('lang', lang); } catch (e) {} beep(660); render(); };
  $('#snd').onclick = () => { snd = !snd; render(); beep(780); };
  window.addEventListener('hashchange', route);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && screen !== 'menu' && screen !== 'intro') return go('menu');
    const q = screen === 'menu' ? '.menu button' : screen === 'projects' ? '.pitem' : null;
    if (q && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      const b = [...st.querySelectorAll(q)], i = b.indexOf(document.activeElement);
      b[(i + (e.key === 'ArrowDown' ? 1 : -1) + b.length) % b.length].focus(); e.preventDefault();
    }
  });
  const cur = $('#cur');
  if (matchMedia('(pointer:fine)').matches && !still) {
    document.addEventListener('mousemove', e => {
      document.body.style.setProperty('--mx', (e.clientX / innerWidth - .5).toFixed(3)); document.body.style.setProperty('--my', (e.clientY / innerHeight - .5).toFixed(3));
      cur.style.transform = `translate(${e.clientX - 12}px,${e.clientY - 12}px) rotate(45deg)`;
      document.querySelectorAll('.bg i').forEach((n, i) => n.style.translate = `${(e.clientX / innerWidth - .5) * (i + 1) * -14}px ${(e.clientY / innerHeight - .5) * (i + 1) * -14}px`);
    });
    document.addEventListener('pointermove', e => {
      const c = e.target.closest && e.target.closest('.card'); if (!c) return;
      const q = c.getBoundingClientRect();
      c.style.transform = `perspective(700px) rotateY(${((e.clientX - q.left) / q.width - .5) * 14}deg) rotateX(${(.5 - (e.clientY - q.top) / q.height) * 14}deg)`;
    });
    document.addEventListener('pointerout', e => { const c = e.target.closest && e.target.closest('.card'); if (c) c.style.transform = ''; });
  }
  route();
})();
