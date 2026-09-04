/*
==================================================
LOSOWANIE ROZDZIAŁU BIBLII
Biblia Wujka
==================================================
*/


/*
==================================================
LISTA KSIĄG
==================================================
*/

const books = [

    /* =========================
       STARY TESTAMENT
       ========================= */

    {
        name: "Księga Rodzaju",
        testament: "ST",
        chapters: 50
    },

    {
        name: "Księga Wyjścia",
        testament: "ST",
        chapters: 40
    },

    {
        name: "Księga Kapłańska",
        testament: "ST",
        chapters: 27
    },

    {
        name: "Księga Liczb",
        testament: "ST",
        chapters: 36
    },

    {
        name: "Księga Powtórzonego Prawa",
        testament: "ST",
        chapters: 34
    },

    {
        name: "Księga Jozuego",
        testament: "ST",
        chapters: 24
    },

    {
        name: "Księga Sędziów",
        testament: "ST",
        chapters: 21
    },

    {
        name: "Księga Rut",
        testament: "ST",
        chapters: 4
    },

    {
        name: "1 Księga Samuela",
        testament: "ST",
        chapters: 31
    },

    {
        name: "2 Księga Samuela",
        testament: "ST",
        chapters: 24
    },

    {
        name: "1 Księga Królewska",
        testament: "ST",
        chapters: 22
    },

    {
        name: "2 Księga Królewska",
        testament: "ST",
        chapters: 25
    },

    {
        name: "1 Księga Kronik",
        testament: "ST",
        chapters: 29
    },

    {
        name: "2 Księga Kronik",
        testament: "ST",
        chapters: 36
    },

    {
        name: "Księga Ezdrasza",
        testament: "ST",
        chapters: 10
    },

    {
        name: "Księga Nehemiasza",
        testament: "ST",
        chapters: 13
    },

    {
        name: "Księga Tobiasza",
        testament: "ST",
        chapters: 14
    },

    {
        name: "Księga Judyty",
        testament: "ST",
        chapters: 16
    },

    {
        name: "Księga Estery",
        testament: "ST",
        chapters: 16
    },

    {
        name: "1 Księga Machabejska",
        testament: "ST",
        chapters: 16
    },

    {
        name: "2 Księga Machabejska",
        testament: "ST",
        chapters: 15
    },

    {
        name: "Księga Hioba",
        testament: "ST",
        chapters: 42
    },

    {
        name: "Księga Psalmów",
        testament: "ST",
        chapters: 150
    },

    {
        name: "Księga Przysłów",
        testament: "ST",
        chapters: 31
    },

    {
        name: "Księga Koheleta",
        testament: "ST",
        chapters: 12
    },

    {
        name: "Pieśń nad Pieśniami",
        testament: "ST",
        chapters: 8
    },

    {
        name: "Księga Mądrości",
        testament: "ST",
        chapters: 19
    },

    {
        name: "Mądrość Syracha",
        testament: "ST",
        chapters: 51
    },

    {
        name: "Księga Izajasza",
        testament: "ST",
        chapters: 66
    },

    {
        name: "Księga Jeremiasza",
        testament: "ST",
        chapters: 52
    },

    {
        name: "Lamentacje Jeremiasza",
        testament: "ST",
        chapters: 5
    },

    {
        name: "Księga Barucha",
        testament: "ST",
        chapters: 6
    },

    {
        name: "Księga Ezechiela",
        testament: "ST",
        chapters: 48
    },

    {
        name: "Księga Daniela",
        testament: "ST",
        chapters: 14
    },

    {
        name: "Księga Ozeasza",
        testament: "ST",
        chapters: 14
    },

    {
        name: "Księga Joela",
        testament: "ST",
        chapters: 4
    },

    {
        name: "Księga Amosa",
        testament: "ST",
        chapters: 9
    },

    {
        name: "Księga Abdiasza",
        testament: "ST",
        chapters: 1
    },

    {
        name: "Księga Jonasza",
        testament: "ST",
        chapters: 4
    },

    {
        name: "Księga Micheasza",
        testament: "ST",
        chapters: 7
    },

    {
        name: "Księga Nahuma",
        testament: "ST",
        chapters: 3
    },

    {
        name: "Księga Habakuka",
        testament: "ST",
        chapters: 3
    },

    {
        name: "Księga Sofoniasza",
        testament: "ST",
        chapters: 3
    },

    {
        name: "Księga Aggeusza",
        testament: "ST",
        chapters: 2
    },

    {
        name: "Księga Zachariasza",
        testament: "ST",
        chapters: 14
    },

    {
        name: "Księga Malachiasza",
        testament: "ST",
        chapters: 3
    },


    /* =========================
       NOWY TESTAMENT
       ========================= */

    {
        name: "Ewangelia Mateusza",
        testament: "NT",
        chapters: 28
    },

    {
        name: "Ewangelia Marka",
        testament: "NT",
        chapters: 16
    },

    {
        name: "Ewangelia Łukasza",
        testament: "NT",
        chapters: 24
    },

    {
        name: "Ewangelia Jana",
        testament: "NT",
        chapters: 21
    },

    {
        name: "Dzieje Apostolskie",
        testament: "NT",
        chapters: 28
    },

    {
        name: "List do Rzymian",
        testament: "NT",
        chapters: 16
    },

    {
        name: "1 List do Koryntian",
        testament: "NT",
        chapters: 16
    },

    {
        name: "2 List do Koryntian",
        testament: "NT",
        chapters: 13
    },

    {
        name: "List do Galatów",
        testament: "NT",
        chapters: 6
    },

    {
        name: "List do Efezjan",
        testament: "NT",
        chapters: 6
    },

    {
        name: "List do Filipian",
        testament: "NT",
        chapters: 4
    },

    {
        name: "List do Kolosan",
        testament: "NT",
        chapters: 4
    },

    {
        name: "1 List do Tesaloniczan",
        testament: "NT",
        chapters: 5
    },

    {
        name: "2 List do Tesaloniczan",
        testament: "NT",
        chapters: 3
    },

    {
        name: "1 List do Tymoteusza",
        testament: "NT",
        chapters: 6
    },

    {
        name: "2 List do Tymoteusza",
        testament: "NT",
        chapters: 4
    },

    {
        name: "List do Tytusa",
        testament: "NT",
        chapters: 3
    },

    {
        name: "List do Filemona",
        testament: "NT",
        chapters: 1
    },

    {
        name: "List do Hebrajczyków",
        testament: "NT",
        chapters: 13
    },

    {
        name: "List Jakuba",
        testament: "NT",
        chapters: 5
    },

    {
        name: "1 List Piotra",
        testament: "NT",
        chapters: 5
    },

    {
        name: "2 List Piotra",
        testament: "NT",
        chapters: 3
    },

    {
        name: "1 List Jana",
        testament: "NT",
        chapters: 5
    },

    {
        name: "2 List Jana",
        testament: "NT",
        chapters: 1
    },

    {
        name: "3 List Jana",
        testament: "NT",
        chapters: 1
    },

    {
        name: "List Judy",
        testament: "NT",
        chapters: 1
    },

    {
        name: "Apokalipsa św. Jana",
        testament: "NT",
        chapters: 22
    }

];


