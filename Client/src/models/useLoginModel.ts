import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useAccess } from "@umijs/max";
import { request } from "@umijs/max";
import { history, useModel } from "@umijs/max";
import { useEffect, useMemo, useRef, useState } from "react";

export default function useLoginModel() {
    const { initialState, setInitialState } = useModel('@@initialState');
    
    const loginHandler = async (name: string) => {

        const result = await request("/api/login/login/", { 
          method: 'GET',
          params: { name }
        });
    
        localStorage.setItem('token', result?.token);
    
        setInitialState({ 
          userName: result?.name, 
          token: result?.token, 
        });
      };

    return {
        loginHandler
    };
}