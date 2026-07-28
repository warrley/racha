import { Router } from "express";
import * as authController from "../controllers/auth";
import * as playerController from "../controllers/player";
import * as sessionController from "../controllers/session";
import * as roundController from "../controllers/round";
import * as rankingController from "../controllers/ranking";
import * as ratingController from "../controllers/rating";
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

/**
 * @openapi
 * /auth/forgot-password:
 *   post:
 *     summary: Solicitar redefinição de senha (envia e-mail com link/token)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resposta genérica (não revela se o e-mail existe)
 */
mainRouter.post("/auth/forgot-password", authController.forgotPassword);

/**
 * @openapi
 * /auth/reset-password:
 *   post:
 *     summary: Redefinir senha usando o token recebido por e-mail
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Senha redefinida com sucesso
 *       400:
 *         description: Token inválido ou expirado
 */
mainRouter.post("/auth/reset-password", authController.resetPassword);

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
/**
 * @openapi
 * /players/me:
 *   get:
 *     summary: Perfil completo do jogador autenticado (sincroniza conta do Supabase Auth, se aplicável)
 *     tags: [Players]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil do jogador autenticado
 */
mainRouter.get("/players/me", privateRoute, playerController.getMe);

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

/**
 * @openapi
 * /sessions/{id}/join:
 *   post:
 *     summary: Confirmar presença do próprio jogador (auto-inscrição)
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
 *         description: Presença confirmada
 */
mainRouter.post("/sessions/:id/join", privateRoute, sessionController.join);

/**
 * @openapi
 * /sessions/{id}/leave:
 *   post:
 *     summary: Cancelar presença do próprio jogador (auto-cancelamento)
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
 *         description: Presença cancelada
 */
mainRouter.post("/sessions/:id/leave", privateRoute, sessionController.leave);

/**
 * @openapi
 * /sessions/{id}/participants/manual:
 *   post:
 *     summary: Adicionar qualquer jogador manualmente (admin)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userId]
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Jogador adicionado
 */
mainRouter.post("/sessions/:id/participants/manual", privateRoute, sessionController.addManual);

/**
 * @openapi
 * /sessions/{id}/participants/manual/{userId}:
 *   delete:
 *     summary: Remover qualquer participante manualmente (admin)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Participante removido
 */
mainRouter.delete("/sessions/:id/participants/manual/:userId", privateRoute, sessionController.removeManual);

// ──────────────────────────────────────────────
// Pagamentos via Pix (REQ 2.3)
// ──────────────────────────────────────────────

/**
 * @openapi
 * /sessions/{id}/payment-info:
 *   patch:
 *     summary: Configurar chave Pix e valor da cota da sessão (admin)
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pixKey:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Configuração de pagamento atualizada
 */
mainRouter.patch("/sessions/:id/payment-info", privateRoute, sessionController.updateSessionPaymentInfo);

/**
 * @openapi
 * /sessions/{id}/participants/{userId}/payment:
 *   patch:
 *     summary: Marcar pagamento de um participante como pago/pendente (admin)
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [isPaid]
 *             properties:
 *               isPaid:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Status de pagamento atualizado
 */
mainRouter.patch("/sessions/:id/participants/:userId/payment", privateRoute, sessionController.setPaymentStatus);

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

// ──────────────────────────────────────────────
// Ratings (Avaliações Pós-Jogo)
// ──────────────────────────────────────────────

/**
 * @openapi
 * /sessions/{id}/ratings:
 *   get:
 *     summary: Status de votação e notas da sessão para o jogador logado
 *     tags: [Ratings]
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
 *         description: Status da votação com lista de jogadores e notas enviadas
 */
mainRouter.get("/sessions/:id/ratings", privateRoute, ratingController.getRatingsStatus);

/**
 * @openapi
 * /sessions/{id}/ratings:
 *   post:
 *     summary: Enviar avaliações para outros jogadores da sessão
 *     tags: [Ratings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ratings]
 *             properties:
 *               ratings:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required: [evaluatedId, score]
 *                   properties:
 *                     evaluatedId:
 *                       type: string
 *                     score:
 *                       type: integer
 *                       minimum: 1
 *                       maximum: 10
 *     responses:
 *       200:
 *         description: Avaliações enviadas com sucesso
 */
mainRouter.post("/sessions/:id/ratings", privateRoute, ratingController.submitRatings);

/**
 * @openapi
 * /sessions/{id}/ratings/consolidate:
 *   post:
 *     summary: Encerrar votação e consolidar notas (admin)
 *     tags: [Ratings]
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
 *         description: Notas consolidadas com sucesso
 */
mainRouter.post("/sessions/:id/ratings/consolidate", privateRoute, ratingController.consolidateRatings);
