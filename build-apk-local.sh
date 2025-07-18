#!/bin/bash

# 🚀 سكريبت بناء APK للتطبيق الإسلامي الشامل
# Build Script for Islamic App Enhanced

set -e

echo "🕌 === بناء التطبيق الإسلامي الشامل ==="
echo "📱 Islamic App Enhanced - APK Builder"
echo "================================================"

# التحقق من وجود Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js غير مثبت! يرجى تثبيت Node.js أولاً"
    echo "📥 تحميل من: https://nodejs.org/"
    exit 1
fi

# التحقق من وجود Java
if ! command -v java &> /dev/null; then
    echo "❌ Java غير مثبت! يرجى تثبيت Java 11 أو أحدث"
    echo "📥 تحميل من: https://adoptium.net/"
    exit 1
fi

# التحقق من ANDROID_HOME
if [ -z "$ANDROID_HOME" ]; then
    echo "⚠️  ANDROID_HOME غير محدد!"
    echo "🔧 يرجى تثبيت Android Studio وتعيين ANDROID_HOME"
    echo "📖 اتبع الإرشادات: https://capacitorjs.com/docs/getting-started/environment-setup"
    
    # محاولة العثور على Android SDK تلقائياً
    POSSIBLE_PATHS=(
        "$HOME/Android/Sdk"
        "$HOME/Library/Android/sdk"
        "/opt/android-sdk"
        "/usr/local/android-sdk"
    )
    
    for path in "${POSSIBLE_PATHS[@]}"; do
        if [ -d "$path" ]; then
            echo "✅ تم العثور على Android SDK في: $path"
            export ANDROID_HOME="$path"
            export PATH="$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools"
            break
        fi
    done
    
    if [ -z "$ANDROID_HOME" ]; then
        echo "❌ لم يتم العثور على Android SDK"
        exit 1
    fi
fi

echo "✅ Node.js: $(node --version)"
echo "✅ Java: $(java -version 2>&1 | head -1)"
echo "✅ Android SDK: $ANDROID_HOME"

# تنظيف المجلدات القديمة
echo "🧹 تنظيف الملفات القديمة..."
rm -rf dist android node_modules package-lock.json

# تثبيت التبعيات
echo "📦 تثبيت التبعيات..."
npm install
npm install -g @capacitor/cli

# إنشاء مجلد التوزيع
echo "🏗️  إنشاء ملفات الويب..."
mkdir -p dist

# نسخ الملفات
cp islamic-app-enhanced.html dist/index.html
cp *.js dist/ 2>/dev/null || echo "لا توجد ملفات JS إضافية"
cp *.json dist/ 2>/dev/null || echo "لا توجد ملفات JSON إضافية"

# نسخ الأيقونات إذا وجدت
if [ -d "icons" ]; then
    cp -r icons dist/
    echo "✅ تم نسخ الأيقونات"
fi

# تهيئة Capacitor
echo "⚡ تهيئة Capacitor..."
npx cap add android --quiet
npx cap sync android --quiet

# إنشاء gradle.properties
echo "🔧 إعداد Gradle..."
mkdir -p android/gradle
cat > android/gradle.properties << EOF
org.gradle.jvmargs=-Xmx4g -XX:MaxMetaspaceSize=512m
android.useAndroidX=true
android.enableJetifier=true
android.suppressUnsupportedCompileSdk=true
EOF

# نسخ ملف الأذونات
echo "🔐 إعداد الأذونات..."
if [ -f "android-permissions.xml" ]; then
    cp android-permissions.xml android/app/src/main/AndroidManifest.xml
    echo "✅ تم تطبيق ملف الأذونات"
fi

# بناء APK
echo "🔨 بناء APK..."
cd android

# إعطاء صلاحيات للتنفيذ
chmod +x gradlew

# بناء Debug APK
echo "📱 بناء Debug APK..."
./gradlew assembleDebug --no-daemon --stacktrace

# بناء Release APK (إذا كانت المفاتيح متوفرة)
if [ -f "app/release.keystore" ]; then
    echo "📱 بناء Release APK..."
    ./gradlew assembleRelease --no-daemon --stacktrace
else
    echo "⚠️  لا توجد مفاتيح Release، سيتم بناء Debug فقط"
fi

# العودة للمجلد الأساسي
cd ..

# إنشاء مجلد الإصدارات
echo "📦 تحضير ملفات الإصدار..."
mkdir -p releases

# الحصول على الإصدار
VERSION=$(node -p "require('./package.json').version")
DATE=$(date '+%Y%m%d_%H%M%S')

