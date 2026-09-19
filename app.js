const STORAGE_KEY = 'una-yaha-cms-v2';
const DEFAULT_STATE = {
  profile: { name:'Una Yaha', handle:'@unayaha.art', role:'illustrator · character designer', location:'Thailand / GMT+7', email:'hello@unayaha.art', bio:'นักวาดและนักออกแบบตัวละคร\nสร้างโลกเล็ก ๆ ด้วยสีชมพู ลาเวนเดอร์\nและดาวดวงจิ๋ว ♡', note:'รับวาด Commission, Adopt และออกแบบตัวละครตามคิวงานนะคะ ♡', announcement:'เปิดรับคิวรอบใหม่แล้ว — กรุณาอ่านรายละเอียดและ Terms ก่อนส่งบรีฟค่ะ', bannerTitle:'UNA YAHĀ', bannerSubtitle:'soft worlds / bright little souls', bannerImage:'ref/att.egmQKDB2TOpPVQgGiIlBcgxCTcD7nov4OxwXtyoHiHc.jpg', avatarImage:'ref/att.RZ7NtsIwVIBs3R6HKhZBO3UzwcMEY0GW1pa7SI4rpBg.jpg' },
  settings: { profile:true, posts:true, commissions:true, adopts:true, queue:true },
  posts: [
    { id:'post-about', label:'POSTED · PINNED INTRODUCTION', title:'about me', body:'Hello! My name is Una but feel free to call me whatever you like. ฉันชอบวาดตัวละครที่มีสีหวาน ๆ และเรื่องราวอบอุ่น ๆ\n\nงานของฉันเปิดรับทั้ง Commission, Adopt และงานออกแบบคาแรกเตอร์ ถ้าชอบโลกสีพาสเทลของที่นี่ ฝากติดตามกันด้วยนะคะ ♡', image:'ref/att.DBsD7VFBRNGQfZIgJniL0c68THvlQ6EELafMkrDoFoI.jpg', tags:['#commissions','#adoptables','#queueopen'], date:'19 SEPTEMBER 2026', notes:'♡ 24 likes · 03 notes', hidden:false },
    { id:'post-update', label:'POSTED · STUDIO JOURNAL', title:'latest update', body:'ช่วงนี้กำลังเตรียม Adopt drop ใหม่และจัดคิว Commission ให้ทุกงานมีเวลาสำหรับรายละเอียดเล็ก ๆ ที่ทำให้ตัวละครมีชีวิตขึ้นมา\n\nดูข้อมูลแต่ละส่วนแยกหน้าได้จากเมนูด้านบนเลยนะคะ ✦', image:'ref/att.RZ7NtsIwVIBs3R6HKhZBO3UzwcMEY0GW1pa7SI4rpBg.jpg', tags:['#studiojournal','#pastelfantasy'], date:'19 SEPTEMBER 2026', notes:'♡ save · share', hidden:false },
  ],
  commissions: [
    { id:'commission-1', no:'01', title:'icon / headshot', desc:'a tiny portrait with lots of sparkle', price:'฿ 900', hidden:false },
    { id:'commission-2', no:'02', title:'half body', desc:'your character, from waist up', price:'฿ 1,800', hidden:false },
    { id:'commission-3', no:'03', title:'full illustration', desc:'full body + soft dreamy background', price:'฿ 3,200', hidden:false },
    { id:'commission-4', no:'04', title:'couple / duo', desc:'two little souls in one frame', price:'฿ 4,800', hidden:false },
  ],
  adopts: [
    { id:'aurora', name:'Aurora', type:'pastel unicorn', price:'฿ 2,400', status:'available', image:'ref/att.DBsD7VFBRNGQfZIgJniL0c68THvlQ6EELafMkrDoFoI.jpg', desc:'a soft little dreamer who collects star-shaped memories and keeps them in her sleeves.', tags:['fullbody design','toyhouse ready','commercial add-on'], hidden:false },
    { id:'celeste', name:'Celeste', type:'cloud kitten', price:'฿ 1,800', status:'available', image:'ref/att.RZ7NtsIwVIBs3R6HKhZBO3UzwcMEY0GW1pa7SI4rpBg.jpg', desc:'a sleepy cloud kitten with a secret pocket full of tiny wishes.', tags:['fullbody design','instant delivery','commercial add-on'], hidden:false },
    { id:'mira', name:'Mira', type:'garden fairy', price:'฿ 2,100', status:'available', image:'ref/att.egmQKDB2TOpPVQgGiIlBcgxCTcD7nov4OxwXtyoHiHc.jpg', desc:'a gentle garden fairy made for soft stories, flower crowns and warm evenings.', tags:['fullbody design','toyhouse ready','commercial add-on'], hidden:false },
    { id:'lilac', name:'Lilac', type:'moon bunny', price:'claimed', status:'sold', image:'ref/att.DBsD7VFBRNGQfZIgJniL0c68THvlQ6EELafMkrDoFoI.jpg', desc:'a moon bunny with a heart-shaped constellation.', tags:['claimed 09.09.26'], hidden:false },
    { id:'ophelia', name:'Ophelia', type:'starlight girl', price:'claimed', status:'sold', image:'ref/att.RZ7NtsIwVIBs3R6HKhZBO3UzwcMEY0GW1pa7SI4rpBg.jpg', desc:'a little keeper of pink stars.', tags:['claimed 01.09.26'], hidden:false },
    { id:'violet', name:'Violet', type:'dream sprite', price:'claimed', status:'sold', image:'ref/att.egmQKDB2TOpPVQgGiIlBcgxCTcD7nov4OxwXtyoHiHc.jpg', desc:'a tiny dream sprite who lives between two flower petals.', tags:['claimed 26.08.26'], hidden:false },
  ],
  queue: [
    { code:'UY-041', type:'full illustration', status:'Rendering', progress:78, eta:'this week', amount:4800, depositPercent:50, paid:4800, tip:400, addons:300, usageType:'Commercial', contact:'Discord', privateNote:'final rendering check', hidden:false },
    { code:'UY-042', type:'half body', status:'Lineart', progress:46, eta:'next week', amount:1800, depositPercent:50, paid:1200, tip:150, addons:0, usageType:'Personal', contact:'Email', privateNote:'waiting for color reference', hidden:false },
    { code:'UY-043', type:'couple / duo', status:'Sketch', progress:26, eta:'next week', amount:4800, depositPercent:50, paid:2400, tip:0, addons:500, usageType:'Giveaway', contact:'Discord', privateNote:'send sketch update Friday', hidden:false },
    { code:'UY-044', type:'icon / headshot', status:'Waiting', progress:10, eta:'queued', amount:900, depositPercent:50, paid:0, tip:0, addons:0, usageType:'Personal', contact:'Twitter DM', privateNote:'deposit pending', hidden:false },
  ],
};
function walletEntriesFromQueue(queue = []) { return queue.filter(item => (Number(item.paid) || 0) > 0 || (Number(item.tip) || 0) > 0).map((item,index) => ({ id:`wallet-${item.code || index}-${index}`, sourceQueueCode:item.code || '', reference:item.code || '', title:item.type || 'Commission', commission:Number(item.paid) || 0, tip:Number(item.tip) || 0, date:'', note:'บันทึกจาก Queue', kind:'queue-payment' })); }
function normalizeWalletEntries(entries = []) { return (Array.isArray(entries) ? entries : []).map((entry,index) => ({ id:entry.id || `wallet-${Date.now()}-${index}`, sourceQueueCode:entry.sourceQueueCode || '', reference:entry.reference || entry.sourceQueueCode || '', title:entry.title || 'Commission', commission:Number(entry.commission) || 0, tip:Number(entry.tip) || 0, date:entry.date || '', note:entry.note || '', kind:entry.kind || 'manual' })); }
DEFAULT_STATE.wallet = walletEntriesFromQueue(DEFAULT_STATE.queue);
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const clone = value => JSON.parse(JSON.stringify(value));
const CHARACTER_INFO_RESET_KEY = `${STORAGE_KEY}:character-info-reset-v1`;
const CHARACTER_PLACEHOLDER_FIELDS = ['name','type','desc','species','pronouns','age','height','story','personality','traits','designNotes','likes','dislikes','ownerNotes'];
function useCharacterPlaceholders(item) { const next = {...item}; CHARACTER_PLACEHOLDER_FIELDS.forEach(field => { next[field] = '-'; }); next.tags = ['-']; return next; }
DEFAULT_STATE.adopts = DEFAULT_STATE.adopts.map(useCharacterPlaceholders);
const ADOPT_DETAIL_DEFAULTS = { aurora:{story:'Aurora เกิดจากแสงแรกของเช้าวันใหม่ เธอเก็บความทรงจำรูปดาวไว้ในแขนเสื้อและชอบเดินทางไปตามสวนลอยฟ้า',personality:'อ่อนโยน ช่างฝัน และชอบช่วยปลอบใจคนอื่น',traits:'pastel unicorn · star clips · soft magic',designNotes:'fullbody design พร้อมนำไปใช้เป็นตัวละครส่วนตัวได้'}, celeste:{story:'Celeste เป็นลูกแมวจากก้อนเมฆที่ตกลงมาในคืนพระจันทร์สีชมพู เธอพกกระเป๋าเล็ก ๆ ที่เต็มไปด้วยคำอธิษฐาน',personality:'ขี้เซา ขี้อ้อน และรักของหวาน',traits:'cloud kitten · lavender eyes · tiny wishes',designNotes:'instant delivery · toyhouse ready'}, mira:{story:'Mira เป็นภูตตัวเล็กจากสวนที่บานเฉพาะตอนค่ำ เธอเชื่อว่าดอกไม้ทุกดอกมีเรื่องเล่าเป็นของตัวเอง',personality:'ใจดี สดใส และรักการสะสมดอกไม้',traits:'garden fairy · flower crown · warm wings',designNotes:'fullbody design · commercial add-on available'}, lilac:{story:'กระต่ายจันทร์ผู้เฝ้าดูแลกลุ่มดาวรูปหัวใจ ปัจจุบันเธอได้พบเจ้าของใหม่แล้ว',personality:'สงบ อบอุ่น และชอบมองท้องฟ้า',traits:'moon bunny · heart constellation · claimed',designNotes:'character claimed'}, ophelia:{story:'Ophelia คือผู้ดูแลดาวสีชมพูตัวจิ๋ว เธอเดินทางผ่านความฝันเพื่อเก็บแสงที่หล่นหาย',personality:'ลึกลับ อ่อนหวาน และรักการเล่านิทาน',traits:'starlight girl · pink stars · claimed',designNotes:'character claimed'}, violet:{story:'Violet อาศัยอยู่ระหว่างกลีบดอกไม้สองกลีบและจะปรากฏตัวเมื่อมีใครกำลังฝันดี',personality:'ซุกซน ขี้เล่น และชอบดอกไม้',traits:'dream sprite · flower petals · claimed',designNotes:'character claimed'} };
const DEFAULT_COMMISSION_PAGE = { title:'commission rate', opening:'OPENING SOON · 04.10.2026', intro:'รับวาดตัวละครของคุณด้วยสีหวานนุ่มและแสงวิบวับ เลือกประเภทงานด้านล่าง แล้วอ่านรายละเอียดก่อนสั่งงานได้เลย', bookingNote:'ระยะเวลาทำงานประมาณ 2–4 สัปดาห์ มี WIP update ในทุกขั้นตอน', bookingLinkLabel:'อ่าน Terms →', quickLink1Label:'Adopt House', quickLink1Url:'adopts.html', quickLink2Label:'Queue status', quickLink2Url:'queue.html', quickLink3Label:'Artist profile', quickLink3Url:'index.html', addonsLabel:'ADD-ONS', addons:['extra character +50%','commercial use ×2','complex background +300฿'], termsTitle:'terms of service', termsSubtitle:'PLEASE READ BEFORE BOOKING', terms:[{title:'01 · payment',body:'ชำระมัดจำ 50% ก่อนเริ่มงาน ส่วนที่เหลือชำระเมื่ออนุมัติ sketch หรือก่อนส่งไฟล์ final'},{title:'02 · process',body:'มี WIP update ในขั้น Sketch, Lineart และ Base Color แก้ไขได้ตามจำนวนรอบที่ระบุในแพ็กเกจ'},{title:'03 · usage',body:'ราคาเริ่มต้นสำหรับ Personal Use หากใช้เชิงพาณิชย์กรุณาเลือก Commercial Use เพิ่ม'},{title:'04 · timeline',body:'ระยะเวลาทำงานประมาณ 2–4 สัปดาห์ ขึ้นกับคิวและรายละเอียดของงาน'}] };
let cmsState = loadState();
cmsState.wallet = normalizeWalletEntries(cmsState.wallet);
cmsState.commissionPage = {...clone(DEFAULT_COMMISSION_PAGE), ...(cmsState.commissionPage || {}), terms:(cmsState.commissionPage?.terms || clone(DEFAULT_COMMISSION_PAGE.terms)), addons:(cmsState.commissionPage?.addons || clone(DEFAULT_COMMISSION_PAGE.addons))};
if (cmsState.commissionPage.title === "let's make something") { cmsState.commissionPage.title = 'commission rate'; localStorage.setItem(STORAGE_KEY, JSON.stringify(cmsState)); }
cmsState.profile.socialLabel = cmsState.profile.socialLabel || 'SOCIALS';
cmsState.profile.socialUrl = cmsState.profile.socialUrl || 'index.html#contact';
function normalizeProfileSocials(profile) { profile.socialLinks = Array.isArray(profile.socialLinks) ? profile.socialLinks.filter(link => link && (link.label || link.url)).map(link => ({label:String(link.label || 'SOCIAL'),url:String(link.url || '#')})) : [{label:profile.socialLabel || 'SOCIALS',url:profile.socialUrl || 'index.html#contact'}]; if (!profile.socialLinks.length) profile.socialLinks = [{label:'SOCIALS',url:'index.html#contact'}]; profile.socialLabel = profile.socialLinks[0].label; profile.socialUrl = profile.socialLinks[0].url; return profile; }
normalizeProfileSocials(cmsState.profile);
let editorDirty = false;
cmsState.adopts = cmsState.adopts.map(item => ({...(ADOPT_DETAIL_DEFAULTS[item.id] || {}), ...item, tags:(item.tags || []).filter(tag => !/commercial\s*add-on|claimed|available/i.test(tag)), gallery:item.gallery?.length ? item.gallery : [item.image]}));
if (localStorage.getItem(CHARACTER_INFO_RESET_KEY) !== 'done') {
  cmsState.adopts = cmsState.adopts.map(useCharacterPlaceholders);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cmsState));
  localStorage.setItem(CHARACTER_INFO_RESET_KEY, 'done');
}
cmsState.adopts.forEach(item => { delete item.price; delete item.status; item.designNotes = String(item.designNotes || '').replace(/commercial\s*add-on( available)?/ig, '').replace(/\s{2,}/g, ' ').trim(); });
cmsState.queue.forEach(item => delete item.addons);
let activeAdminTab = 'overview';

