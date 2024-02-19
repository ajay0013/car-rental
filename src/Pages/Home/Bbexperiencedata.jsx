import electric from "../../Assets/electric.jpeg";
import delux from "../../Assets/delux.jpeg";
import pet from "../../Assets/pet.jpeg";
import convertible from "../../Assets/convertible.jpeg";
import allwheel from "../../Assets/allwheel.jpeg";
import classic from "../../Assets/classic.jpeg";



const description = [
  {
    id: "1",
    link: "International1",
    image: electric,
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="none" viewBox="0 0 48 48" aria-label="Electric" class="seo-pages-0" role="img" version="1.1"><path fill="#E0CAFF" d="M39.87 12.25H3.25v11.54h36.62V12.25Z"></path><path fill="#593CFB" fill-rule="evenodd" d="M39.87 36.58c-.69 0-1.25-.56-1.25-1.25V13.5H4.5v20.58h29.87a1.25 1.25 0 0 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25V12.25c0-.69.56-1.25 1.25-1.25h36.62c.69 0 1.25.56 1.25 1.25v4.27h3.71c.69 0 1.25.56 1.25 1.25v12.07c0 .69-.56 1.25-1.25 1.25h-3.71v4.24c0 .69-.56 1.25-1.25 1.25Zm1.25-7.99h2.46v-9.57h-2.46v9.57Z" clip-rule="evenodd"></path><path fill="#593CFB" d="M16.57 32.21c-.34 0-.69-.14-.93-.42a1.26 1.26 0 0 1 .1-1.77l5.59-4.99H18.5c-.52 0-.98-.32-1.17-.8-.18-.49-.05-1.03.34-1.38l8.04-7.17a1.248 1.248 0 0 1 1.66 1.86l-5.59 4.98h2.83c.52 0 .98.32 1.17.8.18.49.05 1.03-.34 1.38l-8.04 7.17c-.23.23-.53.34-.83.34Z"></path></svg>,
    name: "Electric",
  },
  {
    id: "2",
    link: "International2",
    image: delux,
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="none" viewBox="0 0 48 48" aria-label="Deluxe &amp; Super Deluxe " class="seo-pages-0" role="img" version="1.1"><path fill="#E0CAFF" d="M23.28 16.51c-1.46-1.45-3.3-4.34-3.92-10.26-.5 5.93-2.28 8.81-3.71 10.26-1.45 1.45-4.38 3.26-10.38 3.84 5.77.51 8.49 2.61 10.18 4.3 1.68 1.69 3.66 4.29 3.92 9.81.69-5.74 2.78-8.34 4.25-9.81 1.47-1.47 4.09-3.57 9.85-4.3-5.87-.57-8.73-2.38-10.19-3.84ZM36.87 31.1c-.87-.88-2.1-2.49-2.47-6.04-.3 3.55-1.48 5.17-2.35 6.04-.87.87-2.51 2.08-6.11 2.43 3.46.31 5.1 1.57 6.11 2.58 1.01 1.02 2.19 2.58 2.35 5.89.42-3.45 1.67-5.01 2.55-5.89.88-.88 2.45-2.14 5.91-2.58-3.52-.35-5.12-1.56-5.99-2.43Z"></path><path fill="#593CFB" fill-rule="evenodd" d="M19.31 35.71h.05c.63 0 1.16-.47 1.23-1.09.64-5.23 2.42-7.6 3.9-9.08 1.38-1.37 3.81-3.27 9.13-3.94a1.255 1.255 0 0 0-.04-2.49c-4.3-.42-7.56-1.62-9.42-3.48-1.87-1.87-3.1-5.16-3.56-9.51-.07-.64-.57-1.1-1.26-1.12-.64.01-1.17.5-1.23 1.15-.36 4.37-1.53 7.65-3.36 9.48-1.29 1.29-4.01 2.94-9.62 3.48a1.25 1.25 0 0 0 .01 2.49c5.33.48 7.83 2.36 9.41 3.94 1.63 1.62 3.32 3.96 3.56 8.98.03.65.55 1.17 1.2 1.19Zm-3-11.94c-1.13-1.13-2.65-2.4-5.03-3.34 2.19-.73 3.94-1.74 5.24-3.03 1.23-1.23 2.2-2.89 2.9-4.94.73 2.04 1.72 3.69 2.97 4.94 1.33 1.33 3.11 2.36 5.34 3.09-2.48.99-3.99 2.26-5.01 3.28-1.01 1.01-2.24 2.48-3.22 4.88-.86-2.29-2.08-3.77-3.19-4.88ZM34.35 43.24h.05c.63 0 1.17-.47 1.23-1.1.36-2.98 1.36-4.32 2.19-5.15.83-.83 2.18-1.84 5.18-2.22a1.255 1.255 0 0 0-.04-2.49c-3.14-.31-4.49-1.33-5.23-2.07-.74-.75-1.78-2.11-2.11-5.29a1.24 1.24 0 0 0-1.24-1.12h-.01c-.64.01-1.18.51-1.23 1.15-.3 3.57-1.57 4.84-1.99 5.26-.42.43-1.71 1.72-5.34 2.07a1.25 1.25 0 0 0 .01 2.49c3.04.27 4.45 1.33 5.34 2.22.91.91 1.85 2.22 1.99 5.06.03.65.55 1.17 1.2 1.19Zm-1.42-8.02a9.117 9.117 0 0 0-2.22-1.66 8.34 8.34 0 0 0 2.22-1.58c.61-.61 1.11-1.31 1.52-2.12.42.81.93 1.51 1.54 2.12.65.65 1.4 1.18 2.27 1.61a9.043 9.043 0 0 0-2.19 1.63c-.49.48-1.05 1.13-1.57 2.08-.48-.9-1.04-1.55-1.57-2.08Z" clip-rule="evenodd"></path></svg>,
    name: "Delux & Super Delux",
  },
  {
    id: "3",
    link: "International3",
    image: pet,
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="none" viewBox="0 0 48 48" aria-label="Pet-friendly" class="seo-pages-0" role="img" version="1.1"><path fill="#E0CAFF" d="M33.67 12.26c-.13 3.15-1.88 5.7-4.08 5.7-2.63 0-3.95-3.25-3.84-6.01.13-3.28 1.94-5.74 4.19-5.7 2.57.1 3.84 3.31 3.73 6.01ZM22.45 11.95c.11 2.81-1.23 6.01-3.84 6.01-2.2 0-3.95-2.55-4.08-5.7-.11-2.76 1.19-5.91 3.73-6.01 2.25-.03 4.06 2.42 4.19 5.7ZM13.83 22.32c0 3.523-1.92 6.38-4.29 6.38s-4.29-2.857-4.29-6.38c0-3.524 1.92-6.38 4.29-6.38s4.29 2.856 4.29 6.38ZM38.64 28.7c2.37 0 4.29-2.857 4.29-6.38 0-3.524-1.92-6.38-4.29-6.38s-4.29 2.856-4.29 6.38c0 3.523 1.92 6.38 4.29 6.38Z"></path><path fill="#593CFB" fill-rule="evenodd" d="M18.61 19.21c-2.88 0-5.17-2.97-5.33-6.9-.13-3.49 1.67-7.18 4.93-7.31 2.99-.06 5.33 2.92 5.49 6.9.09 2.31-.65 4.58-1.95 5.93-.86.9-1.95 1.38-3.14 1.38ZM18.3 7.5h-.03c-1.59.06-2.58 2.49-2.5 4.71.1 2.48 1.37 4.5 2.83 4.5.5 0 .94-.2 1.34-.61.81-.85 1.32-2.49 1.25-4.1-.09-2.53-1.36-4.5-2.89-4.5ZM9.54 29.95C6.43 29.95 4 26.6 4 22.32c0-4.28 2.43-7.62 5.54-7.62s5.54 3.35 5.54 7.63c0 4.28-2.44 7.62-5.54 7.62Zm0-12.75c-1.65 0-3.04 2.35-3.04 5.13s1.39 5.13 3.04 5.13c1.65 0 3.04-2.35 3.04-5.13s-1.4-5.13-3.04-5.13ZM33.1 22.32c0 4.28 2.43 7.63 5.54 7.63 3.1 0 5.54-3.35 5.54-7.63 0-4.28-2.44-7.63-5.54-7.63-3.11 0-5.54 3.35-5.54 7.63Zm2.5.01c0-2.78 1.39-5.13 3.04-5.13 1.64 0 3.04 2.35 3.04 5.13s-1.39 5.13-3.04 5.13c-1.65 0-3.04-2.35-3.04-5.13ZM29.59 19.21c-1.19 0-2.27-.48-3.14-1.38-1.3-1.35-2.04-3.62-1.95-5.93.15-3.95 2.47-6.9 5.39-6.9h.07c3.29.13 5.09 3.82 4.96 7.31-.16 3.94-2.45 6.9-5.33 6.9Zm.27-11.71C28.37 7.5 27.1 9.47 27 12c-.06 1.6.44 3.25 1.26 4.1.39.41.83.61 1.33.61 1.46 0 2.73-2.02 2.83-4.5.08-1.93-.76-4.64-2.53-4.71h-.03Z" clip-rule="evenodd"></path><path fill="#593CFB" d="M25.6 42.4c.09.63.63 1.08 1.24 1.08.05 0 .11 0 .18-.03 5.83-.8 9.45-3.78 9.45-7.78 0-3.188-1.935-5.234-3.492-6.88l-.018-.02a.902.902 0 0 0-.05-.045c-.017-.015-.035-.03-.05-.045a5.893 5.893 0 0 1-1.64-2.3c-.73-3.49-2.98-7.19-7.13-7.19-4.16 0-6.4 3.7-7.13 7.2-.35.89-.91 1.68-1.64 2.3-.04.03-.07.06-.1.09l-.004.004c-1.559 1.65-3.506 3.708-3.506 6.896 0 4.12 3.53 6.96 9.69 7.78.68.1 1.31-.39 1.4-1.07.1-.68-.39-1.31-1.07-1.4-2.81-.38-7.52-1.57-7.52-5.31 0-2.17 1.41-3.68 2.78-5.13a8.254 8.254 0 0 0 2.34-3.37c.03-.06.05-.12.06-.19.18-.88 1.23-5.29 4.7-5.29s4.52 4.41 4.7 5.29c.01.06.03.13.05.19.48 1.3 1.29 2.46 2.34 3.37 1.37 1.45 2.78 2.96 2.78 5.13 0 3.18-3.76 4.83-7.29 5.31-.69.1-1.16.73-1.07 1.41Z"></path></svg>,
    name: "Per-friendly",
  },
  {
    id: "4",
    link: "International4",
    image: convertible,
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="none" viewBox="0 0 48 48" aria-label="Convertibles" class="seo-pages-0" role="img" version="1.1"><path fill="#E0CAFF" d="m36.4 30.2-12.1-1.3H4.2v10h21.3c.7-1.3 2.2-2.3 3.8-2.3 1.6 0 3.1.9 3.8 2.3h6.5v-5.1c.1-1.9-1.3-3.5-3.2-3.6Z"></path><path fill="#593CFB" d="M34.8 6.7c-.6 0-1.1-.5-1.1-1.1V3.1c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v2.4c.1.7-.4 1.2-1.1 1.2Z"></path><path fill="#593CFB" fill-rule="evenodd" d="M34.9 17.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2.1 4.5-4.5 4.5Zm0-6.8c-1.2 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3Z" clip-rule="evenodd"></path><path fill="#593CFB" d="M33.8 22.6c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-2.4c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.4ZM26.4 18.9c-.4 0-.8-.2-1-.6-.3-.5-.1-1.2.4-1.5l2.1-1.2c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.1 1.2c-.1.1-.3.2-.5.2ZM40.2 9.7c.2.4.6.6 1 .6.2 0 .3 0 .5-.2l2.1-1.2c.5-.3.7-1 .4-1.5-.3-.5-1-.7-1.5-.4l-2.1 1.2c-.5.3-.7 1-.4 1.5ZM43.3 18.8c-.2 0-.4 0-.6-.2l-2.1-1.2c-.5-.3-.7-1-.4-1.5.3-.5 1-.7 1.5-.4l2.1 1.2c.5.3.7 1 .4 1.5-.1.4-.5.6-.9.6ZM27.9 10.1c.2.2.4.2.6.2.4 0 .8-.2 1-.5.3-.5.1-1.2-.4-1.5L27 7.1c-.5-.3-1.2-.1-1.5.4-.3.5-.1 1.2.4 1.5l2 1.1Z"></path><path fill="#593CFB" fill-rule="evenodd" d="M34.944 40.2H39.7c.7 0 1.3-.6 1.4-1.3v-5.1c0-2.5-1.9-4.6-4.4-4.9l-11.8-1.2-10.2-8.1c-.6-.4-1.4-.3-1.8.2-.4.6-.3 1.4.2 1.8L23.6 30c.1.2.4.3.6.3l12.1 1.3c1.3.1 2.2 1.1 2.2 2.4v3.8h-4.3a.956.956 0 0 0-.187.019A5.587 5.587 0 0 0 29.4 35.4c-1.909 0-3.59.948-4.6 2.4H4.3c-.6 0-1.2.6-1.2 1.2s.5 1.2 1.2 1.2h19.556a5.687 5.687 0 0 0-.056.8c0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-.272-.02-.539-.056-.8ZM26.3 41c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1Z" clip-rule="evenodd"></path><path fill="#593CFB" d="M15.5 30.1H4.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h11.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2Z"></path></svg>,
    name: "Convertibles",
  },
  {
    id: "5",
    link: "International5",
    image: allwheel,
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="none" viewBox="0 0 48 48" aria-label="All-wheel drive" class="seo-pages-0" role="img" version="1.1"><path fill="#E0CAFF" d="m21.218 5.757 3.905-2.506 5.697 8.88-3.905 2.505-5.697-8.88ZM5.248 16l3.905-2.506 5.697 8.879-3.905 2.505L5.248 16ZM37.701 22.863l-3.905 2.506 5.697 8.879 3.905-2.506-5.697-8.879ZM17.834 35.606l3.905-2.505 5.697 8.879-3.904 2.505-5.698-8.879Z"></path><path fill="#593CFB" fill-rule="evenodd" d="M25.86 15.31a1.234 1.234 0 0 0 1.72.38l3.91-2.51c.58-.38.75-1.15.38-1.73l-5.7-8.88c-.17-.28-.46-.47-.78-.55a1.25 1.25 0 0 0-.94.17L20.54 4.7a1.26 1.26 0 0 0-.38 1.73l2.173 3.385-9.94 6.38-2.173-3.385a1.25 1.25 0 0 0-1.73-.38l-3.91 2.51a1.25 1.25 0 0 0-.38 1.73l5.7 8.88a1.246 1.246 0 0 0 1.73.38l3.91-2.51c.58-.38.75-1.15.38-1.73l-2.177-3.392 3.921-2.514 3.293 5.09A4.52 4.52 0 0 0 19.93 22.9c-.26 1.17-.04 2.38.61 3.39a4.477 4.477 0 0 0 2.83 1.97 4.41 4.41 0 0 0 2.24-.075L28.89 33.3l-3.921 2.516-2.18-3.396c-.38-.59-1.15-.76-1.73-.38l-3.91 2.51a1.26 1.26 0 0 0-.38 1.73l5.7 8.88a1.271 1.271 0 0 0 1.06.58c.24 0 .48-.06.67-.2l3.91-2.51c.58-.38.75-1.15.38-1.73l-2.167-3.376 9.955-6.389 2.172 3.385a1.246 1.246 0 0 0 1.73.38l3.91-2.51a1.25 1.25 0 0 0 .38-1.73l-5.7-8.88a1.25 1.25 0 0 0-1.73-.38l-3.91 2.51a1.26 1.26 0 0 0-.38 1.73l2.174 3.387L31 31.947l-3.282-5.116a4.52 4.52 0 0 0 1.013-2.011c.26-1.17.04-2.38-.61-3.39a4.477 4.477 0 0 0-2.83-1.97 4.42 4.42 0 0 0-2.22.075l-3.3-5.102 3.916-2.51 2.174 3.387Zm-.632-5.614 2.062 3.214 1.8-1.16-4.35-6.78-1.8 1.16 2.059 3.21a1.298 1.298 0 0 1 .229.356ZM6.98 16.38l4.35 6.78 1.8-1.16-4.35-6.78-1.8 1.16Zm32.9 16.15-2.096-3.267a1.279 1.279 0 0 0-.167-.26L35.53 25.75l1.8-1.16 4.35 6.78-1.8 1.16ZM23.91 42.77l-4.35-6.78 1.8-1.16 4.35 6.78-1.8 1.16Zm-.67-20.58c.34-.22.71-.32 1.08-.32a2.004 2.004 0 1 1-1.08.32Z" clip-rule="evenodd"></path></svg>,
    name: "All-wheel drive",
  },
  {
    id: "6",
    link: "International6",
    image: classic,
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="none" viewBox="0 0 48 48" aria-label="Classic cars" class="seo-pages-0" role="img" version="1.1"><path fill="#E0CAFF" d="M16.76 6.4s5.25.54 7.1 7l.01-.03v28.29l-.01.01S5.11 28.35 5.26 16.29C5.4 4.23 16.76 6.4 16.76 6.4Z"></path><path fill="#593CFB" d="M23.85 42.92c-.25 0-.5-.07-.72-.23C22.34 42.13 3.85 28.84 4 16.27c.05-4.03 1.28-7.06 3.65-9 3.67-2.99 8.71-2.21 9.29-2.11.56.07 4.5.73 6.92 5 2.42-4.27 6.36-4.93 6.92-5 .58-.1 5.62-.89 9.29 2.11 2.37 1.94 3.6 4.96 3.65 9 .1 7.9-7.13 16.1-13.21 21.58-.51.46-1.3.42-1.77-.09-.46-.51-.42-1.3.09-1.77 4.66-4.21 12.48-12.36 12.39-19.7-.04-3.26-.96-5.64-2.73-7.09-2.92-2.38-7.24-1.59-7.29-1.58-.04.01-.07.01-.11.02-.16.02-4.19.55-5.87 5.6l-.19.56c-.18.52-.63.86-1.21.84a1.24 1.24 0 0 1-1.17-.91c-1.59-5.57-5.98-6.09-6.02-6.1-.04 0-.07-.01-.11-.02-.04-.01-4.4-.79-7.3 1.59-1.76 1.47-2.68 3.85-2.72 7.1-.14 11.28 17.89 24.22 18.08 24.35.56.4.7 1.18.29 1.74-.24.35-.63.53-1.02.53Z"></path></svg>,
    name: "Classic cars",
  }
];

export default description;
