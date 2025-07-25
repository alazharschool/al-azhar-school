# 🤝 دليل المساهمة

شكراً لاهتمامك بالمساهمة في مشروع مدرسة الأزهر! هذا الدليل سيساعدك على البدء.

## 📋 كيفية المساهمة

### 1. إعداد البيئة المحلية

```bash
# استنساخ المشروع
git clone https://github.com/alazharschool/al-azhar-school.git
cd al-azhar-school

# تثبيت التبعيات
npm install

# إعداد متغيرات البيئة
cp env.example .env.local
```

### 2. إنشاء فرع جديد

```bash
# التأكد من تحديث الفرع الرئيسي
git checkout main
git pull origin main

# إنشاء فرع جديد للميزة
git checkout -b feature/your-feature-name
```

### 3. تطوير الميزة

- اكتب الكود باتباع معايير المشروع
- تأكد من عمل جميع الاختبارات
- اكتب تعليقات واضحة للكود

### 4. اختبار التغييرات

```bash
# تشغيل الاختبارات
npm run test

# فحص الكود
npm run lint

# بناء المشروع
npm run build
```

### 5. رفع التغييرات

```bash
# إضافة التغييرات
git add .

# كتابة رسالة وصفية
git commit -m "feat: add new feature description"

# رفع الفرع
git push origin feature/your-feature-name
```

### 6. إنشاء Pull Request

1. اذهب إلى GitHub
2. انقر على "New Pull Request"
3. اختر الفرع الخاص بك
4. اكتب وصفاً واضحاً للتغييرات
5. أضف الصور إذا لزم الأمر

## 📝 معايير الكود

### TypeScript
- استخدم TypeScript لجميع الملفات الجديدة
- حدد أنواع البيانات بوضوح
- تجنب استخدام `any`

### React Components
- استخدم Functional Components
- استخدم Hooks بدلاً من Class Components
- اتبع مبدأ Single Responsibility

### التصميم
- استخدم Tailwind CSS للتصميم
- تأكد من التجاوب مع جميع الأجهزة
- اتبع معايير Accessibility

### الأمان
- لا تضع معلومات حساسة في الكود
- استخدم متغيرات البيئة للمعلومات السرية
- تحقق من صحة المدخلات

## 🐛 الإبلاغ عن الأخطاء

### قبل الإبلاغ
1. تحقق من وجود المشكلة في الفرع الرئيسي
2. ابحث في Issues الموجودة
3. تأكد من تحديث المتصفح

### محتوى البلاغ
- وصف واضح للمشكلة
- خطوات إعادة إنتاج المشكلة
- لقطة شاشة إذا لزم الأمر
- معلومات النظام والمتصفح

## 💡 اقتراح الميزات

### قبل الاقتراح
1. تحقق من عدم وجود ميزة مماثلة
2. فكر في الفائدة للمستخدمين
3. تأكد من توافقها مع أهداف المشروع

### محتوى الاقتراح
- وصف واضح للميزة
- شرح الفائدة للمستخدمين
- أمثلة على الاستخدام
- اقتراحات للتنفيذ

## 📚 الموارد المفيدة

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

## 🏷️ أنواع Commits

- `feat:` - ميزة جديدة
- `fix:` - إصلاح خطأ
- `docs:` - تحديث التوثيق
- `style:` - تحسينات التصميم
- `refactor:` - إعادة هيكلة الكود
- `test:` - إضافة أو تحديث الاختبارات
- `chore:` - مهام الصيانة

## 📞 التواصل

- **GitHub Issues** - للإبلاغ عن الأخطاء والاقتراحات
- **Discussions** - للنقاشات العامة
- **Email** - info@alazhar-school.com

## 🙏 شكراً

شكراً لمساهمتك في تطوير مدرسة الأزهر! كل مساهمة تساعد في تحسين التعليم الإسلامي عبر الإنترنت.

---

**🌙 جعل الله هذا العمل في ميزان حسناتنا جميعاً** 