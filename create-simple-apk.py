#!/usr/bin/env python3
"""
🚀 سكريبت إنشاء APK للتطبيق الإسلامي الشامل
Simple APK Generator for Islamic App Enhanced
"""

import os
import shutil
import zipfile
import json
from datetime import datetime

def create_apk():
    print("🕌 === إنشاء APK للتطبيق الإسلامي الشامل ===")
    print("📱 Islamic App Enhanced APK Generator")
    print("=" * 50)
    
    # إنشاء مجلد الإصدارات
    releases_dir = "releases"
    os.makedirs(releases_dir, exist_ok=True)
    
    # معلومات التطبيق
    app_info = {
        "name": "التطبيق الإسلامي الشامل",
        "package": "com.islamic.app.enhanced",
        "version": "2.0.0",
        "build_date": datetime.now().strftime("%Y%m%d_%H%M%S")
    }
    
    # إنشاء ملف APK وهمي (للتجربة)
    # في الواقع، هذا ملف ZIP يحتوي على جميع ملفات التطبيق
    apk_filename = f"islamic-app-v{app_info['version']}-{app_info['build_date']}.apk"
    apk_path = os.path.join(releases_dir, apk_filename)
    
    print(f"📦 إنشاء ملف APK: {apk_filename}")
    
    # إنشاء ZIP (APK هو في الأساس ملف ZIP)
    with zipfile.ZipFile(apk_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        # إضافة الملفات الرئيسية
        files_to_include = [
            'islamic-app-enhanced.html',
            'adhan-audio.js',
            'duas-data.js', 
            'quran-data.js',
            'manifest.json',
            'service-worker.js',
            'package.json',
            'capacitor.config.ts'
        ]
        
        for file in files_to_include:
            if os.path.exists(file):
                zipf.write(file, f"assets/www/{file}")
                print(f"✅ تمت إضافة: {file}")
        
        # إضافة ملف معلومات APK
        apk_info = f"""
التطبيق الإسلامي الشامل
Islamic App Enhanced

الإصدار: {app_info['version']}
تاريخ البناء: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
حجم الملف: APK محاكي للتجربة

الميزات:
• القرآن الكريم كاملاً (114 سورة)
• أوقات الصلاة الدقيقة
• أذان صوتي من مصادر موثوقة
• بوصلة القبلة الذكية
• أذكار الصباح والمساء وقبل النوم
• 5 ثيمات جميلة
• رسوم متحركة متطورة
• PWA كامل

ملاحظة: هذا ملف APK تجريبي. للحصول على APK فعلي،
يجب بناؤه باستخدام Android Studio.

للتجربة: افتح islamic-app-enhanced.html في المتصفح
        """
        
        zipf.writestr("APK_INFO.txt", apk_info)
        
        # إضافة Android Manifest مبسط
        android_manifest = """<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.islamic.app.enhanced"
    android:versionCode="1"
    android:versionName="2.0.0">
    
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    
    <application
        android:label="التطبيق الإسلامي"
        android:icon="@drawable/icon">
        
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        
    </application>
</manifest>"""
        
        zipf.writestr("AndroidManifest.xml", android_manifest)
    
    # إنشاء ملف معلومات الإصدار
    build_info_file = os.path.join(releases_dir, f"build-info-{app_info['build_date']}.txt")
    with open(build_info_file, 'w', encoding='utf-8') as f:
        f.write(f"""🕌 التطبيق الإسلامي الشامل
Islamic App Enhanced

📱 الإصدار: v{app_info['version']}
📅 تاريخ البناء: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
🔨 طريقة البناء: Python APK Generator
📁 اسم الملف: {apk_filename}
📏 حجم الملف: {os.path.getsize(apk_path) / 1024:.1f} KB

✨ الميزات المدمجة:
• القرآن الكريم كاملاً (114 سورة)
• أوقات الصلاة الدقيقة مع GPS
• أذان صوتي من مصادر موثوقة يوتيوب
• بوصلة القبلة الذكية
• أذكار الصباح والمساء وقبل النوم (500+ دعاء)
• 5 ثيمات جميلة (افتراضي، ليلي، ذهبي، روحاني، نقي)
• رسوم متحركة وتأثيرات بصرية
• إشعارات أوقات الصلاة
• PWA كامل يعمل أوفلاين

🔐 الأذونات المطلوبة:
• الموقع: لتحديد اتجاه القبلة وأوقات الصلاة
• الإشعارات: لتنبيهات أوقات الصلاة
• الصوت: لتشغيل الأذان
• التخزين: لحفظ البيانات محلياً
• الشبكة: لتحديث أوقات الصلاة

📝 ملاحظة مهمة:
هذا ملف APK تجريبي تم إنشاؤه للتجربة فقط.
للحصول على APK فعلي قابل للتثبيت، يُنصح باستخدام:
- Android Studio مع Capacitor
- GitHub Actions للبناء التلقائي
- Cordova لبناء APK متقدم

🚀 للتجربة الفورية:
1. افتح islamic-app-enhanced.html في المتصفح
2. أضف التطبيق للشاشة الرئيسية كـ PWA
3. استمتع بجميع الميزات!

💝 جزاكم الله خيراً
""")
    
    # طباعة النتائج
    print(f"""
{'='*50}
🎉 تم إنشاء APK بنجاح!
📁 المجلد: {releases_dir}/
📱 ملف APK: {apk_filename}
📏 الحجم: {os.path.getsize(apk_path) / 1024:.1f} KB
📖 معلومات: build-info-{app_info['build_date']}.txt

⚠️  ملاحظة: هذا APK تجريبي للعرض فقط
🌐 للتجربة الفعلية: افتح islamic-app-enhanced.html
📱 للـ APK الحقيقي: استخدم Android Studio + Capacitor

🚀 الملفات جاهزة في مجلد releases/
{'='*50}
""")
    
    return apk_path

if __name__ == "__main__":
    create_apk()