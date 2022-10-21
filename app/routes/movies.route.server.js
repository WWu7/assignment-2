import { Router } from "express";

import { DisplayMovieList, DisplayMoviesAddPage } from "../controllers/movies.controller.server.js";

const router = Router();

router.get('/movie-list', DisplayMovieList);
router.get('/movie-add', DisplayMoviesAddPage);

export default router;