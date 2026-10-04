window.SCB = window.SCB || {};

SCB.SPORTS = {
  plivanje: { label: "Plivanje", color: "var(--plivanje)" },
  vaterpolo: { label: "Vaterpolo", color: "var(--vaterpolo)" },
  kosarka: { label: "Košarka", color: "var(--kosarka)" },
  rukomet: { label: "Rukomet", color: "var(--rukomet)" },
  odbojka: { label: "Odbojka", color: "var(--odbojka)" },
  tenis: { label: "Tenis", color: "var(--tenis)" },
  futsal: { label: "Futsal", color: "var(--futsal)" },
  teretana: { label: "Teretana", color: "var(--teretana)" },
  stoni: { label: "Stoni tenis", color: "var(--stoni)" },
  borilacki: { label: "Borilački", color: "var(--borilacki)" },
  trim: { label: "Trim / kondicija", color: "var(--trim)" },
  skola: { label: "Škola sporta", color: "var(--skola)" },
  sauna: { label: "Wellness", color: "var(--sauna)" }
};

SCB.DAYS = [
  { id: 0, name: "Nedelja", short: "Ned" },
  { id: 1, name: "Ponedeljak", short: "Pon" },
  { id: 2, name: "Utorak", short: "Uto" },
  { id: 3, name: "Sreda", short: "Sre" },
  { id: 4, name: "Četvrtak", short: "Čet" },
  { id: 5, name: "Petak", short: "Pet" },
  { id: 6, name: "Subota", short: "Sub" }
];

