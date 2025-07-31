// import { RoomType, Types } from "./enum"

// export interface basePayload {
//     userId: number,
//     roomId : number,
//     roomname : string,
//     username? : string | null,
//     roomDescription? : string | null,
//     admin? : string | null,
//     roomParticipants? : number | null,
//     // timestamp : string,
// }

// export interface createRoomPayload {
//     type : Types.Create,
//     payload : basePayload,
// } 

// export interface joinRoomPayload  {
//     type: Types.Join,
//     payload : basePayload,
// }


// export interface chatMessage {
//     text : string,
//     sender : string,
// }

// export interface chatPayload {
//     type : Types.Chat,
//     payload : basePayload & chatMessage,
// }


// export interface RoomPayload {
//     type : RoomType,
//     payload : basePayload & {
//         roomDescription: string,
//         participants: number,
//     }
// }

import { Types } from "./enum";


export interface basePayload {
    userId : string,
    roomId : string,
    chatId : string,
    roomAdminId:  string,
    roomAdminName : string,
    username : string,
    roomName : string,
    roomDescription : string | null,
    roomParticipants :  number;
    
}
export interface userPayload {
    payload : Pick<basePayload, "userId" | "username" > & {
        userBio? : string,
    }
    
    
}

export interface chatMessage {
    // chatId : number,
    text : string,
    sender : string,
    senderTimeStampUI: string,
    serverTimeStampBE : string,
}


export interface chatPayload {
    type : string,
    payload :  chatMessage & Pick<basePayload, "roomId" | "roomName"> & {
        messageId : string;
        senderId : string, //curr logged in user whod sent the message.
        senderName : string, //curr logged in user whod sent the message.
    };
}

export interface dbChatPayload {
    id : string, 
    text : string, 
    user_id : string,
    sender_name : string,
    room_id : string, 
    sent_at : Date,
}


export interface roomCreatePayload {
    type: Types.createRoom,
    payload: Pick<basePayload, "roomId" | "roomName" | "roomDescription" | "roomAdminId" | "roomAdminName" | "roomParticipants" > & {
        created_at : string,
    }
}

export interface roomJoinPayload {
    type: Types.joinRoom,
    payload : Pick<basePayload, "roomId" | "roomName" | "roomDescription" > & {
        newUserEntryId: string,
        joinedUserId : string,
        joinedUserName : string,
        roomCreatedAt : string,
    }
}


export interface roomPayload {
    type : Types.enterRoom,
    payload :{
        roomId: string,
        roomName: string,
        roomDescription: string | null,
        roomParticipants: number,
        roomAdminId: string,
        roomCreatedAt: string,
        currentUserId : string,
        currentUsername : string,
    }  
}