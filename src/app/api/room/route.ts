import { prisma } from "@/db";
import { handleApiError } from "@/utils/errorHandler";
import { createApiResponse } from "@/utils/responseHandler";
import * as z from "zod";

const createRoomSchema = z.object({
  name: z.string(),
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

    const body = createRoomSchema.parse(json);

    const room = await prisma.room.create({
      data: {
        name: body.name,
      },
    });

    return createApiResponse(room);
  } catch (error) {
    return handleApiError(error, "POST /api/room Error:");
  }
}