/*
==================================================
PRZYKŁADOWE TEKSTY ROZDZIAŁÓW (DO TESTOWANIA)
==================================================
*/

const sampleTexts = {
    "Księga Rodzaju": {
        1: [
            "Na początku Bóg stworzył niebo i ziemię.",
            "A ziemia była pusta i próżna, i ciemności były nad głębokością, a Duch Boży unaszał się nad wodami.",
            "I rzekł Bóg: Niech się stanie światłość. I stała się światłość.",
            "I widział Bóg światłość, że była dobra, i oddzielił światłość od ciemności.",
            "I nazwał Bóg światłość dniem, a ciemność nocą. I był wieczór i poranek, dzień pierwszy."
        ]
    },
    "Ewangelia Jana": {
        1: [
            "Na początku było Słowo, a Słowo było u Boga, a Bogiem było Słowo.",
            "To było na początku u Boga.",
            "Wszystko przez Nie się stało, a bez Niego nic się nie stało, co się stało.",
            "W Nim było życie, a życie było światłością ludzi.",
            "A światłość w ciemnościach świeci, a ciemności jej nie ogarnęły."
        ]
    },
    "Księga Psalmów": {
        23: [
            "Pan jest pasterzem moim, niczego mi nie braknie.",
            "Na miejscu zielonym tam mię posadził, nad wodą posilenia wychował mię.",
            "Duszę moją nawrócił, prowadził mię ścieżkami sprawiedliwości dla imienia swego.",
            "Bo choćbym chodził w pośród cienia śmierci, nie będę się bał złego, bo ty jesteś ze mną.",
            "Laska twoja i kij twój, te mię pocieszyły."
        ]
    }
};


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
                testament: book.testament
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
WYŚWIETLANIE TEKSTU ROZDZIAŁU
==================================================
*/

function displayChapterText(chapter) {
    let verses = null;

    // Sprawdź czy mamy przykładowy tekst
    if (sampleTexts[chapter.name] && sampleTexts[chapter.name][chapter.chapter]) {
        verses = sampleTexts[chapter.name][chapter.chapter];
    }

    if (!verses) {
        chapterTextTitle.textContent = chapterLabel(chapter);
        chapterTextContent.innerHTML = `
            <div style="text-align: center; padding: 20px; color: #766f64;">
                <p>Przepraszamy, pełny tekst tego rozdziału nie jest jeszcze dostępny.</p>
                <p style="font-size: 14px;">Pracujemy nad dodaniem wszystkich tekstów.</p>
                <p style="font-size: 14px;">Na razie możesz przetestować:</p>
                <p style="font-size: 14px; margin-top: 10px;">
                    • Księga Rodzaju, rozdział 1<br>
                    • Ewangelia Jana, rozdział 1<br>
                    • Księga Psalmów, rozdział 23
                </p>
            </div>
        `;
        chapterTextDiv.classList.remove("hidden");
        chapterTextDiv.scrollIntoView({ behavior: "smooth" });
        return;
    }

    chapterTextTitle.textContent = chapterLabel(chapter);

    const versesHTML = verses.map((verse, index) => {
        return `
            <div class="verse">
                <span class="verse-number">${index + 1}</span>
                <span class="verse-text">${verse}</span>
            </div>
        `;
    }).join("");

    chapterTextContent.innerHTML = versesHTML;
    chapterTextDiv.classList.remove("hidden");
    chapterTextDiv.scrollIntoView({ behavior: "smooth" });
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
