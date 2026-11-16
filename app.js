const tg = window.Telegram.WebApp;
tg.expand();

let currentChapter = null;
let currentPage = 0;

// 1. Генерация кнопок уроков при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('chaptersGrid');
    // Генерируем 9 кнопок
    for (let i = 1; i <= 9; i++) {
        const btn = document.createElement('button');
        btn.className = 'btn-chapter';
        btn.innerText = `Kappale ${i}`;
        btn.onclick = () => openChapter(i);
        grid.appendChild(btn);
    }

    // Скрываем клавиатуру при клике вне поля поиска
    document.addEventListener('click', function(event) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput && event.target !== searchInput && !searchInput.contains(event.target)) {
            searchInput.blur();
        }
    });
});

// 2. Открытие урока
function openChapter(num) {
    if (!bookData[num]) {
        alert("Этот урок пока не добавлен.");
        return;
    }
    
    currentChapter = num;
    currentPage = 0;
    
    document.getElementById('lessonTitle').innerText = bookData[num].title;
    document.getElementById('main-menu').classList.remove('active');
    document.getElementById('lesson-view').classList.add('active');
    
    renderPage();
}

// 3. Возврат в меню
function goBackToMenu() {
    document.getElementById('lesson-view').classList.remove('active');
    document.getElementById('main-menu').classList.add('active');
}

// 4. Отрисовка текущей страницы
function renderPage() {
    const contentDiv = document.getElementById('lessonContent');
    const pages = bookData[currentChapter].pages;
    
    // Меняем текст
    contentDiv.innerHTML = pages[currentPage];
    
    // Обновляем счетчик и кнопки
    document.getElementById('pageIndicator').innerText = `${currentPage + 1} / ${pages.length}`;
    document.getElementById('btnPrev').disabled = (currentPage === 0);
    document.getElementById('btnNext').disabled = (currentPage === pages.length - 1);
}

// 5. Листание
function nextPage() {
    const pages = bookData[currentChapter].pages;
    if (currentPage < pages.length - 1) {
        currentPage++;
        renderPage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
}

function openAnswers() {
    alert("Раздел с ответами (Vastaukset) в разработке.");
}