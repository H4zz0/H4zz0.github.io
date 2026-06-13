# Portfolio — Hamza El Haddad Sabri

Portafolio personal de ciberseguridad. Web estática bilingüe (ES/EN), diseño glass estilo Apple en blanco y verde. **Sin frameworks, sin build, sin coste de hosting.**

🌐 **En vivo:** https://h4zz0.github.io

## Estructura

```
├── index.html      ← Toda la página (una sola página, secciones ancladas)
├── styles.css      ← Estilos (glassmorphism, verde #518F29)
├── script.js       ← Idioma ES/EN, animaciones, menú móvil, formulario
├── 404.html        ← Página de error para GitHub Pages
└── assets/
    ├── CV_Hamza_El_Haddad_Sabri.pdf
    └── foto.jpg    ← TU FOTO (añádela tú, ver abajo)
```

## ✅ Cosas que tienes que hacer tú (5 minutos)

### 1. Añadir tu foto
Guarda una foto tuya (idealmente cuadrada, mínimo 600×600 px) como:
```
assets/foto.jpg
```
Si no hay foto, la web muestra automáticamente un monograma "H" verde — no se rompe nada.

### 2. Activar el formulario de contacto (gratis)
1. Entra en [formspree.io](https://formspree.io) y crea una cuenta gratuita (50 envíos/mes gratis).
2. Crea un formulario nuevo → te dará una URL tipo `https://formspree.io/f/abcd1234`.
3. En `index.html`, busca `TU_ID_FORMSPREE` y sustituye la URL entera del `action` por la tuya.

> Mientras no lo configures, el botón "Enviar" abre el cliente de correo del visitante con el mensaje ya redactado (funciona igualmente).

## 🚀 Publicación (YA está en vivo)

La web está publicada con GitHub Pages en el repositorio **`H4zz0/H4zz0.github.io`** (rama `main`, carpeta raíz) y accesible en **https://h4zz0.github.io**.

> Nota: el usuario de GitHub pasó de `HamzaEnti` a **`H4zz0`**, así que GitHub renombró el repo automáticamente y la URL antigua (`hamzaenti.github.io`) dejó de funcionar.

### Actualizar la web
Edita los archivos y:
```bash
git add .
git commit -m "Descripción del cambio"
git push
```
Los cambios se publican solos en ~1 minuto.

## 💡 Mejoras futuras (opcionales)

- **Dominio propio** (~10 €/año, único gasto que merece la pena): cómpralo en Cloudflare o Namecheap y conéctalo en Settings → Pages → Custom domain.
- **og:image**: añade `assets/og.png` (1200×630) y la etiqueta `<meta property="og:image" ...>` para que el enlace se vea bonito al compartirlo en LinkedIn.
- Añadir badges de TryHackMe o nuevas certificaciones en la sección Trayectoria.
