const i18n = {
  uk: {
    subtitle: 'контроль добробуту',
    dashboard: 'Дашборд',
    habits: 'Звички',
    goals: 'Цілі',
    analytics: 'Аналітика',
    settings: 'Налаштування',
    admin: 'Адмін',
    completedToday: 'Виконано сьогодні',
    bestStreak: 'Найкраща серія',
    days: 'днів',
    balance: 'Баланс',
    mood: 'Настрій',
    weeklyProgress: 'Тижневий прогрес',
    aiInsight: 'AI-інсайт',
    generate: 'Згенерувати',
    habitManager: 'Менеджер звичок',
    resetDemo: 'Скинути демо',
    add: 'Додати',
    all: 'Усі',
    addGoal: 'Нова ціль',
    categoryStats: 'Статистика категорій',
    eventsLog: 'Журнал подій',
    name: "Ім'я",
    notifications: 'Сповіщення',
    rtl: 'RTL-напрям тексту',
    save: 'Зберегти',
    users: 'Користувачі',
    sort: 'Сортувати',
    dataManagement: 'Керування даними',
    backup: 'Резервна копія',
    export: 'Експорт',
    import: 'Імпорт',
    search: 'Пошук...',
    habitTitlePlaceholder: 'Назва звички',
    searchUser: 'Пошук користувача',
    roleUser: 'Користувач',
    roleAdmin: 'Адмін',
    catSleep: 'Сон',
    catSport: 'Спорт',
    catNutrition: 'Харчування',
    catProductivity: 'Продуктивність',
    catMindfulness: 'Усвідомленість',
    priorityLow: 'Низький',
    priorityMedium: 'Середній',
    priorityHigh: 'Високий',
    sortTitle: 'Назва',
    sortCategory: 'Категорія',
    sortStreak: 'Серія',
    noHabitsFound: 'Звички не знайдено',
    noEventsYet: 'Подій ще немає',
    completed: 'виконано',
    uncompleted: 'скасовано',
    updated: 'Оновлено',
    newTitle: 'Нова назва',
    habitEdited: 'Звичку змінено',
    habitDeleted: 'Звичку видалено',
    habitAdded: 'Звичку додано',
    goalTitle: 'Назва цілі',
    customTarget: 'Власна ціль',
    goalUpdated: 'Ціль оновлено',
    dataExported: 'Дані експортовано',
    backupCreated: 'Резервну копію створено',
    demoReset: 'Демо скинуто',
    saved: 'Збережено',
    imported: 'Імпортовано',
    invalidJson: 'Некоректний JSON',
    allDoneInsight: 'Усі звички виконані. Спробуйте додати складнішу ціль на наступний тиждень.',
    recommendationPrefix: 'Рекомендація: сфокусуйтесь на',
    recommendationSuffix: 'бо ця звичка знижує загальний баланс.',
    backupCreatedAt: 'Резервну копію створено:',
    profileDefaultName: 'Михайло',
    dayLabels: ['Пн','Вт','Ср','Чт','Пт','Сб','Нд']
  },
  en: {
    subtitle: 'well-being control',
    dashboard: 'Dashboard',
    habits: 'Habits',
    goals: 'Goals',
    analytics: 'Analytics',
    settings: 'Settings',
    admin: 'Admin',
    completedToday: 'Completed today',
    bestStreak: 'Best streak',
    days: 'days',
    balance: 'Balance',
    mood: 'Mood',
    weeklyProgress: 'Weekly progress',
    aiInsight: 'AI insight',
    generate: 'Generate',
    habitManager: 'Habit manager',
    resetDemo: 'Reset demo',
    add: 'Add',
    all: 'All',
    addGoal: 'New goal',
    categoryStats: 'Category statistics',
    eventsLog: 'Events log',
    name: 'Name',
    notifications: 'Notifications',
    rtl: 'RTL text direction',
    save: 'Save',
    users: 'Users',
    sort: 'Sort',
    dataManagement: 'Data management',
    backup: 'Backup',
    export: 'Export',
    import: 'Import',
    search: 'Search...',
    habitTitlePlaceholder: 'Habit title',
    searchUser: 'Search user',
    roleUser: 'User',
    roleAdmin: 'Admin',
    catSleep: 'Sleep',
    catSport: 'Sport',
    catNutrition: 'Nutrition',
    catProductivity: 'Productivity',
    catMindfulness: 'Mindfulness',
    priorityLow: 'Low',
    priorityMedium: 'Medium',
    priorityHigh: 'High',
    sortTitle: 'Title',
    sortCategory: 'Category',
    sortStreak: 'Streak',
    noHabitsFound: 'No habits found',
    noEventsYet: 'No events yet',
    completed: 'completed',
    uncompleted: 'uncompleted',
    updated: 'Updated',
    newTitle: 'New title',
    habitEdited: 'Habit edited',
    habitDeleted: 'Habit deleted',
    habitAdded: 'Habit added',
    goalTitle: 'Goal title',
    customTarget: 'Custom target',
    goalUpdated: 'Goal updated',
    dataExported: 'Data exported',
    backupCreated: 'Backup created',
    demoReset: 'Demo reset',
    saved: 'Saved',
    imported: 'Imported',
    invalidJson: 'Invalid JSON',
    allDoneInsight: 'All habits are completed. Try adding a more difficult goal for next week.',
    recommendationPrefix: 'Recommendation: focus on',
    recommendationSuffix: 'because this habit lowers the overall balance.',
    backupCreatedAt: 'Backup created:',
    profileDefaultName: 'Mykhailo',
    dayLabels: ['M','T','W','T','F','S','S']
  }
};

