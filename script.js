/*
==================================================
LOSOWANIE ROZDZIAŁU BIBLII
Biblia Tysiąclecia - linki do biblia.deon.pl
==================================================
*/

const books = [
    { name: "Księga Rodzaju", testament: "ST", chapters: 50, id: 1 },
    { name: "Księga Wyjścia", testament: "ST", chapters: 40, id: 2 },
    { name: "Księga Kapłańska", testament: "ST", chapters: 27, id: 3 },
    { name: "Księga Liczb", testament: "ST", chapters: 36, id: 4 },
    { name: "Księga Powtórzonego Prawa", testament: "ST", chapters: 34, id: 5 },
    { name: "Księga Jozuego", testament: "ST", chapters: 24, id: 6 },
    { name: "Księga Sędziów", testament: "ST", chapters: 21, id: 7 },
    { name: "Księga Rut", testament: "ST", chapters: 4, id: 8 },
    { name: "1 Księga Samuela", testament: "ST", chapters: 31, id: 9 },
    { name: "2 Księga Samuela", testament: "ST", chapters: 24, id: 10 },
    { name: "1 Księga Królewska", testament: "ST", chapters: 22, id: 11 },
    { name: "2 Księga Królewska", testament: "ST", chapters: 25, id: 12 },
    { name: "1 Księga Kronik", testament: "ST", chapters: 29, id: 13 },
    { name: "2 Księga Kronik", testament: "ST", chapters: 36, id: 14 },
    { name: "Księga Ezdrasza", testament: "ST", chapters: 10, id: 15 },
    { name: "Księga Nehemiasza", testament: "ST", chapters: 13, id: 16 },
    { name: "Księga Tobiasza", testament: "ST", chapters: 14, id: 17 },
    { name: "Księga Judyty", testament: "ST", chapters: 16, id: 18 },
    { name: "Księga Estery", testament: "ST", chapters: 16, id: 19 },
    { name: "1 Księga Machabejska", testament: "ST", chapters: 16, id: 20 },
    { name: "2 Księga Machabejska", testament: "ST", chapters: 15, id: 21 },
    { name: "Księga Hioba", testament: "ST", chapters: 42, id: 22 },
    { name: "Księga Psalmów", testament: "ST", chapters: 150, id: 23 },
    { name: "Księga Przysłów", testament: "ST", chapters: 31, id: 24 },
    { name: "Księga Koheleta", testament: "ST", chapters: 12, id: 25 },
    { name: "Pieśń nad Pieśniami", testament: "ST", chapters: 8, id: 26 },
    { name: "Księga Mądrości", testament: "ST", chapters: 19, id: 27 },
    { name: "Mądrość Syracha", testament: "ST", chapters: 51, id: 28 },
    { name: "Księga Izajasza", testament: "ST", chapters: 66, id: 29 },
    { name: "Księga Jeremiasza", testament: "ST", chapters: 52, id: 30 },
    { name: "Lamentacje Jeremiasza", testament: "ST", chapters: 5, id: 31 },
    { name: "Księga Barucha", testament: "ST", chapters: 6, id: 32 },
    { name: "Księga Ezechiela", testament: "ST", chapters: 48, id: 33 },
    { name: "Księga Daniela", testament: "ST", chapters: 14, id: 34 },
    { name: "Księga Ozeasza", testament: "ST", chapters: 14, id: 35 },
    { name: "Księga Joela", testament: "ST", chapters: 4, id: 36 },
    { name: "Księga Amosa", testament: "ST", chapters: 9, id: 37 },
    { name: "Księga Abdiasza", testament: "ST", chapters: 1, id: 38 },
    { name: "Księga Jonasza", testament: "ST", chapters: 4, id: 39 },
    { name: "Księga Micheasza", testament: "ST", chapters: 7, id: 40 },
    { name: "Księga Nahuma", testament: "ST", chapters: 3, id: 41 },
    { name: "Księga Habakuka", testament: "ST", chapters: 3, id: 42 },
    { name: "Księga Sofoniasza", testament: "ST", chapters: 3, id: 43 },
    { name: "Księga Aggeusza", testament: "ST", chapters: 2, id: 44 },
    { name: "Księga Zachariasza", testament: "ST", chapters: 14, id: 45 },
    { name: "Księga Malachiasza", testament: "ST", chapters: 3, id: 46 },
    { name: "Ewangelia Mateusza", testament: "NT", chapters: 28, id: 47 },
    { name: "Ewangelia Marka", testament: "NT", chapters: 16, id: 48 },
    { name: "Ewangelia Łukasza", testament: "NT", chapters: 24, id: 49 },
    { name: "Ewangelia Jana", testament: "NT", chapters: 21, id: 50 },
    { name: "Dzieje Apostolskie", testament: "NT", chapters: 28, id: 51 },
    { name: "List do Rzymian", testament: "NT", chapters: 16, id: 52 },
    { name: "1 List do Koryntian", testament: "NT", chapters: 16, id: 53 },
    { name: "2 List do Koryntian", testament: "NT", chapters: 13, id: 54 },
    { name: "List do Galatów", testament: "NT", chapters: 6, id: 55 },
    { name: "List do Efezjan", testament: "NT", chapters: 6, id: 56 },
    { name: "List do Filipian", testament: "NT", chapters: 4, id: 57 },
    { name: "List do Kolosan", testament: "NT", chapters: 4, id: 58 },
    { name: "1 List do Tesaloniczan", testament: "NT", chapters: 5, id: 59 },
    { name: "2 List do Tesaloniczan", testament: "NT", chapters: 3, id: 60 },
    { name: "1 List do Tymoteusza", testament: "NT", chapters: 6, id: 61 },
    { name: "2 List do Tymoteusza", testament: "NT", chapters: 4, id: 62 },
    { name: "List do Tytusa", testament: "NT", chapters: 3, id: 63 },
    { name: "List do Filemona", testament: "NT", chapters: 1, id: 64 },
    { name: "List do Hebrajczyków", testament: "NT", chapters: 13, id: 65 },
    { name: "List Jakuba", testament: "NT", chapters: 5, id: 66 },
    { name: "1 List Piotra", testament: "NT", chapters: 5, id: 67 },
    { name: "2 List Piotra", testament: "NT", chapters: 3, id: 68 },
    { name: "1 List Jana", testament: "NT", chapters: 5, id: 69 },
    { name: "2 List Jana", testament: "NT", chapters: 1, id: 70 },
    { name: "3 List Jana", testament: "NT", chapters: 1, id: 71 },
    { name: "List Judy", testament: "NT", chapters: 1, id: 72 },
    { name: "Apokalipsa św. Jana", testament: "NT", chapters: 22, id: 73 }
];

