<template>
  <div
    class="content"
  >
    <div class="grid">
      <slot />
    </div>
    <a
      href="https://dribbble.com/shots/21766554-Portfolio-Website-V1"
      target="_blank"
      rel="noopener noreferrer"
      class="inpired"
    >Inspired by <b>Dribbble</b></a>
  </div>
</template>

<script setup lang="ts">
const loa = ref(false)
</script>

<style lang="scss">
.content {
  min-height: 100vh;
  padding: 3rem 2rem;

  @media (width <= 720px) {
    padding: 1rem;
  }
}

.grid {
  box-shadow: 0 30px 42px 0 rgb(0 0 0 / 10%);
  background-color: white;
  border-radius: 20px;
  max-width: 1200px;
  margin: auto;
  height: 100%;
  display: grid;
  gap: 24px;
  padding: 2rem;
  grid-template-areas:
    "card card title title title"
    "card card info info info"
    "card card bvert bvert bvert"
    "bhoriz bhoriz bvert bvert bvert"
    "bhoriz bhoriz bvert bvert bvert";

  @media (width <= 900px) {
    grid-template-areas:
      "card"
      "card"
      "title"
      "info"
      "info"
      "bhoriz"
      "bvert";
  }
}

.button-link {
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, transform 0.3s;

  &:hover{
    background-color: #0000001f;
    transform: scale(1.05);
  }
}

.inpired {
  color: black;
  text-decoration: none;
  display: block;
  margin: 8px auto 8px;
  width: fit-content;
}
</style>
