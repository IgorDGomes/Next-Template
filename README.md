# Next js Template

In this template, translation to other languages and authentication are included.

## Template

1. [Translation](#translation)
2. [Authentication](#authentication)
3. [Important](#important)
    - [Translation Details](#translation-details)
    - [Authentication Details](#authentication-details)

## Translation

The translation is made using i18next.

Follow this [guide](https://locize.com/blog/next-app-dir-i18n#A-new-approach) to use i18next in your application.

## Authentication

The authentication is made using NextAuth with [email](https://next-auth.js.org/providers/email), [google](https://next-auth.js.org/providers/google) and [github](https://next-auth.js.org/providers/github).

Follow the [official website](https://next-auth.js.org/getting-started/introduction) for more information.

## Important

### Translation Details

It's important to create a .env file with your i18nexus api key:

```md
    I18NEXUS_API_KEY=...
```

For more information there's a [video](https://www.youtube.com/watch?v=J8tnD2BWY28) explaining how to use the [i18nexus website](https://i18nexus.com/) to translate your sentences.

### Authentication Details