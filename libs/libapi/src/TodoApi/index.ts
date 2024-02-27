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
            credentials: "same-origin", 
            headers: {
              "Content-Type": "application/json",              
            },
            redirect: "follow", 
            referrerPolicy: "no-referrer", 
          };

        type Response = {
            data?: {
                todos: TodoItem[]
            },
            error?: {
                message: string
            }
        }

        const response = await fetch("http://localhost:5287/todos", options);
        const {data, error} : Response = await response.json();
        if (response.ok){            
            return data.todos
        } else {
            throw error.message;
        }          
    }        
}   
