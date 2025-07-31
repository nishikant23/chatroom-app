import { WebSocket } from "ws";

export interface connectionState {
    userId : string,
    roomId : string,
    connection : WebSocket | null, 
}
export interface userState {
    userId: string,
    
    username : string,
    chatsArr : number[], //allchats id, array
    roomId: string,
}

export interface roomState {
    roomId: string,
    roomName : string,
    usersArr : string[], //all users of this room, userId array
}

export interface chatState {
    messageId : number, //currently sent chat id generated.
    userId : string, //which user Chat
    username : string,
    roomId : string, //chat belongs to which room
    roomName : string,
    text : string, //chat sent by user.
    sender : string, //"me"(come from UI) --> "others"(overrides when sent to other all users of this room for UI seperation purpose of message, so that sender doenot get his message too.)
    senderTimeStampUI : string, //TimeStamp when sender sent from UI
    serverTimeStampBE :string, //TimeStamp when sever receives the client msg, and sends to all users of that room.
}


export interface allUsersObject {
    socketsArr : connectionState[], //array of object current {user's userId, user's made Connection }
    // usersArr : userState[],
    roomArr : roomState[],
    // chatsArr : chatState[],
}
export const allUsers : allUsersObject = {
    socketsArr : [],
    // usersArr: [],
    roomArr: [],
    // chatsArr: [],
}
