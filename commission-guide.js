/* Editable commission information supplied by the artist. */
const CommissionGuide = (() => {
  const defaults = {
    sketchTitle: 'Rough Sketch',
    sketchScaleLabel: 'Scale',
    sketchPriceLabel: 'ราคา',
    sketchScale1: 'Head Shot', sketchPrice1: 'XXX ฿',
    sketchScale2: 'Bust Up', sketchPrice2: 'XXX ฿',
    sketchScale3: 'Half Body', sketchPrice3: 'XXX ฿',
    sketchScale4: 'Thigh Up', sketchPrice4: 'XXX ฿',
    sketchScale5: 'Full Body', sketchPrice5: 'XXX ฿',
    packagesTitle: 'Commission packages',
    drawTitle: 'What I can draw',
    drawIntro: 'รับวาด',
    drawItems: 'Original Character (OC)\nFanart\nCouple / Character Pair\nFantasy Character\nHuman / Humanoid\nCreature ที่มีดีไซน์ไม่ซับซ้อน\nOutfit Design\nCharacter Design\nIllustration\nProfile Picture / Icon',
    referenceTitle: 'สามารถส่ง Reference ได้',
    referenceIntro: 'สามารถส่งภาพอ้างอิงหลายภาพเพื่อช่วยอธิบายสิ่งที่ต้องการได้ เช่น',
    referenceItems: 'ทรงผม\nเสื้อผ้า\nสี\nท่าทาง\nสีหน้า\nAccessories\nMood & Atmosphere\nStyle Reference',
    referenceNote: 'ไม่จำเป็นต้องมี Reference ครบทุกอย่าง สามารถอธิบายด้วยข้อความได้เช่นกัน',
    revisionTitle: 'Revision',
    revisionIntro: 'สามารถขอแก้ไขงานได้ในขั้นตอน Sketch',
    revisionFreeLabel: 'แก้ไขฟรี',
    revisionFreeCount: 'XXX',
    revisionFreeUnit: 'ครั้ง',
    revisionMajorIntro: 'หลังจากยืนยัน Sketch แล้ว\nการเปลี่ยนแปลงรายละเอียดใหญ่ เช่น',
    revisionMajorItems: 'เปลี่ยนท่าทาง\nเปลี่ยนชุด\nเปลี่ยนทรงผม\nเปลี่ยนองค์ประกอบภาพ\nเปลี่ยน Character',
    revisionFeeNote: 'อาจมีค่าใช้จ่ายเพิ่มเติมตามความเหมาะสม',
    revisionMinorNote: 'การแก้รายละเอียดเล็กน้อย เช่น สีหรือรายละเอียดบางจุด สามารถแจ้งได้ตามขั้นตอนงาน',
    usageTitle: 'Copyright & Usage',
    personalTitle: 'Personal Use',
    personalBody: 'สามารถนำภาพไปใช้ส่วนตัว เช่น Profile Picture, Social Media, Wallpaper หรือโพสต์ลงโซเชียลได้',
    commercialTitle: 'Commercial Use',
    commercialBody: 'หากต้องการนำภาพไปใช้เพื่อสร้างรายได้ โฆษณา สินค้า Merchandise, VTuber, Streaming หรือธุรกิจ กรุณาแจ้งล่วงหน้าและซื้อ Commercial Use เพิ่ม',
    copyrightTitle: 'Copyright',
    copyrightBody: 'ลิขสิทธิ์ของผลงานยังคงเป็นของศิลปิน\nการจ้างวาดไม่ได้หมายถึงการโอนลิขสิทธิ์ให้แก่ผู้ว่าจ้าง',
    guideTermsIntro: 'กรุณาอ่านก่อนสั่งงาน',
    guideTermsItems: 'กรุณาตรวจสอบรายละเอียด Character และ Reference ให้เรียบร้อยก่อนส่งงาน\nกรุณาแจ้งรายละเอียดที่สำคัญทั้งหมดก่อนเริ่มงาน\nไม่รับผิดชอบต่อความผิดพลาดที่เกิดจากข้อมูลหรือ Reference ที่ไม่ครบถ้วน\nเมื่อยืนยัน Sketch แล้ว การเปลี่ยนแปลงขนาดใหญ่ของงานอาจมีค่าใช้จ่ายเพิ่มเติม\nห้ามนำงานไปใช้เชิงพาณิชย์หากไม่ได้ซื้อ Commercial Use\nห้ามนำภาพไปใช้สำหรับ AI Training / Dataset / NFT โดยไม่ได้รับอนุญาต\nห้ามนำผลงานไปแอบอ้างว่าเป็นผลงานของตนเอง\nห้ามขายต่อหรือแจกจ่ายไฟล์งานโดยไม่ได้รับอนุญาต\nศิลปินยังคงมีสิทธิ์ในการนำผลงานไปใช้เป็น Portfolio เว้นแต่ลูกค้าจะตกลงเป็นกรณีพิเศษ'
  };
  const pageData = page => ({...defaults, ...page});
  const lines = value => String(value ?? '').split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  const text = value => escapeHtml(value ?? '').replace(/\r?\n/g, '<br />');
  const paragraph = value => value ? `<p>${text(value)}</p>` : '';
  const list = (value, className = '') => {
    const items = lines(value);
    return items.length ? `<ul class="commission-guide-list ${className}">${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : '';
  };
  function card(id, title, body) {
    return `<section class="post-card commission-guide-card" id="${id}"><div class="post-head"><div><span class="post-symbol" aria-hidden="true">✦</span><h2>${escapeHtml(title)}</h2></div></div><div class="commission-guide-body">${body}</div></section>`;
  }
  function rates(page) {
    const p = pageData(page);
    const rows = Array.from({length:5}, (_, index) => index + 1).filter(index => p[`sketchScale${index}`]?.trim());
    return `<section class="commission-sketch"><table class="commission-rate-table"><caption>${escapeHtml(p.sketchTitle)}</caption><thead><tr><th scope="col">${escapeHtml(p.sketchScaleLabel)}</th><th scope="col">${escapeHtml(p.sketchPriceLabel)}</th></tr></thead><tbody>${rows.map(index => `<tr><th scope="row">${escapeHtml(p[`sketchScale${index}`])}</th><td>${escapeHtml(p[`sketchPrice${index}`])}</td></tr>`).join('')}</tbody></table></section>`;
  }
  function sections(page, prefix = '') {
    const p = pageData(page);
    const drawing = card(`${prefix}commission-drawing`, p.drawTitle,
      `${paragraph(p.drawIntro)}${list(p.drawItems, 'commission-draw-list')}<div class="commission-reference"><h3>${escapeHtml(p.referenceTitle)}</h3>${paragraph(p.referenceIntro)}${list(p.referenceItems, 'commission-reference-list')}${paragraph(p.referenceNote)}</div>`);
    const revision = card(`${prefix}commission-revision`, p.revisionTitle,
      `${paragraph(p.revisionIntro)}<p class="commission-revision-count">${escapeHtml(p.revisionFreeLabel)}: <strong>${escapeHtml(p.revisionFreeCount)}</strong> ${escapeHtml(p.revisionFreeUnit)}</p>${paragraph(p.revisionMajorIntro)}${list(p.revisionMajorItems)}${paragraph(p.revisionFeeNote)}${p.revisionMinorNote ? `<aside class="commission-guide-note">${text(p.revisionMinorNote)}</aside>` : ''}`);
    const usage = card(`${prefix}commission-usage`, p.usageTitle,
      ['personal','commercial','copyright'].map(key => `<section class="commission-usage-block"><h3>${escapeHtml(p[`${key}Title`])}</h3>${paragraph(p[`${key}Body`])}</section>`).join(''));
    return drawing + revision + usage;
  }
  function terms(page) {
    const p = pageData(page);
    return `<div class="commission-guide-body commission-terms-copy">${paragraph(p.guideTermsIntro)}${list(p.guideTermsItems)}</div>`;
  }
  function editor(page) {
    const p = pageData(page);
    const long = (label, name) => textarea(label, name, p[name]);
    const short = (label, name) => field(label, name, p[name]);
    const overviewFields = `${short('หัวข้อหน้า Commission','title')}${short('ข้อความเปิดรับงาน','opening')}${long('คำอธิบายหน้า Commission','intro')}${long('Booking Note','bookingNote')}${short('ข้อความลิงก์ Terms','bookingLinkLabel')}${short('หัวข้อแพ็กเกจเดิม','packagesTitle')}`;
    const sketchFields = `${short('ชื่อประเภทงาน','sketchTitle')}<p class="commission-editor-help">แก้ชื่อขนาดและราคาได้ทุกช่อง ลบชื่อขนาดเพื่อซ่อนแถวนั้น</p>${short('หัวคอลัมน์ขนาด','sketchScaleLabel')}${short('หัวคอลัมน์ราคา','sketchPriceLabel')}${Array.from({length:5}, (_, index) => `<div class="commission-rate-fields">${short(`ขนาด ${index + 1}`,`sketchScale${index + 1}`)}${short('ราคา',`sketchPrice${index + 1}`)}</div>`).join('')}`;
    const drawingFields = `${short('หัวข้อรับวาด','drawTitle')}${long('คำเกริ่น','drawIntro')}${long('ประเภทที่รับวาด · หนึ่งรายการต่อบรรทัด','drawItems')}${short('หัวข้อ Reference','referenceTitle')}${long('คำอธิบาย Reference','referenceIntro')}${long('ตัวอย่าง Reference · หนึ่งรายการต่อบรรทัด','referenceItems')}${long('หมายเหตุ Reference','referenceNote')}`;
    const revisionFields = `${short('หัวข้อการแก้งาน','revisionTitle')}${long('ขั้นตอนที่แก้ไขได้','revisionIntro')}${short('ป้ายจำนวนครั้ง','revisionFreeLabel')}${short('จำนวนครั้งที่แก้ฟรี','revisionFreeCount')}${short('หน่วย','revisionFreeUnit')}${long('การแก้ไขหลังยืนยัน Sketch','revisionMajorIntro')}${long('การเปลี่ยนแปลงใหญ่ · หนึ่งรายการต่อบรรทัด','revisionMajorItems')}${long('ค่าใช้จ่ายเพิ่มเติม','revisionFeeNote')}${long('การแก้รายละเอียดเล็กน้อย','revisionMinorNote')}`;
    const usageFields = `${short('หัวข้อสิทธิ์การใช้งาน','usageTitle')}${short('หัวข้อ Personal Use','personalTitle')}${long('รายละเอียด Personal Use','personalBody')}${short('หัวข้อ Commercial Use','commercialTitle')}${long('รายละเอียด Commercial Use','commercialBody')}${short('หัวข้อ Copyright','copyrightTitle')}${long('รายละเอียด Copyright','copyrightBody')}`;
    const termsFields = `${short('หัวข้อ Terms of Service','termsTitle')}${short('คำโปรย Terms','termsSubtitle')}${long('คำเกริ่นก่อนอ่านเงื่อนไข','guideTermsIntro')}${long('เงื่อนไข · หนึ่งข้อบังคับต่อบรรทัด','guideTermsItems')}<details class="commission-extra-editor"><summary>รายละเอียดการจองเพิ่มเติม</summary>${(p.terms || []).map((term,index) => `${field(`หัวข้อ ${index + 1}`,`termTitle${index + 1}`,term.title)}${textarea(`รายละเอียด ${index + 1}`,`termBody${index + 1}`,term.body)}`).join('')}</details>`;
    const groups = [
      ['overview', 'Page Details', overviewFields],
      ['sketch', 'Rough Sketch Prices', sketchFields],
      ['addons', 'Add-ons', `${short('หัวข้อ Add-ons','addonsLabel')}<p class="commission-editor-help">เพิ่มได้ไม่จำกัด โดยใส่หนึ่งรายการต่อหนึ่งบรรทัด</p>${textarea('รายการ Add-ons · หนึ่งรายการต่อบรรทัด','addons',(p.addons || []).join('\n'))}`],
      ['drawing', 'What I Can Draw', drawingFields],
      ['revision', 'Revision', revisionFields],
      ['usage', 'Copyright & Usage', usageFields],
      ['terms', 'Terms of Service', termsFields]
    ];
    return `<form class="cms-form commission-page-form commission-guide-form" data-editor="commission" data-page="true" data-index="0" data-navigation-ready="true"><div class="admin-section-title"><strong>ข้อมูลหน้า Commission</strong></div><nav class="commission-edit-tabs" aria-label="หมวดข้อมูล Commission" role="tablist">${groups.map(([id,label],index) => `<button type="button" id="commission-edit-tab-${id}" role="tab" aria-selected="${index === 0}" aria-controls="commission-edit-panel-${id}" tabindex="${index === 0 ? 0 : -1}" data-commission-tab="${id}">${label}</button>`).join('')}</nav>${groups.map(([id,label,body],index) => `<section id="commission-edit-panel-${id}" class="commission-edit-panel cms-form-grid" role="tabpanel" aria-labelledby="commission-edit-tab-${id}" ${index ? 'hidden' : ''}><h3>${label}</h3>${body}</section>`).join('')}<div class="cms-form-actions"><button type="button" class="small-button cms-cancel">ยกเลิก</button><button class="post-button" type="submit">บันทึกหน้า Commission</button></div></form>`;
  }
  function fromForm(form, page) {
    const next = pageData(page);
    next.terms = (next.terms || []).map(term => ({...term}));
    for (const [name,value] of new FormData(form)) {
      if (name === 'addons') next.addons = lines(value);
      else if (/^term(Title|Body)\d+$/.test(name)) {
        const [,part,number] = name.match(/^term(Title|Body)(\d+)$/);
        if (next.terms[Number(number) - 1]) next.terms[Number(number) - 1][part.toLowerCase()] = value;
      } else next[name] = value;
    }
    return next;
  }
  function preview(page) {
    const p = pageData(page);
    const additional = (p.terms || []).filter(term => term.title || term.body).map(term => `<section class="commission-usage-block"><h3>${escapeHtml(term.title)}</h3>${paragraph(term.body)}</section>`).join('');
    return `<div class="commission-guide-preview" id="preview-commission-overview"><h2>${escapeHtml(p.title)}</h2>${paragraph(p.opening)}${paragraph(p.intro)}<div id="preview-commission-sketch">${rates(p)}</div>${card('preview-commission-addons', p.addonsLabel, list((p.addons || []).join('\n')))}${sections(p, 'preview-')}${card('preview-commission-terms', p.termsTitle, `${paragraph(p.termsSubtitle)}${terms(p)}${additional}`)}</div>`;
  }
  function commissionCards(items, editor = false) {
    return items.map((item, index) => {
      const image = item.image ? `<img src="${escapeHtml(item.image)}" alt="ตัวอย่างงาน ${escapeHtml(item.title)}" />` : '';
      const placeholder = `<span class="commission-type-placeholder" ${item.image ? 'hidden' : ''}><b>♡</b><small>ลงรูป</small></span>`;
      if (editor) return `<button class="canvas-item canvas-commission-card ${visualSelection.index === index && visualSelection.type === 'commission' ? 'selected' : ''}" type="button" data-visual-select="commission" data-index="${index}"><strong>${escapeHtml(item.title || 'ประเภทงาน')}</strong><span class="canvas-commission-image">${image}${placeholder}</span><em>${escapeHtml(item.price || 'ยังไม่ระบุราคา')}</em>${item.hidden ? '<i>ซ่อนอยู่</i>' : ''}</button>`;
      return `<button class="commission-type-card" type="button" data-commission-id="${escapeHtml(item.id)}" aria-label="ดูตัวอย่าง รายละเอียด และราคาของ ${escapeHtml(item.title)}"><span class="commission-type-title">${escapeHtml(item.title || 'ประเภทงาน')}</span><span class="commission-type-image">${image}${placeholder}<span class="commission-type-hint">กดเพื่อดูรูปและเรทราคา</span></span></button>`;
    }).join('');
  }
  function commissionDetail(item) {
    const art = item.image ? `<img src="${escapeHtml(item.image)}" alt="ตัวอย่างงาน ${escapeHtml(item.title)}" />` : `<span class="commission-detail-placeholder"><b>♡</b><small>เพิ่มรูปตัวอย่างได้จาก Edit Mode</small></span>`;
    return `<div class="commission-detail-art">${art}</div><div class="commission-detail-copy"><span class="mini-label">COMMISSION TYPE</span><h2>${escapeHtml(item.title || 'ประเภทงาน')}</h2><p>${text(item.desc || 'เพิ่มรายละเอียดงานได้จาก Edit Mode')}</p><div class="commission-detail-price"><small>RATE / ราคา</small><strong>${escapeHtml(item.price || 'ยังไม่ระบุราคา')}</strong></div><button class="small-button commission-detail-close-button" type="button">ปิดหน้าต่าง</button></div>`;
  }
  return {defaults, pageData, lines, rates, sections, terms, editor, fromForm, preview, commissionCards, commissionDetail};
})();

// Integrate with the existing editor and storage, including edits made on other pages.
const renderCommissionBeforeGuide = renderCommissionPage;
renderCommissionPage = function() {
  renderCommissionBeforeGuide();
  const list = $('#commission-list');
  if (!list) return;
  const page = CommissionGuide.pageData(cmsState.commissionPage);
  let rates = $('#commission-sketch-rates');
  if (!rates) {
    rates = document.createElement('div');
    rates.id = 'commission-sketch-rates';
    list.before(rates);
  }
  rates.innerHTML = CommissionGuide.rates(page);
  let packages = $('#commission-packages-title');
  if (!packages) {
    packages = document.createElement('h3');
    packages.id = 'commission-packages-title';
    list.before(packages);
  }
  packages.textContent = page.packagesTitle;
  packages.hidden = !visibleItems(cmsState.commissions).length;
  const termsCard = $('#terms');
  if (!termsCard) return;
  let sections = $('#commission-guide-sections');
  if (!sections) {
    sections = document.createElement('div');
    sections.id = 'commission-guide-sections';
    termsCard.before(sections);
  }
  sections.innerHTML = CommissionGuide.sections(page);
  let termsCopy = $('#commission-guide-terms');
  if (!termsCopy) {
    termsCopy = document.createElement('div');
    termsCopy.id = 'commission-guide-terms';
    $('.post-head', termsCard).after(termsCopy);
  }
  termsCopy.innerHTML = CommissionGuide.terms(page);
  termsCard.classList.add('commission-guide-card');
  sections.hidden = !cmsState.settings.commissions;
  termsCard.hidden = !cmsState.settings.commissions;
  // Render every saved add-on, rather than limiting the output to three spans.
  const addons = $('.commission-bottom > div');
  if (addons) addons.innerHTML = `<strong>${escapeHtml(page.addonsLabel)}</strong>${page.addons.map(item => `<span>${escapeHtml(item)}</span>`).join('')}`;
};
commissionPageFormMarkup = () => CommissionGuide.editor(cmsState.commissionPage);

// The public commission menu follows the artist's three-column sketch.
function ensureCommissionDetailModal() {
  if ($('#commission-detail-modal')) return;
  document.body.insertAdjacentHTML('beforeend', `<div class="modal-backdrop commission-detail-backdrop" id="commission-detail-modal" aria-hidden="true"><section class="modal commission-detail-modal" role="dialog" aria-modal="true" aria-labelledby="commission-detail-title"><button class="modal-close commission-detail-close" type="button" aria-label="ปิด">×</button><div id="commission-detail-content"></div></section></div>`);
  const modal = $('#commission-detail-modal');
  const close = () => closeModal('#commission-detail-modal');
  $('.commission-detail-close', modal).addEventListener('click', close);
  modal.addEventListener('click', event => { if (event.target === modal) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('open')) close(); });
}
function openCommissionDetail(id) {
  const item = cmsState.commissions.find(entry => entry.id === id);
  if (!item) return;
  ensureCommissionDetailModal();
  const content = $('#commission-detail-content');
  content.innerHTML = CommissionGuide.commissionDetail(item).replace('<h2>', '<h2 id="commission-detail-title">');
  $('.commission-detail-close-button', content)?.addEventListener('click', () => closeModal('#commission-detail-modal'));
  openModal('#commission-detail-modal');
}
renderCommissions = function() {
  const list = $('#commission-list');
  if (!list) return;
  const items = visibleItems(cmsState.commissions);
  list.classList.add('commission-type-grid');
  list.innerHTML = items.length ? CommissionGuide.commissionCards(items) : '<p class="commission-types-empty">ยังไม่มีประเภทงานในขณะนี้</p>';
  $$('.commission-type-card', list).forEach(card => card.addEventListener('click', () => openCommissionDetail(card.dataset.commissionId)));
};

// Every commission type can have its own sample image URL or uploaded image.
const commissionEditorMarkupBeforeCards = editorMarkup;
editorMarkup = function(type, index) {
  const markup = commissionEditorMarkupBeforeCards(type, index);
  if (type !== 'commission') return markup;
  const item = index >= 0 ? cmsState.commissions[index] : {};
  return markup.replace('<label class="cms-check">', `${field('รูปตัวอย่าง URL','image',item.image || '')}<label class="cms-check">`);
};
const visualCanvasBeforeCommissionCards = visualCanvasMarkup;
visualCanvasMarkup = function(tab) {
  if (tab !== 'commission') return visualCanvasBeforeCommissionCards(tab);
  return `<div class="canvas-page collection-canvas commission-canvas"><div class="canvas-page-title"><span>COMMISSION TYPES</span><button class="small-button" data-visual-add="commission">+ เพิ่มประเภทงาน</button></div><div class="canvas-commission-grid">${CommissionGuide.commissionCards(cmsState.commissions, true)}</div></div>`;
};

const livePreviewBeforeCommissionGuide = updateLiveEditorPreview;
updateLiveEditorPreview = function(form) {
  if (form?.dataset.page !== 'true') {
    livePreviewBeforeCommissionGuide(form);
    if (form?.dataset.editor === 'commission') {
      const card = $(`[data-visual-select="commission"][data-index="${Number(form.dataset.index)}"]`, $('#editor-canvas'));
      if (!card) return;
      const get = name => form.querySelector(`[name="${name}"]`)?.value || '';
      const description = $('.canvas-commission-description', card);
      if (description) description.textContent = get('desc');
      const file = form.querySelector('[name="imageUpload"]')?.files?.[0];
      const imageUrl = file ? URL.createObjectURL(file) : get('image');
      let image = $('img', card);
      const placeholder = $('.commission-type-placeholder', card);
      if (imageUrl) {
        if (!image) {
          image = document.createElement('img');
          image.alt = '';
          $('.canvas-commission-image', card)?.prepend(image);
        }
        image.src = imageUrl;
        image.hidden = false;
        if (placeholder) placeholder.hidden = true;
      } else {
        image?.remove();
        if (placeholder) placeholder.hidden = false;
      }
    }
    return;
  }
  const canvas = $('#editor-canvas');
  if (!canvas) return;
  let panel = $('.live-page-preview', canvas);
  if (!panel) {
    panel = document.createElement('div');
    panel.className = 'live-page-preview';
    $('.canvas-page-title', canvas)?.after(panel);
  }
  panel.innerHTML = CommissionGuide.preview(CommissionGuide.fromForm(form, cmsState.commissionPage));
};

function selectCommissionEditTab(button, focus = false) {
  const form = button.closest('.commission-guide-form');
  if (!form) return;
  $$('[data-commission-tab]', form).forEach(tab => {
    const selected = tab === button;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) button.focus();
  const target = $(`#preview-commission-${button.dataset.commissionTab}`, $('#editor-canvas'));
  target?.scrollIntoView({behavior:'smooth', block:'start'});
}
document.addEventListener('click', event => {
  const button = event.target.closest('[data-commission-tab]');
  if (button) selectCommissionEditTab(button);
});
document.addEventListener('keydown', event => {
  const button = event.target.closest('[data-commission-tab]');
  if (!button || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
  const tabs = $$('[data-commission-tab]', button.closest('.commission-guide-form'));
  const index = tabs.indexOf(button);
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  event.preventDefault();
  selectCommissionEditTab(tabs[next], true);
});
renderCommissions();
renderCommissionPage();
