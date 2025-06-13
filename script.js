const API_URL = "https://script.google.com/macros/s/AKfycbxPjOW0W8sn932N3RGVjOmCMxTyDT_aQfm6tMVPbSe2Q7FTDI0oEl_4I0r9IlWr-Ra2/exec";

async function addTask(task) {
  const res = await fetch(API_URL + "?action=add", {
    method: "POST",
    body: JSON.stringify(task),
    headers: { "Content-Type": "application/json" },
  });
  return await res.text();
}

async function getAllTasks() {
  const res = await fetch(API_URL + "?action=list", { method: "POST" });
  return await res.json();
}

async function getTasksByUser(tech) {
  const res = await fetch(API_URL + "?action=userTasks&tech=" + tech, { method: "POST" });
  return await res.json();
}

async function markAsDone(rowIndex) {
  await fetch(API_URL + "?action=done&row=" + rowIndex, { method: "POST" });
}