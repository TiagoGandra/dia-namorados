# 💝 Landing Page Romântica de Dia dos Namorados

Uma landing page premium, moderna, responsiva e cheia de interações apaixonantes desenvolvida com **HTML5**, **Tailwind CSS (via CDN)** e **Vanilla JavaScript**. Ideal para surpreender quem você ama com um presente digital inesquecível.

## ✨ Funcionalidades
1. **Design Romântico e Responsivo (Mobile-First)**: Estética premium com cores pastéis harmoniosas, tipografia elegante (Playfair Display e Great Vibes) e efeito de vidro fosco (*glassmorphism*).
2. **Contador em Tempo Real**: Um relógio persistente calculando exatamente há quantos anos, meses, dias, horas, minutos e segundos vocês estão juntos.
3. **Galeria com Lightbox**: Uma grade de fotos elegante com efeito de ampliação (lightbox) ao clicar nas imagens.
4. **Cards de Motivos**: Exibição em cards interativos com efeitos hover tridimensionais detalhando por que você a ama.
5. **Surpresa Interativa**: Botão de presente que dispara uma chuva de corações animados na tela utilizando a tecnologia HTML5 Canvas (confete de corações em alta performance) e abre uma carta de declaração romântica.
6. **Música de Fundo Oculta**: Reprodutor flutuante integrado para tocar a trilha sonora favorita de vocês (com suporte a controle de tocar/pausar e indicador de ondas musicais).
7. **RSVP Divertido**: Botões interativos para ela aceitar seu convite de jantar com um toast romântico especial.

---

## 🛠️ Como Personalizar

Toda a personalização da página é feita de maneira simples no arquivo [config.js](file:///home/tiago/app-test-agy/config.js). **Você não precisa mexer no código HTML principal!**

Abra o arquivo [config.js](file:///home/tiago/app-test-agy/config.js) e edite os seguintes campos:

```javascript
const VALENTINE_CONFIG = {
  girlfriendName: "Andrezza",         // Nome dela (aparece no título)
  boyfriendName: "Tiago",          // Seu nome (aparece no subtítulo e rodapé)
  startDate: "2023-06-12",         // Data em que começaram a namorar (AAAA-MM-DD)
  heroSubtitle: "Surpresa...",     // Frase romântica de subtítulo
  surpriseTitle: "Querida...",     // Saudação inicial da carta secreta
  surpriseMessage: "...",          // Mensagem da carta romântica
  surpriseInvitation: "...",       // Convite de jantar ou plano no rodapé da carta
  
  // Lista de motivos: você pode alterar ou adicionar novos
  reasons: [
    { icon: "heart", title: "...", description: "..." },
    ...
  ],

  // Links das suas fotos (Imgur, Postimages, ou caminhos locais do projeto)
  galleryPhotos: [
    { url: "https://...", caption: "Legenda da Foto 1" },
    ...
  ],

  // URL de um arquivo MP3 para a trilha sonora (Royalty-free ou link direto do Dropbox/Google Drive)
  backgroundMusic: "https://..." 
};
```

### 📸 Como hospedar suas fotos para usar na Galeria:
Se você quiser usar fotos online (sem precisar subir arquivos pesados no repositório), pode usar serviços gratuitos como:
1. **Postimages.org**: Faça o upload da foto e copie o **Link Direto** (terminado em `.jpg` ou `.png`).
2. **Imgur.com**: Envie a imagem e copie a URL direta da imagem.
3. **Local**: Se preferir, crie uma pasta chamada `imagens` e coloque as fotos lá. No `config.js`, chame como `imagens/foto1.jpg`.

---

## 💻 Como Visualizar Localmente

Como a página é estática e lê o arquivo `config.js` via tags `<script>` padrão, você pode:
1. Simplesmente dar um **duplo clique** no arquivo `index.html` para abri-lo no seu navegador!
2. Ou rodar um servidor local leve no terminal dentro da pasta do projeto:
   - **Com Python:** `python3 -m http.server 8000` (acesse `http://localhost:8000`)
   - **Com Node.js (se tiver instalado):** `npx serve`

---

## 🚀 Como Fazer o Deploy no Vercel (Gratuito)

O **Vercel** é excelente para hospedar páginas estáticas rapidamente. Você pode escolher qualquer um dos dois métodos abaixo:

### Método 1: Arrastar e Soltar (Sem Terminal - O mais fácil!)
1. Acesse o site [Vercel Dashboard](https://vercel.com/dashboard) e faça login (crie uma conta se não tiver, é gratuito).
2. Vá para [vercel.com/new/clone](https://vercel.com/new) ou acesse o painel principal.
3. Se você for na página inicial da Vercel, verá um box escrito **"Deploy a new project"** ou uma área onde pode arrastar arquivos.
4. Acesse o **Vercel Dashboard** -> clique em **Add New...** -> **Project**.
5. No canto inferior da tela do Vercel, procure pela opção **"Browse templates"** ou faça o deploy arrastando a pasta do seu computador para o navegador em [vercel.com/deploy](https://vercel.com/deploy).
6. Basta **arrastar a pasta do projeto** (que contém o `index.html` e `config.js`) para a área de upload.
7. Em segundos, seu site estará no ar com uma URL pública (ex: `dia-dos-namorados.vercel.app`) para você enviar a ela!

### Método 2: Usando o Vercel CLI (Via Terminal)
Se você já tem o Node.js instalado no seu computador, siga os passos abaixo:
1. Abra o terminal na pasta do projeto.
2. Instale o CLI do Vercel globalmente:
   ```bash
   npm install -g vercel
   ```
3. Inicie o processo de deploy:
   ```bash
   vercel
   ```
4. Siga as perguntas rápidas do terminal:
   - *Set up and deploy?* Digite `Y` (Sim).
   - *Which scope?* Pressione **Enter** no seu escopo pessoal.
   - *Link to existing project?* Digite `N` (Não - estamos criando um novo).
   - *What's your project's name?* Digite um nome fofo (ex: `surpresa-dia-dos-namorados`).
   - *In which directory is your code located?* Pressione **Enter** (para o diretório atual `./`).
   - *Want to modify settings?* Digite `N` (Não - as configurações padrão já servem para sites estáticos).
5. O Vercel fará o upload dos arquivos e criará um link de **Preview**.
6. Para colocar o link em produção definitiva, digite:
   ```bash
   vercel --prod
   ```
7. Pronto! Copie o link final fornecido no terminal e envie para ela. ❤️
