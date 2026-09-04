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

const chapterElement =
    document.getElementById("chapter");

const statusElement =
    document.getElementById("status");

const startButton =
    document.getElementById("start");

const stopButton =
    document.getElementById("stop");

const resultBox =
    document.getElementById("result");

const resultName =
    document.getElementById("resultName");


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

        selectedBooks =
            books.filter(
                book =>
                    book.testament === selectedTestament
            );

    }


    pool = [];


    selectedBooks.forEach(book => {

        for (
            let chapter = 1;
            chapter <= book.chapters;
            chapter++
        ) {

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

    const randomIndex =
        Math.floor(
            Math.random() * pool.length
        );

    return pool[randomIndex];

}


/*
==================================================
FORMATOWANIE NAZWY
==================================================
*/

function chapterLabel(chapter) {

    return (
        chapter.name +
        " — rozdział " +
        chapter.chapter
    );

}


/*
==================================================
WYBÓR TESTAMENTU
==================================================
*/

const choiceButtons =
    document.querySelectorAll(".choice");


choiceButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            if (timer !== null) {
                return;
            }


            choiceButtons.forEach(
                otherButton => {

                    otherButton.classList.remove(
                        "active"
                    );

                }
            );


            this.classList.add("active");


            selectedTestament =
                this.dataset.testament;


            createPool();


            resultBox.classList.add(
                "hidden"
            );


            statusElement.textContent =
                "ZAKRES WYBRANY";


            if (
                selectedTestament === "ALL"
            ) {

                chapterElement.textContent =
                    "Cała Biblia";

            }

            else if (
                selectedTestament === "ST"
            ) {

                chapterElement.textContent =
                    "Stary Testament";

            }

            else {

                chapterElement.textContent =
                    "Nowy Testament";

            }

        }
    );

});


/*
==================================================
START LOSOWANIA
==================================================
*/

startButton.addEventListener(
    "click",
    function() {

        createPool();


        if (pool.length === 0) {

            return;

        }


        resultBox.classList.add(
            "hidden"
        );


        startButton.disabled = true;

        stopButton.disabled = false;


        statusElement.textContent =
            "LOSOWANIE…";


        let delay = 50;

        let elapsed = 0;


        function animation() {

            currentChapter =
                randomChapter();


            chapterElement.textContent =
                chapterLabel(
                    currentChapter
                );


            elapsed += delay;


            /*
            Początkowo bardzo szybko,
            później coraz wolniej.
            */

            if (elapsed < 4000) {

                delay =
                    Math.min(
                        250,
                        delay * 1.08
                    );


                timer =
                    setTimeout(
                        animation,
                        delay
                    );

            }

            else {

                finish();

            }

        }


        animation();

    }
);


/*
==================================================
STOP
==================================================
*/

stopButton.addEventListener(
    "click",
    function() {

        finish();

    }
);


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

        currentChapter =
            randomChapter();

    }


    chapterElement.textContent =
        chapterLabel(
            currentChapter
        );


    statusElement.textContent =
        "WYLOSOWANO";


    resultName.textContent =
        chapterLabel(
            currentChapter
        );


    resultBox.classList.remove(
        "hidden"
    );


    startButton.disabled = false;

    stopButton.disabled = true;

}


/*
==================================================
URUCHOMIENIE
==================================================
*/

createPool();