const categoryKeys = {
  Sleep: 'catSleep',
  Sport: 'catSport',
  Nutrition: 'catNutrition',
  Productivity: 'catProductivity',
  Mindfulness: 'catMindfulness'
};

const priorityKeys = {
  low: 'priorityLow',
  medium: 'priorityMedium',
  high: 'priorityHigh'
};

const demo = {
  habits: [
    { id: 1, title: 'Sleep 7 hours', titleUk: 'Спати 7 годин', category: 'Sleep', priority: 'high', streak: 5, done: true, history: [1,1,1,0,1,1,1] },
    { id: 2, title: 'Drink 2L water', titleUk: 'Випити 2 л води', category: 'Nutrition', priority: 'medium', streak: 3, done: false, history: [1,1,0,1,1,0,0] },
    { id: 3, title: 'Morning exercise', titleUk: 'Ранкова зарядка', category: 'Sport', priority: 'high', streak: 7, done: true, history: [1,1,1,1,1,1,1] },
    { id: 4, title: 'Deep work session', titleUk: 'Сесія глибокої роботи', category: 'Productivity', priority: 'medium', streak: 2, done: false, history: [0,1,1,0,1,0,0] },
    { id: 5, title: 'Evening meditation', titleUk: 'Вечірня медитація', category: 'Mindfulness', priority: 'low', streak: 4, done: true, history: [1,0,1,1,1,1,1] }
  ],
  goals: [
    { id: 1, title: 'Healthy sleep routine', titleUk: 'Здоровий режим сну', progress: 72, target: '7h daily', targetUk: '7 годин щодня' },
    { id: 2, title: 'Sport consistency', titleUk: 'Регулярність спорту', progress: 58, target: '3 workouts/week', targetUk: '3 тренування на тиждень' },
    { id: 3, title: 'Productivity balance', titleUk: 'Баланс продуктивності', progress: 83, target: '5 deep work sessions', targetUk: '5 сесій глибокої роботи' }
  ],
  users: [
    { name: 'Suhoterin Mykhailo', nameUk: 'Сухотерін Михайло', role: 'Admin / Developer', roleUk: 'Адмін / Розробник', active: true },
    { name: 'Ivan Petrenko', nameUk: 'Іван Петренко', role: 'User', roleUk: 'Користувач', active: false },
    { name: 'Olena Bondar', nameUk: 'Олена Бондар', role: 'User', roleUk: 'Користувач', active: true }
  ],
  events: []
};

