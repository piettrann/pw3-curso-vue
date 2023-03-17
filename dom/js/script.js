new Vue({
    el: '#app',
    data: {
        nome: 'Higor',
        sobrenome: 'Moroni',
        link: 'https://www.google.com.br',
        linkHtml: '<a href="https://www.microsoft.com.br">Ir para a Microsoft</a>',
        pais: 'Argentina',

        contador: 0,

        x: 0,
        y: 0
    },
    methods: {
        nomeCompleto() {
            console.log(this);
            return `${this.nome} ${this.sobrenome}`
        },
        mudarPais() {
            this.pais = 'Brasil';
        },
        somar(passo, blablabla) {
            this.contador = this.contador + passo;
            console.log(blablabla);
        },
        atualizarPosicaoMouse(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        foiProGoogle() {
            window.alert('Foi pro google');
            window.open(this.link, '_blank');
        },
        exibirAlerta() {
            window.alert('Isso é um alerta!');
        }
    }
});