// 🔊 إدارة الأذان الصوتي - Adhan Audio Manager
const AdhanAudioManager = {
    // روابط الأذان الصوتية من مصادر موثوقة
    adhanAudios: {
        makkah: {
            name: "أذان الحرم المكي",
            url: "https://www.youtube.com/watch?v=hzGWnxMpPyg", // أذان الحرم المكي
            audioUrl: "https://archive.org/download/AdhanMakkah/adhan_makkah.mp3",
            duration: 180 // 3 دقائق
        },
        madinah: {
            name: "أذان الحرم المدني", 
            url: "https://www.youtube.com/watch?v=9Q7O5R7eAC4", // أذان الحرم النبوي
            audioUrl: "https://archive.org/download/AdhanMadinah/adhan_madinah.mp3",
            duration: 195 // 3.25 دقيقة
        },
        beautiful: {
            name: "أذان جميل",
            url: "https://www.youtube.com/watch?v=XTC8v-hJ8Eg", // أذان جميل
            audioUrl: "https://archive.org/download/BeautifulAdhan/beautiful_adhan.mp3",
            duration: 170 // 2.8 دقيقة
        },
        classic: {
            name: "أذان تقليدي",
            audioUrl: "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+LyvmQcBSyBzvLZiTYIG2y98uihUAwPUqng7nNHFAgLQrfp66hSFApGn+LyvmQcBS2Cz/LZ1", 
            duration: 120 // 2 دقيقة
        }
    },

    // الأذان المحدد حالياً
    selectedAdhan: 'makkah',
    
    // حالة الصوت
    audioContext: null,
    currentAudio: null,
    isPlaying: false,
    
    // إعدادات الأذان
    settings: {
        enabled: true,
        volume: 0.8,
        fadeIn: true,
        fadeInDuration: 3000, // 3 ثواني
        autoStop: true,
        stopAfterMinutes: 3
    },

    // تهيئة مدير الأذان
    init() {
        this.loadSettings();
        this.setupAudioContext();
        this.preloadAudios();
        console.log('🔊 تم تهيئة مدير الأذان الصوتي');
    },

    // إعداد Audio Context
    setupAudioContext() {
        if ('AudioContext' in window || 'webkitAudioContext' in window) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    // تحميل الإعدادات المحفوظة
    loadSettings() {
        const saved = localStorage.getItem('adhan_settings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
        }
        
        const selectedAdhan = localStorage.getItem('selected_adhan');
        if (selectedAdhan && this.adhanAudios[selectedAdhan]) {
            this.selectedAdhan = selectedAdhan;
        }
    },

    // حفظ الإعدادات
    saveSettings() {
        localStorage.setItem('adhan_settings', JSON.stringify(this.settings));
        localStorage.setItem('selected_adhan', this.selectedAdhan);
    },

    // تحميل الملفات الصوتية مسبقاً
    async preloadAudios() {
        for (const [key, adhan] of Object.entries(this.adhanAudios)) {
            try {
                // تحميل مسبق للملفات الصوتية
                const audio = new Audio();
                audio.preload = 'metadata';
                audio.src = adhan.audioUrl;
                adhan.audioElement = audio;
            } catch (error) {
                console.warn(`تعذر تحميل ${adhan.name}:`, error);
            }
        }
    },

    // تشغيل الأذان
    async playAdhan(prayerName = '') {
        if (!this.settings.enabled) {
            console.log('🔇 الأذان معطل في الإعدادات');
            return;
        }

        try {
            // إيقاف أي أذان حالي
            this.stopAdhan();

            // الحصول على الأذان المحدد
            const adhanData = this.adhanAudios[this.selectedAdhan];
            if (!adhanData) {
                console.error('❌ لم يتم العثور على الأذان المحدد');
                return;
            }

            // إنشاء عنصر صوتي جديد
            this.currentAudio = new Audio(adhanData.audioUrl);
            this.currentAudio.volume = this.settings.fadeIn ? 0 : this.settings.volume;
            this.currentAudio.loop = false;

            // إعداد أحداث الصوت
            this.setupAudioEvents(prayerName);

            // تشغيل الصوت
            const playPromise = this.currentAudio.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        this.isPlaying = true;
                        console.log(`🔊 بدء تشغيل الأذان: ${adhanData.name}`);
                        
                        // تأثير Fade In
                        if (this.settings.fadeIn) {
                            this.fadeInAudio();
                        }
                        
                        // إيقاف تلقائي
                        if (this.settings.autoStop) {
                            setTimeout(() => {
                                this.stopAdhan();
                            }, this.settings.stopAfterMinutes * 60 * 1000);
                        }
                    })
                    .catch(error => {
                        console.error('❌ خطأ في تشغيل الأذان:', error);
                        this.showAdhanNotification(prayerName, true);
                    });
            }

        } catch (error) {
            console.error('❌ خطأ في تشغيل الأذان:', error);
            this.showAdhanNotification(prayerName, true);
        }
    },

    // إعداد أحداث الصوت
    setupAudioEvents(prayerName) {
        if (!this.currentAudio) return;

        this.currentAudio.addEventListener('ended', () => {
            this.isPlaying = false;
            console.log('✅ انتهى تشغيل الأذان');
        });

        this.currentAudio.addEventListener('error', (e) => {
            console.error('❌ خطأ في تشغيل الأذان:', e);
            this.showAdhanNotification(prayerName, true);
        });

        this.currentAudio.addEventListener('loadstart', () => {
            console.log('📡 بدء تحميل الأذان...');
        });

        this.currentAudio.addEventListener('canplay', () => {
            console.log('✅ الأذان جاهز للتشغيل');
        });
    },

    // تأثير Fade In
    fadeInAudio() {
        if (!this.currentAudio) return;

        const duration = this.settings.fadeInDuration;
        const steps = 50;
        const stepTime = duration / steps;
        const volumeStep = this.settings.volume / steps;
        
        let currentStep = 0;
        
        const fadeInterval = setInterval(() => {
            if (!this.currentAudio || !this.isPlaying) {
                clearInterval(fadeInterval);
                return;
            }
            
            currentStep++;
            this.currentAudio.volume = Math.min(volumeStep * currentStep, this.settings.volume);
            
            if (currentStep >= steps) {
                clearInterval(fadeInterval);
            }
        }, stepTime);
    },

    // إيقاف الأذان
    stopAdhan() {
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            this.currentAudio = null;
        }
        this.isPlaying = false;
        console.log('⏹️ تم إيقاف الأذان');
    },

    // إظهار إشعار الأذان
    showAdhanNotification(prayerName, isError = false) {
        if (!('Notification' in window)) {
            console.log('❌ المتصفح لا يدعم الإشعارات');
            return;
        }

        const title = isError ? 
            `🔇 حان وقت ${prayerName}` : 
            `🕌 أذان ${prayerName}`;
            
        const body = isError ? 
            'لم يتمكن من تشغيل الأذان الصوتي' : 
            'الله أكبر الله أكبر';

        const notification = new Notification(title, {
            body: body,
            icon: '/icons/icon-192x192.png',
            badge: '/icons/icon-72x72.png',
            tag: 'adhan-notification',
            requireInteraction: true,
            vibrate: [200, 100, 200, 100, 200],
            actions: [
                {
                    action: 'stop',
                    title: 'إيقاف الأذان'
                },
                {
                    action: 'close',
                    title: 'إغلاق'
                }
            ]
        });

        // التعامل مع نقرة الإشعار
        notification.onclick = () => {
            window.focus();
            notification.close();
        };

        // إغلاق تلقائي بعد 30 ثانية
        setTimeout(() => {
            notification.close();
        }, 30000);
    },

    // تغيير الأذان المحدد
    setSelectedAdhan(adhanKey) {
        if (this.adhanAudios[adhanKey]) {
            this.selectedAdhan = adhanKey;
            this.saveSettings();
            console.log(`✅ تم تحديد الأذان: ${this.adhanAudios[adhanKey].name}`);
        }
    },

    // تحديث إعدادات الأذان
    updateSettings(newSettings) {
        this.settings = { ...this.settings, ...newSettings };
        this.saveSettings();
        console.log('✅ تم تحديث إعدادات الأذان');
    },

    // تشغيل عينة من الأذان
    async playPreview(adhanKey) {
        const adhanData = this.adhanAudios[adhanKey];
        if (!adhanData) return;

        // إيقاف أي تشغيل حالي
        this.stopAdhan();

        // تشغيل عينة قصيرة
        const preview = new Audio(adhanData.audioUrl);
        preview.volume = this.settings.volume;
        preview.currentTime = 10; // البدء من الثانية 10
        
        try {
            await preview.play();
            
            // إيقاف بعد 15 ثانية
            setTimeout(() => {
                preview.pause();
            }, 15000);
            
        } catch (error) {
            console.error('❌ خطأ في تشغيل العينة:', error);
        }
    },

    // التحقق من أذونات الصوت
    async requestAudioPermission() {
        try {
            if (this.audioContext && this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }
            return true;
        } catch (error) {
            console.error('❌ خطأ في طلب أذونات الصوت:', error);
            return false;
        }
    },

    // جدولة الأذان لأوقات الصلاة
    scheduleAdhanForPrayer(prayerName, prayerTime) {
        const now = new Date();
        const [hours, minutes] = prayerTime.split(':');
        const prayerDate = new Date();
        prayerDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

        // إذا كان الوقت قد مضى اليوم، جدول للغد
        if (prayerDate <= now) {
            prayerDate.setDate(prayerDate.getDate() + 1);
        }

        const timeUntilPrayer = prayerDate.getTime() - now.getTime();

        // جدولة الأذان
        setTimeout(() => {
            this.playAdhan(prayerName);
        }, timeUntilPrayer);

        console.log(`⏰ تم جدولة أذان ${prayerName} في ${prayerTime}`);
    },

    // الحصول على قائمة الأذان المتاحة
    getAvailableAdhans() {
        return Object.entries(this.adhanAudios).map(([key, data]) => ({
            key,
            name: data.name,
            duration: data.duration
        }));
    }
};

// تصدير مدير الأذان
window.AdhanAudioManager = AdhanAudioManager;