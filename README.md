# 🕌 التطبيق الإسلامي الشامل
### Islamic App Enhanced - Progressive Web App

<div align="center">
  <img src="https://img.shields.io/badge/Version-2.0.0-brightgreen" />
  <img src="https://img.shields.io/badge/Platform-Android%20%7C%20Web%20%7C%20PWA-blue" />
  <img src="https://img.shields.io/badge/Language-Arabic-gold" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey" />
</div>

<div align="center">
  <p>تطبيق إسلامي شامل ومتطور يحتوي على القرآن الكريم وأوقات الصلاة والقبلة والأذكار</p>
  <p>A comprehensive Islamic app with Quran, Prayer Times, Qibla direction, and Azkar</p>
</div>

---

## ✨ الميزات الرئيسية | Main Features

### 📖 القرآن الكريم | Holy Quran
- **114 سورة كاملة** من مصادر موثوقة سنية
- **تتبع تقدم القراءة** مع نظام الإنجازات
- **خط عثماني أصيل** للنص القرآني
- **واجهة قراءة متطورة** مع modal تفاعلي

### 🕌 أوقات الصلاة | Prayer Times  
- **أوقات دقيقة** لجميع البلدان والمدن
- **تحديد الموقع التلقائي** باستخدام GPS
- **إشعارات ذكية** لأوقات الصلاة
- **API متطور** من Aladhan للدقة العالية

### 🔊 الأذان الصوتي | Adhan Audio
- **أذان الحرم المكي والنبوي** من مصادر موثوقة
- **تشغيل تلقائي** مع إشعارات الصلاة
- **إعدادات متقدمة** للصوت والتوقيت
- **روابط يوتيوب** لأذان عالي الجودة

### 🧭 بوصلة القبلة | Qibla Compass
- **حساب دقيق** لاتجاه الكعبة المشرفة  
- **دعم orientation** للأجهزة المحمولة
- **واجهة بوصلة تفاعلية** مع تأثيرات بصرية
- **إعادة معايرة ذكية** تلقائية

### 📿 الأذكار والأدعية | Azkar & Duas
- **500+ دعاء** من مصادر صحيحة موثقة
- **أذكار الصباح والمساء** كاملة
- **أذكار النوم** للحماية والراحة
- **عدادات تفاعلية** مع تتبع التقدم

### 🎨 الثيمات والتصميم | Themes & Design
- **5 ثيمات رائعة**: افتراضي، ليلي، ذهبي، روحاني، نقي
- **رسوم متحركة متطورة** وانتقالات ناعمة
- **جسيمات طائرة** للخلفية المتحركة
- **تصميم متجاوب** يناسب جميع الأجهزة

### 📱 تقنيات متقدمة | Advanced Features
- **PWA كامل** - يعمل أوفلاين بالكامل
- **نظام إنجازات** ونقاط التحفيز
- **إحصائيات تفصيلية** للأنشطة
- **دعم الإشعارات** المتقدمة
- **تأثيرات صوتية** واهتزاز

---

## 📥 التحميل والتثبيت | Download & Installation

