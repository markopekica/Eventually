# Eventually (web app)

- team 31 - members:
  - Karlo Prodan
  - Darin Kusačić
  - Marko Pekica

<br>

## [Fakultet informatike u Puli](https://fipu.unipu.hr/fipu)

### Kolegij: [Programsko inženjerstvo](https://www.notion.so/Programsko-in-enjerstvo-e353945331df468e8382cdad1e91c4b8)

### Mentori: doc. dr. sc. [Nikola Tanković](https://www.notion.so/Kontakt-stranica-875574d1b92248b1a8e90dae52cd29a9) i Toni Starčić, univ. bacc. inf.

<br>

## Kratki opis funkcionalnosti

1. Na glavnoj (home) stranici korisnik ima mogučnosti:
   - pregled svih objavljenih događaja
   - selekcija događaja pomoću ponuđenih filtera za pretraživanje
   - pregled informacija za pojedini događaj
     <!-- - prijava/registracija -->
2. ...

### Plan projekta

Aplikacija "Eventually" namijenjena je za sve one koji žele pronaći događaje u skladu sa svojim interesima, neoviseći o društvenim aplikacijama koje inače koriste u te svrhe.
Cilj aplikacije je brzo i jednostavno kreirati i podijeliti organizirane događaje sa što većim brojem ljudi; pružiti im uvid u mjesto, vrijeme i vrstu događaja te pregled svih ostalih bitnih informacija (npr. cijena ulaznice, dress code, ljubimac welcome zona).
Korisnici koji izrade račun moći će objavljivati događaje te pisati komentare, pitanja i recenzije za pojedini događaj, dok će korisnici bez računa moći samo pregledavati aktivne događaje.
Događaje će biti moguće pretraživati uz pomoć raznih filtera. Primjerice, po svojoj prirodi (koncert, sport, umjetnost itd.), lokaciji, datumu...

<br>

## Link na prototip

https://xd.adobe.com/view/0781cbd4-0183-42fe-a0c9-9705c7827615-52d2/

<br>

## Zaduzenja

Marko:

- src/views/Home.vue
- src/views/Login.vue

Darin:

- dorada na README.md
- src/views/Info.vue

Karlo:

- src/views/Register.vue

<br><br><br><br><br>

## TODO

- [ ] App v_1.0
  - [ ] Home
    - [ ] **ToolBar**
      - **calendar**
        - [x] Calendar design
        - [x] Calendar functionality
        - [ ] nakon odabira, zapamti datume pri ponovnom otvaranju kalendara
      - **filters**
        - [x] Design
        - [x] Functionality
      - AddEvent
        - [x] Design the view
        - [x] Make it work
    - Lane
      - [ ] Hide lane if no cards in category
  - [X] EventInfo
    - [X] add to favorites
  - [ ] **UserProfile**
    - [ ] Design
    - [ ] Add functionality
      - [ ] Edit profile
      - [ ] Delete profile
  - [x] LogIn, Register
    - [x] pogledat novi video za security i poboljsat
    - [x] Make a transition to Home/UserProfile once loggedIn/registered successfully

<br>

|   pon    |  uto  |  sri  |          cet           |  pet  |  sub  |  ned  |
| :------: | :---: | :---: | :--------------------: | :---: | :---: | :---: |
|    1     |   2   |   3   |           4            |   5   |   6   |   7   |
|    8     |   9   |  10   |           11           |  12   |  13   |  14   |
|    15    |  16   |  17   | **18**<br>treba predat |  19   |  20   |  21   |
| **!22!** |       |       |                        |       |       |       |

<br>

##### Nuzno

- [ ] UserProfile page **D.K.**
  - [ ] layout
  - [ ] da si unese podatke
- f (funkcionalnosti)
  - [ ] search filters **K.P.**
  - [x] mark with (coming/interested); like **M.P.**
- [ ] dokumentacija
- [ ] promotivna prezentacija (3-5 min) **K.P.**

<br><br>

<!-- App v_2.0 -->

<!-- - [ ] App v_2.0
  - [ ] Home
    - [ ] **ToolBar**
      - **calendar**
        - [ ] nakon odabira, zapamti datume pri ponovnom otvaranju kalendara
    - Lane
      - [ ] Hide lane if no cards in category
  - [ ] EventInfo
    - [ ] share
    - [ ] comment section
      - [ ] hide comment button if not logged in
        - [ ] add coment on click
      - [ ] comment (main thread), response -> components? (mislim bar)
        - [ ] add response
    - [ ] rating stars
      - [ ] unlock after event has passed
      - [ ] give rating only if logged in
  - [ ] **UserProfile**
    - [ ] Design
    - [ ] Add functionality
      - [ ] Edit profile
      - [ ] Delete profile -->