const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
  // Sinalizar uso de Json
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello Word!");
});
app.get("/oi", (req, res) => {
  res.send("Helo Word!");
});

// listar itens
const itens = {
  data: [
    {
      codigo: "1",
      codigoIcone: "1.1",
      nome: "Abiúda de Sergipe",
      preco: "R$ 3,00",
      detalhes: "A receita traz uma cerveja leve e refrescante. O adicional da laranja traz diferenciação e qualidade à um preço acessível para o consumidor.  Teor alcoólico 4.2%."
    },

    {
      codigo: "2",
      codigoIcone: "2.2",
      nome: "Adriática",
      preco: "R$ 12,00",
      detalhes: "A Cerveja Adriática é uma cerveja composta por água, lúpulo e malte, ou seja, puro malte nacional. A Cerveja Adriática é uma cerveja composta por água, lúpulo e malte, ou seja, puro malte nacional. Teor alcoólico 4.9%."
    },

    {
      codigo: "3",
      codigoIcone: "3.3",
      nome: "Andes",
      preco: "R$ 4,00",
      detalhes: "A  Andes Origen Rubia é uma cerveja para degustar, com sabor maltado, amargor médio, com notas de cereais e fermento.É feito com os maltes Pilsen e Munich, um meio azedo e outro doce, mas nenhum vive sem o outro. Teor alcoólico 5.1%."
    },

    {
      codigo: "4",
      codigoIcone: "4.4",
      nome: "Antarctica",
      preco: "R$ 8,00",
      detalhes: "A cerveja Antarctica é do tipo pilsen, clara e tem baixa fermentação. É composta de extrato primitivo e tem aroma, sabor e amargor suaves. Teor alcoólico 4.9%."
    },

    {
      codigo: "5",
      codigoIcone: "5.5",
      nome: "Beck's",
      preco: "R$ 5,99",
      detalhes: "Beck’s é uma legítima German Lager Puro Malte, que segue à risca a lei da pureza da cerveja alemã desde 1873. Seu IBU (unidade internacional de amargor) é 20. O resultado é uma cerveja de amargor intenso, sabor marcante e excepcional pureza.Ela é provocante, cheia de personalidade e com um sabor característico e único. A cerveja alemã mais vendida no mundo. Teor alcoólico 5%."
    },

    {
      codigo: "6",
      codigoIcone: "6.6",
      nome: "Berrió do Piaiu",
      preco: "R$ 2,19",
      detalhes: "Produzida e vendida somente no Piauí, ideal para aliviar o B-R-O-BRÓ sem fim do estado. Leva na receita caju plantado e colhido por pequenos produtores do estado, adquirido sem intermédios gerando renda para as regiões menos favorecidas e diminuindo o desperdício do insumo."
    },

    {
      codigo: "7",
      codigoIcone: "7.7",
      nome: "Bohemia Puro Malte",
      preco: "R$ 3,91",
      detalhes: "Cerveja tipo Premium Lager, clara, leve e muito refrescante: uma cerveja para todos os momentos. Produzida com malte 100% importado e lúpulo Saaz, da República Tcheca, a nossa Pilsen, é uma das primeiras cervejas do Brasil.Teor alcoólico 5%."
    },

    {
      codigo: "8",
      codigoIcone: "8.8",
      nome: "Brahma",
      preco: "R$ 10,19",
      detalhes: "A Brahma Chopp é clara, brilhante, transparente e internacionalmente conhecida como uma cerveja de excelente qualidade. É mais leve, com paladar clássico da baixa fermentação e tem sabor encorpado, aroma neutro, amargor menos acentuado e médio teor alcoólico de 4,80%."
    },

    {
      codigo: "9",
      codigoIcone: "9.9",
      nome: "Budweiser",
      preco: "R$ 4,99",
      detalhes: "A cerveja Budweiser é uma American Larger que possui sabor leve, cor clara e aroma discreto. As lascas de Beechwood, madeira especial utilizada no processo de fermentação e maturação da Budweiser, conferem um sabor equilibrado, marcante no início e suave no final. Teor alcoólico 5.00%."
    },

    {
      codigo: "10",
      codigoIcone: "10.0",
      nome: "Caracu",
      preco: "R$ 4,29",
      detalhes: "a cerveja preta FORTE E GOSTOSA, foi lançada em 1899. Hoje uma das marcas mais tradicionais do Brasil, Caracu é conhecida por seu sabor encorpado e sua energia, possui aroma de malte torrado, que faz lembrar café. E sua fama de ser uma cerveja forte não é à toa. Teor alcoólico 5.4%"
    },

    {
      codigo: "11",
      codigoIcone: "10.3",
      nome: "Colorado",
      preco: "R$ 13,39",
      detalhes: "Estilo: Lager IBU: 20 ABV: 4,5% A Colorado Ribeirão Lager 600ml é uma cerveja que o nome já diz tudo. Nascida em Ribeirão Preto, nossa casa, é uma lager leve e refrescante, mas com a cara de Colorado, uma cervejaria que nunca faria mais do mesmo: cerveja clara com laranja, com IBU 20 e 4,5% de teor alcoólico com toda qualidade da primeira cervejaria artesanal do Brasil."
    },

    {
      codigo: "12",
      codigoIcone: "10.4",
      nome: "Corona",
      preco: "R$ 6,49",
      detalhes: "Corona Extra é a cerveja mais vendida e a marca mais exportada do México. Esta cerveja do tipo Pilsen foi produzida pela primeira vez em 1925 pela Cervecería Modelo, localizada na Cidade do México. Possui sabor leve de baixa graduação alcoólica. Uma fatia de limão no gargalo reforça a acidez com suas doses cítricas, fazendo com que a experiência de tomar a Corona se torne especial. Estilo ou Família. Lager, Teor Alcoólico 4,5%."
    },

    {
      codigo: "13",
      codigoIcone: "10.6",
      nome: "Franziskaner",
      preco: "R$ 19,99",
      detalhes: "A Cerveja Franziskaner Hefe Weissbier Hell 500ml é uma cerveja alemã de trigo com cor cristalina, sabor leve, refrescância e aroma levemente frutado, devido à intensidade do fermento dentro da própria garrafa.Teor alcoólico 5%"
    },

    {
      codigo: "14",
      codigoIcone: "10.7",
      nome: "Goose Island",
      preco: "R$ 5,84",
      detalhes: "Com 4,1% teor alcoólico, 30 IBU e aroma de frutas tropicais , a Midway IPA é uma Session IPA leve e refrescante . Ela tem sua história toda ligada à Chicago. Seu nome é originário da Feira Mundial da cidade, de 1893"
    },

    {
      codigo: "15",
      codigoIcone: "10.9",
      nome: "Kona",
      preco: "R$ 9,99",
      detalhes: "É uma cerveja de corpo mais leve, com aroma tropical e refrescante. O uso de malte caramelo, e a mistura especial,contribui para seu tom dourado e que ela seja um legítimo respiro do Havaí. IBU: 21 ABV 4,4%"
    },

    {
      codigo: "16",
      codigoIcone: "20.2",
      nome: "Magnífica",
      preco: "R$ 2,75",
      detalhes: "Magnífica é uma cerveja saborosa, leve e refrescante e tem como princípio  fomentar a economia local do Maranhão. Teor alcoólico  4,40%"
    },

    {
      codigo: "17",
      codigoIcone: "20.6",
      nome: "Original",
      preco: "R$ 8,19",
      detalhes: "Reconhecida por preservar sua essência, tradição e qualidade, a marca Original, criada em 1931, é considerada um clássico entre os apreciadores da bebida. Cerveja do tipo Pilsen, tem sabor suave, com leve amargor e aroma de lúpulo. Teor alcoólico 4,90%."
    },

    {
      codigo: "18",
      codigoIcone: "30.5",
      nome: "Wäls Verano",
      preco: "R$ 16,90",
      detalhes: "Wäls Verano é a Pale Ale que o clima Brasileiro sempre pediu! Refrescante e leve, ao mesmo tempo com aromas e sabores marcantes. Composta por água, malte de cevada, lúpulo e levedura. Harmoniza bem com hambúrguer, carne de porco, pizza e peru. Teor alcoólico 5.0%."
    },

    {
      codigo: "19",
      codigoIcone: "",
      nome: "Stella Artois",
      preco: "R$ 8,89",
      detalhes: "Sua receita única produz uma cerveja com aromas suaves e notas maltadas. A experiência e a tradição cervejeira de mais de 600 anos resultam em uma lager muito bem equilibradas. Uma cerveja de sabor intenso e com final suave. Stella Artois foi criada para ser saboreada. Teor álcoolico 5,0% vol."
    },

    {
      codigo: "20",
      codigoIcone: "",
      nome: "Skol",
      preco: "R$ 9,79",
      detalhes: "Skol Pilsen é uma típica cerveja clara, com aroma refinado e sabor leve e suave. Seu teor de amargor é menos acentuado e seu teor alcoólico é médio. Graduação Alcoólica 4,7%."
    },

  ],
};


// endpoint [get] READ ALL
app.get("/itens", (req, res) => {
  res.send(itens);
});

// endpoint [get] READ one
app.get("/itens/:nome", (req, res) => {
  const nome = req.params.nome;

  const item = itens.data.filter(function (a) {
    return a.nome === nome;
  });
  res.send(item);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});