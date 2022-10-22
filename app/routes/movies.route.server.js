import { Router } from "express";

import { DisplayMovieList, DisplayMoviesAddPage, ProcessMoviesAddPage } from "../controllers/movies.controller.server.js";

const router = Router();

router.get('/movie-list', DisplayMovieList);
router.get('/movie-add', DisplayMoviesAddPage);
router.post('/movie-add', ProcessMoviesAddPage);

export default router;