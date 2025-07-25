# 🕌 مدرسة الأزهر - Al-Azhar School

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-2.52.0-green?style=for-the-badge&logo=supabase)](https://supabase.com/)

موقع إسلامي تعليمي متطور لتسهيل تعلم القرآن الكريم واللغة العربية والدراسات الإسلامية عبر الإنترنت.

## 🌟 المميزات

### 📚 التعليم الشامل
- **تعلم القرآن الكريم** مع التجويد
- **اللغة العربية** للناطقين بغيرها
- **الدراسات الإسلامية** (العقيدة، الفقه، السيرة)

### 👨‍🏫 معلمون متخصصون
- **شهادات الأزهر** معتمدة
- **خبرة طويلة** في التدريس
- **طرق تعليمية** حديثة ومتطورة

### ⏰ جدولة مرنة
- **أوقات مناسبة** لجميع المناطق الزمنية
- **دروس فردية وجماعية**
- **إمكانية إعادة الجدولة**

### 🔐 نظام آمن
- **مصادقة Supabase** متقدمة
- **قاعدة بيانات** محمية
- **خصوصية كاملة** للمستخدمين

## 🚀 التقنيات المستخدمة

### Frontend
- **Next.js 15** - إطار العمل الرئيسي
- **React 19** - واجهة المستخدم
- **TypeScript** - برمجة آمنة
- **Tailwind CSS** - تصميم متجاوب

### Backend & Database
- **Supabase** - قاعدة البيانات والمصادقة
- **PostgreSQL** - قاعدة البيانات
- **Row Level Security** - حماية البيانات

### Deployment
- **Vercel** - النشر والتوزيع
- **GitHub** - إدارة الكود
- **Environment Variables** - إعدادات آمنة

## 📦 التثبيت والتشغيل

### المتطلبات
- Node.js 18+
- npm أو pnpm
- حساب Supabase

### خطوات التثبيت

```bash
# 1. استنساخ المشروع
git clone https://github.com/alazharschool/al-azhar-school.git
cd al-azhar-school

# 2. تثبيت الحزم
npm install

# 3. إعداد متغيرات البيئة
cp env.example .env.local
# عدل القيم في .env.local

# 4. تشغيل المشروع
npm run dev
```

### إعداد Supabase

1. **إنشاء مشروع Supabase**
   - اذهب إلى [supabase.com](https://supabase.com)
   - أنشئ مشروع جديد
   - انسخ URL و Key

2. **إنشاء الجداول**
   - اذهب إلى SQL Editor
   - انسخ محتوى `supabase-schema.sql`
   - اضغط "Run"

3. **تحديث متغيرات البيئة**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   ```

## 🏗️ هيكل المشروع

```
alazhar-school/
├── app/                    # صفحات Next.js
│   ├── dashboard/         # لوحة التحكم
│   ├── login/            # تسجيل الدخول
│   ├── register/         # التسجيل
│   └── ...
├── components/           # مكونات React
│   ├── ui/              # مكونات واجهة المستخدم
│   └── ...
├── lib/                 # مكتبات وخدمات
│   ├── supabase.ts      # إعداد Supabase
│   └── utils.ts         # أدوات مساعدة
├── contexts/            # React Contexts
├── hooks/               # Custom Hooks
└── styles/              # ملفات التصميم
```

## 🚀 النشر

### Vercel (موصى به)
```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel --prod
```

### Netlify
```bash
# بناء المشروع
npm run build

# النشر
netlify deploy --prod --dir=.next
```

## 📝 الأوامر المتاحة

```bash
npm run dev          # تشغيل في وضع التطوير
npm run build        # بناء المشروع
npm run start        # تشغيل في وضع الإنتاج
npm run lint         # فحص الكود
npm run deploy       # نشر المشروع
```

## 🤝 المساهمة

نرحب بمساهماتكم! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. إنشاء فرع جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## 📄 الرخصة

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 التواصل

- **الموقع الإلكتروني**: [alazhar-school.com](https://alazhar-school.com)
- **البريد الإلكتروني**: info@alazhar-school.com
- **GitHub**: [@alazharschool](https://github.com/alazharschool)

## 🙏 شكر وتقدير

شكر خاص لجميع المساهمين والمطورين الذين ساعدوا في تطوير هذا المشروع.

---

**مدرسة الأزهر** - تعليم إسلامي عالي الجودة 🌟 