<template>
  <Form
    @submit="login(requestBody)"
    :validation-schema="schema"
    class="w-full sm:max-w-[800px] h-fit flex flex-col gap-6 bg-zinc-200 shadow-md dark:shadow-zinc-800 dark:bg-zinc-900 p-10 pb-32 rounded"
  >
    <div class="py-2 font-bold text-xl sm:text-2xl font-sans">Login</div>
    <div class="flex flex-col gap-2 text-zinc-800 dark:text-zinc-200">
      <label for="name" class="text-xs sm:text-sm"><b>Name</b></label>
      <div class="flex flex-col gap-2">
        <div class="flex">
          <div
            class="py-4 w-12 flex justify-center items-center rounded-l border-r border-r-zinc-100 dark:border-r-zinc-900 bg-zinc-300 dark:bg-zinc-800"
          >
            <font-awesome-icon :icon="'address-card'" />
          </div>
          <Field
            type="text"
            id="name"
            name="name"
            class="rounded-r p-4 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
            placeholder="Your name..."
            v-model="model.name"
          />
        </div>
        <ErrorMessage
          name="name"
          class="text-xs sm:text-sm text-red-700 dark:text-red-400"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2 text-zinc-800 dark:text-zinc-200">
      <label for="email" class="text-xs sm:text-sm"><b>E-mail</b></label>
      <div class="flex flex-col gap-2">
        <div class="flex">
          <div
            class="py-4 w-12 flex justify-center items-center rounded-l border-r border-r-zinc-100 dark:border-r-zinc-900 bg-zinc-300 dark:bg-zinc-800"
          >
            <font-awesome-icon :icon="'envelope'" />
          </div>
          <Field
            type="text"
            id="email"
            name="email"
            class="rounded-r p-4 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
            placeholder="Your e-mail..."
            v-model="model.email"
          />
        </div>
        <ErrorMessage
          name="email"
          class="text-xs sm:text-sm text-red-700 dark:text-red-400"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2 text-zinc-800 dark:text-zinc-200">
      <label for="name" class="text-xs sm:text-sm"><b>Password</b></label>
      <div class="flex flex-col gap-2">
        <div class="flex">
          <div
            class="py-4 w-12 flex justify-center items-center rounded-l border-r border-r-zinc-100 dark:border-r-zinc-900 bg-zinc-300 dark:bg-zinc-800"
          >
            <font-awesome-icon :icon="'fa-lock'" />
          </div>
          <Field
            type="password"
            id="password"
            name="password"
            class="rounded-r p-4 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
            placeholder="Your password..."
            v-model="model.password"
          />
        </div>
        <ErrorMessage
          name="password"
          class="text-xs sm:text-sm text-red-700 dark:text-red-400"
        />
      </div>
    </div>
    <LoginFormLoginButton :content="'SUBMIT'" />
  </Form>
</template>

<script setup lang="ts">
import { object, string } from "yup";

const model = {
  name: "",
  email: "",
  password: "",
};

const requestBody = ref(model);

//const toast = useToast();

const schema = object({
  name: string().required("Name field is required!").max(255),
  email: string()
    .required("E-mail field is required!")
    .email("E-mail must be and valid e-mail!")
    .max(255),
  password: string().required("Password field is required!").max(255),
});

function login(values: object) {
  fetchApi
    .post("/login", values)
    .then((response) => {
      //toastSuccess();
    })
    .catch((error) => {
      const { response } = error;
      //toastFails(response._data);
    });
}

// function toastSuccess() {
//   toast.add({
//     title: "Success!",
//     description: "The form has been successfully submitted!",
//   });
//   return;
// }

// function toastFails(message: string) {
//   toast.add({
//     title: "Error!",
//     description: message,
//     color: "red",
//   });
//   return;
// }
</script>
