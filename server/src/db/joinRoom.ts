import { prisma } from "./db"
import { v4 as uuidv4} from 'uuid';
export const joinRoom = async (userId: string, roomId: string) => {
    return await prisma.userToRoom.create({
        data : {
            id : uuidv4(),
            user_id : userId,
            room_id : roomId,
        }
    })
}