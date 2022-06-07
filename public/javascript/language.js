import Translator from "@andreasremdt/simple-translator";

var translator = new Translator({
    defaultLanguage: "en",
    detectLanguage: true,
    selector: "[data-i18n]",
    debug: false,
    registerGlobally: "__",
    persist: false,
    persistKey: "preferred_language",
    filesLocation: "/views"
});

translator.fetch(["de", "en", "es"]).then(() => {
    translator.translatePageTo();
    registerLanguageToggle();
});

function registerLanguageToggle() {
    var select = document.querySelector("select");

    select.addEventListener("change", evt => {
        var language = evt.target.value;
        translator.translatePageTo(language);
    });
}