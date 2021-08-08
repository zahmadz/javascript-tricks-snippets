// Solution 1
for(var start = 1; start < 10; start++) {
  setTimeout(() => alert('hello'), 3000 * start);
}


// Solution 2
function timeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  });
}

for (let participant of participants) {
  await timeout(1000);
  await client.sendMessage(to, content);
}
