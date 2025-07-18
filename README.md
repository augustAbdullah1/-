# 🕌 التطبيق الإسلامي الشامل - Comprehensive Islamic App

<div align="center">

![Islamic App](https://img.shields.io/badge/Islamic-App-2c5aa0?style=for-the-badge&logo=crescent-moon&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Ready-4285f4?style=for-the-badge&logo=pwa&logoColor=white)
![Android](https://img.shields.io/badge/Android-APK-3ddc84?style=for-the-badge&logo=android&logoColor=white)
![iOS](https://img.shields.io/badge/iOS-Compatible-000000?style=for-the-badge&logo=ios&logoColor=white)

تطبيق إسلامي شامل يحتوي على جميع الأدوات التي يحتاجها المسلم في حياته اليومية

[🌐 تجربة التطبيق](https://your-username.github.io/islamic-app-comprehensive) | [📱 تحميل APK](https://github.com/your-username/islamic-app-comprehensive/releases) | [📖 الوثائق](https://github.com/your-username/islamic-app-comprehensive/wiki)

</div>

## ✨ المميزات الرئيسية

### 📖 القرآن الكريم
- **114 سورة كاملة** من مصادر موثوقة سنية
- **خط عثماني أصيل** يحاكي المصحف الشريف
- **تتبع التقدم** في القراءة
- **تصنيف مكي ومدني** للسور
- **بحث سريع** في السور والآيات
- **وضع القراءة الليلي** لراحة العينين

### 🕌 أوقات الصلاة
- **دقة عالية** لجميع دول العالم
- **تحديد تلقائي للموقع** باستخدام GPS
- **تنبيهات ذكية** قبل كل صلاة
- **عداد تنازلي** للصلاة القادمة
- **تحديث تلقائي كل ساعة**
- **دعم جميع المذاهب** الفقهية

### 🧭 بوصلة القبلة
- **حساب دقيق للاتجاه** لأي مكان في العالم
- **واجهة تفاعلية** مع حساس الجهاز
- **ألوان واضحة** لسهولة التمييز
- **يعمل بدون إنترنت** بعد التحديد الأولي

### 📿 عداد التسبيح الذكي
- **أذكار متنوعة** (تسبيح، تهليل، تكبير، استغفار)
- **تحديد أهداف** قابلة للتخصيص
- **حفظ التقدم** تلقائياً
- **أرقام عربية وإنجليزية**
- **اهتزاز عند الوصول للهدف**

### 🤲 الأدعية والأذكار
- **مجموعة شاملة** من الأدعية المأثورة
- **أذكار الصباح والمساء** كاملة
- **مصادر موثقة** من الصحيحين وكتب السنة
- **تصنيف حسب الوقت والمناسبة**
- **إمكانية المشاركة**

### 🔔 التنبيهات والإشعارات
- **تنبيهات أوقات الصلاة** قابلة للتخصيص
- **تذكيرات الأذكار** اليومية
- **أصوات إسلامية** جميلة
- **اهتزاز مخصص** لكل نوع إشعار

## 🚀 التقنيات المستخدمة

- **HTML5** - هيكل التطبيق
- **CSS3** - التصميم والرسوم المتحركة
- **JavaScript ES6+** - المنطق والتفاعل
- **PWA** - تطبيق ويب متقدم
- **Capacitor** - تحويل لتطبيق موبايل
- **Service Worker** - العمل الأوفلاين
- **Geolocation API** - تحديد الموقع
- **Notification API** - الإشعارات
- **Web Manifest** - تثبيت التطبيق

## 📱 التثبيت والاستخدام

### 🌐 الاستخدام كـ PWA (موصى به)

1. افتح الرابط في المتصفح: [https://your-username.github.io/islamic-app-comprehensive](https://your-username.github.io/islamic-app-comprehensive)
2. اضغط على "إضافة إلى الشاشة الرئيسية" في المتصفح
3. التطبيق سيظهر كتطبيق مستقل على جهازك

### 📱 تحميل APK للأندرويد

1. اذهب إلى صفحة [Releases](https://github.com/your-username/islamic-app-comprehensive/releases)
2. حمل أحدث إصدار APK
3. فعل "التثبيت من مصادر غير معروفة" في إعدادات الأندرويد
4. ثبت التطبيق

### 🍎 التثبيت على iOS

- استخدم الرابط المباشر وأضف التطبيق كـ PWA من Safari
- أو انتظر إصدار App Store (قريباً)

## ⚙️ التطوير المحلي

### المتطلبات الأساسية

```bash
# Node.js 16+ مطلوب
node --version
npm --version

# Git للاستنساخ
git --version
```

### 🛠️ إعداد المشروع

```bash
# استنساخ المشروع
git clone https://github.com/your-username/islamic-app-comprehensive.git
cd islamic-app-comprehensive

# تثبيت التبعيات
npm install

# تشغيل الخادم المحلي
npm run serve
```

### 📱 بناء APK

```bash
# إعداد Capacitor للأندرويد
npm run android:prepare

# مزامنة الملفات
npm run capacitor:sync

# فتح مشروع الأندرويد
npm run android:open

# أو بناء APK مباشرة
npm run android:build
```

### 🍎 بناء تطبيق iOS

```bash
# إعداد Capacitor لـ iOS
npm run ios:prepare

# مزامنة الملفات
npm run capacitor:sync

# فتح مشروع iOS
npm run ios:open
```

## 📁 هيكل المشروع

```
islamic-app-comprehensive/
├── 📄 index.html              # الصفحة الرئيسية
├── 🎨 styles.css              # ملف الأنماط
├── ⚡ app.js                  # المنطق الرئيسي
├── 📖 quran-data.js           # بيانات القرآن
├── 🔧 sw.js                   # Service Worker
├── 📱 manifest.json           # Web App Manifest
├── ⚙️ capacitor.config.ts     # إعدادات Capacitor
├── 📦 package.json            # تبعيات المشروع
├── 🖼️ icons/                  # أيقونات التطبيق
├── 🤖 android/                # مشروع الأندرويد
├── 🍎 ios/                    # مشروع iOS
└── 📚 docs/                   # الوثائق
```

## 🌟 المساهمة في المشروع

نرحب بمساهماتكم! يمكنكم:

1. **🍴 Fork** المشروع
2. **🌿 إنشاء branch جديد** للميزة الجديدة
3. **💻 تطوير** الميزة أو إصلاح الخطأ
4. **✅ اختبار** التغييرات
5. **📝 إرسال Pull Request**

### 🐛 الإبلاغ عن الأخطاء

استخدم [Issues](https://github.com/your-username/islamic-app-comprehensive/issues) للإبلاغ عن:
- الأخطاء البرمجية
- طلبات الميزات الجديدة
- تحسينات الأداء
- مقترحات التصميم

## 📜 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 🤝 شكر وتقدير

- **API القرآن**: [Al Quran Cloud](https://alquran.cloud/)
- **أوقات الصلاة**: [Aladhan API](https://aladhan.com/)
- **الخطوط العربية**: خط عثماني أصيل
- **الأيقونات**: [Ionicons](https://ionicons.com/)

## 📞 التواصل

- 📧 البريد الإلكتروني: islamic.app.team@gmail.com
- 💬 Telegram: [@IslamicAppSupport](https://t.me/IslamicAppSupport)
- 🐦 Twitter: [@IslamicApp2024](https://twitter.com/IslamicApp2024)

## 🎯 خارطة الطريق

### الإصدار القادم v2.1.0
- [ ] 🔊 قراءة صوتية للقرآن
- [ ] 🌙 تقويم هجري كامل
- [ ] 📍 مواقع المساجد القريبة
- [ ] 🕋 معلومات الحج والعمرة
- [ ] 📚 مكتبة الأحاديث النبوية

### المستقبل
- [ ] 🎓 دروس إسلامية يومية
- [ ] 👥 مجتمع المستخدمين
- [ ] 🌍 دعم لغات أخرى
- [ ] 📊 إحصائيات شخصية
- [ ] 🎮 مسابقات إسلامية

---

<div align="center">

**جعل الله هذا العمل في ميزان حسناتنا وحسناتكم** ❤️

![GitHub stars](https://img.shields.io/github/stars/your-username/islamic-app-comprehensive?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/islamic-app-comprehensive?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/islamic-app-comprehensive)
![GitHub license](https://img.shields.io/github/license/your-username/islamic-app-comprehensive)

</div>