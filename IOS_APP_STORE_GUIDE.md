# دليل رفع تطبيق "محاسبتي" إلى متجر Apple App Store
# Guide for Uploading "Muhasabati" to Apple App Store

هذا الدليل مخصص لصديقك الذي يمتلك جهاز Mac وحساب مطور في Apple (Apple Developer Account).

---

## 1. بيانات التطبيق الأساسية (App Metadata)
* **اسم التطبيق (App Name):** محاسبتي (Muhasabati)
* **معرف التطبيق (Bundle ID):** `com.muhasabati.app`
* **اللغة الأساسية (Primary Language):** العربية (Arabic)
* **التصنيف (Category):** إنتاجية (Productivity) أو نمط حياة (Lifestyle)
* **رابط سياسة الخصوصية الإلزامي (Privacy Policy URL):**  
  `https://khaledalaa643.github.io/Muhasabati/privacy.html`
* **رابط المشروع على GitHub:**  
  `https://github.com/KhaledAlaa643/Muhasabati.git`

---

## 2. خطوات التشغيل على جهاز الماك (Mac Terminal)

1. فتح الـ **Terminal** على الماك واستنساخ المشروع:
   ```bash
   git clone https://github.com/KhaledAlaa643/Muhasabati.git
   cd Muhasabati
   ```

2. تثبيت الحزم المطلوبة:
   ```bash
   npm install
   ```

3. إضافة منصة iOS ومزامنة الملفات:
   ```bash
   npx cap add ios
   npx cap sync ios
   ```

4. فتح المشروع في برنامج **Xcode**:
   ```bash
   npx cap open ios
   ```

---

## 3. الخطوات داخل برنامج Xcode

1. من القائمة الجانبية اليسرى في Xcode، اختر مشروع **App**.
2. انتقل إلى تبويب **Signing & Capabilities**:
   - قم بتفعيل: **Automatically manage signing**.
   - اختر حساب المطور الخاص بك تحت **Team**.
   - تأكد من أن Bundle Identifier هو: `com.muhasabati.app`.
3. اختر هدف البناء (Build Target) كـ: **Any iOS Device (arm64)**.
4. من القائمة العلوية في Xcode:
   - اضغط **Product** ثم **Archive**.
5. بعد اكتمال الـ Archive، ستفتح نافذة المنظم (Organizer):
   - اضغط على **Distribute App**.
   - اختر **App Store Connect** ثم **Upload**.
   - انتظر حتى تكتمل عملية الرفع بنجاح.

---

## 4. الخطوات داخل منصة App Store Connect

1. ادخل إلى [App Store Connect](https://appstoreconnect.apple.com).
2. اضغط على **Apps** ثم علامة **(+)** لإنشاء تطبيق جديد:
   - **المنصة:** iOS
   - **الاسم:** محاسبتي
   - **اللغة الأساسية:** Arabic
   - **Bundle ID:** اختر `com.muhasabati.app`
   - **SKU:** `muhasabati-app-01` (أو أي قيمة فريدة).
3. في صفحة معلومات التطبيق:
   - ضع رابط سياسة الخصوصية: `https://khaledalaa643.github.io/Muhasabati/privacy.html`
4. ارفع لقطات الشاشة (Screenshots) للتطبيق (يمكن أخذها بسهولة من محاكي iOS Simulator).
5. تحت قسم **Build**، اختر النسخة المرفوعة من Xcode.
6. اضغط **Save** ثم **Submit for Review**.
