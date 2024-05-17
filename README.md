# Next js Template

Translation to other languages and authentication are included.

## Template

1. [Translation](#translation)
2. [Authentication](#authentication)
3. [Important](#important)
    - [Translation Details](#translation-details)
    - [Authentication Details](#authentication-details)
4. [Getting Started](#getting-started)

## Translation

The translation is made using i18next.

Follow this [guide](https://locize.com/blog/next-app-dir-i18n#A-new-approach) to use i18next in your application or this [video](https://www.youtube.com/watch?v=J8tnD2BWY28&t=1356s) to use i18next with i18nexus.

## Authentication

The authentication is made using NextAuth with [google](https://next-auth.js.org/providers/google) and [github](https://next-auth.js.org/providers/github).

Follow the [official website](https://next-auth.js.org/getting-started/introduction) for more information.

## Important

Be aware that if any code is written in a client component it can be modified by anyone using the application.

### Translation Details

It's important to create a .env file with your i18nexus api key:

```bash
    I18NEXUS_API_KEY=...
```

For more information there's a [video](https://www.youtube.com/watch?v=J8tnD2BWY28) explaining how to use the [i18nexus website](https://i18nexus.com/) to translate your sentences.

### Authentication Details

1. If you choose not to have private application please ignore <span style="color: goldenrod;">USER_INFO</span> and delete the code for verification on the following pages:
    - [Main Page](https://github.com/IgorDGomes/Next-Template/blob/main/template/src/app/%5Blocale%5D/main/page.tsx)
    - [Second Page](https://github.com/IgorDGomes/Next-Template/blob/main/template/src/app/%5Blocale%5D/second-page/page.tsx)

2. It's necessary to update the .env file to contain the chosen providers, for more information about providers: [providers](https://next-auth.js.org/providers/)

3. If it's enough to have the providers already included here, please update the .env file to the following:

Note: do not include the curly braces.

```bash
    GITHUB_ID={Your Github ID}
    GITHUB_SECRET={Your Github Secret}

    GOOGLE_CLIENT_ID={Your Google ID}
    GOOGLE_CLIENT_SECRET={Your Google Secret}

    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=n2/axQt6jRBaJoAUMp3K60EprZq/E1wxgiUQ/rR5uH4=

    USER_INFO={Allowed email}
```

- For the Github Id and Secret follow [this steps](https://next-auth.js.org/providers/github)

- For the Google Id and Secret follow [this steps](https://next-auth.js.org/providers/google)
    - https://console.cloud.google.com/

## Getting Started

To start using this template do the following steps:

1. Clone the repository to your machine.

```bash
    git clone https://github.com/IgorDGomes/Next-Template.git
```

2. Open the project and go to the template directory.

```bash
    cd template/
```

3. Create a <span style="color: cornflowerblue;">.env</span> file following the instruction above for either translation, authentication or both.

4. Run the Application:

```bash
    npm run dev
```

5. Open on the web [http://localhost:3000](http://localhost:3000)