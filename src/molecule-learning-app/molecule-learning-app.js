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
            this.set('concepts', [
                {
                    name: 'Psicología',
                    definition: 'La psicología es la ciencia social que se encarga de estudiar el comportamiento humano'
                },
                {
                    name: 'Percepción',
                    definition: ' es el proceso mediante el cual el cerebro humano integra las sensaciones sueltas de diferentes tipos que le van llegando y genera/construye una realidad compleja, con sentido y significado para la persona.'
                },
                {
                    name: 'Cognición',
                    definition: 'Proceso que tiene lugar en nuestro sistema nervioso, mediante el cual la persona procesa la información que recibe, la integra con aquélla de la que ya disponía anteriormente en su memoria y establece unas conclusiones.'
                },
                {
                    name: 'Emoción',
                    definition: 'Las emociones son reacciones innatas de activación/desactivación del sistema nervioso respecto a su grado de activación normal.'
                },
                {
                    name: 'Aptitud',
                    definition: 'Es una capacidad fundamentalmente innata que nos permite realizar de forma exitosa determinado tipo de tareas y actividades.'
                },
                {
                    name: 'Actitud',
                    definition: 'Es una predisposición personal hacia un determinado tipo de comportamientos, situaciones o tipos de estímulos.'
                }
            ]);
            this._getRandomQuiz();
        }

        _getRandomQuiz() {
            this.set('currentQuiz', this.concepts[this.__getRandomInteger(0, this.concepts.length - 1)]);
        }

        __getRandomInteger(initial, ending) {
            return Math.round(Math.random() * ending) - initial;
        }
    }

    customElements.define(MoleculeLearningApp.is, MoleculeLearningApp);
})(window.customElements);