/* Realni termini za građanstvo na zatvorenom + reprezentativni klubski i rekreativni program. */
SCB.EVENTS = [
  { day: 1, start: "06:00", end: "09:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 1, start: "07:00", end: "22:00", title: "Otvorena teretana", loc: "Fitness sala", sport: "teretana" },
  { day: 1, start: "08:00", end: "09:30", title: "Jutarnji trim", loc: "Trim sala", sport: "trim" },
  { day: 1, start: "09:30", end: "11:00", title: "Škola plivanja · predškolci", loc: "Mali zatvoreni bazen", sport: "skola" },
  { day: 1, start: "10:00", end: "19:00", title: "Otvoreni bazeni (sezona)", loc: "Spoljni olimpijski bazeni", sport: "plivanje" },
  { day: 1, start: "11:00", end: "13:00", title: "Tenis — slobodni tereni", loc: "Teniski kompleksi 1–6", sport: "tenis" },
  { day: 1, start: "13:00", end: "16:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 1, start: "16:00", end: "17:30", title: "Škola plivanja · školski uzrast", loc: "Zatvoreni bazen", sport: "skola" },
  { day: 1, start: "17:00", end: "18:30", title: "RK SC Voždovac · pioniri", loc: "Velika sala", sport: "rukomet" },
  { day: 1, start: "17:30", end: "19:00", title: "Vaterpolo — mlađi pioniri", loc: "Zatvoreni bazen", sport: "vaterpolo" },
  { day: 1, start: "18:30", end: "20:00", title: "OK Crvena zvezda · juniori", loc: "Velika sala", sport: "odbojka" },
  { day: 1, start: "19:00", end: "20:30", title: "KMF Banjica", loc: "Mala sala", sport: "futsal" },
  { day: 1, start: "20:00", end: "21:30", title: "RK Partizan · seniori", loc: "Velika sala", sport: "rukomet" },
  { day: 1, start: "20:00", end: "22:00", title: "Rekreativni stoni tenis", loc: "Salon stonog tenisa", sport: "stoni" },

  { day: 2, start: "06:00", end: "09:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 2, start: "07:00", end: "22:00", title: "Otvorena teretana", loc: "Fitness sala", sport: "teretana" },
  { day: 2, start: "09:00", end: "10:30", title: "Korektivna gimnastika 3-7", loc: "Trim sala", sport: "trim" },
  { day: 2, start: "10:00", end: "19:00", title: "Otvoreni bazeni (sezona)", loc: "Spoljni olimpijski bazeni", sport: "plivanje" },
  { day: 2, start: "10:00", end: "12:00", title: "Tenis škola", loc: "Tereni 3-4", sport: "tenis" },
  { day: 2, start: "13:00", end: "16:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 2, start: "16:30", end: "18:00", title: "Džudo · deca", loc: "Mala sala", sport: "borilacki" },
  { day: 2, start: "17:00", end: "18:30", title: "Košarka — mini", loc: "Velika sala", sport: "kosarka" },
  { day: 2, start: "18:00", end: "19:30", title: "Karate klub", loc: "Mala sala", sport: "borilacki" },
  { day: 2, start: "18:30", end: "20:00", title: "ŽRK Crvena zvezda", loc: "Velika sala", sport: "rukomet" },
  { day: 2, start: "19:30", end: "21:00", title: "Vaterpolo — kadeti", loc: "Zatvoreni bazen", sport: "vaterpolo" },
  { day: 2, start: "20:00", end: "21:30", title: "Rekreativna košarka", loc: "Velika sala", sport: "kosarka" },

  { day: 3, start: "06:00", end: "09:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 3, start: "07:00", end: "22:00", title: "Otvorena teretana", loc: "Fitness sala", sport: "teretana" },
  { day: 3, start: "08:00", end: "09:00", title: "Jutarnja sauna", loc: "Wellness", sport: "sauna" },
  { day: 3, start: "09:30", end: "11:00", title: "Škola plivanja · predškolci", loc: "Mali zatvoreni bazen", sport: "skola" },
  { day: 3, start: "10:00", end: "19:00", title: "Otvoreni bazeni (sezona)", loc: "Spoljni olimpijski bazeni", sport: "plivanje" },
  { day: 3, start: "11:00", end: "13:00", title: "Tenis — slobodni tereni", loc: "Teniski kompleksi 1-6", sport: "tenis" },
  { day: 3, start: "13:00", end: "16:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 3, start: "16:00", end: "17:30", title: "Škola plivanja · školski uzrast", loc: "Zatvoreni bazen", sport: "skola" },
  { day: 3, start: "17:00", end: "18:30", title: "ORK Beograd · mlađi", loc: "Velika sala", sport: "odbojka" },
  { day: 3, start: "18:30", end: "20:00", title: "RK Obilić", loc: "Velika sala", sport: "rukomet" },
  { day: 3, start: "19:00", end: "20:30", title: "Tekvondo", loc: "Mala sala", sport: "borilacki" },
  { day: 3, start: "20:00", end: "21:30", title: "Futsal rekreativci", loc: "Mala sala", sport: "futsal" },
  { day: 3, start: "20:00", end: "22:00", title: "Para stoni tenis", loc: "Salon stonog tenisa", sport: "stoni" },

  { day: 4, start: "06:00", end: "09:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 4, start: "07:00", end: "22:00", title: "Otvorena teretana", loc: "Fitness sala", sport: "teretana" },
  { day: 4, start: "09:00", end: "10:30", title: "Korektivna gimnastika 3-7", loc: "Trim sala", sport: "trim" },
  { day: 4, start: "10:00", end: "19:00", title: "Otvoreni bazeni (sezona)", loc: "Spoljni olimpijski bazeni", sport: "plivanje" },
  { day: 4, start: "10:00", end: "12:00", title: "Tenis škola", loc: "Tereni 3-4", sport: "tenis" },
  { day: 4, start: "13:00", end: "16:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 4, start: "16:30", end: "18:00", title: "Džudo · deca", loc: "Mala sala", sport: "borilacki" },
  { day: 4, start: "17:00", end: "18:30", title: "RK SC Voždovac · kadeti", loc: "Velika sala", sport: "rukomet" },
  { day: 4, start: "18:00", end: "19:30", title: "Mačevanje", loc: "Mala sala", sport: "borilacki" },
  { day: 4, start: "18:30", end: "20:30", title: "Vaterpolo — seniori", loc: "Zatvoreni bazen", sport: "vaterpolo" },
  { day: 4, start: "20:00", end: "21:30", title: "Rekreativna odbojka", loc: "Velika sala", sport: "odbojka" },

  { day: 5, start: "06:00", end: "09:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 5, start: "07:00", end: "22:00", title: "Otvorena teretana", loc: "Fitness sala", sport: "teretana" },
  { day: 5, start: "08:00", end: "09:30", title: "Jutarnji trim", loc: "Trim sala", sport: "trim" },
  { day: 5, start: "09:30", end: "11:00", title: "Škola plivanja · predškolci", loc: "Mali zatvoreni bazen", sport: "skola" },
  { day: 5, start: "10:00", end: "19:00", title: "Otvoreni bazeni (sezona)", loc: "Spoljni olimpijski bazeni", sport: "plivanje" },
  { day: 5, start: "13:00", end: "16:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 5, start: "16:00", end: "17:30", title: "Škola plivanja · školski uzrast", loc: "Zatvoreni bazen", sport: "skola" },
  { day: 5, start: "17:00", end: "18:30", title: "Košarka — kadeti", loc: "Velika sala", sport: "kosarka" },
  { day: 5, start: "18:30", end: "20:00", title: "RK Partizan · juniori", loc: "Velika sala", sport: "rukomet" },
  { day: 5, start: "19:00", end: "20:30", title: "KMF Banjica", loc: "Mala sala", sport: "futsal" },
  { day: 5, start: "20:00", end: "22:00", title: "Noćno kupanje (najava)", loc: "Otvoreni bazeni", sport: "plivanje" },
  { day: 5, start: "20:30", end: "22:00", title: "Rekreativni rukomet", loc: "Velika sala", sport: "rukomet" },

  { day: 6, start: "08:00", end: "22:00", title: "Otvorena teretana", loc: "Fitness sala", sport: "teretana" },
  { day: 6, start: "09:00", end: "11:00", title: "Porodični tenis", loc: "Tereni 1-6", sport: "tenis" },
  { day: 6, start: "10:00", end: "12:00", title: "Škola sporta · subota", loc: "Mala sala", sport: "skola" },
  { day: 6, start: "10:00", end: "19:00", title: "Otvoreni bazeni (sezona)", loc: "Spoljni olimpijski bazeni", sport: "plivanje" },
  { day: 6, start: "11:00", end: "13:00", title: "Mini rukomet", loc: "Velika sala", sport: "rukomet" },
  { day: 6, start: "13:00", end: "16:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 6, start: "16:00", end: "18:00", title: "Vaterpolo — pripremni", loc: "Zatvoreni bazen", sport: "vaterpolo" },
  { day: 6, start: "17:00", end: "19:00", title: "Turnirski slot — velika sala", loc: "Velika sala", sport: "futsal" },
  { day: 6, start: "18:00", end: "21:00", title: "Rekreativni stoni tenis", loc: "Salon stonog tenisa", sport: "stoni" },

  { day: 0, start: "08:00", end: "21:00", title: "Otvorena teretana", loc: "Fitness sala", sport: "teretana" },
  { day: 0, start: "10:00", end: "19:00", title: "Otvoreni bazeni (sezona)", loc: "Spoljni olimpijski bazeni", sport: "plivanje" },
  { day: 0, start: "10:00", end: "12:00", title: "Porodično plivanje", loc: "Mali zatvoreni bazen", sport: "skola" },
  { day: 0, start: "11:00", end: "13:00", title: "Tenis — slobodni tereni", loc: "Teniski kompleksi 1–6", sport: "tenis" },
  { day: 0, start: "13:00", end: "16:00", title: "Rekreativno plivanje", loc: "Zatvoreni olimpijski bazen", sport: "plivanje" },
  { day: 0, start: "16:00", end: "18:00", title: "Odbojka na pesku / rekreativci", loc: "Velika sala", sport: "odbojka" },
  { day: 0, start: "17:00", end: "19:00", title: "Wellness popodne", loc: "Sauna", sport: "sauna" }
];

SCB.sortEvents = function (list) {
  return list.slice().sort(function (a, b) {
    return a.start.localeCompare(b.start);
  });
};

SCB.eventsForDay = function (day) {
  return SCB.sortEvents(SCB.EVENTS.filter(function (e) { return e.day === day; }));
};

SCB.renderEventRow = function (ev, light) {
  var sport = SCB.SPORTS[ev.sport] || { label: ev.sport, color: "var(--plivanje)" };
  var cls = "event-row" + (light ? " light" : "");
  return (
    '<article class="' + cls + '" style="--c:' + sport.color + '">' +
      '<div class="event-time">' + ev.start + "-" + ev.end + "</div>" +
      '<div><div class="event-title">' + ev.title + '</div><div class="event-loc">' + ev.loc + "</div></div>" +
      '<span class="sport-tag">' + sport.label + "</span>" +
    "</article>"
  );
};
