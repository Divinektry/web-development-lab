# Lab 7 — Sass / SCSS refactoring

## Ажиллуулах
1. Энэ хавтсыг VS Code дээр нээнэ.
2. Terminal нээгээд:
   ```bash
   npm install
   ```
3. SCSS-ийг compressed CSS болгоно:
   ```bash
   npm run sass:build
   ```
4. `index.html` файлыг Live Server-ээр нээнэ.
5. SCSS өөрчлөх бүрдээ автоматаар хөрвүүлэх бол:
   ```bash
   npm run sass:watch
   ```

## Folder бүтэц
- `src/scss/_tokens.scss` — өнгө, радиус, breakpoint map болон CSS custom properties, rem(), contrast()
- `src/scss/_mixins.scss` — respond(), flex-center()
- `src/scss/_*.scss` — тус тусын хэсгийн partial
- `src/scss/main.scss` — бүх partial-ийг нэгтгэнэ
- `style.css` — `npm run sass:build` ажиллуулахад үүсэх compressed CSS

## Тайлбар
HTML-ийн агуулга, зураг, видео, өнгөний үндсэн утга болон responsive breakpoint-уудыг хадгалсан. Хичээлийн картын доторх элементүүдэд BEM хэлбэрийн `lesson__...` нэршил ашигласан. `script.js`-ийн карт эргүүлэх, dark mode, mobile menu үйлдлийг хэвээр үлдээсэн.
