# 🚀 MLU Poultry Farm - Phase 1 Setup Instructions

## 🎉 What's Been Built:

✅ **Shopping Cart System** - Add products, manage quantities, view cart  
✅ **Checkout Process** - Customer form & order submission  
✅ **Admin Dashboard** - View and manage all orders  
✅ **Firebase Integration** - Orders saved to cloud database  
✅ **Order Success Page** - Confirmation for customers  

---

## 📋 Firebase Setup (Required)

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"**
3. Enter project name: `mlu-poultry-farm`
4. Disable Google Analytics (optional)
5. Click **"Create project"**

### Step 2: Register Your App

1. In Firebase Console, click the **Web icon** (</>) to register your app
2. App nickname: `MLU Poultry Farm Website`
3. Click **"Register app"**
4. Copy the Firebase configuration object

### Step 3: Update Firebase Config

1. Open `src/firebase/config.js`
2. Replace the placeholder values with your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Step 4: Enable Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **"Create database"**
3. Start in **production mode**
4. Choose location: `eur3 (europe-west)` or nearest to South Africa
5. Click **"Enable"**

### Step 5: Set Firestore Security Rules

1. In Firestore, go to **Rules** tab
2. Replace with these rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to create orders
    match /orders/{orderId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    
    // Only authenticated admins can read/write users
    match /users/{userId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

3. Click **"Publish"**

### Step 6: Enable Firebase Authentication

1. In Firebase Console, go to **Authentication**
2. Click **"Get started"**
3. Click **"Sign-in method"** tab
4. Enable **"Email/Password"**
5. Click **"Save"**

### Step 7: Create Admin User

1. In Authentication, click **"Users"** tab
2. Click **"Add user"**
3. Enter:
   - Email: `admin@mlupoultryfarm.co.za` (or your preferred email)
   - Password: Create a strong password
4. Click **"Add user"**

---

## 🏃 Running the Website

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev
```

Open http://localhost:5173

---

## ✅ Testing Phase 1

### Test Shopping Cart:
1. Go to homepage
2. Click "Add to Cart" on any product
3. See cart count increase in header
4. Click "Cart" button in header
5. Adjust quantities, remove items
6. Click "Proceed to Checkout"

### Test Checkout:
1. Fill in customer form
2. Click "Place Order"
3. Order should be saved to Firebase
4. Redirected to success page

### Test Admin Dashboard:
1. Go to `/admin`
2. Login with the admin email/password you created
3. View all orders
4. Mark orders as Paid / Completed
5. Click Email or WhatsApp to contact customers

---

## 📦 Firebase Collections Created:

### `orders` Collection:
```javascript
{
  customerName: "John Doe",
  email: "john@example.com",
  phone: "+27621234567",
  address: "123 Main St",
  specialInstructions: "Leave at gate",
  products: [
    { id: 1, name: "Table Eggs - 30s", price: 65, quantity: 2, subtotal: 130 }
  ],
  totalAmount: 130,
  status: "pending", // pending, paid, completed
  paymentMethod: "pending",
  createdAt: "2024-01-15T10:30:00Z"
}
```

---

## 🎯 What's Next (Phase 2 & 3):

**Phase 2 - Quotations:**
- PDF generation (jsPDF)
- Email quotations to customers
- Track quotation status

**Phase 3 - Payments:**
- PayFast integration
- Online payment processing
- Automatic thank-you emails/SMS

---

## 🐛 Troubleshooting:

### "Firebase not initialized" error:
- Make sure you've updated `src/firebase/config.js` with your actual Firebase config

### "Permission denied" error in Firestore:
- Check Firestore security rules are set correctly
- Make sure you're logged in as admin for dashboard

### Orders not appearing in dashboard:
- Check Firebase Console → Firestore Database
- Verify orders collection exists
- Check browser console for errors

---

## 📞 Support:

If you encounter any issues, check:
1. Browser console (F12) for error messages
2. Firebase Console for database/auth errors
3. Network tab to see if API calls are failing

---

**Your Phase 1 e-commerce system is ready! 🎉🐔**

Once Firebase is configured, you can start taking real orders online!
