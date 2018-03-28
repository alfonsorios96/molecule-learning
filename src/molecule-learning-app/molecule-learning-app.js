'use strict';

(function initApp(customElements) {
    /**
     * @customElement
     * @polymer
     */
    class MoleculeLearningApp extends Polymer.Element {
        static get is() {
            return 'molecule-learning-app';
        }

        static get properties() {
            return {
                onLine: {
                    type: Boolean,
                    value: false
                },
                concepts: {
                    type: Array,
                    value: []
                },
                currentQuiz: {
                    type: Object,
                    value: {}
                }
            };
        }

        connectedCallback() {
            super.connectedCallback();
            database
                .ref('concepts')
                .on('value', (concepts) => {
                    this.set('concepts', []);
                    for (const index in concepts.val()) {
                        this.push('concepts', concepts.val()[index]);
                    }
                });
            this._getRandomQuiz();
        }

        saveConcept() {
            let concept = this.$.concept.value;
            let description = this.$.description.value;
            const newPostKey = database.ref().child('concepts').push().key;
            database
                .ref('concepts/' + newPostKey)
                .set({
                    name: concept,
                    description: description
                });
            pushNotification('Nueva palabra', `Excelente, ahora tienes ${this.concepts.lenght} conceptos de psicología.`);
        }

        _getRandomQuiz() {
            this.set('currentQuiz', this.concepts[this.__getRandomInteger(0, this.concepts.length - 1)]);
            pushNotification(this.currentQuiz.name, this.currentQuiz.description);
        }

        __getRandomInteger(initial, ending) {
            return Math.round(Math.random() * ending) - initial;
        }
    }

    customElements.define(MoleculeLearningApp.is, MoleculeLearningApp);
})(window.customElements);