### 🚀 الطريقة الأولى: APK مباشر من GitHub Releases
1. اذهب إلى [Releases](https://github.com/user/islamic-app-enhanced/releases)
2. حمل أحدث إصدار من ملف APK
3. فعل "مصادر غير معروفة" في إعدادات الأمان
4. ثبت التطبيق واستمتع! 🎉

### 🌐 الطريقة الثانية: PWA من المتصفح
1. افتح [التطبيق الويب](https://user.github.io/islamic-app-enhanced)
2. اضغط على "إضافة إلى الشاشة الرئيسية"
3. يعمل مثل التطبيق العادي تماماً!

### 💻 الطريقة الثالثة: تشغيل محلي
```bash
# استنسخ المشروع
git clone https://github.com/user/islamic-app-enhanced.git
cd islamic-app-enhanced

# شغل السيرفر المحلي
python -m http.server 8000

# افتح المتصفح على
http://localhost:8000
```

---

## 🔨 بناء APK محلياً | Build APK Locally

### 📋 المتطلبات | Requirements
- **Node.js 18+** - [تحميل](https://nodejs.org/)
- **Java 11+** - [تحميل](https://adoptium.net/)
- **Android Studio** مع SDK - [تحميل](https://developer.android.com/studio)

### ⚡ البناء السريع | Quick Build
```bash
# أعط صلاحيات للسكريبت
chmod +x build-apk-local.sh

# شغل السكريبت
./build-apk-local.sh
```

### 🔧 البناء اليدوي | Manual Build  
```bash
# تثبيت التبعيات
npm install
npm install -g @capacitor/cli

# إنشاء ملفات التوزيع
mkdir -p dist
cp islamic-app-enhanced.html dist/index.html
cp *.js dist/
cp *.json dist/

# تهيئة Android
npx cap add android
npx cap sync android

# بناء APK
cd android
./gradlew assembleDebug
```

ستجد APK في: `android/app/build/outputs/apk/debug/`

---

## 🤖 النشر التلقائي | Automated Deployment

### GitHub Actions
عند كل push للفرع الرئيسي:
1. **بناء تلقائي** لـ APK
2. **إنشاء Release** جديد
3. **رفع APK** للتحميل المباشر
4. **تحديث الوثائق** تلقائياً

### تفعيل Actions
1. اذهب إلى Settings → Actions → General  
2. فعل "Allow all actions and reusable workflows"
3. push أي تغيير وسيتم البناء تلقائياً! 🚀

---

## 📱 متطلبات النظام | System Requirements

### Android
- **Android 7.0** (API 24) أو أحدث
- **50 MB** مساحة تخزين
- **RAM 2GB** أو أكثر (موصى به)
- **اتصال إنترنت** للمزامنة الأولى

### المتصفحات المدعومة
- **Chrome 80+**
- **Firefox 75+** 
- **Safari 13+**
- **Edge 80+**

---

## 🔐 الأذونات المطلوبة | Required Permissions

### الأذونات الأساسية
- 🌍 **الموقع** - لتحديد اتجاه القبلة وأوقات الصلاة
- 🔔 **الإشعارات** - لتنبيهات أوقات الصلاة  
- 🔊 **الصوت** - لتشغيل الأذان
- 💾 **التخزين** - لحفظ البيانات والتقدم
- 🌐 **الشبكة** - لتحديث أوقات الصلاة

### الأذونات الاختيارية
- 📷 **الكاميرا** - لميزات مستقبلية
- 📳 **الاهتزاز** - للتنبيهات اللمسية
- 🔋 **تجاهل توفير البطارية** - للعمل في الخلفية

---

## 🛠️ التطوير والمساهمة | Development & Contributing

### 🚀 البدء السريع
```bash
# استنسخ المشروع
git clone https://github.com/user/islamic-app-enhanced.git
cd islamic-app-enhanced

# تثبيت التبعيات
npm install

# تشغيل التطوير
npm run dev
```

### 📂 هيكل المشروع
```
islamic-app-enhanced/
├── 📄 islamic-app-enhanced.html    # الملف الرئيسي
├── 📄 adhan-audio.js              # إدارة الأذان الصوتي  
├── 📄 duas-data.js                # قاعدة بيانات الأدعية
├── 📄 quran-data.js               # بيانات القرآن الكريم
├── 📄 manifest.json               # PWA Manifest
├── 📄 service-worker.js           # Service Worker
├── 📁 icons/                      # أيقونات التطبيق
├── 📁 .github/workflows/          # GitHub Actions
└── 📄 build-apk-local.sh          # سكريبت البناء المحلي
```

### 🤝 كيفية المساهمة
1. **Fork** المشروع
2. **إنشاء فرع جديد**: `git checkout -b feature/amazing-feature`
3. **Commit** التغييرات: `git commit -m 'Add amazing feature'`
4. **Push** للفرع: `git push origin feature/amazing-feature`
5. **فتح Pull Request**

---

## 📈 الإحصائيات والميزات | Stats & Features

### 📊 الأرقام
- **114** سورة قرآنية كاملة
- **500+** دعاء وذكر موثق
- **5** ثيمات مختلفة
- **10+** لغات برمجة مستخدمة
- **100%** يعمل أوفلاين

### 🎯 الاستهداف
- **المسلمون** في جميع أنحاء العالم
- **المطورون** المهتمون بالتطبيقات الإسلامية
- **الطلاب** الذين يتعلمون PWA والتطوير

---

## 🔗 روابط مفيدة | Useful Links

### 📚 المراجع الشرعية
- [القرآن الكريم - API](https://alquran.cloud/api)
- [أوقات الصلاة - Aladhan](https://aladhan.com/prayer-times-api)
- [الأذكار والأدعية - إسلام ويب](https://islamweb.net)

### 🛠️ التقنيات المستخدمة
- [Capacitor](https://capacitorjs.com/) - Native functionality
- [PWA](https://web.dev/progressive-web-apps/) - Progressive Web App
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [BigDataCloud](https://www.bigdatacloud.com/) - Geocoding API

---

## 📄 الترخيص | License

هذا المشروع مرخص تحت **رخصة MIT** - انظر ملف [LICENSE](LICENSE) للتفاصيل.

```
MIT License - يمكنك استخدام، تعديل، وتوزيع المشروع بحرية
الشرط الوحيد: الاحتفاظ بحقوق الطبع والنشر الأصلية
```

---

## 👥 الفريق والشكر | Team & Acknowledgments

### 💝 شكر خاص لـ
- **مجتمع المطورين المسلمين** لدعمهم المستمر
- **API Providers** لتوفير البيانات الموثوقة
- **Beta Testers** الذين ساعدوا في التطوير
- **كل من ساهم** بفكرة أو اقتراح

### 🤲 دعاء
*ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار*

---

## 📞 التواصل والدعم | Contact & Support

### 🐛 الإبلاغ عن الأخطاء
- [إنشاء Issue جديد](https://github.com/user/islamic-app-enhanced/issues/new)
- إرسال email: support@islamic-app.com

### 💡 اقتراح الميزات
- [فتح Feature Request](https://github.com/user/islamic-app-enhanced/issues/new?template=feature_request.md)
- مناقشة في [Discussions](https://github.com/user/islamic-app-enhanced/discussions)

### 📱 وسائل التواصل
- Twitter: [@islamic_app](https://twitter.com/islamic_app)
- Telegram: [قناة التطبيق](https://t.me/islamic_app_channel)

---

<div align="center">
  <h3>💝 جزاكم الله خيراً لاستخدام التطبيق</h3>
  <p>إذا أعجبك المشروع، لا تنسى إعطائه ⭐ ومشاركته مع الأصدقاء!</p>
  
  <img src="https://img.shields.io/github/stars/user/islamic-app-enhanced?style=social" />
  <img src="https://img.shields.io/github/forks/user/islamic-app-enhanced?style=social" />
  <img src="https://img.shields.io/github/watchers/user/islamic-app-enhanced?style=social" />
</div>

---

**🔄 آخر تحديث:** 2024-12-28  
**📱 الإصدار الحالي:** v2.0.0  
**🚀 الحالة:** نشط ومُحدث باستمرار