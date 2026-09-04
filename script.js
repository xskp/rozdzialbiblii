/*
==================================================
LOSOWANIE ROZDZIAŁU BIBLII
==================================================
*/

/*
==================================================
LISTA KSIĄG
==================================================
*/

const books = [
    { name: "Księga Rodzaju", testament: "ST", chapters: 50, api: "Genesis" },
    { name: "Księga Wyjścia", testament: "ST", chapters: 40, api: "Exodus" },
    { name: "Księga Kapłańska", testament: "ST", chapters: 27, api: "Leviticus" },
    { name: "Księga Liczb", testament: "ST", chapters: 36, api: "Numbers" },
    { name: "Księga Powtórzonego Prawa", testament: "ST", chapters: 34, api: "Deuteronomy" },
    { name: "Księga Jozuego", testament: "ST", chapters: 24, api: "Joshua" },
    { name: "Księga Sędziów", testament: "ST", chapters: 21, api: "Judges" },
    { name: "Księga Rut", testament: "ST", chapters: 4, api: "Ruth" },
    { name: "1 Księga Samuela", testament: "ST", chapters: 31, api: "1 Samuel" },
    { name: "2 Księga Samuela", testament: "ST", chapters: 24, api: "2 Samuel" },
    { name: "1 Księga Królewska", testament: "ST", chapters: 22, api: "1 Kings" },
    { name: "2 Księga Królewska", testament: "ST", chapters: 25, api: "2 Kings" },
    { name: "1 Księga Kronik", testament: "ST", chapters: 29, api: "1 Chronicles" },
    { name: "2 Księga Kronik", testament: "ST", chapters: 36, api: "2 Chronicles" },
    { name: "Księga Ezdrasza", testament: "ST", chapters: 10, api: "Ezra" },
    { name: "Księga Nehemiasza", testament: "ST", chapters: 13, api: "Nehemiah" },
    { name: "Księga Tobiasza", testament: "ST", chapters: 14, api: "Tobit" },
    { name: "Księga Judyty", testament: "ST", chapters: 16, api: "Judith" },
    { name: "Księga Estery", testament: "ST", chapters: 16, api: "Esther" },
    { name: "1 Księga Machabejska", testament: "ST", chapters: 16, api: "1 Maccabees" },
    { name: "2 Księga Machabejska", testament: "ST", chapters: 15, api: "2 Maccabees" },
    { name: "Księga Hioba", testament: "ST", chapters: 42, api: "Job" },
    { name: "Księga Psalmów", testament: "ST", chapters: 150, api: "Psalms" },
    { name: "Księga Przysłów", testament: "ST", chapters: 31, api: "Proverbs" },
    { name: "Księga Koheleta", testament: "ST", chapters: 12, api: "Ecclesiastes" },
    { name: "Pieśń nad Pieśniami", testament: "ST", chapters: 8, api: "Song of Songs" },
    { name: "Księga Mądrości", testament: "ST", chapters: 19, api: "Wisdom" },
    { name: "Mądrość Syracha", testament: "ST", chapters: 51, api: "Sirach" },
    { name: "Księga Izajasza", testament: "ST", chapters: 66, api: "Isaiah" },
    { name: "Księga Jeremiasza", testament: "ST", chapters: 52, api: "Jeremiah" },
    { name: "Lamentacje Jeremiasza", testament: "ST", chapters: 5, api: "Lamentations" },
    { name: "Księga Barucha", testament: "ST", chapters: 6, api: "Baruch" },
    { name: "Księga Ezechiela", testament: "ST", chapters: 48, api: "Ezekiel" },
    { name: "Księga Daniela", testament: "ST", chapters: 14, api: "Daniel" },
    { name: "Księga Ozeasza", testament: "ST", chapters: 14, api: "Hosea" },
    { name: "Księga Joela", testament: "ST", chapters: 4, api: "Joel" },
    { name: "Księga Amosa", testament: "ST", chapters: 9, api: "Amos" },
    { name: "Księga Abdiasza", testament: "ST", chapters: 1, api: "Obadiah" },
    { name: "Księga Jonasza", testament: "ST", chapters: 4, api: "Jonah" },
    { name: "Księga Micheasza", testament: "ST", chapters: 7, api: "Micah" },
    { name: "Księga Nahuma", testament: "ST", chapters: 3, api: "Nahum" },
    { name: "Księga Habakuka", testament: "ST", chapters: 3, api: "Habakkuk" },
    { name: "Księga Sofoniasza", testament: "ST", chapters: 3, api: "Zephaniah" },
    { name: "Księga Aggeusza", testament: "ST", chapters: 2, api: "Haggai" },
    { name: "Księga Zachariasza", testament: "ST", chapters: 14, api: "Zechariah" },
    { name: "Księga Malachiasza", testament: "ST", chapters: 3, api: "Malachi" },
    { name: "Ewangelia Mateusza", testament: "NT", chapters: 28, api: "Matthew" },
    { name: "Ewangelia Marka", testament: "NT", chapters: 16, api: "Mark" },
    { name: "Ewangelia Łukasza", testament: "NT", chapters: 24, api: "Luke" },
    { name: "Ewangelia Jana", testament: "NT", chapters: 21, api: "John" },
    { name: "Dzieje Apostolskie", testament: "NT", chapters: 28, api: "Acts" },
    { name: "List do Rzymian", testament: "NT", chapters: 16, api: "Romans" },
    { name: "1 List do Koryntian", testament: "NT", chapters: 16, api: "1 Corinthians" },
    { name: "2 List do Koryntian", testament: "NT", chapters: 13, api: "2 Corinthians" },
    { name: "List do Galatów", testament: "NT", chapters: 6, api: "Galatians" },
    { name: "List do Efezjan", testament: "NT", chapters: 6, api: "Ephesians" },
    { name: "List do Filipian", testament: "NT", chapters: 4, api: "Philippians" },
    { name: "List do Kolosan", testament: "NT", chapters: 4, api: "Colossians" },
    { name: "1 List do Tesaloniczan", testament: "NT", chapters: 5, api: "1 Thessalonians" },
    { name: "2 List do Tesaloniczan", testament: "NT", chapters: 3, api: "2 Thessalonians" },
    { name: "1 List do Tymoteusza", testament: "NT", chapters: 6, api: "1 Timothy" },
    { name: "2 List do Tymoteusza", testament: "NT", chapters: 4, api: "2 Timothy" },
    { name: "List do Tytusa", testament: "NT", chapters: 3, api: "Titus" },
    { name: "List do Filemona", testament: "NT", chapters: 1, api: "Philemon" },
    { name: "List do Hebrajczyków", testament: "NT", chapters: 13, api: "Hebrews" },
    { name: "List Jakuba", testament: "NT", chapters: 5, api: "James" },
    { name: "1 List Piotra", testament: "NT", chapters: 5, api: "1 Peter" },
    { name: "2 List Piotra", testament: "NT", chapters: 3, api: "2 Peter" },
    { name: "1 List Jana", testament: "NT", chapters: 5, api: "1 John" },
    { name: "2 List Jana", testament: "NT", chapters: 1, api: "2 John" },
    { name: "3 List Jana", testament: "NT", chapters: 1, api: "3 John" },
    { name: "List Judy", testament: "NT", chapters: 1, api: "Jude" },
    { name: "Apokalipsa św. Jana", testament: "NT", chapters: 22, api: "Revelation" }
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
const chapterTextDiv = document.getElementById("chapterText");
const chapterTextTitle = document.getElementById("chapterTextTitle");
const chapterTextContent = document.getElementById("chapterTextContent");
const closeChapterButton = document.getElementById("closeChapter");

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
                api: book.api
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
        chapterTextDiv.classList.add("hidden");

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
    chapterTextDiv.classList.add("hidden");

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
        displayChapterText(currentChapter);
    });

    resultBox.appendChild(readButton);

    startButton.disabled = false;
    stopButton.disabled = true;
}

