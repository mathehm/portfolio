<template>
  <div class="component__card">
    <div class="figure">
      <div class="arc">
        <div class="circle" />
      </div>
      <img
        class="image"
        src="../public/picture.png"
        :alt="`foto de ${github.user.data.avatar_url}`"
      >
    </div>
    <h2 class="name">
      Matheus
    </h2>
    <h2 class="surname">
      Martins
    </h2>
    <p class="bio">
      {{ github.user.data.bio }}
    </p>

    <div class="social-buttons">
      <a
        href="https://github.com/mathehm"
        target="_blank"
        rel="noopener noreferrer"
        class="social-button"
      >
        <font-awesome
          :icon="['fab', 'github']"
          color="white"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/matheushmartins"
        target="_blank"
        rel="noopener noreferrer"
        class="social-button"
      >
        <font-awesome
          :icon="['fab', 'linkedin']"
          color="white"
        />
      </a>
      <a
        href="mailto:matheushmar@gmail.com"
        class="social-button"
      >
        <font-awesome
          icon="envelope"
          color="white"
        />
      </a>
      <a
        href="https://wa.me/5527999515998?text=Ol%C3%A1%2C+encontrei+seu+contato+pelo+site%21"
        target="_blank"
        rel="noopener noreferrer"
        class="social-button"
      >
        <font-awesome
          :icon="['fab', 'whatsapp']"
          color="white"
        />
      </a>
    </div>
  </div>

  <div class="component__title">
    <h1>Portfolio</h1>
  </div>

  <div class="component__info">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/OrxmtDw4pVI?si=YhnEN59zlz4YSnq1?rel=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
  </div>

  <div class="component__bhoriz">
    <NuxtLink
      class="button-link"
      to="/"
    >
      <font-awesome
        :icon="['fab', 'html5']"
        color="white"
        size="4x"
      />
    </NuxtLink>

    <NuxtLink
      class="button-link"
      to="/"
    >
      <font-awesome
        :icon="['fab', 'css3']"
        color="white"
        size="4x"
      />
    </NuxtLink>

    <NuxtLink
      class="button-link"
      to="/"
    >
      <font-awesome
        :icon="['fab', 'js']"
        color="white"
        size="4x"
      />
    </NuxtLink>
  </div>

  <div class="component__bvert">
    <NuxtLink
      class="button-link"
      to="/vuejs"
    >
      <font-awesome
        :icon="['fab', 'vuejs']"
        color="white"
        size="4x"
      />
    </NuxtLink>
    <NuxtLink
      class="button-link"
      to="/"
    >
      <font-awesome
        :icon="['fab', 'node']"
        color="white"
        size="4x"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const github = inject('github')
</script>

<style lang="scss">
.component {
  &__card {
    background: #8184d2;
    grid-area: card;
    border-radius: 20px;
    color: white;
    font-size: 1.75rem;
    padding: 1.5rem;

    .figure {
      --figure-size: 300px;
      --border-width: 6px;
      --circle-size: calc(var(--figure-size) - 30px);
      --circle-color: #efaeff;
      --image-size: calc(var(--figure-size) + 40px);
      --image-top: -35px;

      @media (width <= 720px) {
        --figure-size: 200px;

        font-size: 1.25rem;
      }

      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      top:-20px;

      .arc {
        width: var(--figure-size);
        height: var(--figure-size);
        border: var(--border-width) solid white;
        border-radius: 50%;
        overflow: hidden;
      }

      .circle {
        width: var(--circle-size);
        height: var(--circle-size);
        background-color: var(--circle-color);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .image {
        border-radius: 50%;
        max-width: var(--image-size);
        position: absolute;
        top: var(--image-top);
        filter: grayscale(90%);
      }
    }

    .name {
      font-weight: 900;
    }

    .surname {
      font-weight: 200;
    }

    .bio {
      font-size: 22px;
    }

    .social-button {
      margin-top: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-right: 10px;
      background-color: #696cd4;
      color: #fff;
      text-decoration: none;
      transition: background-color 0.3s, transform 0.3s;

      &:hover {
        background-color: #4448ad;
        transform: scale(1.1);
      }

      i {
        font-size: 20px;
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
    background: #a9dad7;
    grid-area: info;
    border-radius: 20px;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;

    iframe,
    object,
    embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__bhoriz {
    background: #595959;
    grid-area: bhoriz;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__bvert {
    background: #ffc266;
    grid-area: bvert;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
