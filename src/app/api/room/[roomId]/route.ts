import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import { z } from "zod";

const routeContextSchema = z.object({
  params: z.object({
    roomId: z.string(),
  }),
});

export async function GET(
  req: Request,
  context: z.infer<typeof routeContextSchema>,
) {
  try {
    const { params } = routeContextSchema.parse(context);
    const roomId = +params.roomId;

    const room = await prisma.room.findUnique({
      where: {
        id: roomId,
      },
      include: {
        players: true,
      },
    });

    if (!room) {
      return createApiResponse(
        {
          error: `Room ${roomId} not found`,
        },
        404,
      );
    }

    return createApiResponse(room);
  } catch (error) {
    return handleApiError(error, "GET /api/room/[roomId] Error:");
  }
}