/*
==================================================
POBIERANIE TEKSTU Z API (bible-api.com)
==================================================
*/

async function fetchChapterText(bookApi, chapterNumber) {
    try {
        // Używamy bible-api.com - darmowe, bez klucza
        const url = `https://bible-api.com/${encodeURIComponent(bookApi)}+${chapterNumber}?translation=kjv`;
        
        console.log('Pobieram z:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.verses && data.verses.length > 0) {
            return data.verses.map(verse => ({
                number: verse.verse,
                text: verse.text.trim()
            }));
        }
        
        return null;
        
    } catch (error) {
        console.error('Błąd pobierania z bible-api.com:', error);
        
        // Spróbuj z drugim API
        try {
            console.log('Próbuję z drugim API...');
            
            const fallbackUrl = `https://bible-api.com/${encodeURIComponent(bookApi)}%20${chapterNumber}`;
            const fallbackResponse = await fetch(fallbackUrl);
            
            if (fallbackResponse.ok) {
                const fallbackData = await fallbackResponse.json();
                
                if (fallbackData.verses && fallbackData.verses.length > 0) {
                    return fallbackData.verses.map(verse => ({
                        number: verse.verse,
                        text: verse.text.trim()
                    }));
                }
            }
        } catch (fallbackError) {
            console.error('Błąd z drugim API:', fallbackError);
        }
        
        return null;
    }
}

