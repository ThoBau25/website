<script setup>
import { ref } from "vue";
import DefaultLayout from "../layout/DefaultLayout.vue";
import { BCard, BCardText, BButton } from "bootstrap-vue-next";
import Modal from "@/components/Modal.vue";

const showModal = ref(false);
const selectedProject = ref(null);

const projects = [
  {
    title: "Study Notes App",
    description: `Die App „Lernnotizen“ ist eine Swift-Anwendung zum Erstellen und Verwalten von Lernaufgaben.
Sie hilft Nutzern, den Überblick über offene und bereits erledigte Aufgaben zu behalten.
Ziel ist es, Lerninhalte strukturiert zu organisieren und Schüler während des gesamten Schuljahres zu unterstützen.

**Funktionen:**
- Alle offenen und erledigten Lernaufgaben auf dem Startbildschirm anzeigen
- Neue Lernaufgaben mit Titel und Beschreibung erstellen (Pflichtfelder)
- Bestehende Aufgaben durch Antippen bearbeiten
- Aufgaben per Wischgeste löschen
- Aufgaben per Auswahlbutton als erledigt markieren
- Zeitbasierte Erinnerungen für Aufgaben einstellen
- Lernmaterialien aus der Fotogalerie anhängen
- Emojis zuweisen, die den aktuellen Lernfortschritt darstellen`,
    images: [
      "src/assets/projekte/study-notes/AddNoteScreen.png",
      "src/assets/projekte/study-notes/HomeScreen.png",
    ],
    githubLink: "https://github.com/ThoBau25/StudyNotes-App",
  },
  {
    title: "Hotel Plattform",
    description: `Das Projekt wurde in einem Team aus drei Personen umgesetzt. Dabei
              arbeiteten wir auf Basis eines vorgegebenen Backends und
              durchliefen den gesamten Entwicklungsprozess – von der ersten Idee
              bis zur finalen Abnahme. Der Ablauf orientierte sich stark an
              echten Softwareprojekten: Beginnend mit einem Paper-Prototypen,
              über regelmäßige Abstimmungen und Meetings, bis hin zur fertigen
              Anwendung.

Neben der technischen Umsetzung stand vor allem die Zusammenarbeit              
im Team, strukturiertes Vorgehen und die kontinuierliche
Verbesserung des Produkts im Fokus.
              
**Funktionen:**
- Benutzerregistrierung und -anmeldung
- Hotelzimmerübersicht mit Filter- und Suchfunktion
- Detaillierte Hotelinformationen mit Bildern
- Buchungsprozess mit Verfügbarkeitsprüfung
- Benutzerprofil mit Buchungsübersicht`,
    images: [
      "src/assets/projekte/hotel/1-Startseite.png",
      "src/assets/projekte/hotel/2-Anmeldung.png",
      "src/assets/projekte/hotel/4-Über-uns.png",
      "src/assets/projekte/hotel/3-Zimmerauswahl.png",
    ],
    githubLink: "https://github.com/ThoBau25/boutique-hotel-technikum",
  },
  {
    title: "Quiz App",
    description: `Eine einfache Quiz-App für Android, mit der Nutzer Quizze mit Einzel- und Mehrfachauswahl erstellen können. Verschiedene Kategorien, Schwierigkeitsgrade und Fragetypen wie Multiple-Choice- oder Ja/Nein-Fragen stehen zur Auswahl.

**Funktionen:**
- Erstellen Sie Quizze mit Einzel- oder Mehrfachauswahlfragen.
- Wählen Sie Quizkategorien (z. B. Naturwissenschaften, Geschichte, Allgemeinwissen).
- Wählen Sie Schwierigkeitsgrade (Leicht, Mittel, Schwer). Ja/Nein-Fragen (Richtig/Falsch).
- Verfolgen Sie Ihre Ergebnisse und Ihren Fortschritt.`,
    images: [
      "src/assets/projekte/quiz/HighscoreScreen.png",
      "src/assets/projekte/quiz/HomeScreen-2.png",
      "src/assets/projekte/quiz/QuizScreen.png",
    ],
    githubLink: "https://github.com/ThoBau25/Quiz-App",
  },
];

const openModal = (project) => {
  selectedProject.value = project;
  showModal.value = true;
};
</script>

