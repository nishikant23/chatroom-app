import { prisma } from "./db"

export const checkUserInRoom = async (userId: string, roomId: string) => {
    return await prisma.userToRoom.findUnique({ //in table userToRoom - find Unique ID - (userid & roomid) combn.
        where : { //to get the user is a part of room or not.
            user_id_room_id : {
                user_id : userId,
                room_id : roomId,
            }
        }
    })
}