<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
    useHead({
    title: () => 'Portfolio - Matheus',
  })


  import { Octokit } from 'octokit'

interface Project {
  name: string;
  description: string | null;
  html_url: string;
}

interface ProjectsByLanguage {
  [language: string]: Project[];
}

const env = useRuntimeConfig()
const octokit = new Octokit({
  auth: env.public.NUXT_GITHUB_AUTH,
})

const githubUser = await octokit.request('GET /user', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
})

const responseRepo = await octokit.request('GET /user/repos', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

const groupProjectsByLanguage = (projects: any[]): ProjectsByLanguage => {
  const groupedProjects: ProjectsByLanguage = {};

  projects.forEach(project => {
    const { language, name, description, html_url, private: isPrivate } = project;
    if (!isPrivate) {
      if (!groupedProjects[language]) {
        groupedProjects[language] = [];
      }
      groupedProjects[language].push({ name, description, html_url });
    }
  });

  return groupedProjects;
}

const githubRepository = groupProjectsByLanguage(responseRepo.data);

provide('github', {
  user: githubUser,
  repo: githubRepository
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
}

body {
  background-color: #e2e2e2;
}
</style>

