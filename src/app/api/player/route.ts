import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const createPlayerSchema = z.object({
  name: z.string(),
  roomId: z.number(),
});

export async function POST(req: Request, res: Response) {
  try {
    const json = await req.json().catch(() => null);

    if (!json) {
      return createApiResponse(
        {
          error: "No request body provided or wrong json format",
        },
        400,
      );
    }

    const body = createPlayerSchema.parse(json);

    const room = await prisma.player.create({
      data: {
        name: body.name,
        room: {
          connect: {
            id: body.roomId,
          },
        },
      },
    });

    return createApiResponse(room);
  } catch (error) {
    return handleApiError(error, "POST /api/player Error:");
  }
}
