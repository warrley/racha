import { Router } from "express";
import * as authController from "../controllers/auth";
import * as playerController from "../controllers/player";
import * as sessionController from "../controllers/session";
import * as roundController from "../controllers/round";
import * as rankingController from "../controllers/ranking";
import { privateRoute } from "../middleware/privateRoute";

export const mainRouter = Router();

// ──────────────────────────────────────────────
// Auth.0
// ──────────────────────────────────────────────

/**
 * @openapi
 * /auth/signup:
 *   post:
 *     summary: Criar uma nova conta
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/AuthSignup"
 *     responses:
 *       201:
 *         description: Conta criada com sucesso
 */
mainRouter.post("/auth/signup", authController.signup);

/**
 * @openapi
 * /auth/signin:
 *   post:
 *     summary: Fazer login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/AuthSignin"
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 */
mainRouter.post("/auth/signin", authController.signin);

// ──────────────────────────────────────────────
// Players
// ──────────────────────────────────────────────

/**
 * @openapi
 * /players:
 *   get:
 *     summary: Listar todos os jogadores
 *     tags: [Players]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de jogadores
 */
mainRouter.get("/players", privateRoute, playerController.getPlayers);

/**
 * @openapi
 * /players/{id}:
 *   get:
 *     summary: Perfil completo do jogador com estatísticas
 *     tags: [Players]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Perfil do jogador
 */
mainRouter.get("/players/:id", privateRoute, playerController.getPlayer);

/**
 * @openapi
 * /players:
 *   put:
 *     summary: Atualizar próprio perfil
 *     tags: [Players]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil atualizado
 */
mainRouter.put("/players", privateRoute, playerController.updatePlayer);

/**
 * @openapi
 * /players/{id}/history:
 *   get:
 *     summary: Histórico de sessões do jogador
 *     tags: [Players]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Histórico paginado
 */
mainRouter.get("/players/:id/history", privateRoute, playerController.getHistory);

// ──────────────────────────────────────────────
// Sessions
// ──────────────────────────────────────────────

/**
 * @openapi
 * /sessions:
 *   post:
 *     summary: Criar sessão da semana (admin)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Sessão criada
 */
mainRouter.post("/sessions", privateRoute, sessionController.create);

/**
 * @openapi
 * /sessions:
 *   get:
 *     summary: Listar histórico de sessões
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de sessões paginada
 */
mainRouter.get("/sessions", privateRoute, sessionController.getSessions);

/**
 * @openapi
 * /sessions/{id}:
 *   get:
 *     summary: Detalhes da sessão (times, rounds, gols)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes completos da sessão
 */
mainRouter.get("/sessions/:id", privateRoute, sessionController.getSession);

/**
 * @openapi
 * /sessions/{id}/draw:
 *   post:
 *     summary: Sortear 3 times (admin)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Times sorteados
 */
mainRouter.post("/sessions/:id/draw", privateRoute, sessionController.draw);

/**
 * @openapi
 * /sessions/{id}/start:
 *   post:
 *     summary: Iniciar sessão (admin)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sessão iniciada
 */
mainRouter.post("/sessions/:id/start", privateRoute, sessionController.start);

/**
 * @openapi
 * /sessions/{id}/close:
 *   post:
 *     summary: Fechar sessão e calcular ratings (admin)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sessão fechada com resultados calculados
 */
mainRouter.post("/sessions/:id/close", privateRoute, sessionController.close);

// ──────────────────────────────────────────────
// Rounds (qualquer jogador logado pode registrar)
// ──────────────────────────────────────────────

/**
 * @openapi
 * /sessions/{sessionId}/rounds:
 *   post:
 *     summary: Registrar resultado de um round de 7 minutos
 *     tags: [Rounds]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Round registrado
 */
mainRouter.post("/sessions/:sessionId/rounds", privateRoute, roundController.create);

/**
 * @openapi
 * /sessions/{sessionId}/rounds:
 *   get:
 *     summary: Listar rounds de uma sessão
 *     tags: [Rounds]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de rounds
 */
mainRouter.get("/sessions/:sessionId/rounds", privateRoute, roundController.getRounds);

/**
 * @swagger
 * /sessions/{sessionId}/rounds/{roundId}:
 *   delete:
 *     summary: Excluir um round
 *     tags: [Rounds]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: roundId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Round excluído
 */
mainRouter.delete("/sessions/:sessionId/rounds/:roundId", privateRoute, roundController.removeRound);

// ──────────────────────────────────────────────
// Ranking & Stats
// ──────────────────────────────────────────────

/**
 * @openapi
 * /ranking:
 *   get:
 *     summary: Ranking geral por rating
 *     tags: [Ranking]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Ranking dos jogadores
 */
mainRouter.get("/ranking", privateRoute, rankingController.ranking);

/**
 * @openapi
 * /stats/top-scorers:
 *   get:
 *     summary: Artilheiros all-time
 *     tags: [Ranking]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Top artilheiros
 */
mainRouter.get("/stats/top-scorers", privateRoute, rankingController.topScorers);
