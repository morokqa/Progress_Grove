const STORAGE_KEY="progress-grove-v3-1";
const PREVIOUS_KEYS=["progress-grove-v2","progress-tracker-v1"];
const OLD_KEY="progress-tracker-v1";
const INITIAL_DATA={"version": "3.1", "settings": {"appTitle": "Progress Grove", "subtitle": "grow a little every day", "learningTitle": "iOS-разработка", "projectTitle": "Пет-проект"}, "learning": [{"id": "swift", "title": "1. Swift", "collapsed": false, "topics": [{"id": "swift-1", "title": "Базовый синтаксис", "theory": false, "practice": false, "review": false}, {"id": "swift-2", "title": "Переменные, константы и типы данных", "theory": false, "practice": false, "review": false}, {"id": "swift-3", "title": "Опционалы и работа с ними", "theory": false, "practice": false, "review": false}, {"id": "swift-4", "title": "Функции и параметры", "theory": false, "practice": false, "review": false}, {"id": "swift-5", "title": "Замыкания", "theory": false, "practice": false, "review": false}, {"id": "swift-6", "title": "Функции высшего порядка: map, filter, reduce", "theory": false, "practice": false, "review": false}, {"id": "swift-7", "title": "Структуры и классы", "theory": false, "practice": false, "review": false}, {"id": "swift-8", "title": "Value semantics и reference semantics", "theory": false, "practice": false, "review": false}, {"id": "swift-9", "title": "Протоколы", "theory": false, "practice": false, "review": false}, {"id": "swift-10", "title": "Extensions", "theory": false, "practice": false, "review": false}, {"id": "swift-11", "title": "Generics", "theory": false, "practice": false, "review": false}, {"id": "swift-12", "title": "Error handling", "theory": false, "practice": false, "review": false}, {"id": "swift-13", "title": "ARC", "theory": false, "practice": false, "review": false}, {"id": "swift-14", "title": "weak и unowned", "theory": false, "practice": false, "review": false}, {"id": "swift-15", "title": "Retain cycles", "theory": false, "practice": false, "review": false}, {"id": "swift-16", "title": "Особенности замыканий", "theory": false, "practice": false, "review": false}]}, {"id": "ui", "title": "2. UI-фреймворки", "collapsed": false, "topics": [{"id": "ui-1", "title": "SwiftUI: базовые UI-элементы", "theory": false, "practice": false, "review": false}, {"id": "ui-2", "title": "SwiftUI: декларативный подход", "theory": false, "practice": false, "review": false}, {"id": "ui-3", "title": "SwiftUI: структура View и body", "theory": false, "practice": false, "review": false}, {"id": "ui-4", "title": "SwiftUI: модификаторы", "theory": false, "practice": false, "review": false}, {"id": "ui-5", "title": "SwiftUI: @State и @Binding", "theory": false, "practice": false, "review": false}, {"id": "ui-6", "title": "SwiftUI: @ObservedObject и @StateObject", "theory": false, "practice": false, "review": false}, {"id": "ui-7", "title": "SwiftUI: навигация", "theory": false, "practice": false, "review": false}, {"id": "ui-8", "title": "SwiftUI: списки", "theory": false, "practice": false, "review": false}, {"id": "ui-9", "title": "SwiftUI: анимации", "theory": false, "practice": false, "review": false}, {"id": "ui-10", "title": "SwiftUI: UIViewRepresentable", "theory": false, "practice": false, "review": false}, {"id": "ui-11", "title": "UIKit: UIViewController и жизненный цикл", "theory": false, "practice": false, "review": false}, {"id": "ui-12", "title": "UIKit: UIView", "theory": false, "practice": false, "review": false}, {"id": "ui-13", "title": "UIKit: UINavigationController и UITabBarController", "theory": false, "practice": false, "review": false}, {"id": "ui-14", "title": "UIKit: Auto Layout", "theory": false, "practice": false, "review": false}, {"id": "ui-15", "title": "UIKit: UITableView и UICollectionView", "theory": false, "practice": false, "review": false}, {"id": "ui-16", "title": "UIKit: пользовательские события", "theory": false, "practice": false, "review": false}]}, {"id": "concurrency", "title": "3. Многопоточность и Concurrency", "collapsed": false, "topics": [{"id": "concurrency-1", "title": "Основы многопоточности", "theory": false, "practice": false, "review": false}, {"id": "concurrency-2", "title": "GCD: очереди", "theory": false, "practice": false, "review": false}, {"id": "concurrency-3", "title": "GCD: sync и async", "theory": false, "practice": false, "review": false}, {"id": "concurrency-4", "title": "async/await", "theory": false, "practice": false, "review": false}, {"id": "concurrency-5", "title": "Structured concurrency", "theory": false, "practice": false, "review": false}, {"id": "concurrency-6", "title": "Task и TaskGroup", "theory": false, "practice": false, "review": false}, {"id": "concurrency-7", "title": "Actors", "theory": false, "practice": false, "review": false}, {"id": "concurrency-8", "title": "@MainActor", "theory": false, "practice": false, "review": false}, {"id": "concurrency-9", "title": "Sendable", "theory": false, "practice": false, "review": false}, {"id": "concurrency-10", "title": "Race conditions", "theory": false, "practice": false, "review": false}, {"id": "concurrency-11", "title": "Thread safety", "theory": false, "practice": false, "review": false}]}, {"id": "network", "title": "4. Работа с сетью", "collapsed": false, "topics": [{"id": "network-1", "title": "JSON", "theory": false, "practice": false, "review": false}, {"id": "network-2", "title": "REST", "theory": false, "practice": false, "review": false}, {"id": "network-3", "title": "HTTP-методы", "theory": false, "practice": false, "review": false}, {"id": "network-4", "title": "URLSession", "theory": false, "practice": false, "review": false}, {"id": "network-5", "title": "Сетевые запросы через async/await", "theory": false, "practice": false, "review": false}, {"id": "network-6", "title": "Сетевые запросы через closures", "theory": false, "practice": false, "review": false}, {"id": "network-7", "title": "Codable", "theory": false, "practice": false, "review": false}, {"id": "network-8", "title": "Обработка сетевых ошибок", "theory": false, "practice": false, "review": false}, {"id": "network-9", "title": "Создание сетевого слоя", "theory": false, "practice": false, "review": false}, {"id": "network-10", "title": "DTO и domain-модели", "theory": false, "practice": false, "review": false}]}, {"id": "architecture", "title": "5. Архитектура приложений", "collapsed": false, "topics": [{"id": "architecture-1", "title": "Зачем нужна архитектура", "theory": false, "practice": false, "review": false}, {"id": "architecture-2", "title": "MVC", "theory": false, "practice": false, "review": false}, {"id": "architecture-3", "title": "MVVM", "theory": false, "practice": false, "review": false}, {"id": "architecture-4", "title": "Clean Architecture", "theory": false, "practice": false, "review": false}, {"id": "architecture-5", "title": "Разделение слоёв", "theory": false, "practice": false, "review": false}, {"id": "architecture-6", "title": "Dependency inversion", "theory": false, "practice": false, "review": false}]}, {"id": "git", "title": "6. Git и репозитории", "collapsed": false, "topics": [{"id": "git-1", "title": "Базовые команды Git", "theory": false, "practice": false, "review": false}, {"id": "git-2", "title": "Ветки", "theory": false, "practice": false, "review": false}, {"id": "git-3", "title": "Merge", "theory": false, "practice": false, "review": false}, {"id": "git-4", "title": "Rebase", "theory": false, "practice": false, "review": false}, {"id": "git-5", "title": "Pull requests", "theory": false, "practice": false, "review": false}, {"id": "git-6", "title": "GitHub и GitLab", "theory": false, "practice": false, "review": false}, {"id": "git-7", "title": "GitFlow", "theory": false, "practice": false, "review": false}]}, {"id": "storage", "title": "7. Хранение данных", "collapsed": false, "topics": [{"id": "storage-1", "title": "UserDefaults", "theory": false, "practice": false, "review": false}, {"id": "storage-2", "title": "Keychain", "theory": false, "practice": false, "review": false}, {"id": "storage-3", "title": "Core Data", "theory": false, "practice": false, "review": false}, {"id": "storage-4", "title": "SwiftData", "theory": false, "practice": false, "review": false}]}, {"id": "dependencies", "title": "8. Менеджеры зависимостей", "collapsed": false, "topics": [{"id": "dependencies-1", "title": "Swift Package Manager", "theory": false, "practice": false, "review": false}, {"id": "dependencies-2", "title": "CocoaPods", "theory": false, "practice": false, "review": false}]}, {"id": "testing", "title": "9. Тестирование", "collapsed": false, "topics": [{"id": "testing-1", "title": "Unit Tests", "theory": false, "practice": false, "review": false}, {"id": "testing-2", "title": "UI Tests", "theory": false, "practice": false, "review": false}, {"id": "testing-3", "title": "Тестирование ViewModel", "theory": false, "practice": false, "review": false}, {"id": "testing-4", "title": "Мокинг зависимостей", "theory": false, "practice": false, "review": false}, {"id": "testing-5", "title": "Тестируемая архитектура", "theory": false, "practice": false, "review": false}]}, {"id": "patterns", "title": "10. Паттерны и роли", "collapsed": false, "topics": [{"id": "patterns-1", "title": "Dependency Injection", "theory": false, "practice": false, "review": false}, {"id": "patterns-2", "title": "Factory", "theory": false, "practice": false, "review": false}, {"id": "patterns-3", "title": "Coordinator", "theory": false, "practice": false, "review": false}, {"id": "patterns-4", "title": "Observer", "theory": false, "practice": false, "review": false}, {"id": "patterns-5", "title": "Builder", "theory": false, "practice": false, "review": false}, {"id": "patterns-6", "title": "Manager", "theory": false, "practice": false, "review": false}, {"id": "patterns-7", "title": "Service", "theory": false, "practice": false, "review": false}, {"id": "patterns-8", "title": "Repository", "theory": false, "practice": false, "review": false}]}, {"id": "debug", "title": "11. Инструменты и дебаг", "collapsed": false, "topics": [{"id": "debug-1", "title": "Xcode Debugger", "theory": false, "practice": false, "review": false}, {"id": "debug-2", "title": "Breakpoints", "theory": false, "practice": false, "review": false}, {"id": "debug-3", "title": "Memory Graph", "theory": false, "practice": false, "review": false}, {"id": "debug-4", "title": "Instruments: Leaks", "theory": false, "practice": false, "review": false}, {"id": "debug-5", "title": "Instruments: Time Profiler", "theory": false, "practice": false, "review": false}, {"id": "debug-6", "title": "Логирование", "theory": false, "practice": false, "review": false}]}, {"id": "extra", "title": "12. Дополнительные навыки", "collapsed": false, "topics": [{"id": "extra-1", "title": "Accessibility", "theory": false, "practice": false, "review": false}, {"id": "extra-2", "title": "Figma", "theory": false, "practice": false, "review": false}, {"id": "extra-3", "title": "Postman", "theory": false, "practice": false, "review": false}, {"id": "extra-4", "title": "Proxyman", "theory": false, "practice": false, "review": false}, {"id": "extra-5", "title": "Основы CI/CD", "theory": false, "practice": false, "review": false}, {"id": "extra-6", "title": "Tuist", "theory": false, "practice": false, "review": false}, {"id": "extra-7", "title": "Fastlane", "theory": false, "practice": false, "review": false}, {"id": "extra-8", "title": "Линтеры и code style", "theory": false, "practice": false, "review": false}]}, {"id": "ai", "title": "13. Работа с ИИ", "collapsed": false, "topics": [{"id": "ai-1", "title": "ИИ как помощник в обучении", "theory": false, "practice": false, "review": false}, {"id": "ai-2", "title": "Работа с кодовым агентом через терминал", "theory": false, "practice": false, "review": false}, {"id": "ai-3", "title": "Feedback loop для агента", "theory": false, "practice": false, "review": false}, {"id": "ai-4", "title": "MCP и дополнительные skills", "theory": false, "practice": false, "review": false}, {"id": "ai-5", "title": "ИИ для онбординга", "theory": false, "practice": false, "review": false}, {"id": "ai-6", "title": "ИИ для написания тестов", "theory": false, "practice": false, "review": false}, {"id": "ai-7", "title": "ИИ для рефакторинга", "theory": false, "practice": false, "review": false}, {"id": "ai-8", "title": "ИИ для дебаггинга", "theory": false, "practice": false, "review": false}, {"id": "ai-9", "title": "ИИ для документации", "theory": false, "practice": false, "review": false}]}], "journal": [], "project": [{"id": "project-1", "title": "Сформулировать проблему и идею приложения", "done": false}, {"id": "project-2", "title": "Определить целевую аудиторию", "done": false}, {"id": "project-3", "title": "Описать бизнес-требования", "done": false}, {"id": "project-4", "title": "Составить пользовательские сценарии", "done": false}, {"id": "project-5", "title": "Определить MVP", "done": false}, {"id": "project-6", "title": "Продумать структуру списков и категорий", "done": false}, {"id": "project-7", "title": "Продумать карточку фильма и сериала", "done": false}, {"id": "project-8", "title": "Продумать отслеживание сезона и даты продолжения", "done": false}, {"id": "project-9", "title": "Продумать карточки книг, видео и курсов", "done": false}, {"id": "project-10", "title": "Сделать простой wireframe", "done": false}, {"id": "project-11", "title": "Определить модели данных", "done": false}, {"id": "project-12", "title": "Создать проект в Xcode", "done": false}, {"id": "project-13", "title": "Настроить навигацию", "done": false}, {"id": "project-14", "title": "Сделать главный экран", "done": false}, {"id": "project-15", "title": "Сделать экран списков", "done": false}, {"id": "project-16", "title": "Сделать добавление и редактирование элементов", "done": false}, {"id": "project-17", "title": "Добавить поиск и фильтры", "done": false}, {"id": "project-18", "title": "Добавить локальное хранение", "done": false}, {"id": "project-19", "title": "Протестировать основные сценарии", "done": false}, {"id": "project-20", "title": "Подготовить первую рабочую версию", "done": false}], "activity": {}};
let state=loadState();
let dialogMode=null;
let editingContext=null;
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];