function loadState() { try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)); if (!saved) return clone(DEFAULT_STATE); const queue = (saved.queue || clone(DEFAULT_STATE.queue)).map((item,index) => ({...(DEFAULT_STATE.queue[index] || {}), ...item})); return { ...clone(DEFAULT_STATE), ...saved, profile:{...DEFAULT_STATE.profile,...saved.profile}, settings:{...DEFAULT_STATE.settings,...saved.settings}, posts:saved.posts || clone(DEFAULT_STATE.posts), commissions:saved.commissions || clone(DEFAULT_STATE.commissions), adopts:(saved.adopts || clone(DEFAULT_STATE.adopts)).map(item => ({...(ADOPT_DETAIL_DEFAULTS[item.id] || {}), ...item, gallery:item.gallery?.length ? item.gallery : [item.image]})), queue, wallet:normalizeWalletEntries(Array.isArray(saved.wallet) ? saved.wallet : walletEntriesFromQueue(queue)) }; } catch { return clone(DEFAULT_STATE); } }
function saveState(message = 'บันทึกข้อมูลแล้ว ✦') { localStorage.setItem(STORAGE_KEY, JSON.stringify(cmsState)); if (window.UnaFirebase?.configured && window.UnaFirebase.currentUser) window.UnaFirebase.saveState(cmsState).catch(error => { console.warn('Firebase sync failed:', error); showToast('บันทึกในเครื่องแล้ว · ยังไม่เชื่อม Firebase'); }); applyPublicContent(); renderProfile(); renderPosts(); renderCommissions(); renderCommissionPage(); renderAdopts($('.filter-pill.active')?.dataset.filter || 'all'); renderQueue(); markEditorSaved(); showToast(message); }
function markEditorDirty() { editorDirty = true; const status = $('#saved-state'); if (status) { status.textContent = 'มีการแก้ไขที่ยังไม่บันทึก'; status.classList.add('unsaved'); } }
function markEditorSaved() { editorDirty = false; const status = $('#saved-state'); if (status) { status.textContent = 'บันทึกแล้ว'; status.classList.remove('unsaved'); } }
function escapeHtml(value = '') { return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char])); }
function visibleItems(items) { return items.filter(item => !item.hidden); }
function applyPublicContent() { const pageMap = { 'posts-feed':'posts', 'commission-list':'commissions', 'adopt-grid':'adopts', 'queue-board':'queue' }; Object.entries(pageMap).forEach(([selector, key]) => { const el = document.getElementById(selector); if (el) { const section = selector === 'posts-feed' ? el : el.closest('.post-card'); if (section) section.style.display = cmsState.settings[key] ? '' : 'none'; } }); }
function normalizeHomeNavigation() { $$('.profile-tabs a[href*="#about"]').forEach(link => link.remove()); $$('.profile-tabs a[href="index.html"]').forEach(link => { link.textContent = 'HOME'; }); $$('.content-filter > span:first-child').forEach(label => { if (label.textContent.trim() === 'POSTS') label.textContent = 'HOME'; }); $$('.content-filter .muted').forEach(label => { if (label.textContent.includes('POSTS')) label.textContent = 'UPDATES & JOURNAL'; }); }
function ensurePostsFeed() { if (!isProfileHomePage()) return; if (!$('#posts-feed')) { const column = $('.content-column'); const filter = $('.content-filter', column); if (!column || !filter) return; const feed = document.createElement('div'); feed.id = 'posts-feed'; filter.after(feed); $$('.post-card', column).filter(card => card.parentElement === column).forEach(card => { card.style.display = 'none'; }); } }
function isProfileHomePage() { const path = window.location.pathname.toLowerCase(); return path.endsWith('/index.html') || path.endsWith('\\index.html') || path.endsWith('/'); }
function ensureProfileBlocks() { const sidebar = $('.profile-sidebar'); if (!sidebar || isProfileHomePage()) return; if (!$('#profile-note')) sidebar.insertAdjacentHTML('beforeend','<div class="sidebar-box profile-editable-block" id="profile-note"><div class="box-heading">NOTE <span>♡</span></div><p id="profile-note-content"></p></div>'); if (!$('#profile-announcement')) sidebar.insertAdjacentHTML('beforeend','<div class="sidebar-box profile-editable-block" id="profile-announcement"><div class="box-heading">ANNOUNCEMENT <span>✦</span></div><p id="profile-announcement-content"></p></div>'); }
function removeProfileSidebarBoxesOnHome() { if (isProfileHomePage()) $$('.profile-sidebar > .sidebar-box').forEach(box => box.remove()); }
function renderPosts() { const el = $('#posts-feed'); if (!el) return; el.innerHTML = visibleItems(cmsState.posts).map(item => `<article class="post-card dynamic-post"><div class="post-head"><div><span class="post-symbol">✦</span><h2>${escapeHtml(item.title)}</h2><small>${escapeHtml(item.label || 'POSTED · NEW') }</small></div><span class="bookmark">▮</span></div><div class="dynamic-post-body ${item.image ? 'has-post-image' : ''}"><div><p>${escapeHtml(item.body).replace(/\n/g,'<br />')}</p><div class="post-tags">${(item.tags || []).map(tag => `<a href="#">${escapeHtml(tag)}</a>`).join('')}</div></div>${item.image ? `<img class="post-media" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" />` : ''}</div><div class="post-footer"><span>${escapeHtml(item.date || '')}</span><span>${escapeHtml(item.notes || '♡ save · share')}</span></div></article>`).join('') || '<div class="post-card"><div class="post-copy"><p>ยังไม่มีโพสต์ ลองเปิด Edit Mode เพื่อสร้างโพสต์แรกได้เลยค่ะ ✦</p></div></div>'; }
function renderProfile() { const p = cmsState.profile; ensureProfileBlocks(); $$('.profile-card h1').forEach(el => el.textContent = p.name); $$('.handle').forEach(el => el.textContent = p.handle); $$('.profile-bio').forEach(el => el.innerHTML = escapeHtml(p.bio).replace(/\n/g, '<br />')); $$('.profile-meta').forEach((el, i) => { if (i % 2 === 0) el.innerHTML = `<span>◷</span> ${escapeHtml(p.role)}`; else el.innerHTML = `<span>⌂</span> ${escapeHtml(p.location)}`; }); if ($('#profile-note-content')) $('#profile-note-content').innerHTML = escapeHtml(p.note || '').replace(/\n/g, '<br />'); if ($('#profile-announcement-content')) $('#profile-announcement-content').innerHTML = escapeHtml(p.announcement || '').replace(/\n/g, '<br />'); $$('a[href^="mailto:"]').forEach(el => { el.href = `mailto:${p.email}`; if (el.classList.contains('profile-socials') || el.textContent === 'EMAIL') el.textContent = 'EMAIL'; }); $$('.banner-title span').forEach(el => el.textContent = p.bannerTitle); $$('.banner-title small').forEach(el => el.textContent = p.bannerSubtitle); $$('.profile-banner img').forEach(el => el.src = p.bannerImage); $$('.avatar img').forEach(el => el.src = p.avatarImage); }
const baseRenderProfileSocials = renderProfile;
renderProfile = function() { baseRenderProfileSocials(); const p = normalizeProfileSocials(cmsState.profile); $$('.profile-socials').forEach(socials => { socials.innerHTML = `<a href="mailto:${escapeHtml(p.email || '')}">EMAIL</a>${p.socialLinks.map(link => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`).join('')}`; }); };
function renderCommissions() { const el = $('#commission-list'); if (!el) return; el.innerHTML = visibleItems(cmsState.commissions).map((item, index) => `<article class="commission-item">${item.image ? `<img class="commission-thumb" src="${escapeHtml(item.image)}" alt="" />` : `<span class="commission-number">${escapeHtml(item.no || String(index + 1).padStart(2,'0'))}</span>`}<div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.desc)}</p></div><div class="commission-price">${escapeHtml(item.price)}<small>starting at</small></div></article>`).join(''); }
function renderCommissionPage() { const page = cmsState.commissionPage; const list = $('#commission-list'); if (!list) return; const card = list.closest('.post-card'); const heading = $('.post-head', card); if (heading) { const title = $('h2', heading); const small = $('small', heading); if (title) title.textContent = page.title; if (small) small.textContent = page.opening; } const intro = $('.post-copy p', card); if (intro) intro.textContent = page.intro; const booking = $('.profile-sidebar .sidebar-box'); if (booking) { const paragraph = $('p', booking); const link = $('a', booking); if (paragraph) paragraph.textContent = page.bookingNote; if (link) { link.textContent = page.bookingLinkLabel; link.href = '#terms'; } } const quick = $('.profile-sidebar .tags-box'); if (quick) { const links = $$('a', quick); [[page.quickLink1Label,page.quickLink1Url],[page.quickLink2Label,page.quickLink2Url],[page.quickLink3Label,page.quickLink3Url]].forEach((value,index) => { if (!links[index]) return; links[index].textContent = value[0]; links[index].href = value[1]; }); } const addOns = $('.commission-bottom', card); if (addOns) { const label = $('strong', addOns); const spans = $$('span', addOns); if (label) label.textContent = page.addonsLabel; spans.forEach((span,index) => { span.textContent = page.addons[index] || ''; span.style.display = page.addons[index] ? '' : 'none'; }); } const terms = $('#terms'); if (terms) { const termsHeading = $('.post-head', terms); const title = $('h2', termsHeading); const small = $('small', termsHeading); if (title) title.textContent = page.termsTitle; if (small) small.textContent = page.termsSubtitle; $$('.terms-grid > div', terms).forEach((term,index) => { const item = page.terms[index] || {}; const heading = $('strong', term); const body = $('p', term); if (heading) heading.textContent = item.title || ''; if (body) body.textContent = item.body || ''; }); } }
function renderAdopts(filter = 'all') { const el = $('#adopt-grid'); if (!el) return; const available = visibleItems(cmsState.adopts); const list = filter === 'all' ? available : available.filter(item => item.status === filter); const filterButtons = $$('.filter-pill'); filterButtons.forEach(button => { const key = button.dataset.filter; const count = key === 'all' ? available.length : available.filter(item => item.status === key).length; const countEl = $('span', button); if (countEl) countEl.textContent = String(count).padStart(2,'0'); }); el.innerHTML = list.length ? list.map(item => `<article class="adopt-card" data-adopt="${escapeHtml(item.id)}"><div class="adopt-image"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)} — ${escapeHtml(item.type)}" /><span class="adopt-status ${item.status === 'sold' ? 'sold' : ''}">${item.status === 'sold' ? 'claimed' : 'available'}</span></div><div class="adopt-card-meta"><div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.type)}</p></div><div class="adopt-card-price">${escapeHtml(item.price)}<small>${item.status === 'sold' ? '' : 'USD / THB'}</small></div></div></article>`).join('') : '<p class="adopt-empty">no characters in this little corner yet ✦</p>'; $$('.adopt-card').forEach(card => card.addEventListener('click', () => openAdopt(card.dataset.adopt))); }
function renderQueue() { const el = $('#queue-board'); if (!el) return; el.innerHTML = visibleItems(cmsState.queue).map(item => `<article class="queue-card" data-queue-code="${escapeHtml(item.code)}" tabindex="0" role="button"><div class="queue-card-top"><span>${escapeHtml(item.code)}</span><span>♡</span></div><h3>${escapeHtml(item.type)}</h3><p><span class="status">${escapeHtml(item.status)}</span> · estimated ${escapeHtml(item.eta)}</p><div class="progress-line"><span style="width:${Number(item.progress) || 0}%"></span></div></article>`).join(''); $$('.queue-card', el).forEach(card => { const open = () => openQueueStatus(card.dataset.queueCode); card.addEventListener('click', open); card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } }); }); }
function openAdopt(id) { const item = cmsState.adopts.find(adopt => adopt.id === id); const content = $('#adopt-modal-content'); if (!item || !content) return; content.innerHTML = `<div class="adopt-modal-art"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" /></div><div class="adopt-modal-copy"><span class="mini-label">${item.status === 'sold' ? 'CLAIMED CHARACTER' : 'AVAILABLE CHARACTER'}</span><h2>${escapeHtml(item.name)}<br /><em>${escapeHtml(item.type)}.</em></h2><p>${escapeHtml(item.desc)}</p><div class="detail-list">${item.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div><div class="adopt-modal-price">${escapeHtml(item.price)}</div>${item.status === 'available' ? '<button class="post-button adopt-interest" type="button">I love this one ♡</button>' : '<span class="mini-label">this character has found their home ♡</span>'}</div>`; openModal('#adopt-modal'); $('.adopt-interest')?.addEventListener('click', () => { closeModal('#adopt-modal'); showToast('Interest noted — Una will be in touch ✦'); }); }
openAdopt = function(id) { const raw = cmsState.adopts.find(adopt => adopt.id === id); const item = {...(ADOPT_DETAIL_DEFAULTS[id] || {}), ...raw}; const content = $('#adopt-modal-content'); if (!item || !content) return; const gallery = (item.gallery?.length ? item.gallery : [item.image]).filter(Boolean); content.innerHTML = `<div class="adopt-modal-art"><img class="adopt-modal-main-image" src="${escapeHtml(gallery[0] || item.image)}" alt="${escapeHtml(item.name)}" /><div class="adopt-gallery-strip">${gallery.map((image,index) => `<button class="adopt-gallery-thumb ${index === 0 ? 'active' : ''}" type="button" data-gallery-image="${escapeHtml(image)}"><img src="${escapeHtml(image)}" alt="${escapeHtml(item.name)} gallery ${index + 1}" /></button>`).join('')}</div></div><div class="adopt-modal-copy"><span class="mini-label">${item.status === 'sold' ? 'CLAIMED CHARACTER' : 'AVAILABLE CHARACTER'}</span><h2>${escapeHtml(item.name)}<br /><em>${escapeHtml(item.type)}.</em></h2><p class="adopt-short-desc">${escapeHtml(item.desc)}</p><div class="adopt-detail-sections"><section><small>STORY</small><p>${escapeHtml(item.story || 'ยังไม่มีเรื่องราวของตัวละคร')}</p></section><section><small>PERSONALITY</small><p>${escapeHtml(item.personality || 'ยังไม่มีข้อมูลนิสัย')}</p></section><section><small>TRAITS</small><p>${escapeHtml(item.traits || 'ยังไม่มีข้อมูลจุดเด่น')}</p></section><section><small>DESIGN NOTES</small><p>${escapeHtml(item.designNotes || 'ยังไม่มีข้อมูลเพิ่มเติม')}</p></section></div><div class="detail-list">${(item.tags || []).map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div><div class="adopt-modal-price">${escapeHtml(item.price)}</div>${item.status === 'available' ? '<button class="post-button adopt-interest" type="button">I love this one ♡</button>' : '<span class="mini-label">this character has found their home ♡</span>'}</div>`; openModal('#adopt-modal'); $$('.adopt-gallery-thumb').forEach(button => button.addEventListener('click', () => { $('.adopt-modal-main-image').src = button.dataset.galleryImage; $$('.adopt-gallery-thumb').forEach(thumb => thumb.classList.toggle('active', thumb === button)); })); $('.adopt-interest')?.addEventListener('click', () => { closeModal('#adopt-modal'); showToast('Interest noted — Una will be in touch ✦'); }); };
function openQueueStatus(code) { const item = cmsState.queue.find(queue => queue.code === code); const content = $('#queue-status-content'); if (!item || !content) return; const stages = ['Waiting','Sketch','Lineart','Base Color','Rendering','Completed']; const current = Math.max(0, stages.indexOf(item.status)); content.innerHTML = `<div class="queue-status-art"><span class="modal-icon">⌁</span><p class="mini-label">PUBLIC QUEUE STATUS</p><h2>${escapeHtml(item.code)}<br /><em>${escapeHtml(item.type)}.</em></h2><p>สถานะงานอัปเดตจาก Studio โดยไม่เปิดเผยข้อมูลส่วนตัวหรือข้อมูลการเงิน</p><div class="queue-status-meta"><span><small>ตอนนี้อยู่ที่</small><strong>${escapeHtml(item.status)}</strong></span><span><small>ความคืบหน้า</small><strong>${Number(item.progress) || 0}%</strong></span><span><small>กำหนดส่ง</small><strong>${escapeHtml(item.eta || '—')}</strong></span></div></div><ol class="queue-stage-list">${stages.map((stage,index) => `<li class="${index < current ? 'done' : index === current ? 'active' : ''}"><span>${index < current ? '✓' : String(index + 1).padStart(2,'0')}</span><strong>${stage}</strong>${index === current ? '<small>กำลังดำเนินการ</small>' : ''}</li>`).join('')}</ol>`; openModal('#queue-status-modal'); }
function openModal(selector) { const modal = $(selector); if (!modal) return; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; }
function closeModal(selector) { const modal = $(selector); if (!modal) return; modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }
function showToast(message) { const toast = $('#toast'); if (!toast) return; const title = /ลบ/.test(message) ? 'ลบข้อมูลแล้ว' : /กู้คืน/.test(message) ? 'กู้คืนสำเร็จ' : /ดาวน์โหลด/.test(message) ? 'ดาวน์โหลดสำเร็จ' : 'บันทึกสำเร็จ'; toast.innerHTML = `<span class="toast-icon">✓</span><span class="toast-copy"><strong>${escapeHtml(title)}</strong><small>${escapeHtml(message)}</small></span>`; toast.classList.add('show'); clearTimeout(toast.hideTimer); toast.hideTimer = setTimeout(() => toast.classList.remove('show'), 2800); }
function walletTotals() { return cmsState.wallet.reduce((totals, item) => { totals.commission += Number(item.commission) || 0; totals.tips += Number(item.tip) || 0; return totals; }, { commission:0, tips:0, get commissionWithTips() { return this.commission + this.tips; }, get total() { return this.commission + this.tips; } }); }
function syncQueuePaymentToWallet(queueItem, previousCode = '') { const code = String(queueItem.code || '').trim(); const existing = cmsState.wallet.find(entry => entry.sourceQueueCode === code || (previousCode && entry.sourceQueueCode === previousCode)); const commission = Number(queueItem.paid) || 0; const tip = Number(queueItem.tip) || 0; if (!existing && commission <= 0 && tip <= 0) return; const next = existing || { id:`wallet-${Date.now()}`, date:'', note:'บันทึกจาก Queue', kind:'queue-payment' }; next.sourceQueueCode = code; next.reference = code; next.title = queueItem.type || 'Commission'; next.commission = commission; next.tip = tip; if (!existing) cmsState.wallet.push(next); }

