# Fork repository

To **Fork** this repository:

- Click on the **Fork** button in the top right corner of this repository. This will create a copy of this repository in your GitHub account.
- You can then clone your newly copied repository to your computer and start building the applicaton based on the requirements below.

When you finish your app by pushing it to your repository, please, send us HTTPS link to your repository.

## Project configuration

Use **yarn install** or **npm install** for installing node_modules.

Current project was created with [Vite](https://vitejs.dev/) as Development server. You can start the DEV server on **localhost:3000** by running **yarn dev** or **npm run dev**.

### Project has pre-configured packages:

[Vue 3](https://v3.vuejs.org/): It is up to you if you use [Vue 3 Compositon API](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) or not.

[Axios](https://www.npmjs.com/package//axios): Axios is configured and prepared in App.vue component, you can use it straightaway if you want to. It is up to you if you prefer other way of getting data from external API.

[TailwindCSS](https://tailwindcss.com/): You can use it for CSS styling to speed up your development. Package is configured, no additional settings is required.

### Requirements

Application should download list of users from external REST API and display them as separate cards in responsive GRID.

List of users: **https://jsonplaceholder.typicode.com/users**

#### Loading screen

Create some CSS loader or just display "Data loading..." message while user list will be loaded from API. As this will be most probably very fast, make sure data loading will take at least 2 seconds (create delay) so user can see the loading screen.

#### User card

**To import your components in the main App.vue component, you should use absolute path such as "./components/UserCard.vue" due to Vite native ES imports.**

User card **MUST** be [Single File Component](https://v3.vuejs.org/guide/single-file-component.html#introduction) and should contain:

- user icon (SVG)
- user name
- user email
- user company
- user phone

#### Responsive GRID

Grid should be responsive and display minimum 1 and maximum 5 user cards per row based on browser width.

#### Filtering users

Application should contain input field which will be used for filtering users based on their names. If no user is found based on the search string, application should display message.

Extra task (optional): By pressing down the Escape key, input field should reset (delete search string).

#### Counting users

Application should contain information about selected and unselected users.
By clicking on user card, that card should be marked as selected and **selected users count** should be increased by 1 and **unselected users count** should be decreased by 1.
By clicking on user card which is already selected, that card should be unselected and **selected users count** should be decreased by 1 and **unselected users count** should be increased by 1.
