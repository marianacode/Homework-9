// function to generate markdown for README
function generateMarkdown(data) {
  const avatar = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;

  return `# ${data.title}

## Description ${data.description}

`;
}

module.exports = generateMarkdown;