function ensureOverlays() {
  if (!$('#login-modal')) document.body.insertAdjacentHTML('beforeend', `<div class="modal-backdrop" id="login-modal" aria-hidden="true"><div class="modal login-modal"><button class="modal-close" type="button" aria-label="ปิด">×</button><span class="modal-icon">✦</span><p class="mini-label">PRIVATE STUDIO</p><h2>admin <em>sign in.</em></h2><p id="creator-auth-copy">เข้าสู่ระบบด้วยบัญชี Admin ที่เพิ่มไว้ใน Firebase เท่านั้น</p><form id="login-form" ><label>Email<input type="email" placeholder="admin@example.com" autocomplete="email" required /></label><label>Password<input type="password" placeholder="••••••••" autocomplete="current-password" minlength="6" required /></label><button class="post-button" type="submit">เข้าสู่ Admin Studio ↗</button></form><small class="demo-hint" id="creator-auth-hint">เฉพาะบัญชีที่เพิ่มใน Firebase Authentication เท่านั้น</small></div></div>`);
  if (!$('#queue-modal')) document.body.insertAdjacentHTML('beforeend', `<div class="modal-backdrop" id="queue-modal" aria-hidden="true"><div class="modal login-modal"><button class="modal-close" type="button" aria-label="ปิด">×</button><span class="modal-icon">♡</span><p class="mini-label">PRIVATE QUEUE CHECK</p><h2>find your <em>piece.</em></h2><p>กรอกรหัสที่ได้รับจาก Una เพื่อดูสถานะงานของคุณแบบส่วนตัว</p><form id="queue-form"><label>Private code<input type="text" placeholder="เช่น UY-042" required /></label><button class="post-button" type="submit">เช็กสถานะ ↗</button></form><div id="queue-result" class="queue-result"></div></div></div>`);
  if (!$('#queue-status-modal')) document.body.insertAdjacentHTML('beforeend', `<div class="modal-backdrop" id="queue-status-modal" aria-hidden="true"><div class="modal queue-status-modal"><button class="modal-close" type="button" aria-label="ปิด">×</button><div id="queue-status-content"></div></div></div>`);
  if (!$('#adopt-modal')) document.body.insertAdjacentHTML('beforeend', `<div class="modal-backdrop" id="adopt-modal" aria-hidden="true"><div class="modal adopt-modal"><button class="modal-close" type="button" aria-label="ปิด">×</button><div id="adopt-modal-content"></div></div></div>`);
  if (!$('#image-crop-modal')) document.body.insertAdjacentHTML('beforeend', `<div class="image-crop-backdrop" id="image-crop-modal" aria-hidden="true"><section class="image-crop-dialog" role="dialog" aria-modal="true" aria-labelledby="image-crop-title"><header class="image-crop-header"><div><span>IMAGE EDITOR</span><h2 id="image-crop-title">ครอปรูปก่อนบันทึก</h2><p id="image-crop-description">ลากรูปเพื่อจัดตำแหน่ง แล้วปรับขนาดด้วยแถบซูม</p></div><button class="image-crop-close" type="button" aria-label="ยกเลิกการครอป">×</button></header><div class="image-crop-workspace"><div class="image-crop-stage" id="image-crop-stage"><canvas id="image-crop-canvas" tabindex="0" aria-label="พื้นที่ครอปรูป สามารถลากหรือใช้ปุ่มลูกศรเพื่อเลื่อนรูป"></canvas><div class="image-crop-grid" aria-hidden="true"></div></div><div class="image-crop-controls"><label><span>ซูม</span><input id="image-crop-zoom" type="range" min="1" max="3" step="0.01" value="1" /><output id="image-crop-zoom-value">100%</output></label><button id="image-crop-reset" type="button">จัดกึ่งกลางใหม่</button></div><p class="image-crop-hint">ลากด้วยเมาส์หรือนิ้วเพื่อเลื่อนรูป · ใช้ลูกศรบนคีย์บอร์ดเพื่อปรับละเอียด</p></div><footer class="image-crop-actions"><button class="small-button image-crop-cancel" type="button">ยกเลิก</button><button class="post-button" id="image-crop-apply" type="button">ใช้รูปนี้ ✦</button></footer></section></div>`);
  if (!$('#admin-drawer')) document.body.insertAdjacentHTML('beforeend', `<aside class="admin-drawer" id="admin-drawer" aria-hidden="true"><div class="admin-header"><div><span class="mini-label">UNA / STUDIO</span><h2>creator <em>view.</em></h2></div><button class="drawer-close" type="button">×</button></div><div class="admin-tabs"><button class="admin-tab active" data-admin-tab="overview">ภาพรวม</button><button class="admin-tab" data-admin-tab="profile">โปรไฟล์</button><button class="admin-tab" data-admin-tab="commission">เรทงาน</button><button class="admin-tab" data-admin-tab="adopt">Adopt</button><button class="admin-tab" data-admin-tab="queue">คิวงาน</button><button class="admin-tab" data-admin-tab="wallet">รายรับ</button><button class="admin-tab" data-admin-tab="content">คอนเทนต์</button></div><div class="admin-content" id="admin-content"></div></aside>`);
  if (!$('#visual-editor')) document.body.insertAdjacentHTML('beforeend', `<section class="visual-editor" id="visual-editor" aria-hidden="true"><header class="visual-editor-top"><div class="visual-brand"><span>✦</span><strong>UNA / EDIT MODE</strong><small>visual studio</small></div><div class="visual-breadcrumb" id="visual-breadcrumb">Profile / Home</div><div class="visual-top-actions"><span class="saved-state" id="saved-state">All changes saved</span><button class="small-button" id="visual-preview" type="button">ดูเว็บไซต์ ↗</button><button class="visual-close" type="button" aria-label="ปิด Edit Mode">×</button></div></header><div class="visual-editor-body"><aside class="editor-tools"><p>LAYERS</p><button class="editor-tool active" data-visual-tab="profile">◉<span>Profile</span></button><button class="editor-tool" data-visual-tab="commission">▤<span>Commission</span></button><button class="editor-tool" data-visual-tab="adopt">✿<span>Adopt House</span></button><button class="editor-tool" data-visual-tab="queue">⌁<span>Queue</span></button><p class="tool-separator">SETTINGS</p><button class="editor-tool" data-visual-tab="content">⚙<span>Visibility</span></button></aside><main class="editor-canvas-wrap"><div class="canvas-toolbar"><span>CANVAS</span><span>100%</span><span>⋮</span></div><div class="editor-canvas" id="editor-canvas"></div></main><aside class="editor-inspector" id="editor-inspector"></aside></div></section>`);
  if (!$('#toast')) document.body.insertAdjacentHTML('beforeend','<div class="toast" id="toast" role="status" aria-live="polite"></div>');
}
function ensurePostsTool() { const tools = $('.editor-tools'); if (tools && !$('.editor-tool[data-visual-tab="posts"]')) { const button = document.createElement('button'); button.className = 'editor-tool'; button.dataset.visualTab = 'posts'; button.innerHTML = '⌂<span>Posts / Home</span>'; tools.insertBefore(button, $('.editor-tool[data-visual-tab="commission"]')); } }
function ensureWalletTool() { const tools = $('.editor-tools'); if (tools && !$('.editor-tool[data-visual-tab="wallet"]')) { const button = document.createElement('button'); button.className = 'editor-tool'; button.dataset.visualTab = 'wallet'; button.innerHTML = '฿<span>Wallet / Income</span>'; tools.insertBefore(button, $('.editor-tool[data-visual-tab="content"]')); } }

