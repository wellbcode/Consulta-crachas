  // ================= CONFIGURAÇÃO =================

const configuracoes = [
    {
        filial: "TENESSEE (USA)",
        intervalos: [
            { inicio: 156090000, fim: 156090049, tipo: "Provisório 30 dias" },
            { inicio: 155090001, fim: 155090049, tipo: "Visitante" }
        ]
    },

    {
        filial: "PRIVATE BH (MG)",
        intervalos: [
            { inicio: 890700000, fim: 890700019, tipo: "Provisório 30 dias" },
            { inicio: 907000001, fim: 990700049, tipo: "Visitante" }
        ]
    },

     {
        filial: "AC - IBBA POLO/ION BH (MG)",
        intervalos: [
            { inicio: 156005002, fim: 156005134, tipo: "Provisório 30 dias" },
            { inicio: 100001004, fim: 100001022, tipo: "Provisório 30 dias" },
            { inicio: 103000792, fim: 103001273, tipo: "Visitante" },
            { inicio: 155005000, fim: 155005045, tipo: "Visitante" }
        ]
    },

    {
        filial: "ION BELO HORIZONTE (MG)",
        intervalos: [
            { inicio: 100001207, fim: 100001223, tipo: "Provisório 30 dias" },
            { inicio: 103008000, fim: 103008499, tipo: "Provisório 30 dias" },
            { inicio: 103001455, fim: 103001474, tipo: "Visitante" }
        ]
    },

    {
        filial: "EMP BELO HORIZONTE (MG)",
        intervalos: [
            { inicio: 100000288, fim: 100000304, tipo: "Provisório 30 dias" },
            { inicio: 103007500, fim: 103007999, tipo: "Provisório 30 dias" },
            { inicio: 106000141, fim: 106000159, tipo: "Provisório 30 dias" },
            { inicio: 103000336, fim: 103000345, tipo: "Visitante" }
        ]
    },

    {
        filial: "AC - VANDA PINHEIRO (GO)",
        intervalos: [
            { inicio: 100000191, fim: 100001499, tipo: "Provisório 30 dias" },
            { inicio: 100002064, fim: 100002163, tipo: "Provisório 30 dias" },
            { inicio: 100002364, fim:  100002613, tipo: "Provisório 30 dias" },
            { inicio: 103000283, fim: 103002598, tipo: "Visitante" },
            { inicio: 108000650, fim: 108000949, tipo: "Visitante" }
        ]
    },

    {
        filial: "AGD GOIANIA (GO)",
        intervalos: [
            { inicio: 100001504, fim: 100001563, tipo: "Provisório 30 dias" },
            { inicio: 100002014, fim: 100002212, tipo: "Provisório 30 dias" },
            { inicio: 100006854, fim: 100006949, tipo: "Provisório 30 dias" }
        ]
    },

    {
        filial: "IBBA PLAT GOIANIA (GO)",
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
        filial: "Centro Empresarial (SP)",
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
                    filial: config.filial,
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
                    filial: config.filial,
                    status: "Ativo"
                };
            }
        }
    }
    return null;
}

// ================= UI =================
let historico = [];
document.getElementById("inputCracha")
.addEventListener("keydown", function(e){
    if(e.key === "Enter") executarConsulta();
});

function consultar(){
    const numero = document.getElementById("inputCracha").value.trim();

   if(!numero) return;

    const loading = document.getElementById("loading");
    const resultado = document.getElementById("resultado");

    loading.innerHTML = "Consultando...";
    resultado.innerHTML = "";

    setTimeout(() => {
        const dado = consultarCracha(numero); // ✅ agora correto
        if(dado){
            resultado.innerHTML = `
                <div class="card">
                    <div style="display:flex; gap:40px;">
                        <div>
                            <small>Número</small>
                            <div>${dado.numero}</div>
                        </div>
                        <div>
                            <small>Tipo</small>
                            <div>${dado.tipo}</div>
                        </div>
                        <div>
                            <small>Filial</small>
                            <div>${dado.filial}</div>
                        </div>
                        <div>
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
        historico.unshift({
            numero,
            data: new Date().toLocaleString()
        });

        renderHistorico();
        loading.innerHTML = "";
    }, 500);
}

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

// =====================
// SERVICE WORKER
// =====================

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
        .then(() => console.log("SW registrado"))
        .catch(err => console.error("Erro SW:", err));
}