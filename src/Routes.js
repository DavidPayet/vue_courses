import Accueil from './components/Accueil.vue'
import AppelAPI from "./components/AppelAPI.vue";
import Contenu from "./components/FirstContent/Contenu.vue";
import Formulaire from "./components/Formulaire.vue";
import ValeurPrimitivesEtRefs from "./components/ValeursPrimitivesEtRefs/ValeursPrimitivesEtRefs.vue";
import OngletsContenu from "./components/OngletsEtModale/OngletsContenu.vue";
import TodoList from "./components/TodoList/TodoList.vue";
import Post from './components/Blog/Post.vue';
import Blog from './components/Blog/Blog.vue';

export default [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/contenu', name: 'Contenu', component: Contenu },
  { path: '/val-primitives-et-refs', name: 'ValeurPrimitivesEtRefs', component: ValeurPrimitivesEtRefs },
  { path: '/onglets', name: 'OngletsContenuVue', component: OngletsContenu },
  { path: '/appel-api', name: 'AppelAPI', component: AppelAPI },
  { path: '/formulaire', name: 'Formulaire', component: Formulaire },
  { path: '/todo-list', name: 'TodoList', component: TodoList },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blogpost/:id', name: 'Post', component: Post }
]