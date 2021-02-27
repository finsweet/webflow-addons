interface Window {
  hljs: any;
}

document.addEventListener('DOMContentLoaded', async () => {
  // DOM Elements
  const preElements = document.querySelectorAll('pre');

  for (const preElement of preElements) {
    const src = preElement.textContent;
    if (!src) continue;

    preElement.innerHTML = '';

    try {
      const response = await fetch(src);
      const code = await response.text();

      // const codeElement = document.createElement('code');
      // codeElement.innerHTML = code;
      // preElement.append(codeElement);
      preElement.innerHTML = `<code>${code}</code>`;
      window.hljs.highlightBlock(preElement);
    } catch (error) {
      console.log(error);
    }
  }
});