/*
==================================================
ZMIENNE
==================================================
*/

let selectedTestament = "ALL";
let pool = [];
let timer = null;
let currentChapter = null;

/*
==================================================
POBIERANIE ELEMENTÓW STRONY
==================================================
*/

const chapterElement = document.getElementById("chapter");
const statusElement = document.getElementById("status");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resultBox = document.getElementById("result");
const resultName = document.getElementById("resultName");
const dailyDateElement = document.getElementById("dailyDate");
const popeLinkElement = document.getElementById("popeLink");

/*
==================================================
TWORZENIE LISTY WSZYSTKICH ROZDZIAŁÓW
==================================================
*/

function createPool() {
    let selectedBooks;

    if (selectedTestament === "ALL") {
        selectedBooks = books;
    } else {
        selectedBooks = books.filter(book => book.testament === selectedTestament);
    }

    pool = [];

    selectedBooks.forEach(book => {
        for (let chapter = 1; chapter <= book.chapters; chapter++) {
            pool.push({
                name: book.name,
                chapter: chapter,
                testament: book.testament,
                id: book.id
            });
        }
    });
}

/*
==================================================
LOSOWANIE JEDNEGO ROZDZIAŁU
==================================================
*/

function randomChapter() {
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
}

/*
==================================================
FORMATOWANIE NAZWY
==================================================
*/

