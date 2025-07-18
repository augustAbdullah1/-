#!/bin/bash

# 🏗️ سكريبت بناء APK للتطبيق الإسلامي الشامل
# Build APK Script for Comprehensive Islamic App

echo "🕌 بدء بناء التطبيق الإسلامي الشامل..."
echo "🏗️ Starting Comprehensive Islamic App Build..."

# التحقق من وجود Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js غير مثبت. يرجى تثبيت Node.js أولاً"
    echo "❌ Node.js is not installed. Please install Node.js first"
    exit 1
fi

# التحقق من وجود npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm غير مثبت. يرجى تثبيت npm أولاً"
    echo "❌ npm is not installed. Please install npm first"
    exit 1
fi

echo "✅ Node.js و npm مثبتان بنجاح"
echo "✅ Node.js and npm are installed"

# تثبيت التبعيات إذا لم تكن مثبتة
if [ ! -d "node_modules" ]; then
    echo "📦 تثبيت التبعيات..."
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ فشل في تثبيت التبعيات"
        echo "❌ Failed to install dependencies"
        exit 1
    fi
fi

echo "✅ التبعيات مثبتة بنجاح"
echo "✅ Dependencies installed successfully"

# إعداد Capacitor للأندرويد إذا لم يكن موجوداً
if [ ! -d "android" ]; then
    echo "🤖 إعداد مشروع الأندرويد..."
    echo "🤖 Setting up Android project..."
    npx cap add android
    if [ $? -ne 0 ]; then
        echo "❌ فشل في إعداد مشروع الأندرويد"
        echo "❌ Failed to setup Android project"
        exit 1
    fi
fi

echo "✅ مشروع الأندرويد جاهز"
echo "✅ Android project ready"

# مزامنة الملفات
echo "🔄 مزامنة الملفات..."
echo "🔄 Syncing files..."
npx cap sync android
if [ $? -ne 0 ]; then
    echo "❌ فشل في مزامنة الملفات"
    echo "❌ Failed to sync files"
    exit 1
fi

echo "✅ تمت المزامنة بنجاح"
echo "✅ Sync completed successfully"

# التحقق من وجود Android Studio أو Gradle
if command -v gradle &> /dev/null; then
    echo "🏗️ بناء APK باستخدام Gradle..."
    echo "🏗️ Building APK using Gradle..."
    
    cd android
    ./gradlew assembleDebug
    if [ $? -eq 0 ]; then
        echo "✅ تم بناء APK بنجاح!"
        echo "✅ APK built successfully!"
        echo "📱 مسار APK: android/app/build/outputs/apk/debug/app-debug.apk"
        echo "📱 APK path: android/app/build/outputs/apk/debug/app-debug.apk"
        
        # نسخ APK إلى المجلد الرئيسي
        if [ -f "app/build/outputs/apk/debug/app-debug.apk" ]; then
            cp app/build/outputs/apk/debug/app-debug.apk ../islamic-app-v2.0.0.apk
            echo "📋 تم نسخ APK إلى: islamic-app-v2.0.0.apk"
            echo "📋 APK copied to: islamic-app-v2.0.0.apk"
        fi
    else
        echo "❌ فشل في بناء APK"
        echo "❌ Failed to build APK"
        exit 1
    fi
    cd ..
else
    echo "⚠️ Gradle غير متوفر. يرجى فتح Android Studio لبناء APK"
    echo "⚠️ Gradle not available. Please use Android Studio to build APK"
    echo "🚀 فتح Android Studio..."
    echo "🚀 Opening Android Studio..."
    npx cap open android
fi

echo ""
echo "🎉 اكتمل بناء التطبيق!"
echo "🎉 App build completed!"
echo ""
echo "📱 للحصول على APK:"
echo "📱 To get APK:"
echo "   1. إما استخدام الملف: islamic-app-v2.0.0.apk"
echo "   1. Either use file: islamic-app-v2.0.0.apk"
echo "   2. أو من: android/app/build/outputs/apk/debug/app-debug.apk"
echo "   2. Or from: android/app/build/outputs/apk/debug/app-debug.apk"
echo ""
echo "🌐 للنشر على GitHub:"
echo "🌐 To publish on GitHub:"
echo "   1. git add ."
echo "   2. git commit -m 'Initial release v2.0.0'"
echo "   3. git push origin main"
echo "   4. Create release with APK file"
echo ""
echo "🕌 بارك الله فيك!"
echo "🕌 May Allah bless you!"