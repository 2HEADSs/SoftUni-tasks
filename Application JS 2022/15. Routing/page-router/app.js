import page from './node_modules/page/page.mjs';
import { homeView } from "./views/home.js";
import { articleView } from "./views/articles.js";
import { aboutView } from './views/about.js'
import { articleDetailsView } from './views/articleDetailsView.js'
import {createView} from './views/create.js'


page('/home', homeView);
page('/articles', articleView);
page('/about', aboutView);
page('/create', createView);
page('/articles/:articleId', articleDetailsView);

page.start();