 // ================= CONFIGURAÇÃO =================
const configuracoes = [
    {
        polo: "IBBA PLAT UBERLANDIA (MG)",
        intervalos: [
            { inicio: 156090000, fim: 156090049, tipo: "Provisório 30 dias" },
            { inicio: 155090001, fim: 155090049, tipo: "Visitante" }
        ]
    },

    {
        polo: "PRIVATE BH (MG)",
        intervalos: [
            { inicio: 890700000, fim: 890700019, tipo: "Provisório 30 dias" },
            { inicio: 907000001, fim: 990700049, tipo: "Visitante" }
        ]
    },

    {
        polo: "AC - IBBA POLO/ION BH (MG)",
        intervalos: [
            { inicio: 156005002, fim: 156005134, tipo: "Provisório 30 dias" },
            { inicio: 100001004, fim: 100001022, tipo: "Provisório 30 dias" },
            { inicio: 103001254, fim: 103001273, tipo: "Visitante" },
            { inicio: 155005000, fim: 155005045, tipo: "Visitante" }
        ]
    },

    {
        polo: "ION BELO HORIZONTE (MG)",
        intervalos: [
            { inicio: 100001207, fim: 100001223, tipo: "Provisório 30 dias" },
            { inicio: 103008000, fim: 103008499, tipo: "Provisório 30 dias" },
            { inicio: 103001455, fim: 103001474, tipo: "Visitante" }
        ]
    },

    {
        polo: "EMP BELO HORIZONTE (MG)",
        intervalos: [
            { inicio: 100000287, fim: 100000304, tipo: "Provisório 30 dias" },
            { inicio: 103007500, fim: 103007999, tipo: "Provisório 30 dias" },
            { inicio: 106000141, fim: 106000159, tipo: "Provisório 30 dias" },
            { inicio: 103000336, fim: 103000345, tipo: "Visitante" }
        ]
    },

    {
        polo: "AC - VANDA PINHEIRO (GO)",
        intervalos: [
            { inicio: 100000191, fim: 100000240, tipo: "Provisório 30 dias" },
            { inicio: 100001404, fim: 100001503, tipo: "Provisório 30 dias" },
            { inicio: 100002064, fim: 100002163, tipo: "Provisório 30 dias" },//100002135
            { inicio: 100002364, fim: 100002613, tipo: "Provisório 30 dias" },
            { inicio: 103000283, fim: 103000330, tipo: "Visitante" },
            { inicio: 103001748, fim: 103001788, tipo: "Visitante" },
            { inicio: 103002149, fim: 103002198, tipo: "Visitante" },
            { inicio: 103002349, fim: 103002598, tipo: "Visitante" },
            { inicio: 108000650, fim: 108000949, tipo: "Visitante" }
        ]
    },

    {
        polo: "AGD GOIANIA (GO)",
        intervalos: [
            { inicio: 100001504, fim: 100001563, tipo: "Provisório 30 dias" },
            { inicio: 100002014, fim: 100002063, tipo: "Provisório 30 dias" },
            { inicio: 100002164, fim: 100002212, tipo: "Provisório 30 dias" },
            { inicio: 100006854, fim: 100006949, tipo: "Provisório 30 dias" }
        ]
    },

    {
        polo: "IBBA PLAT GOIANIA (GO)",
        intervalos: [
            { inicio: 100001964, fim: 100002013, tipo: "Provisório 30 dias" },
            { inicio: 156030000, fim: 156030009, tipo: "Provisório 30 dias" },
            { inicio: 156035000, fim: 156035009, tipo: "Provisório 30 dias" },
            { inicio: 156035030, fim: 156035089, tipo: "Provisório 30 dias" },
            { inicio: 155030008, fim: 155030029, tipo: "Visitante" },
            { inicio: 155035000, fim: 155035009, tipo: "Visitante" },
            { inicio: 156035010, fim: 156035029, tipo: "Visitante" }
        ]
    },

    {
        polo: "ION CAMPINAS (SP)",
        intervalos: [
            { inicio: 103010000, fim: 103010499, tipo: "Provisório 30 dias" },
            { inicio: 100001125, fim: 100001143, tipo: "Provisório 30 dias" },
            { inicio: 100000451, fim: 100000470, tipo: "Provisório 30 dias" },
            { inicio: 103000436, fim: 103000455, tipo: "Visitante" },
            { inicio: 103001375, fim: 103001394, tipo: "Visitante" },
        ]
    },  

    {
        polo: "AGD CAMPINAS (SP)",
        intervalos: [
            { inicio: 100000884, fim: 100000900, tipo: "Provisório 30 dias" },
            { inicio: 100002766, fim: 100002841, tipo: "Provisório 30 dias" },
            { inicio: 103009500, fim: 103009999, tipo: "Provisório 30 dias" },
            { inicio: 103000671, fim: 103000690, tipo: "Visitante" }
        ]
    },

    {
        polo: "CENTRO ALTERNATIVO CAMPINAS (SP)",
        intervalos: [
            { inicio: 895400100, fim: 895400150, tipo: "Provisório 30 dias" },
            { inicio: 895400201, fim: 895400240, tipo: "Provisório 30 dias" },
            { inicio: 995400151, fim: 995400349, tipo: "Visitante" }
        ]
    },

    {
        polo: "IBBA EMP CAMPINAS (SP)",
        intervalos: [
            { inicio: 100001028, fim: 100001042, tipo: "Provisório 30 dias" },
            { inicio: 103009000, fim: 103009499, tipo: "Provisório 30 dias" },
            { inicio: 156000000, fim: 156000050, tipo: "Provisório 30 dias" },
            { inicio: 103001274, fim: 103001293, tipo: "Visitante" },
            { inicio: 155000000, fim: 155000050, tipo: "Visitante" }
        ]
    },

    {
        polo: "PRIVATE CURITIBA (PR)",
        intervalos: [
            { inicio: 898520000, fim: 898520009, tipo: "Provisório 30 dias" },
            { inicio: 888520001, fim: 888520009, tipo: "Visitante" }
        ]
    },

    {
        polo: "ION CURITIBA (PR)",
        intervalos: [
            { inicio: 100000866, fim: 100000880, tipo: "Provisório 30 dias" },
            { inicio: 100001365, fim: 100001383, tipo: "Provisório 30 dias" },
            { inicio: 100007063, fim: 100007112, tipo: "Provisório 30 dias" },
            { inicio: 100007408, fim: 100007462, tipo: "Provisório 30 dias" },
            { inicio: 106000321, fim: 106000339, tipo: "Provisório 30 dias" },
            { inicio: 103000641, fim: 103000654, tipo: "Visitante" },
            { inicio: 103000964, fim: 103000982, tipo: "Visitante" },
            { inicio: 155085030, fim: 155085049, tipo: "Visitante" }
        ]
    },

    {
        polo: "IBBA EMP CURITIBA (PR)",
        intervalos: [
            { inicio: 100000801, fim: 100000815, tipo: "Provisório 30 dias" },
            { inicio: 100007387, fim: 100007407, tipo: "Provisório 30 dias" },
            { inicio: 156020000, fim: 156020014, tipo: "Provisório 30 dias" },
            { inicio: 103000656, fim: 103000668, tipo: "Provisório 30 dias" },
            { inicio: 155020000, fim: 155020013, tipo: "Visitante" }
        ]
    },

    {
        polo: "AC - JOAO NEGRAO (PR)",
        intervalos: [
            { inicio: 100000111, fim: 100000190, tipo: "Provisório 30 dias" },
            { inicio: 100000401, fim: 100000430, tipo: "Provisório 30 dias" },
            { inicio: 100000751, fim: 100001000, tipo: "Provisório 30 dias" },
            { inicio: 100005000, fim: 100005150, tipo: "Provisório 30 dias" },
            { inicio: 100006150, fim: 100006299, tipo: "Provisório 30 dias" },
            { inicio: 100007248, fim: 100007351, tipo: "Provisório 30 dias" },
            { inicio: 100006000, fim: 100006149, tipo: "Provisório 30 dias" },
            { inicio: 103000232, fim: 103000280, tipo: "Visitante" },
            { inicio: 103000587, fim: 103000609, tipo: "Visitante" },
            { inicio: 103002800, fim: 103002949, tipo: "Visitante" },
            { inicio: 111000000, fim: 111000220, tipo: "Visitante" },
            { inicio: 111000240, fim: 111000389, tipo: "Visitante" },
        ]
    },

    {
        polo: "CEIC (SP)",
        intervalos: [
            { inicio: 894034271, fim: 894052153, tipo: "Provisório 30 dias" },
            { inicio: 103200000, fim: 103226396, tipo: "Visitante" },
            { inicio: 994011838, fim: 997502587, tipo: "Visitante" }
        ]
    }
];

