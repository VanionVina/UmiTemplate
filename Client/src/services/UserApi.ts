import request from "@/utils/request/request";

export async function getUser(data: any): Promise<any | null> {
    try {
      const user = await request("/api/User/Login", {
        method: "POST",
        data
      })

      if (!user?.username == undefined) return null;

      return user;
    } 
    catch(err) {
      return null;
    }
}

export async function getProfile(): Promise<any | null> {
    try {
      const user = await request('/api/User/Profile');
  
      if (user?.username == undefined) return null;
      return user;
    }
    catch (err) {
      // Reset token on server error
      localStorage.removeItem('token');
      return null;
    }
  }
  