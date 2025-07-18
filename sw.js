// Service Worker للتطبيق الإسلامي الشامل
const CACHE_NAME = 'islamic-app-v2.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/quran-data.js',
  '/styles.css',
  '/app.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  // إضافة الملفات الأساسية للتطبيق
];

// تثبيت Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 فتح الذاكرة المؤقتة');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ تم تثبيت Service Worker بنجاح');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('❌ خطأ في تثبيت Service Worker:', error);
      })
  );
});

// تفعيل Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ حذف الذاكرة المؤقتة القديمة:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ تم تفعيل Service Worker بنجاح');
      return self.clients.claim();
    })
  );
});

// اعتراض الطلبات وتقديم المحتوى من الذاكرة المؤقتة
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // إرجاع الملف من الذاكرة المؤقتة إذا وُجد
        if (response) {
          return response;
        }

        // إذا لم يوجد في الذاكرة المؤقتة، جلبه من الشبكة
        return fetch(event.request).then(response => {
          // التحقق من صحة الاستجابة
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // نسخ الاستجابة لحفظها في الذاكرة المؤقتة
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // في حالة عدم توفر الإنترنت، إرجاع صفحة أوفلاين
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
        });
      })
  );
});

// معالجة رسائل من التطبيق الرئيسي
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// إشعارات أوقات الصلاة
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/?notification=prayer')
  );
});

// معالجة الإشعارات في الخلفية
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      vibrate: [200, 100, 200],
      data: data.data,
      actions: [
        {
          action: 'view',
          title: 'عرض',
          icon: '/icons/icon-96x96.png'
        },
        {
          action: 'close',
          title: 'إغلاق'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// تحديث الذاكرة المؤقتة عند توفر إنترنت
self.addEventListener('online', () => {
  console.log('🌐 تم الاتصال بالإنترنت - تحديث الذاكرة المؤقتة');
});

self.addEventListener('offline', () => {
  console.log('📵 انقطع الاتصال بالإنترنت - التبديل للوضع الأوفلاين');
});