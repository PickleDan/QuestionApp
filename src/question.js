// class for group functions
export class Question {
  static create(question) {
    return fetch("https://questions-app-a9885.firebaseio.com/questions.json", {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
  }
}