function field(label, name, value, type = 'text', extra = '') { return `<label class="cms-field">${label}<input name="${name}" type="${type}" value="${escapeHtml(value ?? '')}" ${extra} /></label>`; }
function textarea(label, name, value, extra = '') { return `<label class="cms-field full">${label}<textarea name="${name}" rows="3" ${extra}>${escapeHtml(value ?? '')}</textarea></label>`; }
function socialRowMarkup(index, link = {}) { return `<div class="social-link-row" data-social-row="${index}"><div class="social-link-index">${String(index + 1).padStart(2, '0')}</div>${field('ชื่อแพลตฟอร์ม', `socialLabel${index}`, link.label || 'SOCIAL')}${field('ลิงก์ Social Media', `socialUrl${index}`, link.url || '#') }<button type="button" class="social-remove-button" data-remove-social="${index}">ลบ</button></div>`; }
function socialLinksMarkup(profile) { const links = profile.socialLinks || [{label:profile.socialLabel || 'SOCIALS',url:profile.socialUrl || 'index.html#contact'}]; return `<div class="social-links-editor full" data-social-editor><div class="social-editor-heading"><div><strong>Social Media Links</strong><small>เพิ่มได้ไม่จำกัด และตั้งชื่อแต่ละแพลตฟอร์มได้</small></div><button type="button" class="small-button add-social-button" data-add-social>+ เพิ่ม Social Media</button></div><div class="social-links-list">${links.map((link,index) => socialRowMarkup(index, link)).join('')}</div></div>`; }
function bindSocialEditor(form) { if (!form || form.dataset.editor !== 'profile') return; const list = $('.social-links-list', form); const add = $('[data-add-social]', form); if (!list) return; if (add && !add.dataset.bound) { add.dataset.bound = 'true'; add.addEventListener('click', () => { const index = $$('.social-link-row', list).length; list.insertAdjacentHTML('beforeend', socialRowMarkup(index, {label:'NEW SOCIAL',url:'#'})); bindSocialEditor(form); list.querySelector(`[name="socialLabel${index}"]`)?.focus(); markEditorDirty(); updateLiveEditorPreview(form); }); } $$('.social-remove-button', list).forEach(button => { if (button.dataset.bound) return; button.dataset.bound = 'true'; button.addEventListener('click', () => { button.closest('.social-link-row')?.remove(); $$('.social-link-row', list).forEach((row,index) => { row.dataset.socialRow = index; const indexEl = $('.social-link-index', row); if (indexEl) indexEl.textContent = String(index + 1).padStart(2, '0'); const label = row.querySelector('input[name^="socialLabel"]'); if (label) label.name = `socialLabel${index}`; const url = row.querySelector('input[name^="socialUrl"]'); if (url) url.name = `socialUrl${index}`; const remove = $('.social-remove-button', row); if (remove) remove.dataset.removeSocial = index; }); markEditorDirty(); updateLiveEditorPreview(form); }); }); }
function editorSectionsFor(form) { const type = form.dataset.editor; if (form.dataset.page === 'true') return [{id:'overview',label:'ภาพรวม',selector:'[name="title"]'},{id:'addons',label:'Add-ons',selector:'[name="addonsLabel"]'},{id:'links',label:'Quick Links',selector:'[name="quickLink1Label"]'},{id:'terms',label:'Terms',selector:'[name="termsTitle"]'}]; const maps = { profile:[{id:'identity',label:'โปรไฟล์',selector:'[name="name"]'},{id:'social',label:'Social',selector:'[data-social-editor]'},{id:'images',label:'รูปภาพ',selector:'[name="bannerImage"]'},{id:'content',label:'ข้อความ',selector:'[name="bio"]'},{id:'uploads',label:'Upload',selector:'[name="bannerUpload"]'}], posts:[{id:'post',label:'โพสต์',selector:'[name="title"]'},{id:'content',label:'เนื้อหา',selector:'[name="body"]'},{id:'media',label:'รูปภาพ',selector:'[name="image"]'},{id:'publish',label:'การแสดงผล',selector:'[name="hidden"]'}], commission:[{id:'service',label:'รายการ',selector:'[name="no"]'},{id:'price',label:'ราคา',selector:'[name="price"]'},{id:'media',label:'รูปภาพ',selector:'[name="image"]'},{id:'publish',label:'การแสดงผล',selector:'[name="hidden"]'}], adopt:[{id:'identity',label:'ตัวละคร',selector:'[name="name"]'},{id:'gallery',label:'Gallery',selector:'[name="gallery"]'},{id:'story',label:'Story',selector:'[name="desc"]'},{id:'details',label:'ข้อมูล',selector:'[name="species"]'},{id:'publish',label:'การแสดงผล',selector:'[name="hidden"]'}], queue:[{id:'job',label:'ข้อมูลงาน',selector:'[name="code"]'},{id:'status',label:'สถานะ',selector:'[name="status"]'},{id:'payment',label:'Payment',selector:'[name="depositPercent"]'},{id:'client',label:'ลูกค้า',selector:'[name="contact"]'},{id:'notes',label:'Notes',selector:'[name="privateNote"]'}] }; return maps[type] || []; }
function editorSectionBlock(target) { return target.closest('.social-links-editor,.upload-grid,.upload-zone,.cms-field,.cms-check') || target; }
let editorNavigationId = 0;
function enhanceEditorFormLayout(form) { if (!form || form.dataset.navigationReady) return; const sections = editorSectionsFor(form).map(section => ({...section,target:form.querySelector(section.selector)})).filter(section => section.target); if (sections.length < 2) return; form.dataset.navigationReady = 'true'; const key = `${form.dataset.page === 'true' ? 'page' : form.dataset.editor}-${form.dataset.index || '0'}-${++editorNavigationId}`; const nav = document.createElement('nav'); nav.className = 'editor-section-nav'; nav.setAttribute('aria-label','ไปยังส่วนที่ต้องการแก้ไข'); nav.innerHTML = `<span>ไปที่</span>${sections.map((section,index) => `<button type="button" class="${index === 0 ? 'active' : ''}" data-editor-jump="${section.id}">${escapeHtml(section.label)}</button>`).join('')}`; const title = $('.admin-section-title', form); (title || form.firstElementChild)?.after(nav); sections.forEach(section => { const block = editorSectionBlock(section.target); const sectionId = `editor-${key}-${section.id}`; block.id = sectionId; block.classList.add('editor-section-target'); const divider = document.createElement('div'); divider.className = 'editor-section-divider'; divider.innerHTML = `<span>${escapeHtml(section.label)}</span><small>${escapeHtml(section.id)}</small>`; block.before(divider); const button = nav.querySelector(`[data-editor-jump="${section.id}"]`); button?.setAttribute('aria-controls', sectionId); button?.addEventListener('click', () => { $$('.editor-section-nav button', form).forEach(item => item.classList.toggle('active', item === button)); block.scrollIntoView({behavior:'smooth',block:'start'}); block.classList.add('editor-section-focus'); setTimeout(() => block.classList.remove('editor-section-focus'), 900); }); }); }
const editorCategoryState = {};
function activateAdoptCategoryTabs(form) {
  if (!form || form.dataset.editor !== 'adopt' || form.dataset.categoryTabsReady) return;
  const grid = $('.cms-form-grid', form);
  const originalNav = $('.editor-section-nav', form);
  const sections = editorSectionsFor(form).filter(section => form.querySelector(section.selector));
  const dividers = grid ? $$(':scope > .editor-section-divider', grid) : [];
  if (!grid || !originalNav || sections.length < 2 || dividers.length !== sections.length) return;
  form.dataset.categoryTabsReady = 'true';
  form.classList.add('adopt-tabbed-form');
  const panels = sections.map((section, index) => {
    const divider = dividers[index];
    const stop = dividers[index + 1] || null;
    const panel = document.createElement('section');
    panel.className = 'editor-section-panel';
    panel.dataset.editorPanel = section.id;
    panel.id = `adopt-panel-${form.dataset.index || 'new'}-${section.id}-${++editorNavigationId}`;
    panel.setAttribute('role','tabpanel');
    grid.insertBefore(panel, divider);
    let node = divider;
    while (node && node !== stop) {
      const next = node.nextElementSibling;
      panel.append(node);
      node = next;
    }
    return panel;
  });
  const galleryPanel = panels[sections.findIndex(section => section.id === 'gallery')];
  if (galleryPanel) $$(':scope > .upload-zone', form).forEach(zone => galleryPanel.append(zone));
  const nav = originalNav.cloneNode(true);
  originalNav.replaceWith(nav);
  nav.setAttribute('role','tablist');
  nav.setAttribute('aria-label','เลือกหมวดข้อมูลตัวละคร');
  const navLabel = $('span', nav);
  if (navLabel) navLabel.textContent = 'หมวดข้อมูล';
  const stateKey = `adopt-${form.dataset.index || 'new'}`;
  const availableIds = sections.map(section => section.id);
  const initial = availableIds.includes(editorCategoryState[stateKey]) ? editorCategoryState[stateKey] : availableIds[0];
  const activate = id => {
    editorCategoryState[stateKey] = id;
    $$('button[data-editor-jump]', nav).forEach(button => {
      const active = button.dataset.editorJump === id;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
    });
    panels.forEach(panel => {
      const active = panel.dataset.editorPanel === id;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
    const inspector = $('#editor-inspector');
    if (inspector) inspector.scrollTo({top:0,behavior:'smooth'});
  };
  $$('button[data-editor-jump]', nav).forEach((button, index) => {
    button.setAttribute('role','tab');
    button.setAttribute('aria-controls', panels[index].id);
    button.onclick = () => activate(button.dataset.editorJump);
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = (index + (event.key === 'ArrowRight' ? 1 : -1) + sections.length) % sections.length;
      const nextButton = $$('button[data-editor-jump]', nav)[nextIndex];
      activate(nextButton.dataset.editorJump);
      nextButton.focus();
    });
  });
  activate(initial);
}
function editorContextLabel(tab) { const labels = {profile:'Profile / Home',posts:'Posts / Journal',commission:'Commission',adopt:'Character Archive',queue:'Commission Queue',wallet:'Wallet / Income',content:'Visibility Settings'}; if (!['posts','commission','adopt','queue'].includes(tab) || visualSelection.type !== tab) return labels[tab] || 'Edit Mode'; if (visualSelection.index < 0) return `${labels[tab]} · เพิ่มรายการใหม่`; const key = dataKey(tab); const item = cmsState[key]?.[visualSelection.index]; const detail = item?.title || item?.name || item?.code || item?.type || `รายการ ${visualSelection.index + 1}`; return `${labels[tab]} · ${detail}`; }
function enhanceEditorWorkspace(tab = visualTab) {
  const editor = $('#visual-editor');
  if (!editor) return;
  const label = editorContextLabel(tab);
  const breadcrumb = $('#visual-breadcrumb');
  if (breadcrumb) breadcrumb.innerHTML = `<span>กำลังแก้ไข</span><b>›</b><strong>${escapeHtml(label)}</strong>`;
  const saved = $('#saved-state');
  if (saved && saved.textContent.trim() === 'All changes saved') saved.textContent = 'บันทึกแล้ว';
  const topActions = $('.visual-top-actions', editor);
  if (topActions && !$('#inspector-toggle')) {
    const toggle = document.createElement('button');
    toggle.id = 'inspector-toggle';
    toggle.className = 'inspector-toggle';
    toggle.type = 'button';
    toggle.innerHTML = '<span>✎</span> แก้ไขข้อมูล';
    toggle.addEventListener('click', () => editor.classList.toggle('inspector-open'));
    topActions.insertBefore(toggle, $('#visual-preview'));
  }
  const inspector = $('#editor-inspector');
  if (inspector) {
    let close = $('.editor-inspector-close', inspector);
    if (!close) {
      close = document.createElement('button');
      close.className = 'editor-inspector-close';
      close.type = 'button';
      close.setAttribute('aria-label','ปิดแถบแก้ไข');
      close.textContent = '×';
      close.addEventListener('click', () => editor.classList.remove('inspector-open'));
    }
    inspector.prepend(close);
    let context = $('.editor-selection-context', inspector);
    if (!context) {
      context = document.createElement('div');
      context.className = 'editor-selection-context';
    }
    close.after(context);
    context.innerHTML = `<i></i><span><small>กำลังแก้ไข</small><strong>${escapeHtml(label)}</strong></span>`;
    $$('.cms-form', inspector).forEach(enhanceEditorFormLayout);
  }
  const toolLabels = {profile:'Profile / Home',posts:'Posts / Home',commission:'Commission Rate',adopt:'Character Archive',queue:'Queue Manager',wallet:'Wallet / Income',content:'Visibility Settings'};
  $$('.editor-tool', editor).forEach(button => {
    let count = $('.editor-tool-count', button);
    const tabName = button.dataset.visualTab;
    button.title = toolLabels[tabName] || 'Edit Mode';
    button.setAttribute('aria-label', toolLabels[tabName] || 'Edit Mode');
    const totals = {posts:cmsState.posts.length,commission:cmsState.commissions.length,adopt:cmsState.adopts.length,queue:cmsState.queue.length,wallet:cmsState.wallet.length};
    if (totals[tabName] === undefined) {
      count?.remove();
      return;
    }
    if (!count) {
      count = document.createElement('b');
      count.className = 'editor-tool-count';
      button.append(count);
    }
    count.textContent = totals[tabName];
  });
  const canvas = $('#editor-canvas');
  if (canvas && !canvas.dataset.mobileInspectorBound) {
    canvas.dataset.mobileInspectorBound = 'true';
    canvas.addEventListener('click', event => {
      if (window.innerWidth <= 900 && event.target.closest('[data-visual-select],[data-visual-add]')) {
        setTimeout(() => editor.classList.add('inspector-open'));
      }
    });
  }
}
function editorMarkup(type, index) {
  const item = index >= 0 ? cmsState[type === 'commission' ? 'commissions' : type === 'adopt' ? 'adopts' : 'queue'][index] : {};
  if (type === 'profile') { const p = cmsState.profile; return `<form class="cms-form" data-editor="profile" data-index="0"><div class="admin-section-title"><strong>แก้ไขโปรไฟล์</strong></div><div class="cms-form-grid">${field('ชื่อที่แสดง','name',p.name)}${field('Username','handle',p.handle)}${field('อาชีพ / Role','role',p.role)}${field('สถานที่','location',p.location)}${field('Email','email',p.email,'email')}${socialLinksMarkup(p)}${field('ชื่อบน Banner','bannerTitle',p.bannerTitle)}${field('คำโปรย Banner','bannerSubtitle',p.bannerSubtitle)}${field('Banner image URL','bannerImage',p.bannerImage)}${field('Avatar image URL','avatarImage',p.avatarImage)}${textarea('แนะนำตัว','bio',p.bio)}${textarea('Note หน้าโปรไฟล์','note',p.note)}${textarea('ประกาศ / Announcement','announcement',p.announcement)}</div><div class="cms-form-actions"><button type="button" class="small-button cms-cancel">ยกเลิก</button><button class="post-button" type="submit">บันทึกโปรไฟล์</button></div></form>`; }
  if (type === 'commission') return `<form class="cms-form" data-editor="commission" data-index="${index}"><div class="admin-section-title"><strong>${index >= 0 ? 'แก้ไขเรทงาน' : 'เพิ่มเรทงาน'}</strong></div><div class="cms-form-grid">${field('ลำดับ','no',item.no || String(cmsState.commissions.length + 1).padStart(2,'0'))}${field('ชื่อแพ็กเกจ','title',item.title)}${field('ราคา','price',item.price)}${textarea('คำอธิบาย','desc',item.desc)}<label class="cms-check"><input name="hidden" type="checkbox" ${item.hidden ? 'checked' : ''} /> ซ่อนรายการนี้จากหน้าสาธารณะ</label></div><div class="cms-form-actions"><button type="button" class="small-button cms-cancel">ยกเลิก</button><button class="post-button" type="submit">บันทึก</button></div></form>`;
  if (type === 'adopt') return `<form class="cms-form" data-editor="adopt" data-index="${index}"><div class="admin-section-title"><strong>${index >= 0 ? 'แก้ไขตัวละคร' : 'เพิ่มตัวละคร'}</strong></div><div class="cms-form-grid">${field('ชื่อ','name',item.name)}${field('ประเภท / ชนิดตัวละคร','type',item.type)}${field('รูปภาพหลัก URL','image',item.image)}${textarea('Gallery URLs (หนึ่งรูปต่อหนึ่งบรรทัด)','gallery',(item.gallery || [item.image]).join('\n'))}${textarea('คำโปรยตัวละคร','desc',item.desc)}${textarea('Backstory / เรื่องราวตัวละคร','story',item.story)}${textarea('Personality / นิสัย','personality',item.personality)}${textarea('Traits / จุดเด่น','traits',item.traits)}${textarea('Design Notes / รายละเอียดดีไซน์','designNotes',item.designNotes)}${textarea('Tags (คั่นด้วย comma)','tags',(item.tags || []).join(', '))}<label class="cms-check"><input name="hidden" type="checkbox" ${item.hidden ? 'checked' : ''} /> ซ่อนตัวนี้จากหน้าสาธารณะ</label></div><div class="cms-form-actions"><button type="button" class="small-button cms-cancel">ยกเลิก</button><button class="post-button" type="submit">บันทึกตัวละคร</button></div></form>`;
  return `<form class="cms-form" data-editor="queue" data-index="${index}"><div class="admin-section-title"><strong>${index >= 0 ? 'แก้ไขคิวงาน' : 'เพิ่มคิวงาน'}</strong></div><div class="cms-form-grid">${field('Private code','code',item.code)}${field('ประเภทงาน','type',item.type)}<label class="cms-field">สถานะ<select name="status">${['Waiting','Sketch','Lineart','Base Color','Rendering','Completed'].map(status => `<option ${item.status === status ? 'selected' : ''}>${status}</option>`).join('')}</select></label>${field('Progress %','progress',item.progress || 0,'number','min="0" max="100"')}${field('กำหนดส่ง','eta',item.eta)}<label class="cms-field">สิทธิ์การใช้งาน<select name="usageType"><option ${item.usageType === 'Personal' ? 'selected' : ''}>Personal</option><option ${item.usageType === 'Commercial' ? 'selected' : ''}>Commercial</option><option ${item.usageType === 'Giveaway' ? 'selected' : ''}>Giveaway</option></select></label>${field('มัดจำ (%)','depositPercent',item.depositPercent || 0,'number','min="0" max="100"')}${field('ราคางาน','amount',item.amount || 0,'number','min="0"')}${field('จ่ายแล้ว','paid',item.paid || 0,'number','min="0"')}${field('Tip','tip',item.tip || 0,'number','min="0"')}${field('ช่องทางติดต่อ','contact',item.contact)}${textarea('Private Note','privateNote',item.privateNote)}<label class="cms-check"><input name="hidden" type="checkbox" ${item.hidden ? 'checked' : ''} /> ซ่อนคิวนี้จากหน้าสาธารณะ</label></div><div class="cms-form-actions"><button type="button" class="small-button cms-cancel">ยกเลิก</button><button class="post-button" type="submit">บันทึก</button></div></form>`;
}
function itemRow(type, item, index) { const title = type === 'commission' ? item.title : type === 'adopt' ? item.name : `${item.code} · ${item.type}`; const meta = type === 'commission' ? item.price : type === 'adopt' ? 'personal character archive' : `${item.status} · ${item.progress}%`; return `<div class="admin-row cms-item-row ${item.hidden ? 'is-hidden' : ''}"><span><strong>${escapeHtml(title)}</strong><small>${item.hidden ? 'ซ่อนอยู่' : meta}</small></span><span class="admin-row-actions"><button class="cms-move-up" data-type="${type}" data-index="${index}" title="เลื่อนขึ้น">↑</button><button class="cms-move-down" data-type="${type}" data-index="${index}" title="เลื่อนลง">↓</button><button class="cms-edit" data-type="${type}" data-index="${index}">แก้ไข</button><button class="cms-delete delete-action" data-type="${type}" data-index="${index}">ลบ</button></span></div>`; }
function listMarkup(type, label, collectionKey) { return `<div class="admin-section-title"><strong>${label}</strong><button class="admin-action cms-add" data-type="${type}">+ เพิ่ม</button></div>${cmsState[collectionKey].map((item,index) => itemRow(type,item,index)).join('') || '<p class="admin-welcome">ยังไม่มีข้อมูล ลองเพิ่มรายการแรกได้เลย</p>'}`; }
function adminMarkup(tab = 'overview') {
  if (tab === 'profile') return editorMarkup('profile', 0);
  if (tab === 'commission') return listMarkup('commission','Commission ทั้งหมด','commissions');
  if (tab === 'adopt') return listMarkup('adopt','Adopt ทั้งหมด','adopts');
  if (tab === 'queue') return listMarkup('queue','คิวงานทั้งหมด','queue');
  if (tab === 'wallet') { const totals = walletTotals(); return `<div class="wallet-total"><span>คอมมิชชั่นรวมทิป</span><strong>฿ ${totals.total.toLocaleString()}</strong><small>Wallet แยกจาก Queue อย่างถาวร</small></div><div class="wallet-grid"><div><small>ค่าคอมมิชชั่น</small><strong>฿${totals.commission.toLocaleString()}</strong></div><div><small>ทิป</small><strong>฿${totals.tips.toLocaleString()}</strong></div></div><div class="admin-section-title"><strong>วิธีใช้</strong></div><p class="admin-welcome">ลบคิวได้โดยข้อมูลรายรับใน Wallet จะไม่หาย สามารถเพิ่มและแก้ไขรายการเงินแยกกันได้</p>`; }
  if (tab === 'content') return `<div class="admin-section-title"><strong>การแสดงผลสาธารณะ</strong></div>${[['profile','Profile / Home'],['commissions','Commission menu'],['adopts','Adopt House'],['queue','Queue tracker']].map(([key,label]) => `<div class="content-toggle cms-setting" data-setting="${key}"><span>${label}<small>${cmsState.settings[key] ? 'แสดงอยู่' : 'ซ่อนอยู่'}</small></span><span class="toggle ${cmsState.settings[key] ? '' : 'off'}"><i></i></span></div>`).join('')}<div class="admin-section-title"><strong>ข้อมูลและความเป็นส่วนตัว</strong></div><p class="admin-welcome">ข้อมูลทุกอย่างใน demo นี้บันทึกไว้ในเบราว์เซอร์เครื่องนี้เท่านั้น เมื่อเชื่อม Firebase แล้วสามารถเปลี่ยนเป็นข้อมูลออนไลน์ได้</p><button class="small-button cms-reset" type="button">รีเซ็ตข้อมูลตัวอย่าง</button>`;
  const totals = walletTotals(); return `<p class="admin-welcome">สวัสดี Una นี่คือภาพรวมของ Studio วันนี้</p><div class="admin-summary"><div class="summary-card"><span>คิวที่กำลังทำ</span><strong>${visibleItems(cmsState.queue).length}</strong><small>ทุกงานอยู่ตามแผน ✦</small></div><div class="summary-card"><span>รายรับรวม</span><strong>฿${totals.total.toLocaleString()}</strong><small>คำนวณจากข้อมูลล่าสุด</small></div></div><div class="admin-section-title"><strong>จัดการข้อมูล</strong></div><div class="admin-row"><span>แก้ไข Profile และรูปภาพ</span><button class="admin-action" data-admin-tab="profile">เปิด →</button></div><div class="admin-row"><span>เพิ่ม Commission / Adopt / Queue</span><button class="admin-action" data-admin-tab="commission">เปิด →</button></div><div class="admin-section-title"><strong>งานล่าสุด</strong></div>${cmsState.queue.slice(0,3).map(item => `<div class="admin-row"><span>${escapeHtml(item.code)} · ${escapeHtml(item.type)}</span><span class="admin-row-meta"><strong>${escapeHtml(item.status)}</strong>${item.progress}%</span></div>`).join('')}`;
}
function renderAdmin(tab = activeAdminTab) { activeAdminTab = tab; const content = $('#admin-content'); if (!content) return; content.innerHTML = adminMarkup(tab); $$('.admin-action[data-admin-tab]', content).forEach(button => button.addEventListener('click', () => setAdminTab(button.dataset.adminTab))); $$('.cms-add', content).forEach(button => button.addEventListener('click', () => { content.innerHTML = editorMarkup(button.dataset.type, -1); bindEditor(); })); $$('.cms-edit', content).forEach(button => button.addEventListener('click', () => { content.innerHTML = editorMarkup(button.dataset.type, Number(button.dataset.index)); bindEditor(); })); $$('.cms-delete', content).forEach(button => button.addEventListener('click', () => deleteItem(button.dataset.type, Number(button.dataset.index)))); $$('.cms-move-up', content).forEach(button => button.addEventListener('click', () => moveItem(button.dataset.type, Number(button.dataset.index), -1))); $$('.cms-move-down', content).forEach(button => button.addEventListener('click', () => moveItem(button.dataset.type, Number(button.dataset.index), 1))); $$('.cms-setting', content).forEach(row => row.addEventListener('click', () => { cmsState.settings[row.dataset.setting] = !cmsState.settings[row.dataset.setting]; saveState('อัปเดตการแสดงผลแล้ว ✦'); renderAdmin('content'); })); $('.cms-reset', content)?.addEventListener('click', () => { if (confirm('ต้องการรีเซ็ตข้อมูลตัวอย่างทั้งหมดหรือไม่?')) { hydrateCmsState(DEFAULT_STATE); saveState('รีเซ็ตข้อมูลตัวอย่างแล้ว ✦'); renderAdmin('overview'); } }); }
function hydrateCmsState(data) { const saved = data || {}; const queue = (Array.isArray(saved.queue) ? saved.queue : clone(DEFAULT_STATE.queue)).map((item,index) => ({...(DEFAULT_STATE.queue[index] || {}), ...item})); cmsState = {...clone(DEFAULT_STATE), ...saved, profile:{...DEFAULT_STATE.profile,...(saved.profile || {})}, settings:{...DEFAULT_STATE.settings,...(saved.settings || {})}, posts:Array.isArray(saved.posts) ? saved.posts : clone(DEFAULT_STATE.posts), commissions:Array.isArray(saved.commissions) ? saved.commissions : clone(DEFAULT_STATE.commissions), adopts:(Array.isArray(saved.adopts) ? saved.adopts : clone(DEFAULT_STATE.adopts)).map(item => ({...(ADOPT_DETAIL_DEFAULTS[item.id] || {}), ...item, gallery:item.gallery?.length ? item.gallery : [item.image]})), queue, wallet:normalizeWalletEntries(Array.isArray(saved.wallet) ? saved.wallet : walletEntriesFromQueue(queue)), commissionPage:{...clone(DEFAULT_COMMISSION_PAGE), ...(saved.commissionPage || {}), terms:saved.commissionPage?.terms || clone(DEFAULT_COMMISSION_PAGE.terms), addons:saved.commissionPage?.addons || clone(DEFAULT_COMMISSION_PAGE.addons)}}; cmsState.profile.socialLabel = cmsState.profile.socialLabel || 'SOCIALS'; cmsState.profile.socialUrl = cmsState.profile.socialUrl || 'index.html#contact'; normalizeProfileSocials(cmsState.profile); cmsState.adopts.forEach(item => { item.tags = (item.tags || []).filter(tag => !/commercial\s*add-on|claimed|available/i.test(tag)); delete item.price; delete item.status; }); cmsState.queue.forEach(item => delete item.addons); }
function exportCmsBackup() { const blob = new Blob([JSON.stringify(cmsState, null, 2)], {type:'application/json'}); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `una-yaha-backup-${new Date().toISOString().slice(0,10)}.json`; link.click(); URL.revokeObjectURL(url); showToast('ดาวน์โหลด Backup แล้ว ✦'); }
function importCmsBackup(file) { if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const data = JSON.parse(reader.result); if (!data.profile || !Array.isArray(data.queue)) throw new Error('invalid backup'); hydrateCmsState(data); saveState('กู้คืนข้อมูลจาก Backup แล้ว ✦'); renderAdmin('content'); } catch { showToast('ไฟล์ Backup ไม่ถูกต้อง'); } }; reader.readAsText(file); }
function bindDataTools() { const content = $('#admin-content'); if (!content || $('#cms-data-tools')) return; content.insertAdjacentHTML('beforeend', '<div class="cms-data-tools" id="cms-data-tools"><div><strong>สำรองข้อมูลเว็บไซต์</strong><p>ดาวน์โหลดข้อมูลเก็บไว้ หรือกู้คืนจากไฟล์ Backup ได้ทุกเมื่อ</p></div><div class="cms-data-actions"><button class="small-button" id="cms-export" type="button">ดาวน์โหลด Backup</button><label class="small-button" for="cms-import">นำเข้า Backup<input id="cms-import" type="file" accept="application/json,.json" /></label></div></div>'); $('#cms-export').addEventListener('click', exportCmsBackup); $('#cms-import').addEventListener('change', event => importCmsBackup(event.target.files[0])); }
const baseRenderAdmin = renderAdmin;
renderAdmin = function(tab = activeAdminTab) { baseRenderAdmin(tab); if (tab === 'content') bindDataTools(); };
function setAdminTab(tab) { $$('.admin-tab').forEach(button => button.classList.toggle('active', button.dataset.adminTab === tab)); renderAdmin(tab); }
function bindEditor() { $('.cms-form')?.addEventListener('submit', event => { event.preventDefault(); saveEditor(event.currentTarget); }); $('.cms-cancel')?.addEventListener('click', () => { if ($('#visual-editor')?.classList.contains('open')) renderVisualEditor(visualTab); else renderAdmin(activeAdminTab); }); }
function readImageFile(file) { return new Promise((resolve, reject) => { if (!file || !file.type.startsWith('image/')) return resolve(''); const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); }); }
function readImageFiles(files) { return Promise.all([...files].filter(file => file.type.startsWith('image/')).map(readImageFile)); }
const IMAGE_CROP_PRESETS = {
  banner:{label:'Banner',width:1800,height:480},
  avatar:{label:'Profile',width:900,height:900}
};
let imageCropState = null;
function renderImageCropper() {
  if (!imageCropState) return;
  const {canvas,image,preset} = imageCropState;
  const context = canvas.getContext('2d');
  const baseScale = Math.max(preset.width / image.naturalWidth, preset.height / image.naturalHeight);
  const scale = baseScale * imageCropState.zoom;
  const width = image.naturalWidth * scale;
  const height = image.naturalHeight * scale;
  const maxX = Math.max(0, (width - preset.width) / 2);
  const maxY = Math.max(0, (height - preset.height) / 2);
  imageCropState.offsetX = Math.max(-maxX, Math.min(maxX, imageCropState.offsetX));
  imageCropState.offsetY = Math.max(-maxY, Math.min(maxY, imageCropState.offsetY));
  context.clearRect(0, 0, preset.width, preset.height);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = 'high';
  context.drawImage(image, (preset.width - width) / 2 + imageCropState.offsetX, (preset.height - height) / 2 + imageCropState.offsetY, width, height);
  const output = $('#image-crop-zoom-value');
  if (output) output.textContent = `${Math.round(imageCropState.zoom * 100)}%`;
}
function syncProfileCropPreview(form, target) {
  if (!form) return;
  const input = form.querySelector(`[name="${target}Upload"]`);
  const field = form.querySelector(`[name="${target}Image"]`);
  const source = input?.dataset.croppedImage || field?.value || cmsState.profile[`${target}Image`];
  const preview = target === 'banner' ? $('.canvas-banner img', $('#editor-canvas')) : $('.canvas-profile-card img', $('#editor-canvas'));
  if (preview && source) preview.src = source;
}
function setCropUploadStatus(input, message) {
  const zone = input?.closest('.upload-zone');
  if (!zone) return;
  let status = $('.crop-upload-status', zone);
  if (!status) {
    status = document.createElement('span');
    status.className = 'crop-upload-status';
    zone.append(status);
  }
  status.textContent = message;
  zone.classList.toggle('crop-ready', Boolean(message));
}
function closeImageCropper(accepted = false) {
  const modal = $('#image-crop-modal');
  const state = imageCropState;
  if (!modal) return;
  if (!accepted && state?.input) {
    state.input.value = '';
    syncProfileCropPreview(state.form, state.target);
  }
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  imageCropState = null;
  document.body.style.overflow = $('#visual-editor')?.classList.contains('open') ? 'hidden' : '';
  state?.input?.focus();
}
function bindImageCropperUi() {
  const modal = $('#image-crop-modal');
  const canvas = $('#image-crop-canvas');
  const zoom = $('#image-crop-zoom');
  if (!modal || !canvas || modal.dataset.bound) return;
  modal.dataset.bound = 'true';
  $('.image-crop-close', modal)?.addEventListener('click', () => closeImageCropper(false));
  $('.image-crop-cancel', modal)?.addEventListener('click', () => closeImageCropper(false));
  modal.addEventListener('click', event => { if (event.target === modal) closeImageCropper(false); });
  zoom?.addEventListener('input', () => { if (!imageCropState) return; imageCropState.zoom = Number(zoom.value); renderImageCropper(); });
  $('#image-crop-reset')?.addEventListener('click', () => {
    if (!imageCropState) return;
    imageCropState.zoom = 1;
    imageCropState.offsetX = 0;
    imageCropState.offsetY = 0;
    zoom.value = '1';
    renderImageCropper();
  });
  $('#image-crop-apply')?.addEventListener('click', () => {
    if (!imageCropState) return;
    const {input,form,target,fileName} = imageCropState;
    input.dataset.croppedImage = canvas.toDataURL('image/webp', .9);
    input.dataset.cropFileName = fileName || 'cropped-image';
    input.value = '';
    setCropUploadStatus(input, `✓ ครอป ${IMAGE_CROP_PRESETS[target].label} แล้ว · พร้อมบันทึก`);
    syncProfileCropPreview(form, target);
    markEditorDirty();
    closeImageCropper(true);
  });
  canvas.addEventListener('pointerdown', event => {
    if (!imageCropState) return;
    imageCropState.dragging = true;
    imageCropState.lastX = event.clientX;
    imageCropState.lastY = event.clientY;
    canvas.setPointerCapture(event.pointerId);
    canvas.focus({preventScroll:true});
  });
  canvas.addEventListener('pointermove', event => {
    if (!imageCropState?.dragging) return;
    const rect = canvas.getBoundingClientRect();
    imageCropState.offsetX += (event.clientX - imageCropState.lastX) * (canvas.width / rect.width);
    imageCropState.offsetY += (event.clientY - imageCropState.lastY) * (canvas.height / rect.height);
    imageCropState.lastX = event.clientX;
    imageCropState.lastY = event.clientY;
    renderImageCropper();
  });
  const stopDragging = event => {
    if (!imageCropState) return;
    imageCropState.dragging = false;
    if (event.pointerId !== undefined && canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
  };
  canvas.addEventListener('pointerup', stopDragging);
  canvas.addEventListener('pointercancel', stopDragging);
  canvas.addEventListener('keydown', event => {
    if (!imageCropState || !['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const step = event.shiftKey ? 30 : 8;
    if (event.key === 'ArrowLeft') imageCropState.offsetX -= step;
    if (event.key === 'ArrowRight') imageCropState.offsetX += step;
    if (event.key === 'ArrowUp') imageCropState.offsetY -= step;
    if (event.key === 'ArrowDown') imageCropState.offsetY += step;
    renderImageCropper();
  });
  canvas.addEventListener('wheel', event => {
    if (!imageCropState) return;
    event.preventDefault();
    imageCropState.zoom = Math.max(1, Math.min(3, imageCropState.zoom + (event.deltaY < 0 ? .08 : -.08)));
    zoom.value = String(imageCropState.zoom);
    renderImageCropper();
  }, {passive:false});
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeImageCropper(false);
  });
}
async function openImageCropper(file, input, form, target) {
  if (!file || !file.type.startsWith('image/')) return;
  bindImageCropperUi();
  let source = '';
  try {
    source = await readImageFile(file);
  } catch {
    input.value = '';
    setCropUploadStatus(input, 'ไม่สามารถอ่านไฟล์รูปนี้ได้');
    return;
  }
  const image = new Image();
  image.onload = () => {
    const preset = IMAGE_CROP_PRESETS[target];
    const modal = $('#image-crop-modal');
    const stage = $('#image-crop-stage');
    const canvas = $('#image-crop-canvas');
    const zoom = $('#image-crop-zoom');
    if (!preset || !modal || !stage || !canvas) return;
    canvas.width = preset.width;
    canvas.height = preset.height;
    stage.className = `image-crop-stage ${target}`;
    stage.style.aspectRatio = `${preset.width} / ${preset.height}`;
    $('#image-crop-title').textContent = `ครอป ${preset.label} ก่อนบันทึก`;
    $('#image-crop-description').textContent = target === 'avatar' ? 'จัดใบหน้าหรือตัวละครให้อยู่ในกรอบวงกลม' : 'จัดองค์ประกอบภาพแนวนอนให้พอดีกับพื้นที่ Banner';
    imageCropState = {image,input,form,target,preset,canvas,zoom:1,offsetX:0,offsetY:0,dragging:false,fileName:file.name};
    zoom.value = '1';
    renderImageCropper();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    canvas.focus({preventScroll:true});
  };
  image.onerror = () => { input.value = ''; setCropUploadStatus(input, 'ไม่สามารถเปิดรูปนี้ได้'); };
  image.src = source;
}
function bindProfileCropper(form) {
  if (!form || form.dataset.editor !== 'profile') return;
  [['bannerUpload','banner'],['avatarUpload','avatar']].forEach(([name,target]) => {
    const input = form.querySelector(`[name="${name}"]`);
    if (!input || input.dataset.cropBound) return;
    input.dataset.cropBound = 'true';
    input.addEventListener('change', event => {
      event.stopPropagation();
      const file = input.files?.[0];
      if (file) openImageCropper(file, input, form, target);
    });
  });
}
async function saveEditor(form) {
  const formData = new FormData(form);
  const type = form.dataset.editor;
  const index = Number(form.dataset.index);
  if (type === 'profile') {
    Object.keys(cmsState.profile).forEach(key => { if (formData.has(key)) cmsState.profile[key] = formData.get(key); });
    const bannerInput = form.querySelector('[name="bannerUpload"]');
    const avatarInput = form.querySelector('[name="avatarUpload"]');
    const banner = bannerInput?.dataset.croppedImage || await readImageFile(bannerInput?.files?.[0]);
    const avatar = avatarInput?.dataset.croppedImage || await readImageFile(avatarInput?.files?.[0]);
    if (banner) cmsState.profile.bannerImage = banner;
    if (avatar) cmsState.profile.avatarImage = avatar;
  } else {
    const key = dataKey(type);
    const current = index >= 0 ? cmsState[key][index] : {id:`${type}-${Date.now()}`};
    const next = {...current};
    formData.forEach((value, name) => {
      if (name === 'hidden') next.hidden = true;
      else if (['progress','depositPercent','amount','paid','commission','tip'].includes(name)) next[name] = Number(value) || 0;
      else if (name === 'tags') next.tags = value.split(',').map(tag => tag.trim()).filter(Boolean);
      else if (name === 'gallery') next.gallery = value.split(/\r?\n/).map(url => url.trim()).filter(Boolean);
      else if (!name.startsWith('showField_') && !name.endsWith('Upload')) next[name] = value;
    });
    if (!formData.has('hidden')) next.hidden = false;
    const image = await readImageFile(form.querySelector('[name="imageUpload"]')?.files?.[0]);
    if (image) next.image = image;
    const galleryImages = await readImageFiles(form.querySelector('[name="galleryUpload"]')?.files || []);
    if (type === 'adopt' && galleryImages.length) {
      next.gallery = [...(next.gallery || []), ...galleryImages];
      if (!next.image) next.image = galleryImages[0];
    }
    if (type === 'adopt') {
      if ((!next.gallery || !next.gallery.length) && next.image) next.gallery = [next.image];
      next.visibleFields = Object.fromEntries(CHARACTER_FIELD_OPTIONS.map(option => [option.key, formData.has(`showField_${option.key}`)]));
    }
    if (type === 'queue') syncQueuePaymentToWallet(next, current.code || '');
    if (index >= 0) cmsState[key][index] = next;
    else { cmsState[key].push(next); if ($('#visual-editor')?.classList.contains('open')) visualSelection = {type,index:cmsState[key].length - 1}; }
  }
  saveState('ข้อมูลถูกบันทึกแล้ว ✦');
  if ($('#visual-editor')?.classList.contains('open')) renderVisualEditor(type === 'profile' ? 'profile' : type);
  else renderAdmin(type === 'profile' ? 'profile' : type);
}
function deleteItem(type, index, confirmed = false) {
  const key = dataKey(type);
  const collection = cmsState[key];
  const item = collection?.[index];
  if (!item) return false;
  const itemName = item.title || item.name || item.code || `รายการ ${index + 1}`;
  if (!confirmed && !confirm(`ต้องการลบ “${itemName}” หรือไม่?\nเมื่อลบแล้วจะไม่สามารถย้อนกลับได้`)) return false;
  const [removed] = collection.splice(index, 1);
  try {
    saveState('ลบรายการแล้ว ✦');
  } catch {
    collection.splice(index, 0, removed);
    alert('ไม่สามารถลบรายการได้ กรุณาลองอีกครั้ง');
    return false;
  }
  if ($('#visual-editor')?.classList.contains('open')) {
    visualSelection = {type,index:Math.min(index, collection.length - 1)};
    renderVisualEditor(type);
  } else renderAdmin(type);
  return true;
}
function moveItem(type, index, direction) { const key = dataKey(type); const next = index + direction; if (next < 0 || next >= cmsState[key].length) return; [cmsState[key][index],cmsState[key][next]] = [cmsState[key][next],cmsState[key][index]]; saveState('จัดลำดับใหม่แล้ว ✦'); if (!$('#visual-editor')?.classList.contains('open')) renderAdmin(type); }
let visualTab = 'profile'; let visualSelection = { type:'profile', index:0 };
function visualFormMarkup(type, index) { let form = editorMarkup(type, index); const uploads = type === 'profile' ? `<div class="upload-grid"><label class="upload-zone">อัปโหลด Banner จาก Gallery<input name="bannerUpload" type="file" accept="image/*" /></label><label class="upload-zone">อัปโหลด Avatar จาก Gallery<input name="avatarUpload" type="file" accept="image/*" /></label></div>` : type === 'adopt' || type === 'commission' ? `<label class="upload-zone">อัปโหลดรูปจาก Gallery<input name="imageUpload" type="file" accept="image/*" /></label>` : ''; form = form.replace('<div class="cms-form-actions">', `${uploads}<div class="cms-form-actions">`); if (type !== 'profile' && index >= 0) form += `<div class="visual-item-actions"><button type="button" class="visual-move-up" data-type="${type}" data-index="${index}">↑ เลื่อนขึ้น</button><button type="button" class="visual-move-down" data-type="${type}" data-index="${index}">↓ เลื่อนลง</button><button type="button" class="visual-duplicate" data-type="${type}" data-index="${index}">คัดลอก</button><button type="button" class="visual-delete" data-type="${type}" data-index="${index}">ลบรายการนี้</button></div>`; return form; }
function visualFormMarkup(type, index) { if (type === 'posts') { const item = index >= 0 ? cmsState.posts[index] : {}; return `<form class="cms-form" data-editor="posts" data-index="${index}"><div class="admin-section-title"><strong>${index >= 0 ? 'แก้ไขโพสต์' : 'สร้างโพสต์ใหม่'}</strong></div><div class="cms-form-grid">${field('หัวข้อโพสต์','title',item.title)}${field('ป้ายกำกับ','label',item.label || 'POSTED · NEW')}${field('วันที่','date',item.date || 'TODAY')}${field('Notes','notes',item.notes || '♡ save · share')}${textarea('เนื้อหาโพสต์','body',item.body)}${textarea('Tags (คั่นด้วย comma)','tags',(item.tags || []).join(', '))}${field('รูปภาพ URL (ถ้ามี)','image',item.image || '')}<label class="cms-check"><input name="hidden" type="checkbox" ${item.hidden ? 'checked' : ''} /> ซ่อนโพสต์นี้จากหน้าสาธารณะ</label></div><label class="upload-zone">อัปโหลดรูปจาก Gallery<input name="imageUpload" type="file" accept="image/*" /></label><div class="cms-form-actions"><button type="button" class="small-button cms-cancel">ยกเลิก</button><button class="post-button" type="submit">บันทึกโพสต์</button></div></form>${index >= 0 ? `<div class="visual-item-actions"><button type="button" class="visual-move-up" data-type="posts" data-index="${index}">↑ เลื่อนขึ้น</button><button type="button" class="visual-move-down" data-type="posts" data-index="${index}">↓ เลื่อนลง</button><button type="button" class="visual-duplicate" data-type="posts" data-index="${index}">คัดลอก</button><button type="button" class="visual-delete" data-type="posts" data-index="${index}">ลบโพสต์นี้</button></div>` : ''}`; } let form = editorMarkup(type, index); const uploads = type === 'profile' ? `<div class="upload-grid"><label class="upload-zone">อัปโหลด Banner จาก Gallery<input name="bannerUpload" type="file" accept="image/*" /></label><label class="upload-zone">อัปโหลด Avatar จาก Gallery<input name="avatarUpload" type="file" accept="image/*" /></label></div>` : type === 'adopt' || type === 'commission' ? `<label class="upload-zone">อัปโหลดรูปจาก Gallery<input name="imageUpload" type="file" accept="image/*" /></label>` : ''; form = form.replace('<div class="cms-form-actions">', `${uploads}<div class="cms-form-actions">`); if (type !== 'profile' && index >= 0) form += `<div class="visual-item-actions"><button type="button" class="visual-move-up" data-type="${type}" data-index="${index}">↑ เลื่อนขึ้น</button><button type="button" class="visual-move-down" data-type="${type}" data-index="${index}">↓ เลื่อนลง</button><button type="button" class="visual-duplicate" data-type="${type}" data-index="${index}">คัดลอก</button><button type="button" class="visual-delete" data-type="${type}" data-index="${index}">ลบรายการนี้</button></div>`; return form; }
function commissionPageFormMarkup() { const page = cmsState.commissionPage; return `<form class="cms-form commission-page-form" data-editor="commission" data-page="true" data-index="0"><div class="admin-section-title"><strong>แก้ไข Commission Rate, Add-ons และ Terms</strong></div><div class="cms-form-grid">${field('ชื่อหัวข้อ Commission (เช่น Commission Rate)','title',page.title)}${field('ข้อความเปิดรับงาน','opening',page.opening)}${textarea('คำอธิบายหน้า Commission','intro',page.intro)}${textarea('Booking Note','bookingNote',page.bookingNote)}${field('ข้อความลิงก์ Terms','bookingLinkLabel',page.bookingLinkLabel)}${field('ชื่อ Add-ons','addonsLabel',page.addonsLabel)}${textarea('รายการ Add-ons (หนึ่งรายการต่อหนึ่งบรรทัด)','addons',(page.addons || []).join('\n'))}${field('Quick Link 1','quickLink1Label',page.quickLink1Label)}${field('Quick Link 1 URL','quickLink1Url',page.quickLink1Url)}${field('Quick Link 2','quickLink2Label',page.quickLink2Label)}${field('Quick Link 2 URL','quickLink2Url',page.quickLink2Url)}${field('Quick Link 3','quickLink3Label',page.quickLink3Label)}${field('Quick Link 3 URL','quickLink3Url',page.quickLink3Url)}${field('หัวข้อ Terms of Service','termsTitle',page.termsTitle)}${field('คำโปรย Terms of Service','termsSubtitle',page.termsSubtitle)}${(page.terms || []).map((term,index) => `${field(`หัวข้อ Terms ${index + 1}`,`termTitle${index + 1}`,term.title)}${textarea(`รายละเอียด Terms ${index + 1}`,`termBody${index + 1}`,term.body)}`).join('')}</div><div class="cms-form-actions"><button type="button" class="small-button cms-cancel">ยกเลิก</button><button class="post-button" type="submit">บันทึกหน้า Commission</button></div></form>`; }
function addAdoptGalleryUpload(form) { if (!form || form.dataset.editor !== 'adopt' || form.querySelector('[name="galleryUpload"]')) return; const zone = document.createElement('label'); zone.className = 'upload-zone'; zone.innerHTML = 'อัปโหลดรูป Gallery จากเครื่อง (เลือกได้หลายรูป)<input name="galleryUpload" type="file" accept="image/*" multiple />'; form.querySelector('.cms-form-actions')?.before(zone); }
function addAdoptInfoFields(form) {
  if (!form || form.dataset.editor !== 'adopt' || form.querySelector('[name="species"]')) return;
  const grid = form.querySelector('.cms-form-grid');
  if (!grid) return;
  const markup = `${field('Species / เผ่าพันธุ์','species','')}${field('Pronouns / สรรพนาม','pronouns','')}${field('Age / อายุ','age','')}${field('Height / ส่วนสูง','height','')}${textarea('Likes / สิ่งที่ชอบ','likes','')}${textarea('Dislikes / สิ่งที่ไม่ชอบ','dislikes','')}${textarea('Owner Notes / โน้ตส่วนตัว','ownerNotes','')}`;
  const visibility = form.querySelector('[name="hidden"]')?.closest('.cms-check');
  if (visibility) visibility.insertAdjacentHTML('beforebegin', markup);
  else grid.insertAdjacentHTML('beforeend', markup);
  const raw = cmsState.adopts[Number(form.dataset.index)];
  if (raw) {
    ['species','pronouns','age','height','likes','dislikes','ownerNotes'].forEach(name => {
      const input = form.querySelector(`[name="${name}"]`);
      if (input) input.value = raw[name] || '';
    });
  }
}
const CHARACTER_FIELD_OPTIONS = [
  {key:'gallery',label:'Gallery',hint:'รูปหลักและรูปเพิ่มเติม'},
  {key:'desc',label:'Short Description',hint:'คำโปรยใต้ชื่อตัวละคร'},
  {key:'species',label:'Species',hint:'เผ่าพันธุ์'},
  {key:'pronouns',label:'Pronouns',hint:'สรรพนาม'},
  {key:'age',label:'Age',hint:'อายุ'},
  {key:'height',label:'Height',hint:'ส่วนสูง'},
  {key:'story',label:'Backstory',hint:'เรื่องราวตัวละคร'},
  {key:'personality',label:'Personality',hint:'นิสัย'},
  {key:'traits',label:'Traits',hint:'จุดเด่น'},
  {key:'designNotes',label:'Design Notes',hint:'รายละเอียดดีไซน์'},
  {key:'likes',label:'Likes',hint:'สิ่งที่ชอบ'},
  {key:'dislikes',label:'Dislikes',hint:'สิ่งที่ไม่ชอบ'},
  {key:'tags',label:'Tags',hint:'ป้ายกำกับ'},
  {key:'ownerNotes',label:'Owner Notes',hint:'โน้ตจากเจ้าของ'}
];
function hasCharacterFieldContent(item, key) {
  if (key === 'gallery') return Boolean((item.gallery || []).filter(Boolean).length || item.image);
  if (key === 'tags') return Boolean((item.tags || []).filter(Boolean).length);
  const value = String(item[key] ?? '').trim();
  return Boolean(value && !/^(?:-|—|ยังไม่มี(?:ข้อมูล|เรื่องราว|backstory)?)/i.test(value));
}
function characterFieldVisible(item, key) {
  const settings = item.visibleFields || {};
  if (Object.prototype.hasOwnProperty.call(settings, key)) return settings[key] !== false;
  return hasCharacterFieldContent(item, key);
}
function addCharacterVisibilityFields(form) {
  if (!form || form.dataset.editor !== 'adopt' || $('.character-field-visibility', form)) return;
  const visibility = form.querySelector('[name="hidden"]')?.closest('.cms-check');
  if (!visibility) return;
  const raw = cmsState.adopts[Number(form.dataset.index)] || {};
  const block = document.createElement('section');
  block.className = 'character-field-visibility';
  block.innerHTML = `<header><div><strong>ส่วนที่แสดงบนหน้าตัวละคร</strong><p>ปิดส่วนที่ไม่ใช้ได้โดยข้อมูลเดิมจะไม่ถูกลบ</p></div><span>PAGE LAYOUT</span></header><div class="character-visibility-grid">${CHARACTER_FIELD_OPTIONS.map(option => `<label class="character-visibility-toggle"><input name="showField_${option.key}" type="checkbox" ${characterFieldVisible(raw, option.key) ? 'checked' : ''} /><span><b>${escapeHtml(option.label)}</b><small>${escapeHtml(option.hint)}</small></span><i aria-hidden="true"></i></label>`).join('')}</div>`;
  visibility.after(block);
}
function updateLiveEditorPreview(form) { const canvas = $('#editor-canvas'); if (!canvas || !form) return; const get = name => form.querySelector(`[name="${name}"]`)?.value || ''; const type = form.dataset.editor; if (form.dataset.page === 'true') { let panel = $('.live-page-preview', canvas); if (!panel) { panel = document.createElement('div'); panel.className = 'live-page-preview'; $('.canvas-page-title', canvas)?.after(panel); } const terms = [...form.querySelectorAll('[name^="termTitle"]')].map(input => input.value).filter(Boolean); panel.innerHTML = `<small>LIVE PAGE PREVIEW</small><h2>${escapeHtml(get('title') || 'Commission page')}</h2><p>${escapeHtml(get('intro'))}</p><div><strong>${escapeHtml(get('addonsLabel'))}</strong> ${escapeHtml((get('addons') || '').split(/\r?\n/).filter(Boolean).join(' · '))}</div><em>${escapeHtml(get('termsTitle'))} · ${escapeHtml(terms.join(' · '))}</em>`; return; } if (type === 'profile') { const banner = $('.canvas-banner span', canvas); const name = $('.canvas-profile-card strong', canvas); const handle = $('.canvas-profile-card small', canvas); const bio = $('.canvas-profile-card p', canvas); const socials = $('.canvas-profile-socials', canvas); if (banner) banner.textContent = get('bannerTitle'); if (name) name.textContent = get('name'); if (handle) handle.textContent = get('handle'); if (bio) bio.innerHTML = escapeHtml(get('bio')).replace(/\n/g,'<br />'); if (socials) socials.textContent = ['EMAIL', ...[...form.querySelectorAll('input[name^="socialLabel"]')].map(input => input.value.trim()).filter(Boolean)].join(' · '); const bannerImage = form.querySelector('[name="bannerUpload"]')?.files?.[0]; const avatarImage = form.querySelector('[name="avatarUpload"]')?.files?.[0]; if (bannerImage && $('.canvas-banner img', canvas)) $('.canvas-banner img', canvas).src = URL.createObjectURL(bannerImage); if (avatarImage && $('.canvas-profile-card img', canvas)) $('.canvas-profile-card img', canvas).src = URL.createObjectURL(avatarImage); return; } const index = Number(form.dataset.index); const selected = canvas.querySelector(`[data-visual-select="${type}"][data-index="${index}"]`); if (!selected) return; if (type === 'posts') { $('strong', selected).textContent = get('title'); $('em', selected).textContent = get('body'); const file = form.querySelector('[name="imageUpload"]')?.files?.[0]; if (file && $('img', selected)) $('img', selected).src = URL.createObjectURL(file); } else if (type === 'commission') { $('strong', selected).textContent = get('title'); $('em', selected).textContent = get('price'); } else if (type === 'adopt') { $('strong', selected).textContent = get('name'); const image = $('img', selected); const file = form.querySelector('[name="imageUpload"]')?.files?.[0]; if (file && image) image.src = URL.createObjectURL(file); else if (image && get('image')) image.src = get('image'); } else if (type === 'queue') { $('.queue-code', selected).textContent = get('code'); $('.queue-editor-card-head strong', selected).textContent = get('type'); $('.queue-editor-card-head em', selected).textContent = get('status'); const progress = $('.queue-progress span', selected); if (progress) progress.style.width = `${Math.max(0, Math.min(100, Number(get('progress')) || 0))}%`; const values = $$('.queue-detail-grid b', selected); if (values[0]) values[0].textContent = `${Number(get('progress')) || 0}%`; if (values[1]) values[1].textContent = get('eta') || '—'; if (values[2]) values[2].textContent = get('contact') || '—'; if (values[3]) values[3].textContent = `฿${(Number(get('amount')) || 0).toLocaleString()}`; if (values[4]) values[4].textContent = `฿${(Number(get('paid')) || 0).toLocaleString()}`; if (values[5]) values[5].textContent = `฿${Math.max(0, (Number(get('amount')) || 0) - (Number(get('paid')) || 0)).toLocaleString()}`; if (values[6]) values[6].textContent = `฿${(Number(get('tip')) || 0).toLocaleString()}`; } }
const baseUpdateLiveEditorPreviewWithCrop = updateLiveEditorPreview;
updateLiveEditorPreview = function(form) {
  baseUpdateLiveEditorPreviewWithCrop(form);
  if (form?.dataset.editor === 'profile') {
    syncProfileCropPreview(form, 'banner');
    syncProfileCropPreview(form, 'avatar');
  }
};
const baseBindEditor = bindEditor;
bindEditor = function() {
  $$('.cms-form').forEach(form => {
    addAdoptInfoFields(form);
    addCharacterVisibilityFields(form);
    addAdoptGalleryUpload(form);
    bindSocialEditor(form);
    bindProfileCropper(form);
    addCharacterVisibilityFields(form);
    enhanceEditorFormLayout(form);
    activateAdoptCategoryTabs(form);
  });
  $$('.cms-cancel').forEach(button => {
    if (!button.dataset.bound) {
      button.dataset.bound = 'true';
      button.addEventListener('click', () => {
        if ($('#visual-editor')?.classList.contains('open')) renderVisualEditor(visualTab);
        else renderAdmin(activeAdminTab);
      });
    }
  });
  $$('.cms-form').forEach(form => {
    if (!form.dataset.liveBound) {
      form.dataset.liveBound = 'true';
      form.addEventListener('submit', event => {
        event.preventDefault();
        saveEditor(form);
      });
      ['input','change'].forEach(eventName => form.addEventListener(eventName, () => {
        markEditorDirty();
        updateLiveEditorPreview(form);
      }));
    }
    bindSocialEditor(form);
    bindProfileCropper(form);
    enhanceEditorFormLayout(form);
    activateAdoptCategoryTabs(form);
    updateLiveEditorPreview(form);
  });
  if ($('#visual-editor')?.classList.contains('open')) enhanceEditorWorkspace(visualTab);
};
const baseSaveEditor = saveEditor;
saveEditor = async function(form) { if (form?.dataset.page === 'true') { const formData = new FormData(form); const next = {...cmsState.commissionPage, terms:clone(cmsState.commissionPage.terms || [])}; formData.forEach((value,name) => { if (name === 'addons') next.addons = value.split(/\r?\n/).map(item => item.trim()).filter(Boolean); else if (name.startsWith('termTitle')) { const index = Number(name.replace('termTitle','')) - 1; if (next.terms[index]) next.terms[index].title = value; } else if (name.startsWith('termBody')) { const index = Number(name.replace('termBody','')) - 1; if (next.terms[index]) next.terms[index].body = value; } else next[name] = value; }); cmsState.commissionPage = next; saveState('อัปเดตหน้า Commission แล้ว ✦'); if ($('#visual-editor')?.classList.contains('open')) renderVisualEditor('commission'); else renderAdmin('commission'); return; } return baseSaveEditor(form); };
const baseSaveEditorWithPage = saveEditor;
saveEditor = async function(form) { if (form?.dataset.editor === 'profile') { cmsState.profile.socialLinks = [...form.querySelectorAll('input[name^="socialLabel"]')].map((labelInput, index) => ({ label:labelInput.value.trim(), url:form.querySelector(`[name="socialUrl${index}"]`)?.value.trim() || '#' })).filter(link => link.label || link.url); normalizeProfileSocials(cmsState.profile); } return baseSaveEditorWithPage(form); };

renderAdopts = function() { const el = $('#adopt-grid'); if (!el) return; const list = visibleItems(cmsState.adopts); el.innerHTML = list.length ? list.map(item => `<article class="adopt-card" data-adopt="${escapeHtml(item.id)}" tabindex="0" role="link"><div class="adopt-image"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)} — ${escapeHtml(item.type)}" /><span class="adopt-status owned">owned character</span></div><div class="adopt-card-meta"><div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.type)}</p></div><div class="adopt-card-archive">character archive →</div></div></article>`).join('') : '<p class="adopt-empty">ยังไม่มีตัวละครในคลังนี้ ✦</p>'; $$('.adopt-card', el).forEach(card => { const open = () => { window.location.href = `character.html?id=${encodeURIComponent(card.dataset.adopt)}`; }; card.addEventListener('click', open); card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } }); }); };

