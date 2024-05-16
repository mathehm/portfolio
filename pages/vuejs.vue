<template>
  <div class="content__card">
    <div v-for="repo in github.repo.Vue" class="card">
      <h2 class="card__title">{{ repo.name }}</h2>
      <p class="card__description">{{ repo.description }}</p>
      <a class="card__link" :href="repo.html_url">Acessar</a>
    </div>
  </div>

  <div class="content__title">
    <h1>Vue.JS</h1>
  </div>
  <div class="content__info">Adicionar Certificados</div>
</template>

<script setup lang="ts">
const github = inject('github')

definePageMeta({
  layout: 'content'
})
</script>

<style lang="scss" scoped>
.content {
  
  &__card {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    grid-area: card;

    .card {
      background-color: #8184d2;
      padding: 1rem;
      border-radius: 8px;
      width: calc((100% / 3) - 1rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (width <= 600px) {
        width: 100%;
      }
    
      &__title {
        font-size: 1.5rem;
        color: white;
      }
    
      &__description {
        font-size: 1rem;
        color: white;
      }

      &__link {
        text-decoration: none;
        text-transform: uppercase;
        background-color: #696cd4;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 8px;
        display: block;
        margin-top: 1rem;
        text-align: center;
        bottom: 0;
        transition: background-color 0.3s, transform 0.3s;
    
        &:hover {
          background-color: #4448ad;
          transform: scale(1.1);
        }
      }
    }
  
  }

  &__title {
    grid-area: title;
    border-radius: 20px;
    font-size: 48px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.2em;
    font-weight: 900;

    @media (width <= 920px) {
      font-size: 28px;
    }
  }
  &__info {
    grid-area: info;
  }
}
</style>