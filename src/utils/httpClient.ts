const BASE_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods';

export function httpClient<T>(url: string): Promise<T> {
  return fetch(`${BASE_URL}/${url}`).then(response => {
    if (!response.ok) {
      return Promise.reject(
        new Error(`Could not fetch ${url}, status: ${response.status}`),
      );
    }

    return response.json();
  });
}
