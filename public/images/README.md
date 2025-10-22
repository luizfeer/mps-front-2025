# 📁 Como usar imagens estáticas no projeto

## Estrutura de pastas

```
public/
├── images/
│   ├── backgrounds/     # Imagens de fundo
│   ├── icons/          # Ícones
│   ├── logos/          # Logos e marcas
│   └── README.md       # Este arquivo
```

## Como adicionar imagens

1. **Coloque suas imagens** na pasta `public/images/` ou suas subpastas
2. **Formatos suportados**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`
3. **Nomenclatura**: Use nomes descritivos em inglês (ex: `hero-background.jpg`)

## Como importar e usar

### Método 1: URL direta (mais simples)
```tsx
<img src="/images/backgrounds/cloud1.jpg" alt="Nuvem" />
```

### Método 2: Import direto (recomendado)
```tsx
import cloudImage from '/images/backgrounds/cloud1.jpg';

<img src={cloudImage} alt="Nuvem" />
```

### Método 3: Função helper
```tsx
const getImageUrl = (path: string) => `/images/${path}`;

<img src={getImageUrl('backgrounds/cloud1.jpg')} alt="Nuvem" />
```

## Vantagens de usar imagens locais

- ✅ **Performance**: Carregamento mais rápido
- ✅ **Controle**: Sem dependência de serviços externos
- ✅ **SEO**: Melhor para otimização
- ✅ **Offline**: Funciona sem internet
- ✅ **Cache**: Controle total do cache

## Dicas importantes

- Use imagens otimizadas (WebP quando possível)
- Mantenha tamanhos adequados (não muito grandes)
- Use nomes descritivos para facilitar manutenção
- Organize por tipo de imagem nas subpastas