function chapterLabel(chapter) {
    return chapter.name + " — rozdział " + chapter.chapter;
}

/*
==================================================
WYBÓR TESTAMENTU
==================================================
*/

const choiceButtons = document.querySelectorAll(".choice");

choiceButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (timer !== null) {
            return;
        }

        choiceButtons.forEach(otherButton => {
            otherButton.classList.remove("active");
        });

        this.classList.add("active");

        selectedTestament = this.dataset.testament;

        createPool();

        resultBox.classList.add("hidden");

        statusElement.textContent = "ZAKRES WYBRANY";

        if (selectedTestament === "ALL") {
            chapterElement.textContent = "Cała Biblia";
        } else if (selectedTestament === "ST") {
            chapterElement.textContent = "Stary Testament";
        } else {
            chapterElement.textContent = "Nowy Testament";
        }
    });
});

/*
==================================================
START LOSOWANIA
==================================================
*/

startButton.addEventListener("click", function() {
    createPool();

    if (pool.length === 0) {
        return;
    }

    resultBox.classList.add("hidden");

    startButton.disabled = true;
    stopButton.disabled = false;

    statusElement.textContent = "LOSOWANIE…";

    let delay = 50;
    let elapsed = 0;

    function animation() {
        currentChapter = randomChapter();

        chapterElement.textContent = chapterLabel(currentChapter);

        elapsed += delay;

        if (elapsed < 4000) {
            delay = Math.min(250, delay * 1.08);
            timer = setTimeout(animation, delay);
        } else {
            finish();
        }
    }

    animation();
});

/*
==================================================
STOP
==================================================
*/

stopButton.addEventListener("click", function() {
    finish();
});

/*
==================================================
ZAKOŃCZENIE LOSOWANIA
==================================================
*/

function finish() {
    if (timer !== null) {
        clearTimeout(timer);
        timer = null;
    }

    if (currentChapter === null) {
        currentChapter = randomChapter();
    }

    chapterElement.textContent = chapterLabel(currentChapter);
    statusElement.textContent = "WYLOSOWANO";
    resultName.textContent = chapterLabel(currentChapter);
    resultBox.classList.remove("hidden");

    // Dodaj przycisk "Przeczytaj rozdział"
    const oldButton = document.getElementById("readChapter");
    if (oldButton) {
        oldButton.remove();
    }

    const readButton = document.createElement("button");
    readButton.id = "readChapter";
    readButton.className = "read-button";
    readButton.textContent = "📖 Przeczytaj rozdział";
    readButton.addEventListener("click", function() {
        openChapterOnDeon(currentChapter);
    });

    resultBox.appendChild(readButton);

    startButton.disabled = false;
    stopButton.disabled = true;
}

/*
==================================================
OTWIERANIE ROZDZIAŁU NA BIBLIA.DEON.PL
==================================================
*/

function openChapterOnDeon(chapter) {
    const query = `${chapter.name} ${chapter.chapter} biblia.deon.pl`;
    const luckyUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=Szczęśliwy+traf`;
    
    window.open(luckyUrl, '_blank');
}

/*
==================================================
LITURGIA DNIA - VATICAN NEWS
==================================================
*/

function getVaticanLink() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `https://www.vaticannews.va/en/word-of-the-day/${year}/${month}/${day}.html`;
}

function displayDailyReadings() {
    // Formatowanie daty po polsku
    if (dailyDateElement) {
        const today = new Date();
        const dateString = today.toLocaleDateString('pl-PL', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        dailyDateElement.textContent = dateString;
    }
    
    // Ustaw link do Vatican News
    if (popeLinkElement) {
        popeLinkElement.href = getVaticanLink();
        console.log('✅ Link ustawiony na:', popeLinkElement.href);
    }
}

/*
==================================================
URUCHOMIENIE
==================================================
*/

createPool();
window.onload = function() {
    displayDailyReadings();
};