function clone(v){return JSON.parse(JSON.stringify(v))}
function localDateKey(date=new Date()){const o=date.getTimezoneOffset();return new Date(date.getTime()-o*60000).toISOString().slice(0,10)}
function loadState(){
  try{
    const current=localStorage.getItem(STORAGE_KEY);
    if(current){
      const parsed=JSON.parse(current);
      return migrateTo31(parsed);
    }

    for(const key of PREVIOUS_KEYS){
      const saved=localStorage.getItem(key);
      if(!saved) continue;
      const parsed=JSON.parse(saved);
      const migrated=migrateTo31(parsed);
      localStorage.setItem(STORAGE_KEY,JSON.stringify(migrated));
      return migrated;
    }
  }catch(e){console.warn(e)}
  return migrateTo31(clone(INITIAL_DATA))
}

function migrateTo31(data){
  const migrated=clone(data || INITIAL_DATA);
  migrated.version="3.1";
  migrated.activity=migrated.activity || {};

  migrated.learning=(migrated.learning || []).map(section=>({
    ...section,
    topics:(section.topics || []).map(topic=>({
      ...topic,
      review:Boolean(topic.review),
      reinforced:Boolean(topic.reinforced)
    }))
  }));

  migrated.journal=migrated.journal || [];
  migrated.project=migrated.project || [];
  migrated.settings=migrated.settings || clone(INITIAL_DATA.settings);

  return migrated;
}
function saveState({activityType=null}={}){
  if(activityType)registerActivity(activityType);
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  renderAll()
}
function registerActivity(type){
  const today=localDateKey();
  state.activity[today]=(state.activity[today]||0)+1
}
function escapeHtml(value){return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function allTopics(){return state.learning.flatMap(section=>section.topics.map(topic=>({...topic,sectionTitle:section.title,sectionId:section.id})))}
function learningMetrics(){
  const topics=allTopics(),totalUnits=topics.length*2;
  const completedUnits=topics.reduce((n,t)=>n+Number(t.theory)+Number(t.practice),0);
  return{
    topics,
    totalTopics:topics.length,
    completedTopics:topics.filter(t=>t.theory&&t.practice).length,
    theoryDone:topics.filter(t=>t.theory).length,
    practiceDone:topics.filter(t=>t.practice).length,
    reviewCount:topics.filter(t=>t.review).length,
    reinforcedCount:topics.filter(t=>t.reinforced).length,
    percent:totalUnits?Math.round(completedUnits/totalUnits*100):0
  }
}
function sectionMetrics(section){
  const total=section.topics.length*2;
  const done=section.topics.reduce((n,t)=>n+Number(t.theory)+Number(t.practice),0);
  return{percent:total?Math.round(done/total*100):0,completed:section.topics.filter(t=>t.theory&&t.practice).length,totalTopics:section.topics.length}
}
function projectMetrics(){const total=state.project.length,done=state.project.filter(i=>i.done).length;return{total,done,percent:total?Math.round(done/total*100):0}}
function calculateStreak(){
  const keys=Object.keys(state.activity);
  if(!keys.length)return 0;
  const dates=new Set(keys),cursor=new Date();
  if(!dates.has(localDateKey(cursor))){cursor.setDate(cursor.getDate()-1);if(!dates.has(localDateKey(cursor)))return 0}
  let streak=0;while(dates.has(localDateKey(cursor))){streak++;cursor.setDate(cursor.getDate()-1)}return streak
}
function formatDate(iso){return new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"}).format(new Date(`${iso}T12:00:00`))}
function plural(n,one,few,many){const m10=n%10,m100=n%100;if(m10===1&&m100!==11)return one;if([2,3,4].includes(m10)&&![12,13,14].includes(m100))return few;return many}

function renderDashboard(){
  const l=learningMetrics(),p=projectMetrics(),streak=calculateStreak();
  $("#learningPercent").textContent=`${l.percent}%`;$("#learningProgressBar").style.width=`${l.percent}%`;$("#learningProgressText").textContent=`${l.completedTopics} из ${l.totalTopics} тем закрыты полностью`;
  $("#projectPercent").textContent=`${p.percent}%`;$("#projectProgressBar").style.width=`${p.percent}%`;$("#projectProgressText").textContent=`${p.done} из ${p.total} задач выполнено`;
  $("#streakValue").textContent=streak;$("#streakText").textContent=streak?`${streak} ${plural(streak,"день","дня","дней")} подряд`:"Отметь любое полезное действие";
  const next=l.topics.find(t=>!(t.theory&&t.practice));$("#nextTopicTitle").textContent=next?next.title:"Все темы завершены";$("#nextTopicSection").textContent=next?next.sectionTitle:"Вот это мощно";
  const review=l.topics.filter(t=>t.review);$("#reviewCount").textContent=review.length;$("#reviewPreview").innerHTML=review.length?review.slice(0,4).map(t=>`<div class="review-chip">${escapeHtml(t.title)}</div>`).join("")+(review.length>4?`<button class="text-button" data-go-to="learning">Ещё ${review.length-4} →</button>`:""):`<p class="muted">Пока ничего не отмечено.</p>`;
  const last=state.journal[0];$("#lastJournalDate").textContent=last?formatDate(last.date):"Записей пока нет";$("#lastJournalText").textContent=last?last.text:"Здесь появится твой последний отчёт."
}
function renderLearning(){
  const m=learningMetrics();
  $("#learningStats").textContent=`${m.completedTopics} из ${m.totalTopics} тем завершено`;
  $("#theoryStats").textContent=`Теория: ${m.theoryDone}/${m.totalTopics}`;
  $("#practiceStats").textContent=`Практика: ${m.practiceDone}/${m.totalTopics}`;
  $("#reviewStats").textContent=`Повторить: ${m.reviewCount}`;

  $("#learningSections").innerHTML=state.learning.map(section=>{
    const sm=sectionMetrics(section);
    return `<article class="card learning-section ${section.collapsed?"is-collapsed":""}" data-section-id="${escapeHtml(section.id)}">
      <div class="section-title-row">
        <div class="section-main">
          <button class="section-toggle" data-action="toggle-section"><span class="chevron">▼</span><span>${escapeHtml(section.title)}</span></button>
          <div class="section-meta"><div class="section-progress"><span style="width:${sm.percent}%"></span></div><span class="section-percent">${sm.percent}%</span></div>
        </div>
        <button class="text-button" data-action="edit-section">Изменить</button>
        <button class="text-button danger-text" data-action="delete-section">Удалить</button>
      </div>

      <table class="topic-table">
        <thead><tr><th>Тема</th><th>Теория</th><th>Практика</th></tr></thead>
        <tbody>
          ${section.topics.map(topic=>{
            const completed=topic.theory&&topic.practice;
            const status=completed
              ? `<button class="topic-status-button ${topic.review?"is-review":""}" data-action="toggle-review-status" aria-label="${topic.review?"Отметить тему закреплённой":"Отметить тему для повторения"}">${topic.review?"!":"✔"}</button>`
              : `<span class="topic-status-placeholder"></span>`;

            return `<tr data-topic-id="${escapeHtml(topic.id)}">
              <td>
                <div class="topic-title">
                  <div class="topic-label-wrap">
                       ${status}
                       <span class="${completed && !topic.review ? "topic-complete" : ""}">
                             ${escapeHtml(topic.title)}
                      </span>
                  </div>
                  <span class="row-actions">
                    <button class="text-button" data-action="edit-topic">✎</button>
                    <button class="text-button danger-text" data-action="delete-topic">×</button>
                  </span>
                </div>
              </td>
              <td><input class="check" type="checkbox" data-action="toggle-theory" ${topic.theory?"checked":""}></td>
              <td><input class="check" type="checkbox" data-action="toggle-practice" ${topic.practice?"checked":""}></td>
            </tr>`
          }).join("")||`<tr><td colspan="3" class="muted">Тем пока нет</td></tr>`}
        </tbody>
      </table>
    </article>`
  }).join("")
}
function renderJournal(){
  $("#journalList").innerHTML=state.journal.length?state.journal.map(entry=>`<article class="card journal-entry paper-card" data-journal-id="${escapeHtml(entry.id)}">
    <div class="journal-entry-header"><time datetime="${entry.date}">${formatDate(entry.date)}</time><span class="row-actions"><button class="text-button" data-action="edit-journal">Изменить</button><button class="text-button danger-text" data-action="delete-journal">Удалить</button></span></div>
    <div>${escapeHtml(entry.text).replaceAll("\n","<br>")}</div></article>`).join(""):`<article class="card empty-state"><h2>Дневник пока пуст</h2><p class="muted">Первая короткая запись уже считается движением вперёд.</p></article>`
}
function renderProject(){
  const p=projectMetrics();$("#projectStats").textContent=`${p.done} из ${p.total} задач завершено`;$("#projectPagePercent").textContent=`${p.percent}%`;$("#projectPageBar").style.width=`${p.percent}%`;
  $("#projectList").innerHTML=state.project.map(item=>`<div class="task-row" data-project-id="${escapeHtml(item.id)}"><input class="check" type="checkbox" data-action="toggle-project" ${item.done?"checked":""}><span class="${item.done?"task-done":""}">${escapeHtml(item.title)}</span><span class="row-actions"><button class="text-button" data-action="edit-project">Изменить</button><button class="text-button danger-text" data-action="delete-project">Удалить</button></span></div>`).join("")||`<div class="empty-state"><p class="muted">Задач пока нет</p></div>`
}
function renderStats(){
  const l=learningMetrics(),p=projectMetrics(),streak=calculateStreak();
  const cards=[
    ["Общий прогресс",`${l.percent}%`,"по теории и практике"],
    ["Теория",l.theoryDone,`из ${l.totalTopics}`],
    ["Практика",l.practiceDone,`из ${l.totalTopics}`],
    ["Тем завершено",l.completedTopics,`осталось ${Math.max(l.totalTopics-l.completedTopics,0)}`],
    ["Закреплено",l.reinforcedCount,"разных тем"],
    ["Серия",streak,plural(streak,"день","дня","дней")],
    ["Записей",state.journal.length,"в дневнике"],
    ["Пет-проект",`${p.percent}%`,`${p.done} из ${p.total}`]
  ];
  $("#statsCards").innerHTML=cards.map(c=>`<article class="card stat-card"><span class="kicker">${c[0]}</span><strong>${c[1]}</strong><p>${c[2]}</p></article>`).join("");
  renderHeatmap();renderWeekly();renderAchievements(l,p,streak)
}
function renderHeatmap(){
  const cells=[];const today=new Date();const start=new Date(today);start.setDate(start.getDate()-83);
  for(let i=0;i<84;i++){const d=new Date(start);d.setDate(start.getDate()+i);const key=localDateKey(d),count=state.activity[key]||0,level=count===0?0:count===1?1:count<=3?2:count<=5?3:4;cells.push(`<div class="heat-cell ${level?`l${level}`:""}" title="${key}: ${count} действий"></div>`)}
  $("#heatmap").innerHTML=cells.join("")
}
function renderWeekly(){
  const days=[];const names=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];let max=1;
  for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const count=state.activity[localDateKey(d)]||0;max=Math.max(max,count);days.push({name:names[d.getDay()],count})}
  $("#weeklyChart").innerHTML=days.map(d=>`<div class="week-row"><span>${d.name}</span><div class="week-bar"><span style="width:${Math.round(d.count/max*100)}%"></span></div><strong>${d.count}</strong></div>`).join("")
}
function renderAchievements(l,p,streak){
  const totalActions=Object.values(state.activity).reduce((sum,count)=>sum+count,0);
  const activeDays=Object.keys(state.activity).filter(date=>state.activity[date]>0).length;
  const items=[
    ["🌱","Первая тема","Полностью изучить первую тему",l.completedTopics>=1],
    ["📚","Десять тем","Полностью изучить 10 тем",l.completedTopics>=10],
    ["🌳","Двадцать пять тем","Полностью изучить 25 тем",l.completedTopics>=25],
    ["💻","Первая практика","Отметить первую практику",l.practiceDone>=1],
    ["🛠","Практик","Выполнить 25 практик",l.practiceDone>=25],
    ["🔥","Неделя подряд","Заниматься 7 дней подряд",streak>=7],
    ["🌿","Две недели подряд","Заниматься 14 дней подряд",streak>=14],
    ["🏔","Месяц подряд","Заниматься 30 дней подряд",streak>=30],
    ["✨","Десять занятий","Сделать действия в 10 разных дней",activeDays>=10],
    ["🍀","Пятьдесят занятий","Сделать действия в 50 разных дней",activeDays>=50],
    ["⚡","Пятьдесят действий","Совершить 50 учебных действий",totalActions>=50],
    ["🚀","Сотня действий","Совершить 100 учебных действий",totalActions>=100],
    ["✍️","Первый отчёт","Сделать запись в дневнике",state.journal.length>=1],
    ["📓","Десять отчётов","Сделать 10 записей в дневнике",state.journal.length>=10],
    ["🧠","Первое закрепление","Закрепить первую тему",l.reinforcedCount>=1],
    ["📖","Десять закреплений","Закрепить 10 разных тем",l.reinforcedCount>=10],
    ["🌲","Двадцать пять закреплений","Закрепить 25 разных тем",l.reinforcedCount>=25],
    ["🏆","Пятьдесят закреплений","Закрепить 50 разных тем",l.reinforcedCount>=50],
    ["🧭","Первый шаг проекта","Закрыть задачу пет-проекта",p.done>=1],
    ["🏗","Половина проекта","Завершить 50% пет-проекта",p.percent>=50],
    ["🌄","Половина пути","Дойти до 50% обучения",l.percent>=50],
    ["🎉","Большой финиш","Закрыть 100% обучения",l.percent>=100],
    ["🏡","Проект готов","Закрыть весь пет-проект",p.percent>=100]
  ];
  $("#achievements").innerHTML=items.map(i=>`<div class="achievement ${i[3]?"is-earned":""}"><span class="achievement-icon">${i[0]}</span><strong>${i[1]}</strong><span>${i[2]}</span></div>`).join("")
}
function renderAll(){renderDashboard();renderLearning();renderJournal();renderProject();renderStats()}

