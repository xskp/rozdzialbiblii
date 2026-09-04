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
    { name: "Księga Rodzaju", testament: "ST", chapters: 50, api: "genesis" },
    { name: "Księga Wyjścia", testament: "ST", chapters: 40, api: "exodus" },
    { name: "Księga Kapłańska", testament: "ST", chapters: 27, api: "leviticus" },
    { name: "Księga Liczb", testament: "ST", chapters: 36, api: "numbers" },
    { name: "Księga Powtórzonego Prawa", testament: "ST", chapters: 34, api: "deuteronomy" },
    { name: "Księga Jozuego", testament: "ST", chapters: 24, api: "joshua" },
    { name: "Księga Sędziów", testament: "ST", chapters: 21, api: "judges" },
    { name: "Księga Rut", testament: "ST", chapters: 4, api: "ruth" },
    { name: "1 Księga Samuela", testament: "ST", chapters: 31, api: "1samuel" },
    { name: "2 Księga Samuela", testament: "ST", chapters: 24, api: "2samuel" },
    { name: "1 Księga Królewska", testament: "ST", chapters: 22, api: "1kings" },
    { name: "2 Księga Królewska", testament: "ST", chapters: 25, api: "2kings" },
    { name: "1 Księga Kronik", testament: "ST", chapters: 29, api: "1chronicles" },
    { name: "2 Księga Kronik", testament: "ST", chapters: 36, api: "2chronicles" },
    { name: "Księga Ezdrasza", testament: "ST", chapters: 10, api: "ezra" },
    { name: "Księga Nehemiasza", testament: "ST", chapters: 13, api: "nehemiah" },
    { name: "Księga Tobiasza", testament: "ST", chapters: 14, api: "tobit" },
    { name: "Księga Judyty", testament: "ST", chapters: 16, api: "judith" },
    { name: "Księga Estery", testament: "ST", chapters: 16, api: "esther" },
    { name: "1 Księga Machabejska", testament: "ST", chapters: 16, api: "1maccabees" },
    { name: "2 Księga Machabejska", testament: "ST", chapters: 15, api: "2maccabees" },
    { name: "Księga Hioba", testament: "ST", chapters: 42, api: "job" },
    { name: "Księga Psalmów", testament: "ST", chapters: 150, api: "psalms" },
    { name: "Księga Przysłów", testament: "ST", chapters: 31, api: "proverbs" },
    { name: "Księga Koheleta", testament: "ST", chapters: 12, api: "ecclesiastes" },
    { name: "Pieśń nad Pieśniami", testament: "ST", chapters: 8, api: "songofsongs" },
    { name: "Księga Mądrości", testament: "ST", chapters: 19, api: "wisdom" },
    { name: "Mądrość Syracha", testament: "ST", chapters: 51, api: "sirach" },
    { name: "Księga Izajasza", testament: "ST", chapters: 66, api: "isaiah" },
    { name: "Księga Jeremiasza", testament: "ST", chapters: 52, api: "jeremiah" },
    { name: "Lamentacje Jeremiasza", testament: "ST", chapters: 5, api: "lamentations" },
    { name: "Księga Barucha", testament: "ST", chapters: 6, api: "baruch" },
    { name: "Księga Ezechiela", testament: "ST", chapters: 48, api: "ezekiel" },
    { name: "Księga Daniela", testament: "ST", chapters: 14, api: "daniel" },
    { name: "Księga Ozeasza", testament: "ST", chapters: 14, api: "hosea" },
    { name: "Księga Joela", testament: "ST", chapters: 4, api: "joel" },
    { name: "Księga Amosa", testament: "ST", chapters: 9, api: "amos" },
    { name: "Księga Abdiasza", testament: "ST", chapters: 1, api: "obadiah" },
    { name: "Księga Jonasza", testament: "ST", chapters: 4, api: "jonah" },
    { name: "Księga Micheasza", testament: "ST", chapters: 7, api: "micah" },
    { name: "Księga Nahuma", testament: "ST", chapters: 3, api: "nahum" },
    { name: "Księga Habakuka", testament: "ST", chapters: 3, api: "habakkuk" },
    { name: "Księga Sofoniasza", testament: "ST", chapters: 3, api: "zephaniah" },
    { name: "Księga Aggeusza", testament: "ST", chapters: 2, api: "haggai" },
    { name: "Księga Zachariasza", testament: "ST", chapters: 14, api: "zechariah" },
    { name: "Księga Malachiasza", testament: "ST", chapters: 3, api: "malachi" },
    { name: "Ewangelia Mateusza", testament: "NT", chapters: 28, api: "matthew" },
    { name: "Ewangelia Marka", testament: "NT", chapters: 16, api: "mark" },
    { name: "Ewangelia Łukasza", testament: "NT", chapters: 24, api: "luke" },
    { name: "Ewangelia Jana", testament: "NT", chapters: 21, api: "john" },
    { name: "Dzieje Apostolskie", testament: "NT", chapters: 28, api: "acts" },
    { name: "List do Rzymian", testament: "NT", chapters: 16, api: "romans" },
    { name: "1 List do Koryntian", testament: "NT", chapters: 16, api: "1corinthians" },
    { name: "2 List do Koryntian", testament: "NT", chapters: 13, api: "2corinthians" },
    { name: "List do Galatów", testament: "NT", chapters: 6, api: "galatians" },
    { name: "List do Efezjan", testament: "NT", chapters: 6, api: "ephesians" },
    { name: "List do Filipian", testament: "NT", chapters: 4, api: "philippians" },
    { name: "List do Kolosan", testament: "NT", chapters: 4, api: "colossians" },
    { name: "1 List do Tesaloniczan", testament: "NT", chapters: 5, api: "1thessalonians" },
    { name: "2 List do Tesaloniczan", testament: "NT", chapters: 3, api: "2thessalonians" },
    { name: "1 List do Tymoteusza", testament: "NT", chapters: 6, api: "1timothy" },
    { name: "2 List do Tymoteusza", testament: "NT", chapters: 4, api: "2timothy" },
    { name: "List do Tytusa", testament: "NT", chapters: 3, api: "titus" },
    { name: "List do Filemona", testament: "NT", chapters: 1, api: "philemon" },
    { name: "List do Hebrajczyków", testament: "NT", chapters: 13, api: "hebrews" },
    { name: "List Jakuba", testament: "NT", chapters: 5, api: "james" },
    { name: "1 List Piotra", testament: "NT", chapters: 5, api: "1peter" },
    { name: "2 List Piotra", testament: "NT", chapters: 3, api: "2peter" },
    { name: "1 List Jana", testament: "NT", chapters: 5, api: "1john" },
    { name: "2 List Jana", testament: "NT", chapters: 1, api: "2john" },
    { name: "3 List Jana", testament: "NT", chapters: 1, api: "3john" },
    { name: "List Judy", testament: "NT", chapters: 1, api: "jude" },
    { name: "Apokalipsa św. Jana", testament: "NT", chapters: 22, api: "revelation" }
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
POBIERANIE TEKSTU Z API
==================================================
*/

