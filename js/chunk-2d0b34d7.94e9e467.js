(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b34d7"],{2894:function(o,a,e){"use strict";e.r(a);var s=function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("div",[e("div",{staticClass:"app-pane-lgray py-2"},[e("b-container",[e("h1",[o._v("Ochrana osobných údajov")])])],1),e("b-container",{staticClass:"py-3"},[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("b-form-checkbox",{attrs:{name:"check-button",switch:""},model:{value:o.full,callback:function(a){o.full=a},expression:"full"}},[o._v(" Zobraziť verziu pre právnikov ")]),e("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[o.$store.state.config.GDRP_PDF?e("div",[e("b-card-title",[e("h2",[o._v("Upresnenie pre zamestnancov")])]),e("div",{staticClass:"short my-3 py-1"},[e("a",{attrs:{href:"./files/"+o.$store.state.config.GDRP_PDF}},[o._v(o._s(o.$store.state.config.GDRP_PDF))])])],1):o._e(),e("b-card-title",[e("h2",[o._v("Prečo si od Vás pýtame osobné údaje?")])]),e("div",{staticClass:"short my-3 py-1"},[o._v(" V záujme ochrany proti koronavírusu je potrebné otestovať väčšinu obyvateľov. Aby mal štát kontrolu kto si test vykonal, je potrebné identifikovať každú osobu ktorá podstúpila testovanie. ")]),o.full?e("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[o._v(" V súvislosti s § 7 Zásada obmedzenia účelu zákona o 18/2018 Z. z. z 29. novembra 2017 o ochrane osobných údajov a o zmene a doplnení niektorých zákonov, je účel nasledovaný: Otestovať osobu na prítomnosť vírusu SARS-CoV-2 a poskytovať s tým spojené služby. ")]):o._e()],1),e("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[o._v(" Pri spracovaní Vašich osobných údajov dodržiavame nasledovné zásady: "),e("ol",[e("li",[o._v(" Zásada minimalizácie osobných údajov - zbierame iba údaje ktoré su nevyhnutné ")]),e("li",[o._v(" Zásada správnosti - môžete si opraviť údaje zmenou registrácie. Na odbernom mieste Vaše údaje budú skontrolované. ")]),e("li",[o._v(" Zásada minimalizácie uchovávania - Všetky informácie o Vašej návšteve si môžete vymazať po spracovaní. Keďže potrebujeme údaje k vygenerovaniu certifikátu, sami Vaše údaje vymažeme až keď si certifikát nebudete mať potrebu znovu stiahnuť. ")]),e("li",[o._v(" Zásada integrity a dôvernosti - Vaše osobné údaje sa prenášajú iba cez zabezpečené kanály a používame najsilnejšie bezpečnostné algoritmy aby zostali dôverné ")]),e("li",[o._v(" Zásada zodpovednosti - sprauvávame osobné údaje so zásadami spracúvania osobných údajov ")])])]),e("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[e("b-card-title",[e("h2",[o._v("Spracovávame osobné údaje zákonne?")])]),e("div",{staticClass:"short my-3 py-1"},[o._v("Áno")]),o.full?e("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[o._v(" V súvislosti s § 13 Zákonnosť spracúvania zákona 18/2018 Z. z. z 29. novembra 2017 o ochrane osobných údajov a o zmene a doplnení niektorých zákonov, je zákonnosť spracúvania nasledovná: a) dotknutá osoba vyjadrila súhlas so spracúvaním svojich osobných údajov aspoň na jeden konkrétny účel. V súvislosti s § 14 prevádzkovateľ preukazuje že osoba poskytla svoj súhlas zdrojovým kódom ktorý neumožňuje odoslanie osobných údajov bez predchádzajúceho súhlasu s účelom spracovania osobných údajov. Zdrojový kód je dostupný na adrese https://github.com/scholtz/covid-sk aj s históriou všetkých zmien od jeho vzniku. ")]):o._e()],1),e("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[e("b-card-title",[e("h2",[o._v("Kto spracováva Vaše osobné údaje?")])]),e("div",{staticClass:"short my-3 py-1"},[o._v(" Prevádzkovateľ je "+o._s(o.$store.state.config.GDRP_PREVADZKOVATEL)+" ")]),o.$store.state.config.GDRP_SPROSTREDKOVATEL?e("div",{staticClass:"short my-3 py-1"},[o._v(" Sprostredkovateľ je "+o._s(o.$store.state.config.GDRP_SPROSTREDKOVATEL)+" ")]):o._e(),o.full?e("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[o._v(" V súvislosti s § 19 Poskytované informácie, ak osobné údaje sú získané od dotknutej osoby zákona 18/2018 Z. z. z 29. novembra 2017 o ochrane osobných údajov a o zmene a doplnení niektorých zákonov, odstavec 1) písmeno a) je prevádzkovateľ "+o._s(o.$store.state.config.GDRP_PREVADZKOVATEL)+". "),o.$store.state.config.GDRP_SPROSTREDKOVATEL?e("span",[o._v("Sprostredkovateľ podľa § 34 je "+o._s(o.$store.state.config.GDRP_SPROSTREDKOVATEL)+".")]):o._e()]):o._e()],1),e("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[e("b-card-title",[e("h2",[o._v("Kto je zodpovedný za Vaše osobné údaje?")])]),e("div",{staticClass:"short my-3 py-1"},[o._v(" Zodpovedná osoba je "+o._s(o.$store.state.config.GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA)+" ")]),o.full?e("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[o._v(" V súvislosti s § 19 Poskytované informácie, ak osobné údaje sú získané od dotknutej osoby zákona 18/2018 Z. z. z 29. novembra 2017 o ochrane osobných údajov a o zmene a doplnení niektorých zákonov, odstavec 1) písmeno b) je zodpovedná osoba "+o._s(o.$store.state.config.GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA)+". ")]):o._e()],1),e("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[e("b-card-title",[e("h2",[o._v("Komu Vaše osobné údaje poskytneme?")])]),e("div",{staticClass:"short my-3 py-1"},[o._v(" Osobe na odbernom mieste ktorá si Vaše údaje načíta na základe Vami poskytnutého kódu a skontroluje s občianskym preukazom, Správcovi odberného miesta s rolou Data exporter, ktorý môže všetky osoby zo systému vyexportovať a posunúť ďalším orgánom. Ministerstvu zdravotníctva, najmä NCZI, Ministerstvu vnútra, najmä policajtom pre kontrolu aby ste sa cítili bezpečne že Váš okoloidúci vírus neprenáša, a ďalším orgánom verejnej moci ktorým sú tieto údaje potrebné. ")]),o.full?e("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[o._v(" V súvislosti s § 19 Poskytované informácie, ak osobné údaje sú získané od dotknutej osoby zákona 18/2018 Z. z. z 29. novembra 2017 o ochrane osobných údajov a o zmene a doplnení niektorých zákonov, odstavec 1) písmeno e) identifikujeme príjemcu ako každý orgán štátnej správy ktorý môže využiť informácie o testovaní a odberné miesto, personál odberného miesta, mesto v ktorom sa odber vykonáva alebo krajský úrad ktorému reportuje mesto testované osoby. ")]):o._e()],1),e("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[e("b-card-title",[e("h2",[o._v("Môžu sa Vaše údaje odoslať mimo EÚ?")])]),e("div",{staticClass:"short my-3 py-1"},[o._v("Nie.")]),o.full?e("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[o._v(" V súvislosti s § 19 Poskytované informácie, ak osobné údaje sú získané od dotknutej osoby zákona 18/2018 Z. z. z 29. novembra 2017 o ochrane osobných údajov a o zmene a doplnení niektorých zákonov, odstavec 1) písmeno f) údaje sa do tretej strany (Mimo EÚ) neprenášajú. ")]):o._e()],1),e("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[e("b-card-title",[e("h2",[o._v("Ako dlho uchováme Vaše osobné údaje.")])]),e("div",{staticClass:"short my-3 py-1"},[o._v(" Minimálne tak dlho aby sme si splnili reporting voči orgánom ktoré Vaše údaje potrebujú. Maximálne tak dlho kým môžete potrebovať dôkaz o vykonaní testu. Ak si po 5 dňoch od vykonania testu stlačíte tlačítko vymazať údaje testu, Vaše osobné údaje vymažeme a nebudete si následne vygenerovať certifikát o absolvovaní testu. Niektoré osobné údaje na základe ktorých vás nie je možné určiť jednoznačne (meno a rok narodenia) si pre kontrolu výsledkov testu necháme po celú dobu trvania projektu. ")]),o.full?e("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[o._v(" V súvislosti s § 19 Poskytované informácie, ak osobné údaje sú získané od dotknutej osoby zákona 18/2018 Z. z. z 29. novembra 2017 o ochrane osobných údajov a o zmene a doplnení niektorých zákonov, odstavec 2) písmeno a) sú kritéria na určenie doby uchovávania osobných údajov nasledovné: Minimálne tak dlho aby sa splnil reporting voči orgánom ktoré údaje potrebujú. Maximálne tak dlho kým môže osoba potrebovať dôkaz o vykonaní testu. ")]):o._e()],1),e("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[o._v(" Máte právo požadovať od prevádzkovateľa prístup k osobným údajom týkajúcich sa dotknutej osoby, o práve na opravu osobných údajov, o práve na vymazanie osobných údajov alebo o práve na obmedzenie spracúvania osobných údajov, o práve namietať spracúvanie osobných údajov, ako aj o práve na prenosnosť osobných údajov, kedykoľvek svoj súhlas odvolať, podať návrh na začatie konania podľa § 100 a získať od prevádzkovateľa potvrdenie o tom, či sa spracúvajú osobné údaje, ktoré sa jej týkajú. ")]),e("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[e("b-card-title",[e("h2",[o._v("Aké údaje sa zbierajú?")])]),e("div",{staticClass:"short my-3 py-1"},[o._v(" Údaje ukladané v súvislosti s klientami: Meno, Priezvisko, Dátum narodenia, Rodné číslo, Číslo cestovného pasu, Bydlisko, Ulica, Číslo domu, PSČ, Obec, Telefónne číslo, E-mail adresa, Zdravotná poisťovňa, Údaje o úkone, Dátum a čas úkonu, Typ úkonu (napr. antigénový test), Číslo úkonu (napr. testu), Výsledok úkonu (napr. testu), IP Adresy, Časy jednotlivých eventov a ďalšie údaje spojené s prevádzkou informačných systémov ")])],1),e("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[e("b-card-title",[e("h2",[o._v("Ďalšie upresnenia")])]),e("div",{staticClass:"short my-3 py-1"},[o._v(" Slovenská republika, Úrad verejného zdravia, Ministerstvo zdravotníctva Slovenskej republiky, Ministerstvo vnútra Slovenskej republiky, Policajný zbor a ďalšie inštitúcie Slovenskej republiky a Európskej únie vyžadujú alebo môžu vyžadovať a prevádzkovateľ služby im poskytuje osobné dáta osôb, ktorým bol vykonaný úkon. Osobné dáta osôb sú ukladané v službe Rýchlejšie.sk výhradne v elektronickej podobe v cloud prostredí Microsoft Azure, lokalita západná Európa v zašifrovanej podobe. Osobné údaje v rozsahu Meno, Rok narodenia a dátum vykonania testu môžu byť odosielané prostredníctvom SMS správy. Všetky osobné údaje môžu byť odoslané v emailovej komunikácii v zašifrovanej podobe (v PDF). Meno osoby môže byť odoslané v emailovej komunikácii v nešifrovanej podobe. Logovacie služby ako npr papertrail, azure logs a podobné môžu obsahovať IP adresy, hash identifikačných údajov alebo hash kontaktných údajov. Služby tretích strán na poskytovanie emailu, SMS správ alebo iných správ môžu ukladať správy odoslané cez ich službu, čas komunikácie a iné metadáta špecifické pre danú službu. Služby tretích strán sú primárne MailGun, SendGrid, GoSMS alebo iné. ")])],1)],1)],1)],1)],1)},t=[],n={data:function(){return{full:!0}}},i=n,r=e("2877"),v=Object(r["a"])(i,s,t,!1,null,null,null);a["default"]=v.exports}}]);