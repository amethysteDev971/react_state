import React,{useState} from 'react'
import './Listcontainer.css'
import ListTile from './ListTile/ListTile'
import HeaderListcontainer from './HeaderListcontainer/HeaderListcontainer'
import { useSelector, useDispatch } from 'react-redux'
import { createTask, deleteTask } from '../redux/slice/TaskSlice'


export default function Listcontainer() {

    
    // Ancien state
    // const [list, setList] = useState(
    //     [
    //         { 
    //           id: 1, 
    //           title: "Faire du sport", 
    //           description: "30 minutes de jogging ou une séance de yoga à la maison.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 2, 
    //           title: "Lire un livre", 
    //           description: "Lire 20 pages d’un roman ou d’un livre de développement personnel.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 3, 
    //           title: "Méditation", 
    //           description: "Prendre 10 minutes pour méditer ou faire des exercices de respiration.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 4, 
    //           title: "Appeler un proche", 
    //           description: "Prendre des nouvelles d’un membre de la famille ou d’un ami.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 5, 
    //           title: "Écrire dans un journal", 
    //           description: "Noter ses pensées, objectifs ou gratitude dans un carnet.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 6, 
    //           title: "Préparer un repas", 
    //           description: "Cuisiner un plat maison sain et équilibré.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 7, 
    //           title: "Faire les courses", 
    //           description: "Acheter les aliments nécessaires pour la semaine.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 8, 
    //           title: "Organiser le bureau", 
    //           description: "Ranger et nettoyer l’espace de travail.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 9, 
    //           title: "Planifier la semaine", 
    //           description: "Créer une liste de priorités pour la semaine à venir.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 10, 
    //           title: "Faire une lessive", 
    //           description: "Lancer une machine et plier le linge propre.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 11, 
    //           title: "Apprendre quelque chose de nouveau", 
    //           description: "Suivre un tutoriel ou une formation en ligne.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 12, 
    //           title: "Envoyer un email important", 
    //           description: "Écrire et envoyer un email professionnel ou personnel.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 13, 
    //           title: "Nettoyer la maison", 
    //           description: "Aspirer, épousseter ou laver les sols.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 14, 
    //           title: "Réviser un objectif personnel", 
    //           description: "Évaluer l’avancement d’un projet personnel ou professionnel.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 15, 
    //           title: "Faire un don ou aider quelqu’un", 
    //           description: "Participer à une action solidaire ou aider un voisin.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 16, 
    //           title: "Boire de l’eau", 
    //           description: "S’assurer de boire au moins 8 verres d’eau dans la journée.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 17, 
    //           title: "Mettre à jour le budget", 
    //           description: "Vérifier les dépenses et ajuster le budget mensuel.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 18, 
    //           title: "Planifier un rendez-vous", 
    //           description: "Prendre un rendez-vous médical ou professionnel.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 19, 
    //           title: "Écouter un podcast", 
    //           description: "Choisir un sujet inspirant ou éducatif et écouter un épisode.", 
    //           completed: false 
    //         },
    //         { 
    //           id: 20, 
    //           title: "Prendre une pause", 
    //           description: "Faire une pause de 15 minutes loin des écrans et des distractions.", 
    //           completed: false 
    //         }
    //     ]
    // );
    const dispatch = useDispatch();


    //* Recupère grace à useSelector le state avec TaskSlice l'objet list
    // const list = useSelector((state) => state.task.list)
    const {list} = useSelector((state) => state.task)

    const addTask = (titre) => {
      dispatch(createTask(titre))
    }

    const dispatchDeleteTask = (id) => {
      dispatch(deleteTask(id))
    }

  return (
    <section>
        <HeaderListcontainer addItem={addTask}/>
        <div className='tilecontainer'>
            {list.map((task) => { 
              return <ListTile item={task} deleteAction={dispatchDeleteTask}/> 
            })}   
        </div>
    </section>
  )
}
