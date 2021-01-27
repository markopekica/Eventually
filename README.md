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

---
<br>


## TODO

- [ ] App v_1.0
  - [ ] Home
    - [ ] **ToolBar**
      - **calendar**
        - [X] Calendar design
        - [X] Calendar functionality
        - [ ] nakon odabira, zapamti datume pri ponovnom otvaranju kalendara
      - **filters**
        - [ ] Design
        - [ ] Functionality
      - AddEvent
        - [x] Design the view
        - [x] Make it work
    - Lane
      - [ ] Hide lane if no cards in category
  - [ ] EventInfo 
    - [ ] add to favorites
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
      - [ ] Delete profile
  - [X] LogIn, Register
    - [X] pogledat novi video za security i poboljsat
    - [X] Make a transition to Home/UserProfile once loggedIn/registered successfully
    - [ ] color input field in red according to error

<br>


|   pon    |  uto  |  sri  |  cet  |      pet      |  sub  |  ned  |
| :------: | :---: | :---: | :---: | :-----------: | :---: | :---: |
|    1     |   2   |   3   |   4   |       5       |   6   |   7   |
|    8     |   9   |  10   |  11   | 12<br>**<>**  |  13   |  14   |
|    15    |  16   |  17   |  18   | 19<br>**doc** |  20   |  21   |
| **!22!** |       |       |       |               |       |       |

<br>

##### Nuzno

- [ ] UserProfile page **D.K.**
  - [ ] layout
  - [ ] da si unese podatke
- f (funkcionalnosti)
  - [ ] search filters **K.P.**
  - [ ] mark with (coming/interested); like **M.P.**
- [ ] dokumentacija
- [ ] promotivna prezentacija (3-5 min) **K.P.**

<br>

1. Sažetak (max.	1	stranica)
2. Uvod	(max.	1-2 stranice) M.P.
   - kratki	opis aplikacije koju razrađujemo
     - (ciljano	tržište,	korisnici,	te	glavne	prednosti	koje	će	se	ostvariti	uvođenjem	takve	aplikacije u	odnosu	na	dostupna	rješenja).
3. Motivacija (2	– 4	stranice) - D.K.
   - Potrebno	je	razložiti	ciljano	tržište	aplikacije,	opisati	postojeća	i	konkurentska	rješenja	te	priložiti	SWOT	analizu.
   - Ukoliko	nema	konkurentskih	rješanja,	nego	se	radi	o	inovaciji,	opisati	kako	se	odvijao	 dosadašnji	proces	(npr.	ručno, kroz	excel	dokumente,	papirologiju,	...).	Kroz	SWOT	analizu	istaknuti	 bitne	prednosti	uvođenja	takvog	rješenja. Navesti	koje	su	sve	predispozicije	potrebne	za	uvođenje aplikacije,	ukoliko	je	to	potrebno	(npr.	neka	organizacija	s	kojom	komuniciramo	treba	ostvariti	web	servis	za	pristup	podacima	i	slično).	Navesti	tko	sve	ima	koristi	od	uvođenja	takve	aplikacije,	što	ne moraju	nužni	biti	samo	krajnji	korisnici,	nego	i	neke	organizacije	iza	toga	ili	s	kojima	se	komunicira.
4. Razrada	funkcionalnosti	(8 - 15 stranica)
   - [ ] ~ *3-5 str.* - Opisati	i	grupirati	**funkcionalnosti	po skupinama	korisnika**	(pr.	administrator,	menadžer,	korisnik	 smartphone-a,	...).	Priložiti	"Use	Case"	dijagram	cijelog	sustava.	Ukoliko	je	potrebno,	može	se napraviti	i	"Use	Case"	dijagram	posebno	za	dijelove	sustava, no	svakako	mora	postojati	jedan	početni krovni	dijagram	cijelog	sustava.	Navesti	i	opisati	**način	na	koji	će	aplikacija komunicirati	sa	ostalim	sustavima**	(pr.	sustavi u	postojećim	ustanovama,	vladini	sustavi,	...) što	također	mora	biti	vidljivi	na	"Use	Case"	dijagramu. Opisati	korisničke	scenarije	na	temelju	kojih	je	izrađen	dijagram.
   - [ ] ~ *2-3 str.* - Ključne korisničke	scenarije (npr.	izrada	računa,	pretraga	objekata)	iz	"Use	Case"	dijagrama	razraditi kroz	"Use	Case	Sequence"	dijagrame,	svakog	zasebno.
   - [ ] ~ *3-4 str.* slike - Priložiti	**prototip	sučelja**	za	aplikaciju.		To	može	biti	u	obliku	nekoliko	"ekrana":	prijava,	početni	 izbornik	(ako	ima),	podešavanje	opcija	(ako	treba)	te	svakako	**ekrane	za	kritične	procese**	koje	smo	 razradili	u	obliku	"Use	Case	Sequence"	dijagrama.
   - [ ] ~ *2 str.* - **Sastaviti	klasni	dijagram**	(eng.	Class	diagram)	za objekte	iz	domene	aplikacije	(Korisnik,	Račun, Artikl	…)	te	pojasniti	po	potrebi	ključne	dijelove	dijagrama	(npr.	zbog	čega	se	negdje	koristi	agregacija,	kompozicija,	nasljeđivanje)	ako	nije	intuitivno	jasno.
5. Implementacija (3-5	stranica)
   - Dokumentirati	koristeći	klasne	dijagrame	na	koji	način	su	rješene	ključne	funkcionalnosti	u	aplikaciji (npr.	Izrada	računa,	…)	gdje	je	vidljivo	koje	se	Vue	komponente	koriste,	te	na	koji	način	su	povezane.	Vue	komponentu	prikazati	klasom.
   - Priložiti	popis	svih	klasa	i	njezinih	sastavnica	uz	objašnjenje	značenja	tih	sastavnica,	te	u	slučaju	
   metoda,	konstruktora	ili	delegata	i	značenje	parametara.
6. Korisničke	upute	(4	- 6	stranica) K.P.
   - Pojasniti	način	na	koji	se	koristi	aplikacija	koristeći	screenshote sa	stvarnog	sučelja	aplikacije.


<br>



<!-- - App v_2.0 -->