let state = JSON.parse(localStorage.getItem('lb-state') || 'null') || structuredClone(demo);
state.users = (state.users || []).filter(u => !/Anastasiya|Chupryna|Chuprina|Анастас/i.test(u.name || ''));
let lang = localStorage.getItem('lb-lang') || 'uk';
let theme = localStorage.getItem('lb-theme') || 'light';

const $ = id => document.getElementById(id);

function tr(k) {
  return i18n[lang][k] || k;
}

function localTitle(item) {
  return lang === 'uk' ? (item.titleUk || item.title) : item.title;
}

function localTarget(item) {
  return lang === 'uk' ? (item.targetUk || item.target) : item.target;
}

function localUserName(item) {
  return lang === 'uk' ? (item.nameUk || item.name) : item.name;
}

function localRole(item) {
  return lang === 'uk' ? (item.roleUk || item.role) : item.role;
}

function save() {
  state.users = (state.users || []).filter(u => !/Anastasiya|Chupryna|Chuprina|Анастас/i.test(u.name || ''));
  localStorage.setItem('lb-state', JSON.stringify(state));
}

function log(textKeyOrText, extra = '') {
  const text = extra ? `${tr(textKeyOrText)}: ${extra}` : textKeyOrText;
  state.events.unshift({ time: new Date().toISOString(), text });
  state.events = state.events.slice(0, 30);
  save();
  renderLogs();
}

function toast(textKeyOrText) {
  const t = $('toast');
  t.textContent = i18n[lang][textKeyOrText] || textKeyOrText;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
}

function renderI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(e => e.textContent = tr(e.dataset.i18n));
  document.querySelectorAll('[data-i18n-placeholder]').forEach(e => e.placeholder = tr(e.dataset.i18nPlaceholder));
  $('today').textContent = new Intl.DateTimeFormat(lang === 'uk' ? 'uk-UA' : 'en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(new Date());
  $('langSelect').value = lang;
  $('roleSelect').querySelector('option[value="user"]').textContent = tr('roleUser');
  $('roleSelect').querySelector('option[value="admin"]').textContent = tr('roleAdmin');
}

function renderStats() {
  const total = state.habits.length;
  const completed = state.habits.filter(h => h.done).length;
  const best = Math.max(...state.habits.map(h => h.streak), 0);
  const balance = total ? Math.round(completed / total * 100) : 0;
  $('completedToday').textContent = completed;
  $('totalHabits').textContent = total;
  $('bestStreak').textContent = best;
  $('balanceScore').textContent = balance + '%';
  $('balanceBar').style.width = balance + '%';
  $('moodScore').textContent = ['😟','😐','🙂','😄','🔥'][$('moodRange').value - 1];
  renderCanvas();
  renderCategoryBars();
}

function renderHabits() {
  let list = [...state.habits];
  const q = $('globalSearch').value.toLowerCase();
  const filter = $('habitFilter').value;
  if (filter !== 'all') list = list.filter(h => h.category === filter);
  if (q) list = list.filter(h =>
    localTitle(h).toLowerCase().includes(q) ||
    tr(categoryKeys[h.category]).toLowerCase().includes(q) ||
    h.category.toLowerCase().includes(q)
  );
  const sort = $('habitSort').value;
  list.sort((a, b) => sort === 'streak'
    ? b.streak - a.streak
    : String(sort === 'title' ? localTitle(a) : tr(categoryKeys[a.category])).localeCompare(String(sort === 'title' ? localTitle(b) : tr(categoryKeys[b.category])), lang === 'uk' ? 'uk' : 'en')
  );

  $('habitList').innerHTML = list.map(h => `
    <div class="habit-item">
      <div>
        <h3>${localTitle(h)}</h3>
        <div class="habit-meta">
          <span class="pill">${tr(categoryKeys[h.category])}</span>
          <span>${tr(priorityKeys[h.priority])}</span>
          <span>${h.streak} ${tr('days')}</span>
        </div>
      </div>
      <div class="actions-row">
        <button class="success" onclick="toggleHabit(${h.id})">${h.done ? '↺' : '✓'}</button>
        <button onclick="editHabit(${h.id})">✎</button>
        <button class="danger" onclick="deleteHabit(${h.id})">×</button>
      </div>
    </div>`).join('') || `<div class="card">${tr('noHabitsFound')}</div>`;
  renderStats();
}

