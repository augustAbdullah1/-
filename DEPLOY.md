# 🚀 دليل النشر على GitHub - Deploy Guide

## 📋 المحتويات

1. [إعداد Repository على GitHub](#github-repo)
2. [رفع الملفات](#upload-files)
3. [تفعيل GitHub Pages](#github-pages)
4. [بناء APK](#build-apk)
5. [إنشاء Release](#create-release)
6. [نشر APK](#publish-apk)

---

## 🐙 إعداد Repository على GitHub {#github-repo}

### الخطوة 1: إنشاء Repository جديد

1. اذهب إلى [GitHub](https://github.com)
2. اضغط على **"New repository"**
3. أدخل المعلومات التالية:
   - **Repository name**: `islamic-app-comprehensive`
   - **Description**: `تطبيق إسلامي شامل - القرآن والصلاة والقبلة والأذكار`
   - ✅ **Public** (لتفعيل GitHub Pages مجاناً)
   - ✅ **Add a README file**
   - ✅ **Add .gitignore** → اختر **Node**
   - ✅ **Choose a license** → اختر **MIT License**

4. اضغط **"Create repository"**

---

## 📤 رفع الملفات {#upload-files}

### الطريقة الأولى: عبر GitHub Web Interface

1. اضغط **"uploading an existing file"**
2. اسحب جميع الملفات إلى الصفحة:
   ```
   ✅ index.html
   ✅ manifest.json
   ✅ sw.js
   ✅ quran-data.js
   ✅ package.json
   ✅ capacitor.config.ts
   ✅ build-apk.sh
   ✅ icons/
   ✅ .github/workflows/
   ```

3. أكتب commit message: `Initial release v2.0.0 🕌`
4. اضغط **"Commit changes"**

### الطريقة الثانية: عبر Git Commands

```bash
# استنساخ Repository
git clone https://github.com/YOUR-USERNAME/islamic-app-comprehensive.git
cd islamic-app-comprehensive

# نسخ الملفات إلى المجلد
# (انسخ جميع ملفات التطبيق هنا)

# إضافة الملفات
git add .
git commit -m "Initial release v2.0.0 🕌"
git push origin main
```

---

## 🌐 تفعيل GitHub Pages {#github-pages}

### الخطوات:

1. اذهب إلى **Settings** في repository
2. انزل إلى قسم **"Pages"**
3. في **Source**:
   - اختر **"Deploy from a branch"**
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. اضغط **"Save"**

### 🎉 النتيجة:
- التطبيق سيكون متاح على: `https://YOUR-USERNAME.github.io/islamic-app-comprehensive`
- يحدث تلقائياً عند كل push

---

## 📱 بناء APK {#build-apk}

### المتطلبات:
- Node.js 18+
- Android Studio أو Gradle
- Java 17+

### الخطوات:

#### 1. تثبيت التبعيات
```bash
npm install
```

#### 2. إعداد Capacitor
```bash
npx cap add android
npx cap sync android
```

#### 3. بناء APK (خيارات متعددة)

**الخيار أ: باستخدام السكريبت التلقائي**
```bash
chmod +x build-apk.sh
./build-apk.sh
```

**الخيار ب: باستخدام Android Studio**
```bash
npx cap open android
# ثم في Android Studio: Build → Build Bundle(s)/APK(s) → Build APK(s)
```

**الخيار ج: باستخدام Gradle مباشرة**
```bash
cd android
./gradlew assembleDebug
```

#### 4. العثور على APK
- المسار: `android/app/build/outputs/apk/debug/app-debug.apk`
- أو: `islamic-app-v2.0.0.apk` (إذا استخدمت السكريبت)

---

## 🏷️ إنشاء Release {#create-release}

### الخطوات:

1. اذهب إلى صفحة repository الرئيسية
2. اضغط **"Releases"** على الجانب الأيمن
3. اضغط **"Create a new release"**
4. املأ البيانات:

```
Tag version: v2.0.0
Release title: 🕌 التطبيق الإسلامي الشامل v2.0.0

Description:
## ✨ الميزات الجديدة

### 📖 القرآن الكريم
- 114 سورة كاملة من مصادر موثوقة
- خط عثماني أصيل
- تتبع التقدم في القراءة

### 🕌 أوقات الصلاة
- دقة عالية لجميع دول العالم
- تحديد تلقائي للموقع
- تنبيهات ذكية

### 🧭 بوصلة القبلة
- حساب دقيق للاتجاه
- واجهة تفاعلية

### 📿 عداد التسبيح
- أذكار متنوعة
- تحديد أهداف
- حفظ التقدم

### 🤲 الأدعية والأذكار
- مجموعة شاملة من الأدعية
- مصادر موثقة

## 📱 التحميل والتثبيت

### 🌐 PWA (موصى به)
- [فتح التطبيق](https://YOUR-USERNAME.github.io/islamic-app-comprehensive)
- اضغط "إضافة إلى الشاشة الرئيسية"

### 🤖 Android APK
- حمل الملف أدناه: `islamic-app-v2.0.0.apk`
- فعل "التثبيت من مصادر غير معروفة"
- ثبت التطبيق

---

**جعل الله هذا العمل في ميزان حسناتنا** ❤️
```

5. اختر **"Set as the latest release"**
6. اضغط **"Publish release"**

---

## 📲 نشر APK {#publish-apk}

### رفع APK إلى Release:

#### الطريقة الأولى: أثناء إنشاء Release
1. في صفحة إنشاء Release
2. اسحب ملف APK إلى منطقة **"Attach binaries"**
3. انتظر رفع الملف
4. اضغط **"Publish release"**

#### الطريقة الثانية: بعد إنشاء Release
1. اذهب إلى صفحة Release المنشور
2. اضغط **"Edit release"**
3. اسحب APK إلى منطقة الملفات
4. اضغط **"Update release"**

---

## 🔄 GitHub Actions التلقائي

### الميزات المفعلة:

✅ **PWA Build & Deploy**: يحدث تلقائياً عند push
✅ **APK Build**: يحدث تلقائياً عند إنشاء Release
✅ **Quality Check**: فحص جودة الكود
✅ **Auto Deploy**: نشر تلقائي على GitHub Pages

### مراقبة العملية:
- اذهب إلى تبويب **"Actions"**
- شاهد حالة البناء والنشر
- تحقق من اللوجز في حالة وجود أخطاء

---

## 📋 قائمة مراجعة النشر

### قبل النشر:
- [ ] جميع الملفات موجودة
- [ ] manifest.json محدث
- [ ] Service Worker يعمل
- [ ] الأيقونات متوفرة
- [ ] GitHub Actions مفعل

### بعد النشر:
- [ ] PWA يعمل على الرابط
- [ ] يمكن تثبيت PWA
- [ ] APK يحمل ويثبت بنجاح
- [ ] جميع الميزات تعمل
- [ ] الإشعارات تعمل
- [ ] يعمل أوفلاين

---

## 🆘 حل المشاكل الشائعة

### مشكلة: GitHub Pages لا يعمل
**الحل:**
1. تحقق من Settings → Pages
2. تأكد أن Source = "Deploy from a branch"
3. تأكد أن Branch = "main" و Folder = "/"
4. انتظر 5-10 دقائق

### مشكلة: APK لا يبنى
**الحل:**
1. تأكد من وجود Android SDK
2. تحقق من Java 17
3. تشغيل: `npx cap doctor`
4. مراجعة لوجز GitHub Actions

### مشكلة: PWA لا يثبت
**الحل:**
1. تحقق من manifest.json
2. تأكد من وجود Service Worker
3. استخدم HTTPS (GitHub Pages يوفر ذلك)
4. تحقق من حجم الأيقونات

---

## 📞 الدعم والمساعدة

- 📧 **البريد الإلكتروني**: islamic.app.team@gmail.com
- 🐛 **الأخطاء**: [GitHub Issues](https://github.com/YOUR-USERNAME/islamic-app-comprehensive/issues)
- 💬 **المناقشات**: [GitHub Discussions](https://github.com/YOUR-USERNAME/islamic-app-comprehensive/discussions)

---

## 🎯 الخطوات التالية

بعد النشر الناجح:

1. **📊 مراقبة الأداء**: استخدم Google Analytics
2. **🔄 التحديثات**: نشر إصدارات جديدة بانتظام
3. **📱 متجر التطبيقات**: رفع على Google Play Store
4. **🍎 iOS**: تطوير نسخة iOS
5. **🌍 الترويج**: مشاركة التطبيق مع المجتمع

---

<div align="center">

**🕌 بارك الله فيك ووفقك لكل خير**

**جعل الله هذا العمل في ميزان حسناتك** ❤️

</div>