# نسخ APK files مع أسماء واضحة
if [ -f "android/app/build/outputs/apk/debug/app-debug.apk" ]; then
    cp android/app/build/outputs/apk/debug/app-debug.apk "releases/islamic-app-v${VERSION}-debug-${DATE}.apk"
    echo "✅ Debug APK: releases/islamic-app-v${VERSION}-debug-${DATE}.apk"
fi

if [ -f "android/app/build/outputs/apk/release/app-release.apk" ]; then
    cp android/app/build/outputs/apk/release/app-release.apk "releases/islamic-app-v${VERSION}-release-${DATE}.apk"
    echo "✅ Release APK: releases/islamic-app-v${VERSION}-release-${DATE}.apk"
fi

# إنشاء ملف معلومات
cat > releases/build-info-${DATE}.txt << EOF
🕌 التطبيق الإسلامي الشامل
Islamic App Enhanced

📱 الإصدار: v${VERSION}
📅 تاريخ البناء: $(date '+%Y-%m-%d %H:%M:%S')
🖥️  نظام البناء: $(uname -s) $(uname -m)
☕ Java: $(java -version 2>&1 | head -1)
📦 Node.js: $(node --version)
🤖 Android SDK: $ANDROID_HOME

✨ الميزات المدمجة:
• القرآن الكريم كاملاً (114 سورة)
• أوقات الصلاة الدقيقة مع GPS
• أذان صوتي من مصادر موثوقة  
• بوصلة القبلة الذكية
• أذكار الصباح والمساء وقبل النوم
• 5 ثيمات جميلة (افتراضي، ليلي، ذهبي، روحاني، نقي)
• رسوم متحركة وتأثيرات بصرية
• إشعارات أوقات الصلاة
• يعمل أوفلاين بالكامل
• PWA متكامل

📥 الملفات:
EOF

if [ -f "releases/islamic-app-v${VERSION}-debug-${DATE}.apk" ]; then
    echo "• islamic-app-v${VERSION}-debug-${DATE}.apk (للتجربة والتطوير)" >> releases/build-info-${DATE}.txt
    APK_SIZE=$(du -h "releases/islamic-app-v${VERSION}-debug-${DATE}.apk" | cut -f1)
    echo "  حجم الملف: $APK_SIZE" >> releases/build-info-${DATE}.txt
fi

if [ -f "releases/islamic-app-v${VERSION}-release-${DATE}.apk" ]; then
    echo "• islamic-app-v${VERSION}-release-${DATE}.apk (للاستخدام العادي - موصى به)" >> releases/build-info-${DATE}.txt
    APK_SIZE=$(du -h "releases/islamic-app-v${VERSION}-release-${DATE}.apk" | cut -f1)
    echo "  حجم الملف: $APK_SIZE" >> releases/build-info-${DATE}.txt
fi

cat >> releases/build-info-${DATE}.txt << EOF

📱 متطلبات التشغيل:
• Android 7.0 (API 24) أو أحدث
• 50 MB مساحة تخزين فارغة
• اتصال إنترنت (للمزامنة الأولى فقط)

🔐 الأذونات المطلوبة:
• الموقع: لتحديد اتجاه القبلة وأوقات الصلاة
• الإشعارات: لتنبيهات أوقات الصلاة  
• الصوت: لتشغيل الأذان
• التخزين: لحفظ البيانات محلياً
• الشبكة: لتحديث أوقات الصلاة

🚀 طريقة التثبيت:
1. حمل ملف APK المناسب
2. فعل "مصادر غير معروفة" في إعدادات الأمان
3. اضغط على ملف APK لبدء التثبيت
4. اتبع التعليمات على الشاشة
5. استمتع بالتطبيق! 

💝 جزاكم الله خيراً
EOF

echo "================================================"
echo "🎉 تم بناء التطبيق بنجاح!"
echo "📁 الملفات متوفرة في مجلد: releases/"
echo ""
echo "📱 ملفات APK المتاحة:"
ls -la releases/*.apk 2>/dev/null || echo "لا توجد ملفات APK"
echo ""
echo "📖 اقرأ ملف build-info لمزيد من التفاصيل"
echo ""
echo "🚀 لرفع التطبيق إلى GitHub:"
echo "git add ."
echo "git commit -m '🚀 إصدار جديد v${VERSION}'"
echo "git push origin main"
echo ""
echo "📥 ستجد APK في GitHub Releases تلقائياً!"
echo "================================================"