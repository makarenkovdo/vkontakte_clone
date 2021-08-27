declare global {

    interface news_State_INTF {
        [username: string]: NewsState_userNewsItems_INTF,
        loadingStatus: loadingStatus_INTF;
    }
    interface news_State_userNewsItems_INTF {
        id: number,
        text: string,
        date: Date,
    }

    interface news_GetData_INTF {
        [username: string]: NewsState_userNewsItems_INTF,
    }

    interface news_State_userNewsItems_Data_INTF {

        text: string,
        date: Date,
    }








}

export { }