// ================= BASE =================
function gerarBase(configs) {
    const lista = [];
    configs.forEach(config => {
        config.intervalos.forEach(intervalo => {
            for (let i = intervalo.inicio; i <= intervalo.fim; i++) {
                lista.push({
                    numero: String(i),
                    tipo: intervalo.tipo,
                    polo: config.polo,
                    status: "Ativo"
                });
            }
        });
    });
    return lista;
}

function consultarCracha(numero) {

    const num = Number(numero);

    for (const config of configuracoes) {
        for (const intervalo of config.intervalos) {
            if (num >= intervalo.inicio && num <= intervalo.fim) {
                return {
                    numero: numero,
                    tipo: intervalo.tipo,
                    polo: config.polo,
                    status: "Ativo"
                };
            }
        }
    }
    return null;
}

const loading = document.getElementById("loading");

function mostrarLoading() {
    return `
        <div class="loading-box">
            <div class="spinner"></div>
            <div class="loading-text">Consultando dados...</div>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
        </div>
    `;
}

function mostrarSkeleton() {
    return `
        <div class="grid-info">
            ${Array(4).fill(`
                <div class="info-box">
                    <div class="skeleton skeleton-box"></div>
                </div>
            `).join('')}
        </div>
    `;
}

 // ================= UI =================