function switchView(name){$$(".tab").forEach(t=>t.classList.toggle("is-active",t.dataset.view===name));$$(".view").forEach(v=>v.classList.toggle("is-active",v.id===`${name}View`));window.scrollTo({top:0,behavior:"smooth"})}
function openSettings(open){$("#settingsPanel").classList.toggle("is-open",open);$("#overlay").classList.toggle("is-open",open);$("#settingsPanel").setAttribute("aria-hidden",String(!open))}
function openDialog(mode,context=null){
  dialogMode=mode;editingContext=context;
  const titles={"add-section":"Добавить раздел","edit-section":"Изменить раздел","add-topic":"Добавить тему","edit-topic":"Изменить тему","add-project":"Добавить задачу","edit-project":"Изменить задачу"};
  $("#dialogTitle").textContent=titles[mode];$("#dialogSubmitButton").textContent=mode.startsWith("edit")?"Сохранить":"Добавить";
  const needsSection=["add-topic","edit-topic"].includes(mode);$("#dialogSelectLabel").classList.toggle("hidden",!needsSection);
  $("#dialogSectionSelect").innerHTML=state.learning.map(s=>`<option value="${escapeHtml(s.id)}">${escapeHtml(s.title)}</option>`).join("");
  let value="";if(mode==="edit-section")value=context.title;if(mode==="edit-topic"){value=context.topic.title;$("#dialogSectionSelect").value=context.section.id}if(mode==="edit-project")value=context.title;
  $("#dialogInput").value=value;$("#itemDialog").showModal();setTimeout(()=>$("#dialogInput").focus(),0)
}
function submitDialog(event){
  event.preventDefault();const value=$("#dialogInput").value.trim();if(!value)return;const id=crypto.randomUUID();
  if(dialogMode==="add-section")state.learning.push({id,title:value,collapsed:false,topics:[]});
  else if(dialogMode==="edit-section")editingContext.title=value;
  else if(dialogMode==="add-topic"){const s=state.learning.find(x=>x.id===$("#dialogSectionSelect").value);s?.topics.push({id,title:value,theory:false,practice:false,review:false})}
  else if(dialogMode==="edit-topic"){const oldS=editingContext.section,newS=state.learning.find(x=>x.id===$("#dialogSectionSelect").value);editingContext.topic.title=value;if(newS&&newS.id!==oldS.id){oldS.topics=oldS.topics.filter(t=>t.id!==editingContext.topic.id);newS.topics.push(editingContext.topic)}}
  else if(dialogMode==="add-project")state.project.push({id,title:value,done:false});
  else if(dialogMode==="edit-project")editingContext.title=value;
  $("#itemDialog").close();saveState({activityType:"edit"})
}
function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`progress-grove-backup-${localDateKey()}.json`;a.click();URL.revokeObjectURL(url)}
async function importData(file){
  try{const parsed=JSON.parse(await file.text());if(parsed?.version!==2)throw new Error();state=parsed;saveState();openSettings(false);alert("Резервная копия импортирована.")}catch{alert("Не удалось импортировать файл. Нужна резервная копия Progress Grove 2.0.")}
}