async function fetchChapterText(bookApi, chapterNumber) {
    try {
        // Używamy darmowego API biblia.info.pl
        const url = `https://biblia.info.pl/api/bible/ksiega/${bookApi}/rozdzial/${chapterNumber}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Nie znaleziono tekstu');
        }
        
        const data = await response.json();
        return data.verses || data;
        
    } catch (error) {
        console.error('Błąd pobierania tekstu:', error);
        
        // Fallback: spróbuj z innym API
        try {
            const fallbackUrl = `https://api.biblia.com/v1/bible/verse.js?passage=${bookApi}+${chapterNumber}`;
            const fallbackResponse = await fetch(fallbackUrl);
            
            if (fallbackResponse.ok) {
                const fallbackData = await fallbackResponse.json();
                return fallbackData;
            }
        } catch (fallbackError) {
            console.error('Błąd fallback:', fallbackError);
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
                <p style="font-size: 14px;">Przepraszamy za utrudnienia. Spróbuj ponownie później.</p>
                <p style="font-size: 14px; margin-top: 10px;">
                    Możesz też sprawdzić ten rozdział na stronie: 
                    <a href="https://biblia.info.pl/biblia/wujka/${chapter.api}/${chapter.chapter}" target="_blank">
                        biblia.info.pl
                    </a>
                </p>
            </div>
        `;
        return;
    }
    
    // Wyświetl wersety
    const versesHTML = verses.map((verse, index) => {
        const verseNumber = verse.number || (index + 1);
        const verseText = verse.text || verse;
        
        return `
            <div class="verse">
                <span class="verse-number">${verseNumber}</span>
                <span class="verse-text">${verseText}</span>
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
