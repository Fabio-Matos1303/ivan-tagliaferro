# Configuração do Widget do Instagram

## 📱 Como Configurar o Feed do Instagram

O widget do Instagram no footer usa o serviço **SnapWidget** para exibir as últimas publicações do perfil do Ivan.

### Passo a Passo:

1. **Acesse o SnapWidget**
   - Vá para: https://snapwidget.com
   - Crie uma conta gratuita (ou faça login)

2. **Crie um Novo Widget**
   - Clique em "Create Widget"
   - Selecione "Instagram Feed"
   - Insira o username: `ivantagliaferro`
   - Configure o layout (recomendado: Grid)
   - Escolha quantas fotos exibir (recomendado: 6-9)

3. **Obtenha o ID do Widget**
   - Após criar o widget, você receberá um código/ID
   - O ID será um número, exemplo: `1034826`
   - A URL completa será: `https://snapwidget.com/embed/1034826`

4. **Atualize o Código**
   - Abra o arquivo: `app/components/layout/Footer.tsx`
   - Localize a linha com `<InstagramFeed`
   - Adicione o `widgetId` com o ID do seu widget

### Exemplo:

```tsx
// No arquivo app/components/layout/Footer.tsx
<InstagramFeed 
  username="ivantagliaferro" 
  variant="footer"
  widgetId="1034826" // ← Adicione o ID do seu widget aqui
/>
```

**Nota:** Se o `widgetId` não estiver configurado, o componente mostrará um placeholder amigável com link para o perfil do Instagram.

### Alternativas:

Se preferir não usar SnapWidget, você pode:

1. **Instagram Basic Display API** (mais complexo, requer autenticação OAuth)
2. **Instagram Graph API** (requer página do Facebook conectada)
3. **Outros serviços**: Juicer, Taggbox, etc.

### Nota Importante:

O widget aparecerá quando o usuário passar o mouse sobre o ícone do Instagram no footer. O tooltip expandido mostrará as últimas publicações do perfil.