openAdopt = function(id) { const raw = cmsState.adopts.find(adopt => adopt.id === id); const item = {...(ADOPT_DETAIL_DEFAULTS[id] || {}), ...raw}; const content = $('#adopt-modal-content'); if (!item || !content) return; const gallery = (item.gallery?.length ? item.gallery : [item.image]).filter(Boolean); const info = [['SPECIES', item.species || item.type],['PRONOUNS', item.pronouns || '—'],['AGE', item.age || '—'],['HEIGHT', item.height || '—']]; content.innerHTML = `<div class="adopt-modal-art"><img class="adopt-modal-main-image" src="${escapeHtml(gallery[0] || item.image)}" alt="${escapeHtml(item.name)}" /><div class="adopt-gallery-strip">${gallery.map((image,index) => `<button class="adopt-gallery-thumb ${index === 0 ? 'active' : ''}" type="button" data-gallery-image="${escapeHtml(image)}"><img src="${escapeHtml(image)}" alt="${escapeHtml(item.name)} gallery ${index + 1}" /></button>`).join('')}</div></div><div class="adopt-modal-copy"><span class="mini-label">PERSONAL CHARACTER ARCHIVE</span><h2>${escapeHtml(item.name)}<br /><em>${escapeHtml(item.type)}.</em></h2><p class="adopt-short-desc">${escapeHtml(item.desc || '')}</p><div class="adopt-info-grid">${info.map(([label,value]) => `<span><small>${label}</small><strong>${escapeHtml(value)}</strong></span>`).join('')}</div><div class="adopt-detail-sections"><section><small>BACKSTORY</small><p>${escapeHtml(item.story || 'ยังไม่มี backstory')}</p></section><section><small>PERSONALITY</small><p>${escapeHtml(item.personality || 'ยังไม่มีข้อมูลนิสัย')}</p></section><section><small>TRAITS</small><p>${escapeHtml(item.traits || 'ยังไม่มีข้อมูลจุดเด่น')}</p></section><section><small>DESIGN NOTES</small><p>${escapeHtml(item.designNotes || 'ยังไม่มีข้อมูลเพิ่มเติม')}</p></section><section><small>LIKES</small><p>${escapeHtml(item.likes || 'ยังไม่มีข้อมูล')}</p></section><section><small>DISLIKES</small><p>${escapeHtml(item.dislikes || 'ยังไม่มีข้อมูล')}</p></section><section class="adopt-owner-note"><small>OWNER NOTES</small><p>${escapeHtml(item.ownerNotes || 'เพิ่มโน้ตส่วนตัวได้จาก Edit Mode')}</p></section></div><div class="detail-list">${(item.tags || []).map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div></div>`; openModal('#adopt-modal'); $$('.adopt-gallery-thumb').forEach(button => button.addEventListener('click', () => { $('.adopt-modal-main-image').src = button.dataset.galleryImage; $$('.adopt-gallery-thumb').forEach(thumb => thumb.classList.toggle('active', thumb === button)); })); };

