# 🚀 نشر سريع - مدرسة الأزهر مع Supabase

## ⚡ الطريقة الأسرع (Vercel + Supabase)

### 1. إعداد Supabase

#### أ. إنشاء مشروع Supabase
1. اذهب إلى [supabase.com](https://supabase.com)
2. سجل دخول بـ GitHub
3. اضغط "New Project"
4. اختر اسم المشروع: `alazhar-school`
5. اختر كلمة مرور قوية لقاعدة البيانات
6. اختر المنطقة الأقرب لك
7. اضغط "Create new project"

#### ب. الحصول على بيانات الاتصال
1. في لوحة التحكم، اذهب إلى Settings → API
2. انسخ:
   - **Project URL**: `https://your-project.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

#### ج. إنشاء الجداول
1. اذهب إلى SQL Editor
2. انسخ محتوى ملف `supabase-schema.sql`
3. اضغط "Run" لإنشاء الجداول

### 2. إعداد متغيرات البيئة

#### أ. إنشاء ملف `.env.local`
```bash
# انسخ الملف
cp env.example .env.local
```

#### ب. تحديث القيم
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key
```

### 3. رفع الكود إلى GitHub
```bash
git add .
git commit -m "إضافة Supabase"
git push origin main
```

### 4. نشر على Vercel
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول بـ GitHub
3. اضغط "New Project"
4. اختر مستودع `alazhar-school`
5. اضغط "Import"

### 5. إضافة متغيرات البيئة في Vercel
1. في إعدادات المشروع، اذهب إلى Environment Variables
2. أضف:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. اضغط "Deploy"

## 🎯 النتيجة
- ✅ موقع مباشر على الإنترنت
- ✅ قاعدة بيانات حقيقية مع Supabase
- ✅ مصادقة آمنة
- ✅ تحديثات تلقائية
- ✅ HTTPS تلقائي

## 🔧 إذا واجهت مشاكل

### فحص محلي أولاً:
```bash
npm install
npm run build
```

### مشاكل Supabase:
1. تأكد من صحة URL و Key
2. تحقق من إنشاء الجداول
3. تأكد من تفعيل RLS policies

### مشاكل النشر:
1. تحقق من متغيرات البيئة في Vercel
2. راجع سجلات البناء
3. تأكد من رفع جميع الملفات

## 📞 مساعدة سريعة

### ملفات مهمة:
- `lib/supabase.ts` - إعداد Supabase
- `lib/supabase-api.ts` - API functions
- `supabase-schema.sql` - هيكل قاعدة البيانات
- `env.example` - متغيرات البيئة

### روابط مفيدة:
- [Supabase](https://supabase.com)
- [Vercel](https://vercel.com)
- [GitHub](https://github.com)

---

**🎉 الموقع جاهز للنشر مع Supabase! اتبع الخطوات أعلاه** 