function renderGoals() {
  $('goalsGrid').innerHTML = state.goals.map(g => `
    <div class="card">
      <h3>${localTitle(g)}</h3>
      <p>${localTarget(g)}</p>
      <div class="bar-bg"><span style="width:${g.progress}%"></span></div>
      <p>${g.progress}%</p>
      <button onclick="increaseGoal(${g.id})">+10%</button>
    </div>`).join('');
}

function renderUsers() {
  state.users = (state.users || []).filter(u => !/Anastasiya|Chupryna|Chuprina|Анастас/i.test(u.name || ''));
  const q = $('userSearch').value.toLowerCase();
  $('userList').innerHTML = state.users
    .filter(u => !q || localUserName(u).toLowerCase().includes(q) || localRole(u).toLowerCase().includes(q))
    .map(u => `<li><span>${localUserName(u)}<br><small>${localRole(u)}</small></span><span>${u.active ? '🟢' : '⚪'}</span></li>`)
    .join('');
  save();
}

function renderLogs() {
  $('eventsLog').innerHTML = state.events.map(e => `
    <div class="log-entry">
      <b>${new Date(e.time).toLocaleString(lang === 'uk' ? 'uk-UA' : 'en-US')}</b><br>${e.text}
    </div>`).join('') || `<p>${tr('noEventsYet')}</p>`;
}

function renderCategoryBars() {
  const cats = {};
  state.habits.forEach(h => cats[h.category] = (cats[h.category] || 0) + (h.done ? 1 : 0));
  const max = Math.max(...Object.values(cats), 1);
  $('categoryBars').innerHTML = Object.entries(cats).map(([c, v]) => `
    <div class="bar-row">
      <div class="bar-label"><span>${tr(categoryKeys[c])}</span><span>${v}</span></div>
      <div class="bar-bg"><span style="width:${Math.round(v / max * 100)}%"></span></div>
    </div>`).join('');
}

function renderCanvas() {
  const canvas = $('progressCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d'), w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--line');
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(40, 20 + i * 38);
    ctx.lineTo(w - 20, 20 + i * 38);
    ctx.stroke();
  }
  const days = [0,1,2,3,4,5,6].map(i => state.habits.reduce((s, x) => s + (x.history[i] || 0), 0));
  const max = Math.max(...days, 1);
  ctx.fillStyle = '#22c55e';
  days.forEach((v, i) => {
    const bw = 60;
    const x = 70 + i * 95;
    const bh = v / max * 190;
    ctx.fillRect(x, h - 38 - bh, bw, bh);
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text');
    ctx.fillText(tr('dayLabels')[i], x + 22, h - 15);
    ctx.fillStyle = '#22c55e';
  });
}

function toggleHabit(id) {
  const h = state.habits.find(x => x.id === id);
  h.done = !h.done;
  if (h.done) h.streak++;
  log(`${localTitle(h)}: ${h.done ? tr('completed') : tr('uncompleted')}`);
  save();
  renderHabits();
  toast('updated');
}

function editHabit(id) {
  const h = state.habits.find(x => x.id === id);
  const title = prompt(tr('newTitle'), localTitle(h));
  if (title) {
    if (lang === 'uk') h.titleUk = title; else h.title = title;
    log('habitEdited', title);
    save();
    renderHabits();
  }
}

function deleteHabit(id) {
  state.habits = state.habits.filter(h => h.id !== id);
  log(tr('habitDeleted'));
  save();
  renderHabits();
}

function increaseGoal(id) {
  const g = state.goals.find(x => x.id === id);
  g.progress = Math.min(100, g.progress + 10);
  log('goalUpdated', localTitle(g));
  save();
  renderGoals();
  renderStats();
}

function generateInsight() {
  const incomplete = state.habits.filter(h => !h.done);
  $('aiInsightText').textContent = incomplete.length
    ? `${tr('recommendationPrefix')} ${localTitle(incomplete[0])}, ${tr('recommendationSuffix')}`
    : tr('allDoneInsight');
  log('AI insight generated');
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'lifebalance-backup.json';
  a.click();
  log(tr('dataExported'));
}