function applyAdoptArchiveCopy() { if (!$('#adopt-grid')) return; const column = $('.content-column'); const cards = $$('.post-card', column); const first = cards[0]; const second = cards[1]; if (first) { $('h2', first).textContent = 'my character archive'; $('small', first).textContent = 'PERSONAL CHARACTER LIBRARY'; $('.post-copy p', first).textContent = 'คลังรวมตัวละคร Adopt ที่เป็นคอลเลกชันส่วนตัวของ Una กดที่ตัวละครแต่ละตัวเพื่อดูรูปทั้งหมด backstory และข้อมูล character ได้เลยค่ะ ♡'; $('.adopt-toolbar', first)?.remove(); const footer = $('.post-footer', first); if (footer) footer.innerHTML = '<span>PERSONAL ARCHIVE</span><span>♡ character notes</span>'; } if (second) { $('h2', second).textContent = 'character notes'; $('small', second).textContent = 'BACKSTORIES · REFERENCES'; const steps = $$('.steps-grid > div', second); [['01','open a character','กดการ์ดตัวละครเพื่อเปิดหน้า detail และดู gallery'],['02','read their story','อ่าน backstory, personality, traits และ design notes'],['03','keep the details close','ข้อมูลตัวละครและโน้ตทั้งหมดแก้ไขได้จาก Edit Mode']].forEach((data,index) => { const step = steps[index]; if (!step) return; const [number,title,body] = data; $('strong', step).textContent = number; $('h3', step).textContent = title; $('p', step).textContent = body; }); const footer = $('.post-footer', second); if (footer) footer.innerHTML = '<span>CHARACTER LIBRARY</span><span>♡ owned stories</span>'; } const side = $('.profile-sidebar'); if (side) { const bio = $('.profile-bio', side); if (bio) bio.innerHTML = 'คอลเลกชันตัวละครส่วนตัว<br />พร้อม backstory และรายละเอียดของแต่ละคน ♡'; const profileNote = $('#profile-note-content', side); if (profileNote) profileNote.innerHTML = 'พื้นที่เก็บตัวละครส่วนตัว พร้อมข้อมูลและเรื่องราวของแต่ละคน ♡'; const boxes = $$('.sidebar-box', side); const note = boxes[0]; if (note) { $('.box-heading', note).firstChild.textContent = 'CHARACTER ARCHIVE '; $('p', note).textContent = 'พื้นที่เก็บตัวละครที่ Una เป็นเจ้าของ พร้อมรูปและเรื่องราวส่วนตัว'; $('a', note).textContent = 'view all characters →'; $('a', note).href = '#adopt-grid'; } const collections = boxes[1]; if (collections) { $('.box-heading', collections).textContent = 'LIBRARY'; const links = $$('a', collections); if (links[0]) { links[0].textContent = 'All characters'; links[0].href = '#adopt-grid'; } if (links[1]) { links[1].textContent = 'Backstories'; links[1].href = '#adopt-grid'; } } $$('.profile-meta', side).forEach((el,index) => { if (index === 0) el.innerHTML = '<span>♡</span> personal collection'; if (index === 1) el.innerHTML = '<span>⌂</span> stories & references'; }); } }
function removeAdoptCharacterNotes() { if (!$('#adopt-grid')) return; const cards = $$('.content-column > .post-card'); if (cards[1]) cards[1].remove(); }
function characterArchiveNumber(id) { const index = cmsState.adopts.findIndex(item => item.id === id); return String(index + 1).padStart(2, '0'); }
const archiveRenderAdopts = renderAdopts;
renderAdopts = function(filter = 'all') { archiveRenderAdopts(filter); $$('.adopt-card', $('#adopt-grid') || document).forEach(card => { const number = characterArchiveNumber(card.dataset.adopt); const title = $('h3', card); const type = $('p', card); const image = $('img', card); if (title) title.textContent = number; if (type) type.textContent = 'character archive'; if (image) image.alt = `Character ${number}`; }); };
const archiveOpenAdopt = openAdopt;
openAdopt = function(id) { archiveOpenAdopt(id); const item = cmsState.adopts.find(adopt => adopt.id === id); if (!item) return; const number = characterArchiveNumber(id); const title = $('#adopt-modal-content h2'); if (title) title.innerHTML = `${number}<br /><em>${escapeHtml(item.type)}.</em>`; $$('#adopt-modal-content img').forEach(image => { image.alt = `Character ${number}`; }); };
const galleryOpenAdopt = openAdopt;
openAdopt = function(id) { galleryOpenAdopt(id); const item = cmsState.adopts.find(adopt => adopt.id === id); const art = $('.adopt-modal-art'); const strip = $('.adopt-gallery-strip', art || undefined); if (!item || !art || !strip || $('.adopt-gallery-label', art)) return; const gallery = (item.gallery?.length ? item.gallery : [item.image]).filter(Boolean); const label = document.createElement('div'); label.className = 'adopt-gallery-label'; label.innerHTML = `<span>GALLERY</span><b>${gallery.length} ${gallery.length === 1 ? 'IMAGE' : 'IMAGES'}</b>`; art.insertBefore(label, strip); };
function renderCharacterPage() {
  const root = $('#character-detail-page');
  if (!root) return;
  const requested = new URLSearchParams(window.location.search).get('id');
  const raw = cmsState.adopts.find(item => item.id === requested) || cmsState.adopts[0];
  if (!raw) {
    root.innerHTML = '<div class="character-empty"><h2>ยังไม่มีตัวละครในคลัง</h2><a class="small-button" href="adopts.html">กลับไป Adopt House</a></div>';
    return;
  }
  const item = {...(ADOPT_DETAIL_DEFAULTS[raw.id] || {}), ...raw};
  const number = characterArchiveNumber(item.id);
  const gallery = (item.gallery?.length ? item.gallery : [item.image]).filter(Boolean);
  const infoFields = [
    {key:'species',label:'SPECIES'},
    {key:'pronouns',label:'PRONOUNS'},
    {key:'age',label:'AGE'},
    {key:'height',label:'HEIGHT'}
  ].filter(field => characterFieldVisible(item, field.key));
  const storyFields = [
    {key:'story',label:'BACKSTORY'},
    {key:'personality',label:'PERSONALITY'},
    {key:'traits',label:'TRAITS'},
    {key:'designNotes',label:'DESIGN NOTES'},
    {key:'likes',label:'LIKES'},
    {key:'dislikes',label:'DISLIKES'}
  ].filter(field => characterFieldVisible(item, field.key));
  const showGallery = characterFieldVisible(item, 'gallery') && gallery.length > 0;
  const showDescription = characterFieldVisible(item, 'desc');
  const showTags = characterFieldVisible(item, 'tags') && (item.tags || []).length > 0;
  const showOwnerNotes = characterFieldVisible(item, 'ownerNotes');
  document.title = `UNA YAHĀ — Character ${number}`;
  root.innerHTML = `<div class="character-page-top"><a class="character-back-link" href="adopts.html">← กลับไป Character Archive</a><span>PERSONAL CHARACTER ARCHIVE · ${number}</span></div><div class="character-page-grid ${showGallery ? '' : 'without-gallery'}">${showGallery ? `<section class="character-page-gallery"><div class="character-main-frame"><img id="character-main-image" src="${escapeHtml(gallery[0])}" alt="Character ${number}" /></div><div class="character-gallery-heading"><span>GALLERY</span><b>${gallery.length} ${gallery.length === 1 ? 'IMAGE' : 'IMAGES'}</b></div><div class="character-gallery-strip">${gallery.map((image,index) => `<button class="character-gallery-thumb ${index === 0 ? 'active' : ''}" type="button" data-character-image="${escapeHtml(image)}"><img src="${escapeHtml(image)}" alt="Character ${number} gallery ${index + 1}" /></button>`).join('')}</div></section>` : ''}<section class="character-page-copy"><span class="mini-label">ARCHIVE ENTRY · ${number}</span><h1>${number}<br /><em>${escapeHtml(item.type || 'character')}.</em></h1>${showDescription ? `<p class="character-description">${escapeHtml(item.desc || '—')}</p>` : ''}${infoFields.length ? `<div class="character-info-grid">${infoFields.map(field => `<div><small>${field.label}</small><strong>${escapeHtml(item[field.key] || '—')}</strong></div>`).join('')}</div>` : ''}${storyFields.length ? `<div class="character-story-grid">${storyFields.map(field => `<article><small>${field.label}</small><p>${escapeHtml(item[field.key] || '—')}</p></article>`).join('')}</div>` : ''}${showTags ? `<div class="character-tags">${item.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>` : ''}${showOwnerNotes ? `<div class="character-owner-note"><small>OWNER NOTES</small><p>${escapeHtml(item.ownerNotes || '—')}</p></div>` : ''}</section></div>`;
  $$('.character-gallery-thumb', root).forEach(button => button.addEventListener('click', () => {
    const main = $('#character-main-image', root);
    if (main) {
      main.src = button.dataset.characterImage;
      main.alt = `Character ${number}`;
    }
    $$('.character-gallery-thumb', root).forEach(thumb => thumb.classList.toggle('active', thumb === button));
  }));
}
function visualCanvasMarkup(tab) {
  const p = cmsState.profile;
  if (tab === 'posts') return `<div class="canvas-page collection-canvas posts-canvas"><div class="canvas-page-title"><span>POSTS / JOURNAL</span><button class="small-button" data-visual-add="posts">+ สร้างโพสต์</button></div>${cmsState.posts.map((item,index) => `<button class="canvas-post-card ${visualSelection.index === index && visualSelection.type === 'posts' ? 'selected' : ''}" data-visual-select="posts" data-index="${index}"><div>${item.image ? `<img src="${escapeHtml(item.image)}" alt="" />` : '<span class="post-placeholder">✦</span>'}</div><span><small>${escapeHtml(item.label || 'POSTED')}</small><strong>${escapeHtml(item.title)}</strong><em>${escapeHtml(item.body).slice(0,110)}${item.body.length > 110 ? '…' : ''}</em></span>${item.hidden ? '<i>ซ่อนอยู่</i>' : ''}</button>`).join('')}</div>`;
  if (tab === 'profile') return `<div class="canvas-page profile-canvas"><div class="canvas-banner"><img src="${escapeHtml(p.bannerImage)}" alt="" /><span>${escapeHtml(p.bannerTitle)}</span></div><div class="canvas-profile-card"><img src="${escapeHtml(p.avatarImage)}" alt="" /><div><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.handle)}</small><p>${escapeHtml(p.bio).replace(/\n/g,'<br />')}</p><div class="canvas-profile-socials">EMAIL · ${normalizeProfileSocials(p).socialLinks.map(link => escapeHtml(link.label)).join(' · ')}</div></div></div><div class="canvas-post"><small>POSTS · PINNED</small><h3>about me</h3><p>คลิก Profile ทางด้านขวาเพื่อเปลี่ยนข้อความ รูป Banner และ Avatar</p></div></div>`;
  if (tab === 'commission') return `<div class="canvas-page collection-canvas"><div class="canvas-page-title"><span>COMMISSION MENU</span><button class="small-button" data-visual-add="commission">+ เพิ่มรายการ</button></div>${cmsState.commissions.map((item,index) => `<button class="canvas-item ${visualSelection.index === index && visualSelection.type === 'commission' ? 'selected' : ''}" data-visual-select="commission" data-index="${index}"><span>${escapeHtml(item.no || String(index+1).padStart(2,'0'))}</span><strong>${escapeHtml(item.title)}</strong><em>${escapeHtml(item.price)}</em>${item.hidden ? '<small>ซ่อนอยู่</small>' : ''}</button>`).join('')}</div>`;
  if (tab === 'adopt') return `<div class="canvas-page collection-canvas"><div class="canvas-page-title"><span>CHARACTER ARCHIVE</span><button class="small-button" data-visual-add="adopt">+ เพิ่มตัวละคร</button></div><div class="canvas-adopt-grid">${cmsState.adopts.map((item,index) => `<button class="canvas-adopt-card ${visualSelection.index === index && visualSelection.type === 'adopt' ? 'selected' : ''}" data-visual-select="adopt" data-index="${index}"><img src="${escapeHtml(item.image)}" alt="" /><strong>${escapeHtml(item.name || '-')}</strong><small>-</small>${item.hidden ? '<i>ซ่อนอยู่</i>' : ''}</button>`).join('')}</div></div>`;
  if (tab === 'queue') return `<div class="canvas-page collection-canvas queue-editor-canvas"><div class="canvas-page-title"><span>COMMISSION QUEUE · ALL DETAILS</span><button class="small-button" data-visual-add="queue">+ เพิ่มคิว</button></div><div class="queue-editor-summary"><span><small>ทั้งหมด</small><strong>${cmsState.queue.length} คิว</strong></span><span><small>ยอดจ่ายแล้ว</small><strong>฿${cmsState.queue.reduce((sum,item) => sum + (Number(item.paid) || 0), 0).toLocaleString()}</strong></span><span><small>ค้างจ่าย</small><strong>฿${cmsState.queue.reduce((sum,item) => sum + Math.max(0, (Number(item.amount) || 0) - (Number(item.paid) || 0)), 0).toLocaleString()}</strong></span></div><div class="queue-editor-list">${cmsState.queue.map((item,index) => { const remaining = Math.max(0, (Number(item.amount) || 0) - (Number(item.paid) || 0)); return `<button class="queue-editor-card ${visualSelection.index === index && visualSelection.type === 'queue' ? 'selected' : ''}" data-visual-select="queue" data-index="${index}"><div class="queue-editor-card-head"><span class="queue-code">${escapeHtml(item.code)}</span><strong>${escapeHtml(item.type)}</strong><em>${escapeHtml(item.status)}</em>${item.hidden ? '<i>ซ่อนอยู่</i>' : ''}</div><div class="queue-progress"><span style="width:${Math.max(0, Math.min(100, Number(item.progress) || 0))}%"></span></div><div class="queue-detail-grid"><span><small>PROGRESS</small><b>${Number(item.progress) || 0}%</b></span><span><small>ETA</small><b>${escapeHtml(item.eta || '—')}</b></span><span><small>CONTACT</small><b>${escapeHtml(item.contact || '—')}</b></span><span><small>AMOUNT</small><b>฿${(Number(item.amount) || 0).toLocaleString()}</b></span><span><small>PAID</small><b>฿${(Number(item.paid) || 0).toLocaleString()}</b></span><span><small>REMAINING</small><b>฿${remaining.toLocaleString()}</b></span><span><small>TIP</small><b>฿${(Number(item.tip) || 0).toLocaleString()}</b></span></div><div class="queue-private-note"><small>PRIVATE NOTE</small><span>${escapeHtml(item.privateNote || '—')}</span></div></button>`; }).join('')}</div></div>`;
  return `<div class="canvas-page visibility-canvas"><div class="canvas-page-title"><span>PUBLIC VISIBILITY</span></div>${[['profile','Profile / Home'],['commissions','Commission menu'],['adopts','Adopt House'],['queue','Queue tracker']].map(([key,label]) => `<div class="visibility-row"><strong>${label}</strong><span class="toggle ${cmsState.settings[key] ? '' : 'off'}"><i></i></span></div>`).join('')}</div>`;
}
function renderVisualEditor(tab = visualTab) { visualTab = tab; if (tab !== 'profile' && visualSelection.type !== tab) visualSelection = { type:tab, index:0 }; $('#visual-breadcrumb').textContent = tab === 'profile' ? 'Profile / Home' : tab === 'commission' ? 'Commission / Menu' : tab === 'adopt' ? 'Adopt House / Gallery' : tab === 'queue' ? 'Queue / Public status' : 'Settings / Visibility'; $('#editor-canvas').innerHTML = visualCanvasMarkup(tab); $$('.editor-tool').forEach(button => button.classList.toggle('active', button.dataset.visualTab === tab)); const inspector = $('#editor-inspector'); if (tab === 'content') { inspector.innerHTML = `<div class="inspector-heading"><span>SETTINGS</span><h2>แสดงผลเว็บไซต์</h2><p>เปิด/ปิด section สาธารณะได้จากตรงนี้</p></div>${[['profile','Profile / Home'],['commissions','Commission menu'],['adopts','Adopt House'],['queue','Queue tracker']].map(([key,label]) => `<button class="inspector-setting cms-setting" data-setting="${key}"><span>${label}</span><span class="toggle ${cmsState.settings[key] ? '' : 'off'}"><i></i></span></button>`).join('')}<div class="inspector-help">ข้อมูลทุกอย่างบันทึกในเบราว์เซอร์นี้ และพร้อมย้ายไป Firebase</div>`; } else if (tab === 'profile') { inspector.innerHTML = `<div class="inspector-heading"><span>SELECTED</span><h2>Profile / Home</h2><p>แก้ไขข้อความและภาพทั้งหมดของหน้าโปรไฟล์</p></div>${visualFormMarkup('profile',0)}`; } else { const key = tab === 'commission' ? 'commissions' : tab === 'adopt' ? 'adopts' : 'queue'; const index = visualSelection.type === tab ? visualSelection.index : 0; inspector.innerHTML = `<div class="inspector-heading"><span>SELECTED LAYER</span><h2>${tab === 'commission' ? 'Commission item' : tab === 'adopt' ? 'Adopt character' : 'Queue item'}</h2><p>เลือกการ์ดจาก canvas เพื่อแก้ไข เพิ่ม ซ่อน หรือลบได้ทันที</p></div>${cmsState[key][index] ? visualFormMarkup(tab,index) : '<div class="inspector-empty">ยังไม่มีรายการ<br />กด + เพิ่มรายการบน canvas ได้เลย</div>'}`; } bindVisualEditor(); }
function renderVisualEditor(tab = visualTab) { visualTab = tab; if (tab !== 'profile' && visualSelection.type !== tab) visualSelection = { type:tab, index:0 }; $('#visual-breadcrumb').textContent = tab === 'profile' ? 'Profile / Home' : tab === 'posts' ? 'Posts / Journal' : tab === 'commission' ? 'Commission / Menu' : tab === 'adopt' ? 'Adopt House / Gallery' : tab === 'queue' ? 'Queue / Public status' : 'Settings / Visibility'; $('#editor-canvas').innerHTML = visualCanvasMarkup(tab); $$('.editor-tool').forEach(button => button.classList.toggle('active', button.dataset.visualTab === tab)); const inspector = $('#editor-inspector'); if (tab === 'content') { inspector.innerHTML = `<div class="inspector-heading"><span>SETTINGS</span><h2>แสดงผลเว็บไซต์</h2><p>เปิด/ปิด section สาธารณะได้จากตรงนี้</p></div>${[['profile','Profile / Home'],['posts','Posts page'],['commissions','Commission menu'],['adopts','Adopt House'],['queue','Queue tracker']].map(([key,label]) => `<button class="inspector-setting cms-setting" data-setting="${key}"><span>${label}</span><span class="toggle ${cmsState.settings[key] ? '' : 'off'}"><i></i></span></button>`).join('')}<div class="inspector-help">ข้อมูลทุกอย่างบันทึกในเบราว์เซอร์นี้ และพร้อมย้ายไป Firebase</div>`; } else if (tab === 'profile') { inspector.innerHTML = `<div class="inspector-heading"><span>SELECTED</span><h2>Profile / Home</h2><p>แก้ไขข้อความและภาพทั้งหมดของหน้าโปรไฟล์</p></div>${visualFormMarkup('profile',0)}`; } else { const key = tab === 'posts' ? 'posts' : tab === 'commission' ? 'commissions' : tab === 'adopt' ? 'adopts' : 'queue'; const index = visualSelection.type === tab ? visualSelection.index : 0; inspector.innerHTML = `<div class="inspector-heading"><span>SELECTED LAYER</span><h2>${tab === 'posts' ? 'Post' : tab === 'commission' ? 'Commission item' : tab === 'adopt' ? 'Adopt character' : 'Queue item'}</h2><p>เลือกการ์ดจาก canvas เพื่อแก้ไข เพิ่ม ซ่อน หรือลบได้ทันที</p></div>${cmsState[key][index] ? visualFormMarkup(tab,index) : '<div class="inspector-empty">ยังไม่มีรายการ<br />กด + เพิ่มรายการบน canvas ได้เลย</div>'}`; } bindVisualEditor(); }
function walletFormMarkup(index) {
  const item = index >= 0 ? cmsState.wallet[index] : {};
  return `<form class="cms-form wallet-entry-form" data-editor="wallet" data-index="${index}"><div class="admin-section-title"><strong>${index >= 0 ? 'แก้ไขรายการเงิน' : 'เพิ่มรายการเงิน'}</strong></div><div class="cms-form-grid">${field('วันที่รับเงิน','date',item.date || '','date')}${field('เลขอ้างอิง / รหัสคิว','reference',item.reference || '')}${field('ชื่องาน / รายละเอียด','title',item.title || '')}${field('ค่าคอมมิชชั่น (บาท)','commission',item.commission || 0,'number','min="0" step="1" inputmode="decimal"')}${field('ทิป (บาท)','tip',item.tip || 0,'number','min="0" step="1" inputmode="decimal"')}${textarea('โน้ตส่วนตัว','note',item.note || '')}</div><div class="wallet-form-note"><strong>Wallet นี้เป็นสมุดรายรับแยกต่างหาก</strong><span>ลบคิวได้โดยเงินรายการนี้จะไม่หาย และ Preview ด้านบนจะคำนวณยอดรวมให้ทันที</span></div><div class="cms-form-actions"><button type="button" class="small-button cms-cancel">ยกเลิก</button><button class="post-button" type="submit">บันทึกรายการเงิน</button></div></form>${index >= 0 ? `<div class="visual-item-actions wallet-item-actions"><button type="button" class="visual-delete" data-type="wallet" data-index="${index}">ลบเฉพาะรายการเงินนี้</button></div>` : ''}`;
}
function renderWalletEditor() {
  const totals = walletTotals();
  visualTab = 'wallet';
  if (visualSelection.type !== 'wallet') visualSelection = {type:'wallet', index:0};
  $('#visual-breadcrumb').textContent = 'Wallet / Income';
  $$('.editor-tool').forEach(button => button.classList.toggle('active', button.dataset.visualTab === 'wallet'));
  $('#editor-canvas').innerHTML = `<div class="canvas-page collection-canvas wallet-editor-canvas"><div class="canvas-page-title"><span>PRIVATE WALLET · แยกจาก QUEUE</span><button class="small-button" data-visual-add="wallet">+ เพิ่มรายรับ</button></div><div class="wallet-editor-hero"><span class="wallet-hero-icon" aria-hidden="true">฿</span><div><small>ยอดรายรับทั้งหมด</small><strong>฿${totals.total.toLocaleString()}</strong><span>${cmsState.wallet.length.toLocaleString()} รายการ · เงินไม่หายเมื่อลบ Queue</span></div><b class="wallet-hero-badge">แก้ไขแยกจากคิว</b></div><div class="wallet-editor-grid"><div class="wallet-stat commission"><small>ค่าคอมมิชชั่น</small><strong>฿${totals.commission.toLocaleString()}</strong><span>รายได้จากงาน</span></div><div class="wallet-stat tips"><small>ทิปทั้งหมด</small><strong>฿${totals.tips.toLocaleString()}</strong><span>เงินพิเศษจากลูกค้า</span></div><div class="wallet-stat entries"><small>รายการทั้งหมด</small><strong>${cmsState.wallet.length.toLocaleString()}</strong><span>กดรายการเพื่อแก้ไข</span></div></div><div class="wallet-ledger"><div class="wallet-ledger-title"><div><strong>รายการรายรับ</strong><small>เลือกการ์ดเพื่อแก้ไข พร้อมดู Preview ทางขวา</small></div><span>${cmsState.wallet.length} รายการ</span></div>${cmsState.wallet.map((item,index) => { const commission = Number(item.commission) || 0; const tip = Number(item.tip) || 0; return `<button type="button" class="wallet-ledger-row ${visualSelection.index === index ? 'selected' : ''}" data-visual-select="wallet" data-index="${index}"><span class="wallet-entry-copy"><small>${escapeHtml(item.reference || 'ไม่มีเลขอ้างอิง')}${item.date ? ` · ${escapeHtml(item.date)}` : ''}</small><strong>${escapeHtml(item.title || 'Commission income')}</strong></span><span class="wallet-entry-money"><small><i>คอมมิชชั่น</i><b>฿${commission.toLocaleString()}</b></small><small><i>ทิป</i><b>฿${tip.toLocaleString()}</b></small><strong><i>รวม</i>฿${(commission + tip).toLocaleString()}</strong></span><span class="wallet-entry-arrow" aria-hidden="true">›</span></button>`; }).join('') || '<p class="wallet-empty">ยังไม่มีรายการเงิน<br />กด + เพิ่มรายรับ เพื่อเริ่มบันทึก</p>'}</div></div>`;
  const inspector = $('#editor-inspector');
  inspector.innerHTML = cmsState.wallet[visualSelection.index] ? `<div class="inspector-heading"><span>PRIVATE WALLET</span><h2>รายการรายรับ</h2><p>แก้ไขข้อมูลใน Wallet ได้โดยไม่กระทบ Queue</p></div>${walletFormMarkup(visualSelection.index)}` : '<div class="inspector-empty">ยังไม่มีรายการเงิน<br />กด + เพิ่มรายรับ จากรายการด้านซ้าย</div>';
  bindVisualEditor();
}
const baseRenderVisualEditor = renderVisualEditor;
renderVisualEditor = function(tab = visualTab) { if (tab === 'wallet') return renderWalletEditor(); return baseRenderVisualEditor(tab); };
const baseRenderCommissionEditor = renderVisualEditor;
renderVisualEditor = function(tab = visualTab) {
  baseRenderCommissionEditor(tab);
  if (tab !== 'commission') return;
  const inspector = $('#editor-inspector');
  if (!inspector || $('.commission-page-form', inspector)) return;
  inspector.insertAdjacentHTML('afterbegin', `<div class="inspector-heading commission-page-heading"><span>PAGE SETTINGS</span><h2>Commission Page</h2><p>แก้ไขเรทราคา ประเภทงาน Revision สิทธิ์การใช้งาน Terms และ Add-ons</p></div>${commissionPageFormMarkup()}`);
  bindEditor();
};
const baseRenderWorkspaceEditor = renderVisualEditor;
renderVisualEditor = function(tab = visualTab) { const result = baseRenderWorkspaceEditor(tab); enhanceEditorWorkspace(tab); return result; };
function dataKey(type) { return type === 'posts' ? 'posts' : type === 'commission' ? 'commissions' : type === 'adopt' ? 'adopts' : type === 'wallet' ? 'wallet' : 'queue'; }
function duplicateItem(type, index) { const key = dataKey(type); const copy = clone(cmsState[key][index]); copy.id = `${type}-${Date.now()}`; if (type === 'queue') copy.code = `${copy.code}-COPY`; cmsState[key].splice(index + 1, 0, copy); saveState('คัดลอกรายการแล้ว ✦'); visualSelection = { type, index:index + 1 }; renderVisualEditor(type); }
function bindVisualDelete(button) {
  const originalLabel = button.textContent;
  const reset = () => {
    button.dataset.confirmDelete = 'false';
    button.classList.remove('confirming');
    button.disabled = false;
    button.textContent = originalLabel;
  };
  button.onclick = () => {
    if (button.dataset.confirmDelete !== 'true') {
      button.dataset.confirmDelete = 'true';
      button.classList.add('confirming');
      button.textContent = 'กดอีกครั้งเพื่อยืนยันลบ';
      clearTimeout(button.confirmDeleteTimer);
      button.confirmDeleteTimer = setTimeout(reset, 5000);
      return;
    }
    clearTimeout(button.confirmDeleteTimer);
    button.disabled = true;
    button.textContent = 'กำลังลบ…';
    if (!deleteItem(button.dataset.type, Number(button.dataset.index), true)) reset();
  };
}
function bindVisualEditor() {
  $$('.editor-tool').forEach(button => button.onclick = () => renderVisualEditor(button.dataset.visualTab));
  $$('[data-visual-select]', $('#editor-canvas')).forEach(button => button.onclick = () => {
    visualSelection = { type:button.dataset.visualSelect, index:Number(button.dataset.index) };
    renderVisualEditor(visualTab);
  });
  $$('[data-visual-add]').forEach(button => button.onclick = () => {
    visualSelection = { type:button.dataset.visualAdd, index:-1 };
    const inspector = $('#editor-inspector');
    const form = button.dataset.visualAdd === 'wallet' ? walletFormMarkup(-1) : visualFormMarkup(button.dataset.visualAdd,-1);
    inspector.innerHTML = `<div class="inspector-heading"><span>NEW ITEM</span><h2>เพิ่มข้อมูลใหม่</h2><p>กรอกข้อมูลด้านขวา แล้วกดบันทึก</p></div>${form}`;
    bindEditor();
  });
  $$('.cms-setting', $('#visual-editor')).forEach(row => row.onclick = () => {
    cmsState.settings[row.dataset.setting] = !cmsState.settings[row.dataset.setting];
    saveState('อัปเดตการแสดงผลแล้ว ✦');
    renderVisualEditor('content');
  });
  $$('.visual-delete').forEach(bindVisualDelete);
  $$('.visual-move-up').forEach(button => button.onclick = () => moveVisualItem(button.dataset.type, Number(button.dataset.index), -1));
  $$('.visual-move-down').forEach(button => button.onclick = () => moveVisualItem(button.dataset.type, Number(button.dataset.index), 1));
  $$('.visual-duplicate').forEach(button => button.onclick = () => duplicateItem(button.dataset.type, Number(button.dataset.index)));
  bindEditor();
}
function moveVisualItem(type, index, direction) { moveItem(type, index, direction); const next = Math.max(0, Math.min(index + direction, cmsState[dataKey(type)].length - 1)); visualSelection = { type, index:next }; renderVisualEditor(type); }
function openVisualEditor(tab = 'profile') { const editor = $('#visual-editor'); if (!editor) return; editor.classList.add('open'); editor.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; renderVisualEditor(tab); }
function closeVisualEditor() { const editor = $('#visual-editor'); if (!editor) return; editor.classList.remove('open'); editor.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }
const baseCloseVisualEditor = closeVisualEditor;
closeVisualEditor = function() { if (editorDirty && !confirm('มีการแก้ไขที่ยังไม่ได้บันทึก ต้องการออกจาก Edit Mode หรือไม่?')) return; baseCloseVisualEditor(); };
function openAdmin() { const drawer = $('#admin-drawer'); if (!drawer) return; drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false'); renderAdmin(); }

ensureOverlays(); if ($('.canvas-toolbar span')) $('.canvas-toolbar span').textContent = 'LIVE PREVIEW'; ensurePostsTool(); ensureWalletTool(); ensurePostsFeed(); normalizeHomeNavigation(); renderProfile(); removeProfileSidebarBoxesOnHome(); renderPosts(); renderCommissions(); renderCommissionPage(); renderAdopts(); renderCharacterPage(); applyAdoptArchiveCopy(); removeAdoptCharacterNotes(); renderQueue(); applyPublicContent();
function openCreatorSession() {
  const firebaseConfigured = Boolean(window.UnaFirebase?.configured || window.UNA_FIREBASE_CONFIG?.apiKey);
  if (!firebaseConfigured || !window.UnaFirebase) { openModal('#login-modal'); showToast('ต้องตั้งค่า Firebase ก่อนเข้าสู่ Admin Studio'); return; }
  if (!window.UnaFirebase.currentUser) { openModal('#login-modal'); return; }
  openVisualEditor();
}
function applyFirebaseState(state, scope = 'private') {
  if (!state || !state.profile || editorDirty) return;
  if (scope === 'public') {
    cmsState = {...cmsState, ...state, profile:{...cmsState.profile, ...(state.profile || {})}, settings:{...cmsState.settings, ...(state.settings || {})}, posts:Array.isArray(state.posts) ? state.posts : cmsState.posts, commissions:Array.isArray(state.commissions) ? state.commissions : cmsState.commissions, adopts:Array.isArray(state.adopts) ? state.adopts : cmsState.adopts, queue:Array.isArray(state.queue) ? state.queue : cmsState.queue};
    normalizeProfileSocials(cmsState.profile);
  } else hydrateCmsState(state);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cmsState));
  applyPublicContent(); renderProfile(); renderPosts(); renderCommissions(); renderCommissionPage(); renderAdopts($('.filter-pill.active')?.dataset.filter || 'all'); renderCharacterPage(); renderQueue(); renderFooterLabel?.();
  if ($('#visual-editor')?.classList.contains('open')) renderVisualEditor(visualTab);
}
window.addEventListener('una-firebase-data', event => applyFirebaseState(event.detail?.state, event.detail?.scope));
window.addEventListener('una-firebase-empty', () => window.UnaFirebase?.saveState?.(cmsState).catch(() => {}));
window.addEventListener('una-firebase-auth', event => {
  const hint = $('#creator-auth-hint');
  if (!hint || !window.UnaFirebase?.configured) return;
  hint.textContent = event.detail?.user ? `Firebase connected · ${event.detail.user.email || 'Creator account'}` : 'เข้าสู่ระบบด้วยบัญชี Firebase Creator ของคุณ';
});
$$('.filter-pill').forEach(button => button.addEventListener('click', () => { $$('.filter-pill').forEach(item => item.classList.remove('active')); button.classList.add('active'); renderAdopts(button.dataset.filter); }));
$$('.creator-button').forEach(button => button.addEventListener('click', () => { if ($('#admin-drawer')?.classList.contains('open')) $('#admin-drawer').classList.remove('open'); else openCreatorSession(); }));
$('.drawer-close')?.addEventListener('click', () => $('#admin-drawer')?.classList.remove('open'));
$$('.admin-tab').forEach(button => button.addEventListener('click', () => setAdminTab(button.dataset.adminTab)));
$('#login-form')?.addEventListener('submit', async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const firebase = window.UnaFirebase;
  if (!firebase?.configured) { showToast('ยังไม่ได้เชื่อมต่อ Firebase จึงไม่สามารถเข้าสู่ Admin Studio ได้'); return; }
  const submit = $('[type="submit"]', form);
  const email = $('[type="email"]', form)?.value.trim();
  const password = $('[type="password"]', form)?.value;
  submit.disabled = true;
  try {
    await firebase.signIn(email, password);
    closeModal('#login-modal'); openVisualEditor(); showToast('เชื่อม Firebase แล้ว ✦');
  } catch (error) {
    showToast(firebase.errorMessage?.(error) || 'เข้าสู่ระบบ Firebase ไม่สำเร็จ');
  } finally { submit.disabled = false; }
});
$('.queue-check')?.addEventListener('click', () => openModal('#queue-modal'));
$('#queue-form')?.addEventListener('submit', event => { event.preventDefault(); const code = event.target.querySelector('input').value.trim().toUpperCase(); const item = cmsState.queue.find(queue => queue.code === code); if (item) { closeModal('#queue-modal'); openQueueStatus(code); } else $('#queue-result').innerHTML = '<p class="admin-welcome">ไม่พบรหัสนี้ ลองตรวจสอบอีกครั้งนะคะ ♡</p>'; });
$$('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('click', event => { if (event.target === backdrop) closeModal(`#${backdrop.id}`); }));
$$('.modal-close').forEach(button => button.addEventListener('click', () => closeModal(`#${button.closest('.modal-backdrop').id}`)));
$('.menu-toggle')?.addEventListener('click', () => $('.nav-left')?.classList.toggle('mobile-open'));
$('.visual-close')?.addEventListener('click', closeVisualEditor);
$('.visual-preview')?.addEventListener('click', closeVisualEditor);

// Keep the small footer signature editable from the Profile / Home editor.
cmsState.profile.footerLabel = cmsState.profile.footerLabel || 'UNA YAHĀ';
function renderFooterLabel() {
  const label = cmsState.profile.footerLabel || 'UNA YAHĀ';
  $$('.site-footer span:first-child').forEach(el => { el.textContent = `✦ ${label}`; });
}
renderFooterLabel();
const editorMarkupWithFooterLabel = editorMarkup;
editorMarkup = function(type, index) {
  const markup = editorMarkupWithFooterLabel(type, index);
  if (type !== 'profile') return markup;
  return markup.replace('<div class="cms-form-actions">', `${field('ข้อความ Footer','footerLabel',cmsState.profile.footerLabel)}<div class="cms-form-actions">`);
};
const saveEditorWithFooterLabel = saveEditor;
saveEditor = async function(form) {
  const result = await saveEditorWithFooterLabel(form);
  renderFooterLabel();
  return result;
};
