const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// helper function
async function fetchWithJson(url: string, method: string, body?: any) {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export async function createGameRoom(name: string) {
  return await fetchWithJson(`${apiUrl}/room`, "POST", { name });
}

export async function createUser(name: string, roomId: string) {
  return await fetchWithJson(`${apiUrl}/player`, "POST", { name, roomId });
}
