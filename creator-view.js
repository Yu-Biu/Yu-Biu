(() => {
  const sectionState = {};
  const collectionTabs = new Set(['posts', 'commission', 'adopt', 'queue', 'wallet']);
  const singleTabs = new Set(['profile', 'content']);
  let commissionMode = 'item';
  let scheduled = false;

  const pageLabels = {
    profile: 'Profile & Socials',
    posts: 'Home Posts',
    commission: 'Commission',
    adopt: 'Characters',
    queue: 'Queue',
    wallet: 'Wallet',
    content: 'Visibility'
  };

  const previewRoutes = {
    profile: 'index.html',
    posts: 'index.html',
    commission: 'commissions.html',
    adopt: 'adopts.html',
    queue: 'queue.html'
  };

  const previewObjectUrls = new WeakMap();
  const previewEscape = value => typeof escapeHtml === 'function'
    ? escapeHtml(String(value ?? ''))
    : String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[character]));
  const previewText = value => previewEscape(value).replace(/\r?\n/g, '<br />');
  const previewValue = (form, name, fallback = '') => {
    const control = form.querySelector(`[name="${name}"]`);
    if (!control) return fallback;
    if (control.type === 'checkbox') return control.checked;
    return control.value;
  };
  const previewMoney = value => `฿${(Number(value) || 0).toLocaleString()}`;
  const previewLines = (value, limit = 5) => String(value || '').split(/\r?\n/).map(line => line.trim()).filter(Boolean).slice(0, limit);

  function previewImage(form, fileName, urlName) {
    const input = form.querySelector(`[name="${fileName}"]`);
    if (input?.dataset.croppedImage) return input.dataset.croppedImage;
    const file = input?.files?.[0];
    if (file) {
      const cached = previewObjectUrls.get(input);
      if (cached?.file === file) return cached.url;
      if (cached?.url) URL.revokeObjectURL(cached.url);
      const url = URL.createObjectURL(file);
      previewObjectUrls.set(input, {file, url});
      return url;
    }
    return previewValue(form, urlName);
  }

  function previewList(items, empty = 'ยังไม่มีรายการ') {
    return items.length
      ? `<ul>${items.map(item => `<li>${previewEscape(item)}</li>`).join('')}</ul>`
      : `<p class="creator-preview-empty">${empty}</p>`;
  }

  function livePreviewMarkup(form) {
    const type = form.dataset.editor || 'content';
    const hidden = Boolean(previewValue(form, 'hidden', false));
    const visibility = hidden ? '<span class="creator-preview-hidden">ซ่อนจากหน้าเว็บ</span>' : '<span class="creator-preview-visible">กำลังแสดง</span>';

    if (form.dataset.page === 'true') {
      const rates = Array.from({length: 5}, (_, offset) => offset + 1).map(index => ({
        label: previewValue(form, `sketchScale${index}`),
        price: previewValue(form, `sketchPrice${index}`)
      })).filter(row => row.label || row.price);
      const addOns = previewLines(previewValue(form, 'addons'), 4);
      const terms = previewLines(previewValue(form, 'guideTermsItems'), 3);
      return `<article class="creator-preview-page"><div class="creator-preview-page-head"><div><small>${previewEscape(previewValue(form, 'opening', 'COMMISSION'))}</small><h3>${previewEscape(previewValue(form, 'title', 'Commission Rate'))}</h3><p>${previewText(previewValue(form, 'intro', 'รายละเอียดหน้า Commission จะแสดงตรงนี้'))}</p></div><span>PAGE PREVIEW</span></div><div class="creator-preview-rate"><strong>${previewEscape(previewValue(form, 'sketchTitle', 'Rough Sketch'))}</strong>${rates.length ? rates.map(row => `<span><b>${previewEscape(row.label || '—')}</b><em>${previewEscape(row.price || '—')}</em></span>`).join('') : '<small>เพิ่มขนาดและราคาเพื่อดู Preview</small>'}</div><div class="creator-preview-page-summary"><section><small>${previewEscape(previewValue(form, 'addonsLabel', 'ADD-ONS'))}</small>${previewList(addOns, 'ยังไม่มี Add-ons')}</section><section><small>${previewEscape(previewValue(form, 'drawTitle', 'What I can draw'))}</small><p>${previewEscape(previewLines(previewValue(form, 'drawItems'), 3).join(' · ') || 'ยังไม่มีรายการ')}</p></section><section><small>${previewEscape(previewValue(form, 'revisionTitle', 'Revision'))}</small><p>${previewEscape(previewValue(form, 'revisionFreeLabel', 'แก้ไขฟรี'))} <b>${previewEscape(previewValue(form, 'revisionFreeCount', '—'))}</b> ${previewEscape(previewValue(form, 'revisionFreeUnit', 'ครั้ง'))}</p></section><section><small>${previewEscape(previewValue(form, 'termsTitle', 'Terms of Service'))}</small><p>${previewEscape(terms.join(' · ') || previewValue(form, 'termsSubtitle', 'ยังไม่มีเงื่อนไข'))}</p></section></div></article>`;
    }

    if (type === 'wallet') {
      const commission = Number(previewValue(form, 'commission')) || 0;
      const tip = Number(previewValue(form, 'tip')) || 0;
      return `<article class="creator-preview-wallet"><div><small>${previewEscape(previewValue(form, 'reference', 'ไม่มีเลขอ้างอิง'))}${previewValue(form, 'date') ? ` · ${previewEscape(previewValue(form, 'date'))}` : ''}</small><h3>${previewEscape(previewValue(form, 'title', 'รายการรายรับ'))}</h3><p>${previewText(previewValue(form, 'note', 'ยอดรวมจะคำนวณให้อัตโนมัติ'))}</p></div><dl><div><dt>ค่าคอมมิชชั่น</dt><dd>${previewMoney(commission)}</dd></div><div><dt>ทิป</dt><dd>${previewMoney(tip)}</dd></div><div class="total"><dt>รวมรายการนี้</dt><dd>${previewMoney(commission + tip)}</dd></div></dl></article>`;
    }

    if (type === 'queue') {
      const progress = Math.max(0, Math.min(100, Number(previewValue(form, 'progress')) || 0));
      const amount = Number(previewValue(form, 'amount')) || 0;
      const paid = Number(previewValue(form, 'paid')) || 0;
      const tip = Number(previewValue(form, 'tip')) || 0;
      return `<article class="creator-preview-queue"><header><span>${previewEscape(previewValue(form, 'code', 'PRIVATE CODE'))}</span><strong>${previewEscape(previewValue(form, 'type', 'Commission'))}</strong><em>${previewEscape(previewValue(form, 'status', 'Waiting'))}</em>${visibility}</header><div class="creator-preview-progress"><span style="width:${progress}%"></span></div><div class="creator-preview-queue-grid"><span><small>PROGRESS</small><b>${progress}%</b></span><span><small>กำหนดส่ง</small><b>${previewEscape(previewValue(form, 'eta', '—'))}</b></span><span><small>ราคางาน</small><b>${previewMoney(amount)}</b></span><span><small>จ่ายแล้ว</small><b>${previewMoney(paid)}</b></span><span><small>ค้างจ่าย</small><b>${previewMoney(Math.max(0, amount - paid))}</b></span><span><small>ทิป</small><b>${previewMoney(tip)}</b></span></div></article>`;
    }

    if (type === 'profile') {
      const banner = previewImage(form, 'bannerUpload', 'bannerImage');
      const avatar = previewImage(form, 'avatarUpload', 'avatarImage');
      const socials = [...form.querySelectorAll('input[name^="socialLabel"]')].map(input => input.value.trim()).filter(Boolean);
      return `<article class="creator-preview-profile"><div class="creator-preview-banner">${banner ? `<img src="${previewEscape(banner)}" alt="" />` : ''}<strong>${previewEscape(previewValue(form, 'bannerTitle', 'Your banner'))}</strong><small>${previewEscape(previewValue(form, 'bannerSubtitle'))}</small></div><div class="creator-preview-profile-copy">${avatar ? `<img src="${previewEscape(avatar)}" alt="" />` : '<span class="creator-preview-avatar">♡</span>'}<div><h3>${previewEscape(previewValue(form, 'name', 'Display name'))}</h3><small>${previewEscape(previewValue(form, 'handle', '@username'))} · ${previewEscape(previewValue(form, 'role', 'artist'))}</small><p>${previewText(previewValue(form, 'bio', 'แนะนำตัวจะแสดงตรงนี้'))}</p><div class="creator-preview-socials">${socials.map(label => `<span>${previewEscape(label)}</span>`).join('') || '<span>ยังไม่มี Social Media</span>'}</div></div></div></article>`;
    }

    if (type === 'posts') {
      const image = previewImage(form, 'imageUpload', 'image');
      return `<article class="creator-preview-post">${image ? `<img src="${previewEscape(image)}" alt="" />` : '<div class="creator-preview-placeholder">✦</div>'}<div><span>${previewEscape(previewValue(form, 'label', 'POSTED'))} · ${previewEscape(previewValue(form, 'date', 'TODAY'))}</span><h3>${previewEscape(previewValue(form, 'title', 'ชื่อโพสต์'))}</h3><p>${previewText(previewValue(form, 'body', 'เนื้อหาโพสต์จะแสดงตรงนี้'))}</p>${visibility}</div></article>`;
    }

    if (type === 'commission') {
      const image = previewImage(form, 'imageUpload', 'image');
      return `<article class="creator-preview-commission">${image ? `<img src="${previewEscape(image)}" alt="" />` : '<div class="creator-preview-placeholder">♡</div>'}<div><small>COMMISSION · ${previewEscape(previewValue(form, 'no', '01'))}</small><h3>${previewEscape(previewValue(form, 'title', 'ประเภทงาน'))}</h3><strong>${previewEscape(previewValue(form, 'price', 'ยังไม่ระบุราคา'))}</strong><p>${previewText(previewValue(form, 'desc', 'คำอธิบายจะแสดงตรงนี้'))}</p>${visibility}</div></article>`;
    }

    if (type === 'adopt') {
      const image = previewImage(form, 'imageUpload', 'image');
      const galleryCount = previewLines(previewValue(form, 'gallery'), 100).length;
      return `<article class="creator-preview-adopt">${image ? `<img src="${previewEscape(image)}" alt="" />` : '<div class="creator-preview-placeholder">♡</div>'}<div><small>CHARACTER ARCHIVE · ${galleryCount || (image ? 1 : 0)} รูป</small><h3>${previewEscape(previewValue(form, 'name', 'ชื่อตัวละคร'))}</h3><strong>${previewEscape(previewValue(form, 'type', 'character'))}</strong><p>${previewText(previewValue(form, 'desc', 'คำโปรยตัวละครจะแสดงตรงนี้'))}</p>${visibility}</div></article>`;
    }

    const values = [...form.querySelectorAll('input:not([type="file"]),textarea,select')].slice(0, 4);
    return `<article class="creator-preview-generic">${values.map(control => `<span><small>${previewEscape(control.closest('label')?.childNodes[0]?.textContent?.trim() || control.name)}</small><strong>${previewEscape(control.value || '—')}</strong></span>`).join('')}</article>`;
  }

  function renderLiveFormPreview(form) {
    const body = form.querySelector('.creator-live-preview-body');
    if (body) body.innerHTML = livePreviewMarkup(form);
  }

  function upgradeLiveFormPreview(form) {
    if (!form || form.dataset.creatorPreviewReady) return;
    form.dataset.creatorPreviewReady = 'true';
    const preview = document.createElement('section');
    preview.className = 'creator-live-preview';
    preview.setAttribute('aria-label', 'ตัวอย่างข้อมูลก่อนบันทึก');
    preview.innerHTML = '<header><span><i></i> LIVE PREVIEW</span><small>เปลี่ยนทันทีขณะพิมพ์ · ยังไม่ต้องกดบันทึก</small></header><div class="creator-live-preview-body"></div>';
    const heading = form.querySelector(':scope > .admin-section-title');
    (heading || form.firstElementChild)?.after(preview);
    const update = () => renderLiveFormPreview(form);
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    renderLiveFormPreview(form);
  }

  function sectionNodes(divider) {
    const nodes = [divider];
    let node = divider.nextElementSibling;
    while (node && !node.classList.contains('editor-section-divider') && !node.classList.contains('cms-form-actions')) {
      nodes.push(node);
      node = node.nextElementSibling;
    }
    return nodes;
  }

  function upgradeFormTabs(form) {
    if (!form || form.dataset.creatorTabsReady || form.classList.contains('commission-guide-form') || form.classList.contains('adopt-tabbed-form') || form.querySelector('.editor-section-panel')) return;
    const originalNav = form.querySelector('.editor-section-nav');
    const dividers = [...form.querySelectorAll('.editor-section-divider')];
    const originalButtons = originalNav ? [...originalNav.querySelectorAll('button[data-editor-jump]')] : [];
    if (!originalNav || dividers.length < 2 || originalButtons.length !== dividers.length) return;

    form.dataset.creatorTabsReady = 'true';
    form.classList.add('creator-tabbed-form');
    const nav = originalNav.cloneNode(true);
    originalNav.replaceWith(nav);
    nav.setAttribute('role', 'tablist');
    nav.setAttribute('aria-label', 'เลือกหมวดที่ต้องการแก้ไข');
    const buttons = [...nav.querySelectorAll('button[data-editor-jump]')];
    const groups = dividers.map((divider, index) => ({
      id: buttons[index].dataset.editorJump,
      nodes: sectionNodes(divider)
    }));
    groups.forEach(group => group.nodes.forEach(node => { node.dataset.creatorSectionNode = group.id; }));

    const key = `${form.dataset.editor || 'form'}-${form.dataset.index || '0'}`;
    const available = groups.map(group => group.id);
    const activate = id => {
      const selected = available.includes(id) ? id : available[0];
      sectionState[key] = selected;
      groups.forEach(group => group.nodes.forEach(node => { node.hidden = group.id !== selected; }));
      buttons.forEach(button => {
        const active = button.dataset.editorJump === selected;
        button.classList.toggle('active', active);
        button.setAttribute('aria-selected', String(active));
        button.tabIndex = active ? 0 : -1;
      });
      form.closest('.editor-inspector')?.scrollTo({top: 0, behavior: 'smooth'});
    };

    buttons.forEach((button, index) => {
      button.setAttribute('role', 'tab');
      button.onclick = () => activate(button.dataset.editorJump);
      button.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
        activate(buttons[next].dataset.editorJump);
        buttons[next].focus();
      });
    });
    activate(sectionState[key] || available[0]);
  }

  function setCommissionMode(inspector, mode) {
    commissionMode = mode;
    inspector.dataset.creatorMode = mode;
    [...inspector.querySelectorAll('[data-creator-mode-button]')].forEach(button => {
      const active = button.dataset.creatorModeButton === mode;
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
    });
    inspector.scrollTo({top: 0, behavior: 'smooth'});
  }

  function upgradeCommissionInspector(inspector) {
    const pageHeading = inspector.querySelector('.commission-page-heading');
    const pageForm = inspector.querySelector('.commission-page-form');
    if (!pageHeading || !pageForm || inspector.querySelector('.creator-inspector-switch')) return;
    const protectedNodes = new Set([
      inspector.querySelector('.editor-inspector-close'),
      inspector.querySelector('.editor-selection-context')
    ]);
    [...inspector.children].forEach(node => {
      if (protectedNodes.has(node)) return;
      node.dataset.creatorModeSection = node === pageHeading || node === pageForm ? 'page' : 'item';
    });
    const switcher = document.createElement('div');
    switcher.className = 'creator-inspector-switch';
    switcher.setAttribute('role', 'tablist');
    switcher.setAttribute('aria-label', 'เลือกสิ่งที่ต้องการแก้ไข');
    switcher.innerHTML = `<button type="button" role="tab" data-creator-mode-button="item">ประเภทงาน<small>รูป ราคา และรายละเอียด</small></button><button type="button" role="tab" data-creator-mode-button="page">Page Sections<small>แก้ทุกส่วนของหน้า Commission</small></button>`;
    const context = inspector.querySelector('.editor-selection-context');
    (context || inspector.firstElementChild)?.after(switcher);
    [...switcher.querySelectorAll('button')].forEach((button, index, buttons) => {
      button.onclick = () => setCommissionMode(inspector, button.dataset.creatorModeButton);
      button.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        const next = buttons[(index + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length];
        setCommissionMode(inspector, next.dataset.creatorModeButton);
        next.focus();
      });
    });
    const hasItem = [...inspector.children].some(node => node.dataset.creatorModeSection === 'item' && node.matches('.cms-form,.inspector-heading,.visual-item-actions'));
    setCommissionMode(inspector, hasItem ? commissionMode : 'page');
  }

  function ensurePreviewDrawer(editor) {
    if (editor.querySelector('.creator-preview-drawer')) return;
    editor.insertAdjacentHTML('beforeend', `<button class="creator-preview-backdrop" type="button" aria-label="ปิด Preview"></button><aside class="creator-preview-drawer" aria-hidden="true"><header><div><small>WEBSITE PREVIEW</small><strong class="creator-preview-title">Preview</strong><span>แสดงข้อมูลที่บันทึกล่าสุด</span></div><button class="creator-preview-close" type="button" aria-label="ปิด Preview">×</button></header><iframe class="creator-preview-frame" title="ตัวอย่างหน้าเว็บไซต์"></iframe></aside>`);
    const close = () => {
      editor.classList.remove('creator-preview-open');
      editor.querySelector('.creator-preview-drawer')?.setAttribute('aria-hidden', 'true');
    };
    editor.querySelector('.creator-preview-close').onclick = close;
    editor.querySelector('.creator-preview-backdrop').onclick = close;
  }

  function openPreview(editor) {
    ensurePreviewDrawer(editor);
    const tab = editor.dataset.creatorTab || 'profile';
    const route = previewRoutes[tab] || location.pathname.split('/').pop() || 'index.html';
    const url = new URL(route, location.href);
    url.searchParams.set('_preview', Date.now());
    const frame = editor.querySelector('.creator-preview-frame');
    const title = editor.querySelector('.creator-preview-title');
    if (title) title.textContent = pageLabels[tab] || 'Website';
    if (frame) frame.src = url.href;
    editor.classList.add('creator-preview-open');
    editor.querySelector('.creator-preview-drawer')?.setAttribute('aria-hidden', 'false');
    editor.querySelector('.creator-preview-close')?.focus();
  }

  function ensureBackButton(editor, inspector, tab) {
    const context = inspector.querySelector('.editor-selection-context');
    if (!context) return;
    let button = context.querySelector('.creator-back-list');
    if (!collectionTabs.has(tab)) {
      button?.remove();
      return;
    }
    if (!button) {
      button = document.createElement('button');
      button.className = 'creator-back-list';
      button.type = 'button';
      button.textContent = '← กลับไปรายการ';
      button.onclick = () => {
        editor.classList.add('creator-list-only');
        editor.querySelector('.editor-canvas-wrap')?.focus();
      };
      context.prepend(button);
    }
  }

  function ensureCommissionPageButton(editor, inspector, tab) {
    const title = editor.querySelector('.canvas-page-title');
    if (tab !== 'commission' || !title || title.querySelector('.creator-page-settings')) return;
    const button = document.createElement('button');
    button.className = 'creator-page-settings';
    button.type = 'button';
    button.textContent = 'แก้ทุก Section';
    button.onclick = () => {
      editor.classList.remove('creator-list-only');
      setCommissionMode(inspector, 'page');
    };
    title.append(button);
  }

  function ensureCommissionSectionPicker(editor, inspector, tab) {
    const canvas = editor.querySelector('.commission-canvas');
    if (tab !== 'commission' || !canvas || canvas.querySelector('.creator-commission-sections')) return;
    const sections = [
      ['overview', 'Page Details', 'หัวข้อและข้อความเปิดหน้า'],
      ['sketch', 'Rough Sketch Prices', 'ขนาดงานและราคาทั้ง 5 แถว'],
      ['addons', 'Add-ons', 'เพิ่มรายการได้ไม่จำกัด'],
      ['drawing', 'What I Can Draw', 'ประเภทงานและ Reference'],
      ['revision', 'Revision', 'จำนวนครั้งและเงื่อนไขแก้งาน'],
      ['usage', 'Copyright & Usage', 'Personal, Commercial และ Copyright'],
      ['terms', 'Terms of Service', 'แก้เงื่อนไขทุกข้อ']
    ];
    const picker = document.createElement('section');
    picker.className = 'creator-commission-sections';
    picker.setAttribute('aria-label', 'ส่วนต่าง ๆ ของหน้า Commission');
    picker.innerHTML = `<header><strong>แก้ข้อมูลหน้า Commission</strong><span>เลือก Section ที่ต้องการแก้ไข</span></header><div>${sections.map(([id, label, help], index) => `<button type="button" data-commission-section="${id}"><b>${String(index + 1).padStart(2, '0')}</b><span><strong>${label}</strong><small>${help}</small></span><i>›</i></button>`).join('')}</div>`;
    canvas.querySelector('.canvas-page-title')?.after(picker);
    picker.querySelectorAll('[data-commission-section]').forEach(button => {
      button.onclick = () => {
        editor.classList.remove('creator-list-only');
        setCommissionMode(inspector, 'page');
        const tabButton = inspector.querySelector(`[data-commission-tab="${button.dataset.commissionSection}"]`);
        tabButton?.click();
      };
    });
  }

  function activeTab(editor) {
    return editor.querySelector('.editor-tool.active')?.dataset.visualTab || editor.dataset.creatorTab || 'profile';
  }

  function upgradeCreatorView() {
    scheduled = false;
    const editor = document.querySelector('#visual-editor');
    if (!editor) return;
    const tab = activeTab(editor);
    const previousTab = editor.dataset.creatorTab;
    editor.dataset.creatorTab = tab;
    editor.dataset.creatorLayout = singleTabs.has(tab) ? 'single' : 'collection';
    if (previousTab !== tab) {
      editor.classList.toggle('creator-list-only', collectionTabs.has(tab) && tab !== 'wallet');
      editor.classList.remove('creator-preview-open');
    }

    const layerLabel = editor.querySelector('.editor-tools > p:not(.tool-separator)');
    if (layerLabel && layerLabel.textContent !== 'WEBSITE') layerLabel.textContent = 'WEBSITE';
    const settingsLabel = editor.querySelector('.editor-tools .tool-separator');
    if (settingsLabel && settingsLabel.textContent !== 'SETTINGS') settingsLabel.textContent = 'SETTINGS';
    editor.querySelectorAll('.editor-tool').forEach(button => {
      const label = pageLabels[button.dataset.visualTab] || button.textContent.trim();
      const textNode = button.querySelector(':scope > span');
      if (textNode && textNode.textContent !== label) textNode.textContent = label;
      button.title = label;
      button.setAttribute('aria-label', label);
    });

    const toolbar = editor.querySelector('.canvas-toolbar');
    if (toolbar && !toolbar.dataset.creatorReady) {
      toolbar.dataset.creatorReady = 'true';
      toolbar.innerHTML = `<strong>เลือกรายการ</strong><span>เลือกหนึ่งรายการเพื่อเปิดแบบฟอร์มแก้ไข</span>`;
    }
    const inspector = editor.querySelector('#editor-inspector');
    if (inspector) {
      inspector.querySelectorAll('.cms-form').forEach(form => {
        upgradeFormTabs(form);
        upgradeLiveFormPreview(form);
      });
      upgradeCommissionInspector(inspector);
      ensureBackButton(editor, inspector, tab);
      ensureCommissionPageButton(editor, inspector, tab);
      ensureCommissionSectionPicker(editor, inspector, tab);
      if (tab === 'wallet' && inspector.querySelector('.inspector-empty')) editor.classList.add('creator-list-only');
    }

    ensurePreviewDrawer(editor);
    const preview = editor.querySelector('#visual-preview');
    if (preview && !preview.dataset.creatorBound) {
      preview.dataset.creatorBound = 'true';
      preview.textContent = 'ดู Preview';
      preview.onclick = () => openPreview(editor);
    }
    const inspectorToggle = editor.querySelector('#inspector-toggle');
    if (inspectorToggle) inspectorToggle.hidden = true;
  }

  const scheduleUpgrade = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(upgradeCreatorView);
  };

  document.addEventListener('click', event => {
    const cropApplied = event.target.closest('#image-crop-apply');
    const editor = event.target.closest('#visual-editor') || (cropApplied ? document.querySelector('#visual-editor') : null);
    if (!editor) return;
    if (event.target.closest('[data-add-social],[data-remove-social]') || cropApplied) {
      setTimeout(() => editor.querySelectorAll('.cms-form').forEach(renderLiveFormPreview));
    }
    if (!event.target.closest('#visual-editor')) return;
    const tool = event.target.closest('.editor-tool');
    if (tool) {
      setTimeout(() => {
        editor.classList.toggle('creator-list-only', collectionTabs.has(tool.dataset.visualTab) && tool.dataset.visualTab !== 'wallet');
        upgradeCreatorView();
      });
      return;
    }
    if (event.target.closest('[data-visual-select],[data-visual-add]')) {
      if (event.target.closest('[data-visual-select="commission"],[data-visual-add="commission"]')) commissionMode = 'item';
      setTimeout(() => {
        editor.classList.remove('creator-list-only');
        editor.classList.remove('creator-preview-open');
        upgradeCreatorView();
      });
    }
  }, true);

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const editor = document.querySelector('#visual-editor.creator-preview-open');
    if (!editor) return;
    editor.classList.remove('creator-preview-open');
    editor.querySelector('.creator-preview-drawer')?.setAttribute('aria-hidden', 'true');
    editor.querySelector('#visual-preview')?.focus();
  });

  upgradeCreatorView();
  new MutationObserver(scheduleUpgrade).observe(document.body, {childList: true, subtree: true});
})();
