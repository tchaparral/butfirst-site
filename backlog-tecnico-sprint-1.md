# Backlog Técnico — Sprint 1

Contexto: rebranding da landing page B1st para a nova direção dark coffee-tech.

Status geral: direção visual aprovada para preview/revisão geral. Os itens abaixo são ajustes finos e validações técnicas antes de merge para produção.

## Itens De Melhoria

### 1. Revisar botões flutuantes no mobile

Prioridade: média

Os botões flutuantes de WhatsApp e Instagram podem cobrir trechos de cards, textos ou CTAs em telas pequenas.

Critérios de aceite:
- Não cobrir conteúdo essencial em 360px, 375px, 390px e 430px.
- Manter acesso rápido aos canais.
- Avaliar reduzir tamanho, ajustar posição ou esconder um dos botões em trechos críticos.

### 2. Validar formulário de contato ponta a ponta

Prioridade: alta

O formulário visualmente está ok, mas precisa de validação funcional após a adição do campo opcional de rotina.

Critérios de aceite:
- Envio com e-mail válido e consentimento marcado funciona.
- API `/api/subscribe` aceita o payload atual.
- Campo `routine` não quebra integrações existentes.
- Mensagens de erro e sucesso aparecem corretamente.

### 3. Revisar artefatos gerados pelo Contentlayer

Prioridade: média

O arquivo `.contentlayer/generated/index.mjs` aparece modificado após build/dev. É preciso decidir se essa alteração deve entrar no commit ou ser descartada.

Critérios de aceite:
- Commit final não contém ruído gerado sem necessidade.
- Build continua passando após limpar ou manter os arquivos gerados.
- Estado do Git fica legível antes do preview/PR.

### 4. Testar breakpoints mobile principais

Prioridade: média

A landing foi validada visualmente em 360px, mas vale repetir a checagem nos tamanhos mais comuns antes do preview final.

Critérios de aceite:
- 360px, 375px, 390px, 430px e 480px sem overflow horizontal.
- Hero, cards, seção "Como funciona", seção de IA e CTA final legíveis.
- Menu mobile abre, fecha e navega corretamente.

### 5. Revisar metadados da página para a nova narrativa

Prioridade: baixa

Os metadados ainda carregam a narrativa antiga de "Automação, Bots e IA para Empresas". A V2 posiciona a B1st como operação, processos, automação acessível e IA com contexto para pequenos negócios.

Critérios de aceite:
- `title` e `description` alinhados à nova copy.
- Open Graph e Twitter metadata atualizados.
- Imagem OG revisada ou mantida conscientemente.

### 6. Revisar assets antigos no `public/`

Prioridade: baixa

Após estabilizar a V2, revisar quais imagens antigas ainda são usadas e quais podem sair do projeto.

Critérios de aceite:
- Não remover assets usados por blog, páginas legais ou componentes ativos.
- Remover apenas imagens comprovadamente órfãs.
- Manter histórico pelo Git, sem criar pasta de arquivo morto dentro de `public/`.

## Checklist Do Sprint 1

- [x] Build passa com `npm run build`.
- [x] Home validada em desktop.
- [ ] Home validada em mobile 360px.
- [ ] Formulário testado.
- [x] Git limpo de artefatos gerados desnecessários.
- [ ] Preview Vercel revisado antes de merge na `main`.
