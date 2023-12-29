## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


# RECORD YOUR PROGRESS
  > 2023-12-27
    1. What kinds of rendering UI components? [parallel, sequence, stream]
    2. How to uses paraller, sequence and stream?
    3. What's different of paraller , sequence and stream?
    4. How to implement search function using URL?
    5. continued URL : https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
    6. next day i will do pagenation and search function implementation
    
  > 2023-12-28
    > Debouncing 
      - Reference Page URL : https://nextjs.org/learn/dashboard-app/adding-search-and-pagination#best-practice-debouncing
      - Debouncing is a programing prcatice that limit the rate which a function can fire.
      - Debouncing Works : Trigger Event, Wait, Execution
      - Trigger Event : When an event that should be debounced occurs, a timer starts.
      - Wait : If a new event occurs before the timer expires, the timer is reset
      - Execution : If the timer reaches the end of its countdown, the debounced function is executed.

    > Adding pagination
      - Reference Page URL : https://nextjs.org/learn/dashboard-app/adding-search-and-pagination#best-practice-debouncing
      - 
    > CRUD
      - Reference Page URL : https://nextjs.org/learn/dashboard-app/mutating-data#nextjs-with-server-actions

    > library of zod
      - Reference Page URL : https://nextjs.org/learn/dashboard-app/mutating-data#nextjs-with-server-actions
      - Why use? : I want to ensure it's in the correct format and with the correct types.
      - It's usually good for eliminate JavaScript floating-point errors and ensure greater accuracy.
    
    > clear cache after updating data - use library [revalidatePath]
      - revalidatePath is from 'nest/cache' that library will be clear trigger and caches in that functions
  > 2023-12-29
    > CRUD (direct control of Database)
      > clear client-side router cache - use revalidatePath
        - revalidatePath clear this cache and trigger a new   request to the server.
      > What did i learn in CRUD chapter.
        - I learned how to use Sever Actions to mutate data. I  also learned how to use the 'revalidatePath' API to  revalidate the Next.js cache and 'redirect' to redirect  the user to a new page.
      > If i want to learn additional about 'security with  server actions' that i need to check of this url : https://  nextjs.org/blog/security-nextjs-server-components-actions
      > Database direct handling CRUD learn page url : https:// nextjs.org/learn/dashboard-app/  mutating-data#nextjs-with-server-actions

