<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
    <h1 align="center">Next.js</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/next">
    <img alt="" src="https://img.shields.io/npm/v/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Join the community on GitHub" href="https://github.com/vercel/next.js/discussions">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=Next.js&labelColor=000000&logoWidth=20">
  </a>
</p>


## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.
Want to get more source of this course, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


# RECORD YOUR PROGRESS

  ## 2023-12-27

    - What kinds of rendering UI components? [parallel, sequence, stream]2. How to uses paraller, sequence and stream?
    - What's different of paraller , sequence and stream?
    - How to implement search function using URL?
    - continued URL : https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
    - next day i will do pagenation and search function implementation

  ## 2023-12-28

  ### Debouncing 
     
      - Reference Page URL : https://nextjs.org/learn/dashboard-app/adding-search-and-pagination#best-practice-debouncing
      - Debouncing is a programing prcatice that limit the rate which a function can fire.
      - Debouncing Works : Trigger Event, Wait, Execution
      - Trigger Event : When an event that should be debounced occurs, a timer starts.
      - Wait : If a new event occurs before the timer expires, the timer is reset
      - Execution : If the timer reaches the end of its countdown, the debounced function is executed.

  ### Adding pagination
    
      - Reference Page URL : https://nextjs.org/learn/dashboard-app/adding-search-and-pagination#best-practice-debouncing

  ### CRUD

      - Reference Page URL : https://nextjs.org/learn/dashboard-app/mutating-data#nextjs-with-server-actions

  ### library of zod

      - Reference Page URL : https://nextjs.org/learn/dashboard-app/mutating-data#nextjs-with-server-actions
      - Why use? : I want to ensure it's in the correct format and with the correct types.
      - It's usually good for eliminate JavaScript floating-point errors and ensure greater accuracy.
    
  ### clear cache after updating data - use library [revalidatePath]

      - revalidatePath is from 'nest/cache' that library will be clear trigger and caches in that functions

  ## 2023-12-29

  ### CRUD (direct control of Database)

  #### clear client-side router cache - use revalidatePath

        - revalidatePath clear this cache and trigger a new   request to the server.

  #### What did i learn in CRUD chapter.

        - I learned how to use Sever Actions to mutate data. I  also learned how to use the 'revalidatePath' API to  revalidate the Next.js cache and 'redirect' to redirect  the user to a new page.

  #### If i want to learn additional about 'security with  server actions' that i need to check of this url : https://  nextjs.org/blog/security-nextjs-server-components-actions

  #### Database direct handling CRUD learn page url : https:// nextjs.org/learn/dashboard-app/  mutating-data#nextjs-with-server-actions

  ## 2024-01-02

  ### pull specific directory in repository in github (Except other things)

      - $ git fetch
      - $ git checkout {branchName} -- {path}
      - [EXAMPLE] git checkout origin/master -- README.md

  ### What is accessibility

      - Reference URL : https://nextjs.org/learn/dashboard-app/improving-accessibility
      - Accessibility refers to designing and implementing web applications that everyone can use.

  ### Whit is lint ? 

      - The warning would show up in the built logs.


  ## 2024-01-03

  ### Authentification vs. Authorization

      - Referenct URL : https://nextjs.org/learn/dashboard-app/adding-authentication#authentication-vs-authorization
      - Authentification : Proving your identity
      - Authorization : Once a user's identity is confirmed, authorization decides what parts of the application they are allowed to use.
      - So, authentification check who you are, and authorization determines what you can do ro access the application.

  ### next-auth@beta library implement of complexity involved in managing sessions.

  ### How to get the encrypt cookies, ensuring the security of user sessions?

      - $ openssl rand -base64 32

  ### Auth and Request

      - Auth property contains user's session.
      - Request property contains the incoming request.
  
  ### What is the advantage of employing Middleware 

      - The protected routes will not even start rendering until the Middleware verifies the authentication, enhancing both the security and performance of your application. (미들웨어의 승인 없이 랜더링 방지, 보안과 퍼포먼스 향상)
  
  ### Password hashing

  ### Login providers

      - https://authjs.dev/getting-started/providers

  ## [2024-01-04]

  ### SEO (Search Engine Optimization)
  
      - https://searchengineland.com/guide/what-is-seo

  ### What is Metadata ? 
  
      - Referenct URL : https://nextjs.org/learn/dashboard-app/adding-metadata
      - Metadata is working behind of the front pages, That's enhancing of the SEO.

  ### Type of MetaData
  
      - Title Metadata
      - Description Metadata
      - Keyword Metadata
      - Open Graph Metadata
      - Favicon Metadata
  
  ### Two way of can be used to define my application metadata. (I have the flexibility to use these for static metadata, or i can generate them programmtically within my project)

      1. Config-based : static metadata object or a dynamic
      2. File-based : range of special files that are specifically used for metadata purpose.

  ### What is OG image ? 

        - OG image is Open Graph image.
        - The image that is displayed on social media accounts when you or someone else post a link to an article or a video from your website.

  ### Clear Ttutorial of Next 

        - resources to continue exploring Next.js links : https://nextjs.org/learn/dashboard-app/next-steps
        
