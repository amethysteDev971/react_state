import { createSlice } from '@reduxjs/toolkit';

//! ################## Etat initial
const initialState = {
  list:[
    { 
      id: 1, 
      title: "Faire du sport", 
      description: "30 minutes de jogging ou une séance de yoga à la maison.", 
      completed: false 
    },
    { 
      id: 2, 
      title: "Lire un livre", 
      description: "Lire 20 pages d’un roman ou d’un livre de développement personnel.", 
      completed: false 
    },
    { 
      id: 3, 
      title: "Méditation", 
      description: "Prendre 10 minutes pour méditer ou faire des exercices de respiration.", 
      completed: false 
    },
    { 
      id: 4, 
      title: "Appeler un proche", 
      description: "Prendre des nouvelles d’un membre de la famille ou d’un ami.", 
      completed: false 
    },
    { 
      id: 5, 
      title: "Écrire dans un journal", 
      description: "Noter ses pensées, objectifs ou gratitude dans un carnet.", 
      completed: false 
    },
    { 
      id: 6, 
      title: "Préparer un repas", 
      description: "Cuisiner un plat maison sain et équilibré.", 
      completed: false 
    },
    { 
      id: 7, 
      title: "Faire les courses", 
      description: "Acheter les aliments nécessaires pour la semaine.", 
      completed: false 
    },
    { 
      id: 8, 
      title: "Organiser le bureau", 
      description: "Ranger et nettoyer l’espace de travail.", 
      completed: false 
    },
    { 
      id: 9, 
      title: "Planifier la semaine", 
      description: "Créer une liste de priorités pour la semaine à venir.", 
      completed: false 
    },
    { 
      id: 10, 
      title: "Faire une lessive", 
      description: "Lancer une machine et plier le linge propre.", 
      completed: false 
    },
    { 
      id: 11, 
      title: "Apprendre quelque chose de nouveau", 
      description: "Suivre un tutoriel ou une formation en ligne.", 
      completed: false 
    },
    { 
      id: 12, 
      title: "Envoyer un email important", 
      description: "Écrire et envoyer un email professionnel ou personnel.", 
      completed: false 
    },
    { 
      id: 13, 
      title: "Nettoyer la maison", 
      description: "Aspirer, épousseter ou laver les sols.", 
      completed: false 
    },
    { 
      id: 14, 
      title: "Réviser un objectif personnel", 
      description: "Évaluer l’avancement d’un projet personnel ou professionnel.", 
      completed: false 
    },
    { 
      id: 15, 
      title: "Faire un don ou aider quelqu’un", 
      description: "Participer à une action solidaire ou aider un voisin.", 
      completed: false 
    },
    { 
      id: 16, 
      title: "Boire de l’eau", 
      description: "S’assurer de boire au moins 8 verres d’eau dans la journée.", 
      completed: false 
    },
    { 
      id: 17, 
      title: "Mettre à jour le budget", 
      description: "Vérifier les dépenses et ajuster le budget mensuel.", 
      completed: false 
    },
    { 
      id: 18, 
      title: "Planifier un rendez-vous", 
      description: "Prendre un rendez-vous médical ou professionnel.", 
      completed: false 
    },
    { 
      id: 19, 
      title: "Écouter un podcast", 
      description: "Choisir un sujet inspirant ou éducatif et écouter un épisode.", 
      completed: false 
    },
    { 
      id: 20, 
      title: "Prendre une pause", 
      description: "Faire une pause de 15 minutes loin des écrans et des distractions.", 
      completed: false 
    }
]
};


//! ############## slice - methode pour modifier le state
// Payload => datas que l'on passe à la function
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    createTask: (state, {payload}) => {
        console.log('payload =>', payload)
        const title = payload
        console.log('titre =>', title)
        const {list} = state
        const newTask = {
            id: list.reduce((max, task) => Math.max(max, task.id),0) +1,
            title,
            description: "lorem ipsum",
            completed: false
        }
        console.log('list =>', list)
        console.log('newTask =>', newTask)
        console.log('state.list =>', state.list)
        state.list = [newTask, ...state.list]
    },
    readTask: (state, {payload}) => {},
    updateTask: (state, {payload}) => {},
    deleteTask: (state, {payload}) => {
        const id = payload
        console.log('id => ', id)
        const {list} = state
        const newlist = list.filter((task) => {
            return task.id !==id
        });
        console.log('newlist => ', newlist)
        state.list = newlist
    },
  },
});

export const {createTask,readTask,updateTask,deleteTask} = taskSlice.actions;
export default taskSlice.reducer;