/*
==================================================
WYŚWIETLANIE TEKSTU ROZDZIAŁU
==================================================
*/

async function displayChapterText(chapter) {
    // Pokaż loading
    chapterTextTitle.textContent = chapterLabel(chapter);
    chapterTextContent.innerHTML = `
        <div style="text-align: center; padding: 30px; color: #766f64;">
            <p>⏳ Ładowanie tekstu...</p>
            <p style="font-size: 14px;">Pobieranie z bible-api.com</p>
        </div>
    `;
    chapterTextDiv.classList.remove("hidden");
    chapterTextDiv.scrollIntoView({ behavior: "smooth" });
    
    // Pobierz tekst
    const verses = await fetchChapterText(chapter.api, chapter.chapter);
    
    if (!verses || verses.length === 0) {
        chapterTextContent.innerHTML = `
            <div style="text-align: center; padding: 30px; color: #766f64;">
                <p>❌ Nie udało się pobrać tekstu.</p>
                <p style="font-size: 14px;">Przepraszamy za utrudnienia.</p>
                <p style="font-size: 14px; margin-top: 10px;">
                    Możesz przeczytać ten rozdział tutaj: 
                    <a href="https://biblia.deon.pl/rozdzial.php?id=1" target="_blank" style="color: #7d2020;">
                        Biblia Deon
                    </a>
                </p>
            </div>
        `;
        return;
    }
    
    // Wyświetl wersety
    const versesHTML = verses.map(verse => {
        return `
            <div class="verse">
                <span class="verse-number">${verse.number}</span>
                <span class="verse-text">${verse.text}</span>
            </div>
        `;
    }).join("");
    
    chapterTextContent.innerHTML = versesHTML;
}

/*
==================================================
ZAMYKANIE TEKSTU ROZDZIAŁU
==================================================
*/

closeChapterButton.addEventListener("click", function() {
    chapterTextDiv.classList.add("hidden");
});

/*
==================================================
URUCHOMIENIE
==================================================
*/

createPool();

// Test API na starcie
console.log('Testowanie API...');
fetch('https://bible-api.com/John+3:16')
    .then(response => response.json())
    .then(data => {
        console.log('✅ API działa! Przykład:', data.text);
    })
    .catch(error => {
        console.log('❌ API nie działa:', error);
    });
