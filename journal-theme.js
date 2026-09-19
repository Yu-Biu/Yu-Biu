(() => {
  const pageLabels = {
    'index.html': 'my little journal',
    'commissions.html': 'commission rate book',
    'adopts.html': 'character archive',
    'queue.html': 'work in progress',
    'character.html': 'character notes'
  };
  const page = location.pathname.split('/').pop() || 'index.html';
  const symbols = ['✦', '♡', '୨୧', '☁︎'];
  let scheduled = false;

  function decorateJournal() {
    scheduled = false;
    const wrap = document.querySelector('.site-wrap');
    if (!wrap) return;
    if (!wrap.querySelector('.journal-decoration-layer')) {
      wrap.insertAdjacentHTML('afterbegin', `<div class="journal-decoration-layer" aria-hidden="true"><span class="journal-floating-sticker journal-sticker-star">✦</span><span class="journal-floating-sticker journal-sticker-heart">♡</span><span class="journal-floating-sticker journal-sticker-bow">୨୧</span><span class="journal-ticket">Nº 2026 · UNA</span></div><span class="journal-page-label" aria-hidden="true">${pageLabels[page] || 'personal journal'}</span>`);
    }
    [...wrap.querySelectorAll('.post-card')].forEach((card, index) => {
      if (card.dataset.journalDecorated) return;
      card.dataset.journalDecorated = 'true';
      card.insertAdjacentHTML('afterbegin', `<span class="journal-tape" aria-hidden="true"></span>`);
      if (index % 2 === 0) card.insertAdjacentHTML('beforeend', `<span class="journal-card-sticker" aria-hidden="true">${symbols[index % symbols.length]}</span>`);
    });
  }

  const queueDecoration = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(decorateJournal);
  };
  decorateJournal();
  new MutationObserver(queueDecoration).observe(document.body, {childList:true, subtree:true});
})();
