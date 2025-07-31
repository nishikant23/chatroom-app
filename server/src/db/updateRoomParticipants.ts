import { prisma } from "./db"

export const updateRoomParticipants = async (roomId: string) => {
    return await prisma?.room.update({
        where :{
            id : roomId,
        },
        data : {
            participants :{
                increment : 1,
            }
        }
    })
}