let historico = [];
document.getElementById("inputCracha")
.addEventListener("keydown", function(e){
    if(e.key === "Enter") consultar();
});

function consultar(){
    const numero = document.getElementById("inputCracha").value.trim();

    if(!numero) return;
    const resultado = document.getElementById("resultado");

    // Mostrar loading + skeleton
    loading.innerHTML = mostrarLoading();
    resultado.innerHTML = mostrarSkeleton();

    setTimeout(() => {

        const dado = consultarCracha(numero);

        if(dado){
            historico.push({
                numero: dado.numero,
                data: new Date().toLocaleString()
            });

            renderHistorico(); // 🔥 ESSA LINHA FALTAVA

            resultado.innerHTML = `
                <div class="card">
                    <div class="grid">
                        <div class="box">
                            <small>Número</small>
                            <div>${dado.numero}</div>
                        </div>

                        <div class="box">
                            <small>Tipo</small>
                            <div>${dado.tipo}</div>
                        </div>

                        <div class="box">
                            <small>Filial</small>
                            <div>${dado.polo}</div>
                        </div>

                        <div class="box">
                            <small>Status</small>
                            <div class="${dado.status === 'Ativo' ? 'ativo' : 'inativo'}">
                                ${dado.status}
                            </div>
                        </div>
                    </div>
                </div>
            `;

        } else {
            resultado.innerHTML = `<div style="color:red;">Crachá não encontrado</div>`;
        }
        loading.innerHTML = "";
    }, 500);

}

// eventos da página para teclar enter ou clicar no botão consultar
document.getElementById("inputCracha")
.addEventListener("keydown", (e) => {
    if (e.key === "Enter") consultar();
});

// ================= HISTÓRICO =================
function renderHistorico(){
    const div = document.getElementById("historico");
    if(historico.length === 0){
        div.innerHTML = "<p>Nenhuma consulta realizada</p>";
        return;
    }

    div.innerHTML = historico.map(item => `
        <div class="item">
            ${item.numero} - ${item.data}
        </div>
    `).join('');
}
