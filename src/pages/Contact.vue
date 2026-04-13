<script setup lang="ts">
import {
  BButton,
  BCol,
  BFormGroup,
  BModal,
  BRow,
  BFormInput,
  BFormTextarea,
} from "bootstrap-vue-next";
import DefaultLayout from "../layout/DefaultLayout.vue";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { reactive, ref, watch } from "vue";

const schema = yup.object().shape({
  vorname: yup.string().required("Vorname ist erforderlich"),
  nachname: yup.string().required("Nachname ist erforderlich"),
  email: yup
    .string()
    .email("Ungültige E-Mail-Adresse")
    .required("E-Mail ist erforderlich"),
  telefon: yup.string().required("Telefonnummer ist erforderlich"),
  anliegen: yup.string().required("Anliegen ist erforderlich"),
});

const validationErrors = ref<any>({});

const form = reactive({
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  anliegen: "",
});

watch(
  form,
  () => {
    if (!isSubmitting.value) {
      validateForm();
    }
  },
  { deep: true },
);

const show = ref(true);
const successMessage = ref(false);

const formRef = ref<HTMLFormElement | null>(null);

const validateForm = async () => {
  try {
    await schema.validate(form, { abortEarly: false });
    validationErrors.value = {};
    return true;
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      const errors: any = {};
      err.inner.forEach((error) => {
        if (error.path) {
          errors[error.path] = error.message;
        }
      });
      validationErrors.value = errors;
    }
    return false;
  }
};

const isSubmitting = ref(false);

const onSubmit = async (event: Event) => {
  event.preventDefault();

  isSubmitting.value = true;

  const isValid = await validateForm();
  if (!isValid) {
    isSubmitting.value = false;
    return;
  }
  if (!formRef.value) return;

  emailjs
    .sendForm(
      "service_8r7fieo",
      "template_2la3zra",
      formRef.value,
      "7nlk_iRjswDU_2JiB",
    )
    .then(() => {
      successMessage.value = true;
      show.value = false;

      form.vorname = "";
      form.nachname = "";
      form.email = "";
      form.telefon = "";
      form.anliegen = "";
    })
    .catch((error) => {
      console.error("Fehler beim Senden:", error);
    })
    .finally(() => {
      isSubmitting.value = false;
    });
};
</script>

<template>
  <default-layout>
    <section class="contact-section">
      <BRow class="justify-content-center align-items-stretch">
        <BCol cols="12" lg="5">
          <div class="contact-container">
            <h1>Hat dich das Interesse an meiner Person geweckt?</h1>
            <p>
              Dann kontaktiere mich gerne über das untenstehende
              Kontaktformular.
            </p>
            <BModal v-model="successMessage">
              <template #header>Vielen Dank!</template>
              <p>Deine Nachricht wurde erfolgreich gesendet.</p>
              <template #footer>
                <BButton
                  @click="
                    successMessage = false;
                    show = true;
                  "
                  variant="primary" 
                >
                  Schließen
                </BButton>
              </template>
            </BModal>
            <form ref="formRef" v-show="show" @submit="onSubmit">
              <BFormGroup
                id="input-group-1"
                label="Vorname:"
                label-for="input-1"
              >
                <BFormInput
                  id="input-1"
                  v-model="form.vorname"
                  name="vorname"
                  type="text"
                  :state="
                    validationErrors.vorname
                      ? false
                      : form.vorname
                        ? true
                        : null
                  "
                  placeholder="Dein Vorname"
                  required
                />
                <div v-if="validationErrors.vorname" class="text-danger">
                  {{ validationErrors.vorname }}
                </div>
              </BFormGroup>
              <BFormGroup
                id="input-group-2"
                label="Nachname:"
                label-for="input-2"
              >
                <BFormInput
                  id="input-2"
                  v-model="form.nachname"
                  name="nachname"
                  type="text"
                  :state="
                    validationErrors.nachname
                      ? false
                      : form.nachname
                        ? true
                        : null
                  "
                  placeholder="Dein Nachname"
                  required
                />
                <div v-if="validationErrors.nachname" class="text-danger">
                  {{ validationErrors.nachname }}
                </div>
              </BFormGroup>
              <BFormGroup
                id="input-group-3"
                label="E-Mail:"
                label-for="input-3"
              >
                <BFormInput
                  id="input-3"
                  v-model="form.email"
                  name="email"
                  type="email"
                  :state="
                    validationErrors.email ? false : form.email ? true : null
                  "
                  placeholder="Deine E-Mail"
                  required
                />
                <div v-if="validationErrors.email" class="text-danger">
                  {{ validationErrors.email }}
                </div>
              </BFormGroup>
              <BFormGroup
                id="input-group-4"
                label="Telefon:"
                label-for="input-4"
              >
                <BFormInput
                  id="input-4"
                  v-model="form.telefon"
                  name="telefon"
                  type="tel"
                  :state="
                    validationErrors.telefon
                      ? false
                      : form.telefon
                        ? true
                        : null
                  "
                  placeholder="Deine Telefonnummer"
                  required
                />
                <div v-if="validationErrors.telefon" class="text-danger">
                  {{ validationErrors.telefon }}
                </div>
              </BFormGroup>
              <BFormGroup
                id="input-group-5"
                label="Anliegen:"
                label-for="input-5"
              >
                <BFormTextarea
                  id="input-5"
                  v-model="form.anliegen"
                  name="anliegen"
                  type="text"
                  :rows="4"
                  :state="
                    validationErrors.anliegen
                      ? false
                      : form.anliegen
                        ? true
                        : null
                  "
                  placeholder="Dein Anliegen"
                  required
                />
                <div v-if="validationErrors.anliegen" class="text-danger">
                  {{ validationErrors.anliegen }}
                </div>
              </BFormGroup>
              <div class="d-flex justify-content-center">
                <BButton
                  class="mt-4 px-4"
                  type="submit"
                  variant="primary"
                  :disabled="isSubmitting"
                >
                  Absenden
                </BButton>
              </div>
            </form>
          </div>
        </BCol>
          <BCol cols="12" lg="7" class="d-flex">
            <div class="image-container">
              <img  src="@/assets/foto/Kontakt.jpg"
              alt="Contact"
              id="contact-img"
            />
            </div>
          </BCol>
      </BRow>
    </section>
  </default-layout>
</template>

<style scoped>
.contact-section {
  padding: 40px;
  width: 100%;
}

.contact-container {
  max-width: 600px;
  background-color: #f2eff6;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  padding: 30px;
  color: black;

  line-height: 30px;
}

#contact-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.image-container {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
}

</style>
