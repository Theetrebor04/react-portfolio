import {v4 as uuidv4} from "uuid";

export const projects = [
    {
        id: uuidv4(),
        title: "bite",
        desc: "Website to find nearby places to eat. Includes a detailed description of the restaurant, directions and you can even check the weather!",
        github: "https://github.com/nickovalles/bite",
        demo: "https://nickovalles.github.io/bite/",
        image: "./images/project-1.jpeg",
    },
    {
        id: uuidv4(),
        title: "Sugar Rush Soda Shop",
        desc: "Rebuilt a local soda shops website to feature an interactive menu that you can sort by flavor of drinks that interest you for a unique experience.",
        github: "https://github.com/jleatham78/sugar-rush",
        demo: "https://blooming-harbor-63482.herokuapp.com/",
        image: "./images/project-2.jpeg",
    },
    {
        id: uuidv4(),
        title: "Simplifam",
        desc: "Application used to track your families every need. Interactive calendar to plan activites, a grocery shopping list and a place to leave reminder notes.",
        github: "https://github.com/sgenesi/simpli-fam",
        demo: " https://simplifam.herokuapp.com/",
        image: "./images/project-3.jpeg",
    },
    {
        id: uuidv4(),
        title: "Budget Tracker",
        desc: "Track your personal finances both on and offline.",
        github: "https://github.com/Theetrebor04/Budget-Tracker",
        demo: "https://quiet-forest-99137.herokuapp.com/",
        image: "./images/project-4.jpeg",
    },
    {
        id: uuidv4(),
        title: "Note Taker",
        desc: "Never have a piece of paper? Take notes here.",
        github: "https://github.com/Theetrebor04/Note-Taker",
        demo: " https://stormy-garden-03838.herokuapp.com/",
        image: "./images/project-5.jpeg",
    },
    {
        id: uuidv4(),
        title: "Work Day Scheduler",
        desc: "Stay on task with this easy to use scheduler.",
        github: " https://github.com/Theetrebor04/Work-Day-Scheduler",
        demo: " https://theetrebor04.github.io/Work-Day-Scheduler/",
        image: "./images/project-6.jpeg",
    },

]