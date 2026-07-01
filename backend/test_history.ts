import { prisma } from "./src/utils/prisma";

async function main() {
    try {
        const playerTeams = await prisma.teamPlayer.findMany({
            where: { playerId: "some-id" },
            include: {
                team: {
                    include: {
                        session: true
                    }
                }
            },
            // Try order by
            orderBy: { team: { session: { date: "desc" } } }
        });
        console.log("Success");
    } catch (e: any) {
        console.error("Error:", e.message);
    }
}
main();
