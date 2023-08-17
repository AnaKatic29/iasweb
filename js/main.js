(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });



})(jQuery);



document.addEventListener("DOMContentLoaded", function () {
    let langs = document.querySelector(".langs"),
        link = document.querySelectorAll("a"),
        title = document.querySelector(".title"),
        description = document.querySelector(".description"),

        publikacije_header = document.querySelector(".publikacije_header"),
        publikacije_tekst = document.querySelector(".publikacije_tekst"),
        btn_saznajte_vise = document.querySelector(".btn_saznajte_vise"),
        vise_o_nama = document.querySelector(".vise_o_nama"),
        dogadjaji = document.querySelector(".dogadjaji"),
        posalji = document.querySelector(".posalji"),
        adress = document.querySelector(".adress"),
        linkovi = document.querySelector(".linkovi"),
        novosti = document.querySelector(".novosti"),
        unesti_adresu = document.querySelector(".unesti_adresu"),
        god_postojanja = document.querySelector(".god_postojanja"),
        u_medijima_menu = document.querySelector(".u_medijima_menu"),
        galerija_menu = document.querySelector(".galerija_menu"),
        projekti_menu = document.querySelector(".projekti_menu"),
        partneri_menu = document.querySelector(".partneri_menu"),
        blog_menu = document.querySelector(".blog_menu"),
        kontakt_menu = document.querySelector(".kontakt_menu"),
        o_nama_tekst = document.querySelector(".o_nama_tekst"),

        pocetna_menu = document.querySelector(".pocetna_menu"),
        o_institutu_menu = document.querySelector(".o_institutu_menu"),
        publikacije_menu = document.querySelector(".publikacije_menu"),
        casopis_menu = document.querySelector(".casopis_menu"),
        dr_pub_menu = document.querySelector(".dr_pub_menu"),
        donacije = document.querySelector(".donacije"),
        beograd = document.querySelector(".beograd"),

        u_medijima_header = document.querySelector(".u_medijima_header"),
        u_medijima_tekst = document.querySelector(".u_medijima_tekst"),
        aktuelna_desavanja_header = document.querySelector(".aktuelna_desavanja_header"),
        aktuelna_desavanja_tekst = document.querySelector(".aktuelna_desavanja_tekst"),
        slider_header = document.querySelector(".slider_header")

    ime_prezime = document.querySelector(".ime_prezime"),
        naslov = document.querySelector(".naslov"),
        poruka = document.querySelector(".poruka");
    posalji_poruku = document.querySelector(".posalji_poruku");



    link.forEach(el => {
        el.addEventListener("click", () => {
            langs.querySelector(".active").classList.remove("active");
            el.classList.add("active");

            let attr = el.getAttribute("language")

            description.textContent = data[attr].description
            title.textContent = data[attr].title
            publikacije_header.textContent = data[attr].publikacije_header
            publikacije_tekst.textContent = data[attr].publikacije_tekst
            vise_o_nama.textContent = data[attr].vise_o_nama
            dogadjaji.textContent = data[attr].dogadjaji
            posalji.textContent = data[attr].posalji
            unesti_adresu.textContent = data[attr].unesti_adresu
            novosti.textContent = data[attr].novosti
            linkovi.textContent = data[attr].linkovi
            adress.textContent = data[attr].adress
            god_postojanja.textContent = data[attr].god_postojanja
            u_medijima_menu.textContent = data[attr].u_medijima_menu
            galerija_menu.textContent = data[attr].galerija_menu
            projekti_menu.textContent = data[attr].projekti_menu
            partneri_menu.textContent = data[attr].partneri_menu
            blog_menu.textContent = data[attr].blog_menu
            kontakt_menu.textContent = data[attr].kontakt_menu

            pocetna_menu.textContent = data[attr].pocetna_menu
            o_nama_tekst.textContent = data[attr].o_nama_tekst

            o_institutu_menu.textContent = data[attr].o_institutu_menu
            publikacije_menu.textContent = data[attr].publikacije_menu
            casopis_menu.textContent = data[attr].casopis_menu
            dr_pub_menu.textContent = data[attr].dr_pub_menu
            donacije = data[attr].donacije
            beograd = data[attr].beograd

            u_medijima_header.textContent = data[attr].u_medijima_header
            u_medijima_tekst.textContent = data[attr].u_medijima_tekst
            aktuelna_desavanja_header.textContent = data[attr].aktuelna_desavanja_header
            aktuelna_desavanja_tekst.textContent = data[attr].aktuelna_desavanja_tekst
            slider_header.textContent = data[attr].slider_header
            btn_saznajte_vise.textContent = data[attr].btn_saznajte_vise

            ime_prezime.textContent = data[attr].ime_prezime
            naslov.textContent = data[attr].naslov
            poruka.textContent = data[attr].poruka
            posalji_poruku = data[attr].posalji_poruku
        })
    })

    let data = {
        english: {
            unesti_adresu: "Enter your email",
            novosti: "News",
            linkovi: "Links",
            adress: "Address",
            god_postojanja: "8 years of existence",

            u_medijima_menu: "In media",
            galerija_menu: "Gallery",
            projekti_menu: "Projects",
            partneri_menu: "Partners",
            blog_menu: "Blog",
            kontakt_menu: "Contact",


            pocetna_menu: "Home",

            o_institutu_menu: "About IAS",
            publikacije_menu: "Publications",
            casopis_menu: "Journal",
            dr_pub_menu: "Other Publications",

            donacije: "Donations",
            beograd: "Belgrade, Serbia",

            o_nama_tekst: ".",
            ime_prezime: "Surname",
            naslov: "Header",
            poruka: "Message",
            posalji_poruku: "Send message",

            posalji: "Send",
            dogadjaji: "Events",
            vise_o_nama: "More about us",
            btn_saznajte_vise: "loading more",
            years: "8 years of existence",
            title: "Institute for Asian Studies",
            slider_header: "Institute for Asian Studies",
            description: "engages in research, educational, publishing and consulting activities with the aim of spreading knowledge about Asia in our country and region and thereby contributing to cooperation between the countries of Central and Southeastern Europe and Asian countries.",
            publikacije_header: "Publications",
            publikacije_tekst: "Test",
            u_medijima_header: "In the media",
            u_medijima_tekst: "Test",
            aktuelna_desavanja_header: "Current activities of IAS",
            aktuelna_desavanja_tekst: "Professor Mitrovic took part as an invited speaker in Hong Ting Forum: Understanding the 20th National Congress of the Communist Party of China (CPC), jointly hosted by the Institute of Party History and Literature of the Central Committee of the Communist Party of China (CIPHL) and Xinhua News Agency, that was held in Beijing and online on November 2.  This was the event where leading experts and scholars from China and around the world discussed some major new concepts and terms in the political report of the 20th National Congress of CPC. There were also guests from foreign embassies and consulates, foreign media organisations, and international think tanks. She spoke on Chinese Culture's influence on its Development and Global Role",
        },
        serbian: {
            posalji: "Пошаљи",
            unesti_adresu: "Унесите Вашу емаил адресу",
            novosti: "Новости",
            linkovi: "Линкови",
            adress: "Адреса",
            god_postojanja: "8 ГОДИНА ПОСТОЈАЊА",

            u_medijima_menu: "У МЕДИЈИМА",
            galerija_menu: "ГАЛЕРИЈА",
            projekti_menu: "ПРОЈЕКТИ",
            partneri_menu: "ПАРТНЕРИ",
            blog_menu: "БЛОГ",
            kontakt_menu: "КОНТАКТ",

            pocetna_menu: "ПОЧЕТНА",

            o_institutu_menu: "О ИНСТИТУТУ",
            publikacije_menu: "ПУБЛИКАЦИЈЕ",
            casopis_menu: "ЧАСОПИС",
            dr_pub_menu: "ДРУГЕ ПУБЛИКАЦИЈЕ",

            donacije: "ДОНАЦИЈЕ",
            beograd: "Београд, Србија",

            o_nama_tekst: "Институт за азијске студије (ИАС, Београд, Србија) је think-tank који се бави истраживањем, образовном, издавачком и консултантском делатношћу са циљем да шири знања о Азији у нашој држави и региону и тиме допринесе сарадњи између земаља централне и југоисточне Европе и азијских земаља. Његов географски фокус је на НР Кини, Јапану, Индији, Републици Кореји, НДР Кореји, Руској Федерацији, централноазијским и каспијским државама, Турској, земљама АСЕАН-а, Аустралији и Новом Зеланду.",
            ime_prezime: "Име и презиме",
            naslov: "Наслов",
            poruka: "Порука",
            posalji_poruku: "Пошаљи поруку",

            dogadjaji: "ДОГАЂАЈИ",
            vise_o_nama: "ВИШЕ О НАМА",
            btn_saznajte_vise: "САЗНАЈТЕ ВИШЕ",
            years: "8 ГОДИНА ПОСТОЈАЊА",
            title: "Институт за азијске студије",
            slider_header: "Институт за азијске студије",
            description: 'се бави истраживањем, образовном, издавачком и консултантском делатношћу са циљем да шири знања о Азији у нашој држави и региону и тиме допринесе сарадњи између земаља централне и југоисточне Европе и азијских земаља.',
            publikacije_header: "ПУБЛИКАЦИЈЕ",
            publikacije_tekst: "ИАС је до сада, заједно са својим партнерским институцијама, учествовао у неколико научних истраживачких пројеката, који чине важан део активности Института и његових чланова, посебно домаће и међународне сарадње са партнерским институцијама, локалним заједницима, владиним телима, амбасадама и другим учесницима у овој сарадњи.",
            u_medijima_header: "У МЕДИЈИМА",
            u_medijima_tekst: "Наше партнерске институције су факултети, институти и друга образовна и научно истраживачка друштва са сличним пољем истраживања, из Србије и иностранства. Посебан значај има партнерска сатрадња са институцијама из држава и региона који су наше поље истраживања. Московски државни универзитет Ломоносов",
            aktuelna_desavanja_header: "АКТУЕЛНА ДЕШАВАЊА",
            aktuelna_desavanja_tekst: "Институт за азијске студије (ИАС, Београд, Србија) је think-tank који се бави истраживањем, образовном, издавачком и консултантском делатношћу са циљем да шири знања о Азији у нашој држави и региону и тиме допринесе сарадњи између земаља централне и југоисточне Европе и азијских земаља. Његов географски фокус",

        }
    }

});


