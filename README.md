# www.devxbasit.dev - Angular portfolio based on Clean Architecture 

## Folder Structure
The project follows a specific folder structure to ensure organization and clarity. Please adhere to the following guidelines:

-   **`/src`**: Contains the source code of the project.

    -   **`/app`**: Main application code.

        -   **`/core`** : This folder often contains core functionalities that are not directly related to a specific feature or page. It's a good place to put services, guards, interceptors, and other pieces of code that are critical to the application but not tied to a particular feature.

            -   **`/auth`** : This folder contain authentication-related code, such as services or guards responsible for handling user authentication and authorization.
            -   **`/guards`** : Guards are used to control access to certain routes in your application. They can be placed here to keep the code organized.
            -   **`/interceptors`** : Interceptors can be used to modify HTTP requests or responses globally. Placing them in this folder helps maintain a clean structure.
            -   **`/layout`** : This might be used for components or services related to the overall layout of your application, such as a navigation bar or footer.
            -   **`/models`** : This folder can contain data models used throughout the application. Defining models in one place makes it easier to manage and maintain consistency.
            -   **`/services`** : Services that are shared across multiple features or components can be placed here. These could include data services, utility services, etc.

        *   **`/features`** : This folder is typically used for organizing pages or features of your application. Each feature might have its own subfolder containing components, services, and other files specific to that feature.
        *   **`/shared`** : This folder is for components, services, or other pieces of code that are shared across multiple features. It helps to avoid duplication and ensures consistency in the application."

            -   **`/components`**: This directory contains reusable UI components utilized across various features of the application. Organizing components here promotes reusability, maintains consistency in design patterns, and facilitates easier maintenance and development.
            -   **`/styles`**: Housing global and component-specific stylesheets, this directory centralizes the styling resources for the application. Global stylesheets define overarching design principles, while component-specific stylesheets tailor the appearance of individual components, fostering a cohesive and visually appealing user interface.

    -   **`/assets`**: Resources like images, fonts and databases.

        -   **`/data`**: Houses data-related files or mockups used in the project.

            -   **`db.json`**: JSON file serving as the database for the json-server mock API. This file contains mock data used for simulating API responses during development.

        -   **`/images`**: Stores image files used within the application. These include icons, graphics, and other visual elements.
        -   **`/fonts`**: Holds font files utilized for typography and styling purposes in the application.

    -   **`/stories`**: Storybook for automatic components documentation. Try: `ng storybook`

-   **`/docs`**: Documentation files.
-   **`/tests`**: Unit, integration, e2e and other tests.

# Commands

npx json-server "./src/assets/data/db.json
