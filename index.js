const express = require("express");
const app = express();
const port = 3000;

// Sinalizar uso de Json
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello Word!");
});
app.get("/oi", (req, res) => {
  res.send("Helo Word!");
});

// listar itens
const itens = {
  data: [
    { codigo: "1", 
      codigoIcone:"1.1",
      nome: "Abiúda de Sergipe",
      preco:"R$ 3,00",
      detalhes:"A receita traz uma cerveja leve e refrescante. O adicional da laranja traz diferenciação e qualidade à um preço acessível para o consumidor.  Teor alcoólico 4.2%." },

      { codigo: "2", 
      codigoIcone:"2.2",
      nome: "Adriática",
      preco:"R$ 12,00",
      detalhes:"A Cerveja Adriática é uma cerveja composta por água, lúpulo e malte, ou seja, puro malte nacional. A Cerveja Adriática é uma cerveja composta por água, lúpulo e malte, ou seja, puro malte nacional. Teor alcoólico 4.9%." },

      { codigo: "3", 
      codigoIcone:"3.3",
      nome: "Andes",
      preco:"R$ 4,00",
      detalhes:"A  Andes Origen Rubia é uma cerveja para degustar, com sabor maltado, amargor médio, com notas de cereais e fermento.É feito com os maltes Pilsen e Munich, um meio azedo e outro doce, mas nenhum vive sem o outro. Teor alcoólico 5.1%." },
      
      { codigo: "4", 
      codigoIcone:"4.4",
      nome: "Antarctica",
      preco:"R$ 8,00",
      detalhes:"A cerveja Antarctica é do tipo pilsen, clara e tem baixa fermentação. É composta de extrato primitivo e tem aroma, sabor e amargor suaves. Teor alcoólico 4.9%." },
      
      { codigo: "5", 
      codigoIcone:"5.5",
      nome: "Beck's",
      preco:"R$ 5,99",
      detalhes:"Beck’s é uma legítima German Lager Puro Malte, que segue à risca a lei da pureza da cerveja alemã desde 1873. Seu IBU (unidade internacional de amargor) é 20. O resultado é uma cerveja de amargor intenso, sabor marcante e excepcional pureza.Ela é provocante, cheia de personalidade e com um sabor característico e único. A cerveja alemã mais vendida no mundo. Teor alcoólico 5%." },
      
      { codigo: "6", 
      codigoIcone:"6.6",
      nome: "Berrió do Piaiu",
      preco:"R$ 2,19",
      detalhes:"Produzida e vendida somente no Piauí, ideal para aliviar o B-R-O-BRÓ sem fim do estado. Leva na receita caju plantado e colhido por pequenos produtores do estado, adquirido sem intermédios gerando renda para as regiões menos favorecidas e diminuindo o desperdício do insumo." },
      
      { codigo: "7", 
      codigoIcone:"7.7",
      nome: "Bohemia Puro Malte",
      preco:"R$ 3,91",
      detalhes:"Cerveja tipo Premium Lager, clara, leve e muito refrescante: uma cerveja para todos os momentos. Produzida com malte 100% importado e lúpulo Saaz, da República Tcheca, a nossa Pilsen, é uma das primeiras cervejas do Brasil.Teor alcoólico 5%." },
      
      { codigo: "8", 
      codigoIcone:"8.8",
      nome: "Brahma",
      preco:"R$ 10,19",
      detalhes:"A Brahma Chopp é clara, brilhante, transparente e internacionalmente conhecida como uma cerveja de excelente qualidade. É mais leve, com paladar clássico da baixa fermentação e tem sabor encorpado, aroma neutro, amargor menos acentuado e médio teor alcoólico de 4,80%." },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
      
      { codigo: "", 
      codigoIcone:"",
      nome: "",
      preco:"",
      detalhes:"" },
    
  ],
};


// endpoint [get] READ ALL
app.get("/itens", (req, res) => {
  res.send(itens);
});

// endpoint [get] READ one
app.get("/itens/:id", (req, res) => {
  const id = req.params.id;

  const item = itens.data.filter(function (a) {
    return a.codigo === id;
});
  res.send(item);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});