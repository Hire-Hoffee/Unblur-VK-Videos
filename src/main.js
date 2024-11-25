const targetNode = document.body;
const config = { attributes: true, childList: true, subtree: true };

const callback = function (mutationsList, observer) {
  mutationsList.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.target.classList.contains("videoplayer--blur")) {
      mutation.target.classList.remove("videoplayer--blur");
    }
  });
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

window.addEventListener("beforeunload", () => {
  observer.disconnect();
});
