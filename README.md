# Embeddable Onboarding Repo
Hello and welcome to the onboarding repository for the Embeddable onboarding sessions ❤️ We wish to thank you for being one of our customers and welcome any feedback you might have.

### Installation

`npm i` # requires node 18 or later

### Build & Deploy
This is how you push code changes to your Embeddable workspace

`npm run embeddable:login`

`npm run embeddable:build`

`npm run embeddable:push`

`open https://app.embeddable.com`

### Local Development
This is a "Preview workspace" (local to you) that allows you make changes locally and see them instantly without needing to "Build and Deploy".

`npm run embeddable:login`

`npm run embeddable:dev` # opens a "Preview" workspace, that uses your local components and models

### Challenge

Your challenge is to create a simple **dropdown** component that 

  1. takes a **dataset** and a **dimension** as its inputs
  2. updates a text variable when a value is selected from the dropdown.

Hints:

 - component should take a **dataset** and a **dimension** as its inputs.
 - render a dropdown, listing the values from the **dimension.**
 - add an **event** so that when the user clicks a value in the dropdown, it updates a **variable.**
 - the data models we've given you are all you need.
 - step-by-step guide is available [here](https://trevorio.notion.site/React-SDK-3859463716fe4564978d239cfb462011#85935835bce34c2ca9e7e9e3af4e7818)
 - SDK documentation is available [here](https://trevorio.notion.site/defineComponent-bb12d7a9819248239e79515b5e0eab61)

### Bonus challenge

Your challenge is to embed your dashboard in a simple HTML file:

  1. click "Publish" on your dashboard and take a copy of your "API Key" and your "Embeddable Id"
  2. `git clone https://github.com/embeddable-hq/web-component-example.git`
  3. Add your "API Key" and "Embeddable Id" to the `src/test.js` file
  4. Run `node src/test.js`
  5. Open [http://localhost:8080/](http://localhost:8080/)
 
### Next steps

Once you've completed the challenge you're ready to hit the road running

 1. You can clone our Embeddable **Components Starter Pack** [here](https://github.com/embeddable-hq/vanilla-components) (feel free to throw away this onboarding repository)
 2. You can **connect your own database** to your workspace by following the instructions [here](https://trevorio.notion.site/Connections-API-ff4af10f7eaf4288b6952fde04e6e933)
 3. Talk to us.  We're keen to help :)

