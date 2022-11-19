import { request } from "@umijs/max";
import { useModel } from "@umijs/max";

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