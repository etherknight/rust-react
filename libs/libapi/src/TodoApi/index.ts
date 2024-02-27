export type TodoItem = 
{
    id: string;
    title: string;
    dueBy: Date | undefined;
    isComplete: boolean;
}

export class TodoApi {

    public static async getTodoList(): Promise<TodoItem[]> {
        const options: RequestInit = {
            method: "GET",
            mode: "cors",                       
            headers: {
              "Content-Type": "application/json",              
            },
            redirect: "follow", 
            referrerPolicy: "no-referrer", 
          };

        try{
            const response = await fetch("http://localhost:5287/todos", options);            
            const result = await response.json();
            if (response.ok){                   
                return result as TodoItem[];
            } 
        } catch(error) {
            console.error("getTodoList", error);
        }
        return [];
    }        
}   
