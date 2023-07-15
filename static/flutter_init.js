window._stateSet = function () {};

window.addEventListener("load", function (ev) {
  // Embed flutter into div#flutter_target
  let target = document.querySelector("#flutter_target");
  _flutter.loader.loadEntrypoint({
    onEntrypointLoaded: async function (engineInitializer) {
      let appRunner = await engineInitializer.initializeEngine({
        hostElement: target,
      });
      await appRunner.runApp();
    },
  });
});