<template>
  <DefaultLayout>
    <section class="projects-section">
      <div class="d-flex justify-content-center">
      <h1 id="headline">Meine Projekte</h1>
      </div>
      <div
        class="projects-container d-flex gap-4 flex-wrap justify-content-center"
      >
        <BCard
          title="Study Notes App"
          img-src="src/assets/projekte/StudyNotes.png"
          img-alt="Study Notes App"
          img-top
          tag="article"
          style="max-width: 30rem"
        >
          <BCardText>
            <p>
              Die App „Study Notes“ ist eine Swift-Anwendung zum Erstellen und
              Verwalten von Lernaufgaben.
            </p>
            <p>
              Sie hilft Nutzern, den Überblick über offene und bereits erledigte
              Aufgaben zu behalten.
            </p>
            <p>
              Ziel ist es, Lerninhalte strukturiert zu organisieren und Schüler
              während des gesamten Schuljahres zu unterstützen.
            </p>
          </BCardText>
          <div class="button-container">
            <BButton @click="openModal(projects[0])" class="details-btn" pill
              >Mehr Details</BButton
            >
          </div>
        </BCard>
        <BCard
          title="Boutique Hotel Technikum"
          img-src="src/assets/projekte/BoutiqueHotel.png"
          img-alt="Boutique Hotel Website"
          img-top
          tag="article"
          style="max-width: 30rem"
        >
          <BCardText>
            <p>
              Diese Website entstand im Rahmen eines Gruppenprojekts während
              meines FH-Studiums.
            </p>
            <p>
              Ziel war die Entwicklung einer vollständigen
              Hotelbuchungsplattform unter realitätsnahen Bedingungen. Ein
              Backend wurde vorgegeben, und wir durchliefen den gesamten
              Entwicklungsprozess – von der ersten Idee über die Erstellung
              eines Paper-Prototyps bis hin zur finalen Abnahme.
            </p>
          </BCardText>
          <div class="button-container">
            <BButton @click="openModal(projects[1])" class="details-btn" pill
              >Mehr Details</BButton
            >
          </div>
        </BCard>
        <BCard
          title="Quiz App"
          img-src="src/assets/projekte/QuizApp.png"
          img-alt="Quiz App"
          img-top
          tag="article"
          style="max-width: 30rem"
          class="card"
        >
          <BCardText>
            <p>
              Eine einfache Android-Quiz-App, mit der Nutzer Einzel- und
              Mehrfachauswahl-Quizze erstellen können.
            </p>
            <p>
              Ein Nutzer kann verschiedene Kategorien, Schwierigkeitsgrade und
              Fragetypen wie Multiple-Choice- oder Ja/Nein-Fragen auswählen und
              daraufhin werden die Quizfragen generiert.
            </p>
          </BCardText>
          <div class="button-container">
            <BButton @click="openModal(projects[2])" class="details-btn" pill
              >Mehr Details</BButton
            >
          </div>
        </BCard>
      </div>
    </section>
    <section class="modal-section">
      <Modal
        v-if="selectedProject"
        v-model="showModal"
        :title="selectedProject.title"
        :description="selectedProject.description"
        :images="selectedProject.images"
        :githubLink="selectedProject.githubLink"
      />
    </section>
  </DefaultLayout>
</template>

<style scoped>
.modal-section {
  padding: 0px;
}
h1 {
  margin-top: 10px;
  color: #f2eff6;
    display: inline-block;
  color: #716b9b;
  background-color: #f2eff6;
  padding: 5px 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.button-container {
  display: flex;
  justify-content: center;
}

:deep(.card-img-top) {
  height: 400px;
  object-fit: contain;
  width: 100%;
}

:deep(.card-title) {
  font-weight: 700;
  text-align: center;
}

:deep(.card) {
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    background-color 0.3s ease;
  border-radius: 16px;
  overflow: hidden;
  padding: 20px;
  background-color: #f2eff6;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

:deep(.card:hover) {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
}

:deep(.card img) {
  transition: transform 0.5s ease;
}

:deep(.card:hover img) {
  transform: scale(1.04);
}

:deep(.card .btn) {
  transition: all 0.3s ease;
}

:deep(.card:hover .btn) {
  transform: scale(1.05);
}

:deep(.card:hover) {
  backdrop-filter: blur(10px);
}

.details-btn {
  background-color: #9f94ad;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
}

.details-btn:hover {
  background-color: #bab8cc;
  color: #ffffff;
  transform: scale(1.05);
  transition: all 0.2s ease;
}

.projects-container {
  padding: 20px;
}
</style>
