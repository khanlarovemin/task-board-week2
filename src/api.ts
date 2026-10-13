export async function fetchTodo(id: number): Promise<unknown> {
  console.log("starting fetch...");
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!response.ok) {
      console.log("status:", response.status);
      return null;
    }
    const data: unknown = await response.json();
    console.log("got data");
    return data;
  } catch (err) {
    console.log("Network error:", err);
    return null;
  }
}