document.addEventListener("click",event=>{
  const tab=event.target.closest(".tab");if(tab)return switchView(tab.dataset.view);
  const go=event.target.closest("[data-go-to]");if(go)return switchView(go.dataset.goTo);
  if(event.target.closest("#settingsButton"))return openSettings(true);
  if(event.target.closest("#closeSettingsButton")||event.target===$("#overlay"))return openSettings(false);
  if(event.target.closest("#addSectionButton"))return openDialog("add-section");
  if(event.target.closest("#addTopicButton"))return openDialog("add-topic");
  if(event.target.closest("#addProjectTaskButton"))return openDialog("add-project");
  if(event.target.closest("#exportButton"))return exportData();
  if(event.target.closest("#importButton"))return $("#importInput").click();
  if(event.target.closest("#resetButton")&&confirm("Сбросить весь прогресс, дневник и задачи?")){state=clone(INITIAL_DATA);localStorage.setItem(STORAGE_KEY,JSON.stringify(state));openSettings(false);renderAll()}
  if(event.target.closest("#closeDialogButton")||event.target.closest("#cancelDialogButton"))return $("#itemDialog").close();

  const sectionEl=event.target.closest("[data-section-id]"),section=sectionEl&&state.learning.find(s=>s.id===sectionEl.dataset.sectionId);
  const topicEl=event.target.closest("[data-topic-id]"),topic=section&&topicEl&&section.topics.find(t=>t.id===topicEl.dataset.topicId);
  const projectEl=event.target.closest("[data-project-id]"),projectItem=projectEl&&state.project.find(i=>i.id===projectEl.dataset.projectId);
  const journalEl=event.target.closest("[data-journal-id]"),journalItem=journalEl&&state.journal.find(i=>i.id===journalEl.dataset.journalId);
  const action=event.target.closest("[data-action]")?.dataset.action;
  if(action==="toggle-section"){section.collapsed=!section.collapsed;saveState()}
  if(action==="edit-section")openDialog("edit-section",section);
  if(action==="delete-section"&&confirm(`Удалить раздел «${section.title}» со всеми темами?`)){state.learning=state.learning.filter(s=>s.id!==section.id);saveState({activityType:"edit"})}
  if(action==="edit-topic")openDialog("edit-topic",{section,topic});
  if(action==="delete-topic"&&confirm(`Удалить тему «${topic.title}»?`)){section.topics=section.topics.filter(t=>t.id!==topic.id);saveState({activityType:"edit"})}
  if(action==="toggle-review-status"){
    if(!(topic.theory&&topic.practice)) return;
    if(topic.review){
      topic.review=false;
      if(!topic.reinforced) topic.reinforced=true;
      saveState({activityType:"reinforce"})
    }else{
      topic.review=true;
      saveState({activityType:"review"})
    }
  }
  if(action==="edit-project")openDialog("edit-project",projectItem);
  if(action==="delete-project"&&confirm(`Удалить задачу «${projectItem.title}»?`)){state.project=state.project.filter(i=>i.id!==projectItem.id);saveState({activityType:"edit"})}
  if(action==="delete-journal"&&confirm("Удалить эту запись?")){state.journal=state.journal.filter(i=>i.id!==journalItem.id);saveState({activityType:"edit"})}
  if(action==="edit-journal"){const text=prompt("Изменить запись:",journalItem.text);if(text?.trim()){journalItem.text=text.trim();saveState({activityType:"journal"})}}
});
document.addEventListener("change",event=>{
  const action=event.target.dataset.action;if(!action)return;
  const sectionEl=event.target.closest("[data-section-id]"),section=sectionEl&&state.learning.find(s=>s.id===sectionEl.dataset.sectionId);
  const topicEl=event.target.closest("[data-topic-id]"),topic=section&&topicEl&&section.topics.find(t=>t.id===topicEl.dataset.topicId);
  if(action==="toggle-theory"){topic.theory=event.target.checked;if(!(topic.theory&&topic.practice))topic.review=false;saveState({activityType:"theory"})}
  if(action==="toggle-practice"){topic.practice=event.target.checked;if(!(topic.theory&&topic.practice))topic.review=false;saveState({activityType:"practice"})}
  if(action==="toggle-project"){const item=state.project.find(i=>i.id===event.target.closest("[data-project-id]").dataset.projectId);item.done=event.target.checked;saveState({activityType:"project"})}
});
$("#saveJournalButton").addEventListener("click",()=>{const text=$("#journalText").value.trim();if(!text)return;state.journal.unshift({id:crypto.randomUUID(),date:localDateKey(),text});$("#journalText").value="";saveState({activityType:"journal"})});
$("#itemForm").addEventListener("submit",submitDialog);
$("#importInput").addEventListener("change",e=>{const file=e.target.files[0];if(file)importData(file);e.target.value=""});
renderAll();

let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  const button = document.querySelector("#installButton");
  if (button) button.classList.remove("hidden");
});
document.querySelector("#installButton")?.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.querySelector("#installButton")?.classList.add("hidden");
});


document.querySelector("#resetTodayButton")?.addEventListener("click", () => {
  const today = localDateKey();
  const count = state.activity[today] || 0;
  if (!count) {
    alert("За сегодня активности ещё нет.");
    return;
  }
  if (!confirm(`Удалить сегодняшнюю активность из статистики? Действий: ${count}`)) return;
  delete state.activity[today];
  saveState();
  openSettings(false);
  alert("Сегодняшняя активность сброшена.");
});
