const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke-output", joke);
}

run();

const name_input = core.getInput('name');
const name_envVar = process.env.INPUT_NAME;

console.log(`name from input: ${name_input}`)
console.log(`name from env var: ${name_envVar}`)