function backupData() {
  $('adminLog').textContent = `${tr('backupCreatedAt')} ${new Date().toISOString()}`;
  log(tr('backupCreated'));
}

function resetDemo() {
  state = structuredClone(demo);
  save();
  init();
  toast('demoReset');
}

function init() {
  state.users = (state.users || []).filter(u => !/Anastasiya|Chupryna|Chuprina|Анастас/i.test(u.name || ''));
  document.body.dataset.role = $('roleSelect').value;
  document.body.dataset.theme = theme;
  $('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
  renderI18n();
  renderHabits();
  renderGoals();
  renderUsers();
  renderLogs();
  generateInsight();
  $('nameInput').value = $('profileName').textContent || tr('profileDefaultName');
}

document.querySelectorAll('.nav').forEach(btn => btn.onclick = () => {
  document.querySelectorAll('.nav').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
  $(btn.dataset.page).classList.add('active-page');
  const label = btn.querySelector('[data-i18n]');
  $('pageTitle').textContent = label ? label.textContent : btn.innerText.replace(/^[^A-Za-zА-Яа-яІіЇїЄє]+/, '');
});

$('habitForm').onsubmit = e => {
  e.preventDefault();
  const newHabit = {
    id: Date.now(),
    title: lang === 'en' ? $('habitTitle').value : 'Custom habit',
    titleUk: lang === 'uk' ? $('habitTitle').value : 'Власна звичка',
    category: $('habitCategory').value,
    priority: $('habitPriority').value,
    streak: 0,
    done: false,
    history: [0,0,0,0,0,0,0]
  };
  state.habits.push(newHabit);
  $('habitTitle').value = '';
  log(tr('habitAdded'));
  save();
  renderHabits();
};

$('addGoal').onclick = () => {
  const title = prompt(tr('goalTitle'));
  if (title) {
    state.goals.push({
      id: Date.now(),
      title: lang === 'en' ? title : 'Custom goal',
      titleUk: lang === 'uk' ? title : 'Власна ціль',
      progress: 0,
      target: tr('customTarget'),
      targetUk: 'Власна ціль'
    });
    save();
    renderGoals();
  }
};

$('langSelect').onchange = e => {
  lang = e.target.value;
  localStorage.setItem('lb-lang', lang);
  renderI18n();
  renderHabits();
  renderGoals();
  renderUsers();
  renderLogs();
  renderCategoryBars();
  generateInsight();
  const active = document.querySelector('.nav.active [data-i18n]');
  if (active) $('pageTitle').textContent = active.textContent;
};

$('roleSelect').onchange = e => {
  document.body.dataset.role = e.target.value;
  $('profileRole').textContent = e.target.value === 'admin' ? tr('roleAdmin') : tr('roleUser');
};

$('themeToggle').onclick = () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('lb-theme', theme);
  document.body.dataset.theme = theme;
  $('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
  renderCanvas();
};

$('globalSearch').oninput = renderHabits;
$('habitFilter').onchange = renderHabits;
$('habitSort').onchange = renderHabits;
$('moodRange').oninput = renderStats;
$('generateInsight').onclick = generateInsight;
$('sortUsers').onclick = () => {
  state.users.sort((a, b) => localUserName(a).localeCompare(localUserName(b), lang === 'uk' ? 'uk' : 'en'));
  renderUsers();
};
$('userSearch').oninput = renderUsers;
$('backupData').onclick = backupData;
$('exportData').onclick = exportData;
$('resetDemo').onclick = resetDemo;
$('saveSettings').onclick = () => {
  $('profileName').textContent = $('nameInput').value || tr('profileDefaultName');
  toast('saved');
};
$('rtlToggle').onchange = e => {
  document.body.dir = e.target.checked ? 'rtl' : 'ltr';
};
$('importFile').onchange = e => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      state = JSON.parse(r.result);
      state.users = (state.users || []).filter(u => !/Anastasiya|Chupryna|Chuprina|Анастас/i.test(u.name || ''));
      save();
      init();
      toast('imported');
    } catch {
      toast('invalidJson');
    }
  };
  r.readAsText(f);
};

init();
