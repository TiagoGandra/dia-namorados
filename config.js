// Configurações da página romântica do Dia dos Namorados
const VALENTINE_CONFIG = {
  // Nome da sua namorada (título principal)
  girlfriendName: "Andrezza",

  // Seu nome (subtítulo)
  boyfriendName: "Tiago",

  // Data do início do namoro (Formato: AAAA-MM-DD)
  // Isso será usado para calcular o contador de tempo juntos em tempo real
  startDate: "2023-01-19",

  // Frase de destaque no topo (Hero)
  heroSubtitle: "Uma pequena surpresa para a futura mamãe mais linda e amor da minha vida.",

  // Configurações do Modal de Surpresa (Declaração de amor)
  surpriseTitle: "Querida Andrezza,",
  surpriseMessage: "Desde o momento em que você entrou na minha vida, tudo ganhou mais cor, mais riso e mais sentido. Cada dia ao seu lado é um presente precioso, mas ver você agora, gerando a nossa pequena Olívia, faz meu peito transbordar de um amor que eu nem sabia que existia. Ver nossa família começar a se formar é o meu maior sonho realizado.\n\nObrigado por ser minha companheira, minha melhor amiga e, em breve, a mãe mais incrível e amorosa que a nossa filha poderia ter. Feliz Dia dos Namorados para as minhas duas meninas!",
  surpriseInvitation: "Que tal comemorarmos com um jantar especial hoje à noite? ❤️",

  // Motivos para amar (Mínimo de 3 cards recomendados, mas você pode adicionar quantos quiser)
  reasons: [
    {
      icon: "heart", // Ícone de coração
      title: "Seu sorriso iluminado",
      description: "A forma como os seus olhos sorriem junto com a sua boca tem o poder de transformar qualquer dia cinzento em um dia ensolarado e cheio de paz."
    },
    {
      icon: "sparkles", // Ícone de brilho
      title: "A forma como você me apoia",
      description: "Você é minha maior incentivadora e meu porto seguro. Saber que tenho você ao meu lado me dá forças para enfrentar qualquer desafio."
    },
    {
      icon: "tv", // Ícone de TV/Séries
      title: "Nossas maratonas no sofá",
      description: "Das risadas bobas no meio da noite até as maratonas de séries no fim de semana dividindo a coberta, a nossa cumplicidade é a melhor parte dos meus dias."
    },
    {
      icon: "baby", // Ícone de bebê para Olívia
      title: "O nosso maior presente",
      description: "A luz que você irradia gerando a nossa Olívia. Ver você nessa jornada me enche de orgulho sabendo que você será a mãe mais incrível de todas."
    }
  ],

  // Galeria de Momentos (Substitua as URLs abaixo pelos links das fotos reais de vocês)
  // Você pode hospedar as imagens no Imgur, Postimages, ou na própria pasta do projeto.
  galleryPhotos: [
    {
      url: "images/foto1.jpg",
      caption: "Nosso primeiro pôr do sol juntos"
    },
    {
      url: "images/foto2.jpg",
      caption: "Aquele dia inesquecível"
    },
    {
      url: "images/foto3.jpg",
      caption: "Seu riso solto que me encanta"
    },
    {
      url: "images/foto4.jpg",
      caption: "Cada momento contigo é especial"
    },
    {
      url: "images/foto5.png",
      caption: "Parceiros de aventuras e de vida"
    },
    {
      url: "images/foto6.jpg",
      caption: "Segurando sua mão para sempre"
    }
  ],

  // Link de música de fundo (Royalty-free ou link direto para um MP3 romântico)
  // Deixe vazio ou mude para false se preferir não ter música de fundo.
  backgroundMusic: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
};
